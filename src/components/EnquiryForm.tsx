import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { productCategories, site } from "@/lib/enterprise-content";

type EnquiryKind = "contact" | "manpower" | "products" | "careers";

const subjects: Record<EnquiryKind, string> = {
  contact: "Project enquiry",
  manpower: "Manpower requirement",
  products: "Products and procurement enquiry",
  careers: "Career interest",
};

const prompts: Record<EnquiryKind, string> = {
  contact:
    "Include the required service, project location, preferred timing and any important scope information.",
  manpower: "Add any further scope, site conditions or certification requirements.",
  products: "Add any further context on the application, project or supporting standards.",
  careers:
    "Include your discipline, years of experience, certifications, current location and availability. Attach your CV when you send the email.",
};

const productCategoryOptions = [
  ...productCategories.map((c) => c.title),
  "Other Industrial Requirement",
];

const countryOptions = ["Qatar", "Saudi Arabia", "Kuwait", "Other"];

const enquiryTypeOptions = [
  "Technical Manpower",
  "Industrial Services",
  "Products & Procurement",
  "General Enquiry",
] as const;

/** Creates a reviewable email draft; does not claim server-side delivery. */
export function EnquiryForm({
  kind,
  defaultEnquiryType,
}: {
  kind: EnquiryKind;
  /** Preselects the Enquiry Type field on the general contact form (e.g. from a "?type=" query param). */
  defaultEnquiryType?: (typeof enquiryTypeOptions)[number];
}) {
  const id = useId();
  const [draft, setDraft] = useState("");
  const [subjectLine, setSubjectLine] = useState(subjects[kind]);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const preview = useRef<HTMLTextAreaElement>(null);
  const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm";
  const isManpower = kind === "manpower";
  const isProducts = kind === "products";
  const isContact = kind === "contact";
  const [enquiryType, setEnquiryType] = useState<string>(defaultEnquiryType ?? "General Enquiry");
  const [countryValue, setCountryValue] = useState("");

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [...data.entries()]
      .map(([key, value]) => `${key}: ${String(value).trim()}`)
      .filter((line) => !line.endsWith(": "))
      .join("\n\n");
    const subject = isContact
      ? `${String(data.get("Enquiry Type") || "General Enquiry")} Enquiry - ${String(data.get("Company") || "").trim() || "Nexora Contact"}`
      : subjects[kind];
    setSubjectLine(subject);
    setDraft(`${subject}\n\n${body}`);
    setCopied(false);
    setCopyError(false);
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
      preview.current?.focus();
      preview.current?.select();
    }
  }

  return (
    <div className="rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
      <p className="mb-6 text-sm leading-6 text-muted-foreground" id={`${id}-help`}>
        Prepare an email to {site.email}. Review and send it in your email app; this form does not
        send automatically. Fields marked * are required.
      </p>
      <form
        onSubmit={prepare}
        aria-describedby={`${id}-help`}
        className="space-y-5"
        onChange={() => {
          setDraft("");
          setCopied(false);
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            {
              name: "Name",
              label: "Full name",
              type: "text",
              autoComplete: "name",
              required: true,
            },
            {
              name: "Email",
              label: isManpower || isProducts || isContact ? "Business email" : "Email address",
              type: "email",
              autoComplete: "email",
              required: true,
            },
            {
              name: "Phone",
              label: "Phone / WhatsApp",
              type: "tel",
              autoComplete: "tel",
              required: false,
            },
            {
              name: kind === "careers" ? "Discipline" : "Company",
              label: kind === "careers" ? "Area of expertise" : "Company",
              type: "text",
              autoComplete: kind === "careers" ? "off" : "organization",
              required: true,
            },
          ].map((field) => (
            <div key={field.name}>
              <label htmlFor={`${id}-${field.name}`} className="text-sm font-bold">
                {field.label}
                {field.required ? " *" : ""}
              </label>
              <input
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                required={field.required}
                pattern={field.required && field.type === "text" ? ".*\\S.*" : undefined}
                id={`${id}-${field.name}`}
                maxLength={120}
                className={inputClass}
              />
            </div>
          ))}

          {isManpower &&
            [
              { name: "Project Location", label: "Project location", type: "text", required: true },
              {
                name: "Required Personnel Or Roles",
                label: "Required personnel or roles",
                type: "text",
                required: true,
              },
              {
                name: "Estimated Workforce Quantity",
                label: "Estimated workforce quantity",
                type: "text",
                required: true,
              },
              {
                name: "Expected Start Date",
                label: "Expected start date",
                type: "date",
                required: false,
              },
              {
                name: "Contract Duration",
                label: "Contract duration",
                type: "text",
                required: false,
              },
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={`${id}-${field.name}`} className="text-sm font-bold">
                  {field.label}
                  {field.required ? " *" : ""}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  pattern={field.required && field.type === "text" ? ".*\\S.*" : undefined}
                  id={`${id}-${field.name}`}
                  maxLength={160}
                  className={inputClass}
                />
              </div>
            ))}

          {isProducts && (
            <div className="sm:col-span-2">
              <label htmlFor={`${id}-Product Category`} className="text-sm font-bold">
                Product category *
              </label>
              <select
                id={`${id}-Product Category`}
                name="Product Category"
                required
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Select a category
                </option>
                {productCategoryOptions.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
          )}

          {isProducts &&
            [
              {
                name: "Product Or Item Description",
                label: "Product or item description",
                type: "text",
                required: true,
              },
              {
                name: "Required Quantity",
                label: "Required quantity",
                type: "text",
                required: true,
              },
              {
                name: "Technical Standard Or Specification",
                label: "Technical standard or specification",
                type: "text",
                required: false,
              },
              {
                name: "Preferred Manufacturer",
                label: "Preferred manufacturer, if any",
                type: "text",
                required: false,
              },
              {
                name: "Delivery Location",
                label: "Delivery location",
                type: "text",
                required: true,
              },
              {
                name: "Required Delivery Date",
                label: "Required delivery date",
                type: "date",
                required: false,
              },
              {
                name: "Documentation Or Certification Requirements",
                label: "Documentation or certification requirements",
                type: "text",
                required: false,
              },
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={`${id}-${field.name}`} className="text-sm font-bold">
                  {field.label}
                  {field.required ? " *" : ""}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  pattern={field.required && field.type === "text" ? ".*\\S.*" : undefined}
                  id={`${id}-${field.name}`}
                  maxLength={160}
                  className={inputClass}
                />
              </div>
            ))}

          {isContact && (
            <div className="sm:col-span-2">
              <label htmlFor={`${id}-Enquiry Type`} className="text-sm font-bold">
                Enquiry type *
              </label>
              <select
                id={`${id}-Enquiry Type`}
                name="Enquiry Type"
                required
                value={enquiryType}
                onChange={(event) => setEnquiryType(event.target.value)}
                className={inputClass}
              >
                {enquiryTypeOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              {enquiryType === "Technical Manpower" && (
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  For a full workforce request, the{" "}
                  <Link to="/manpower" hash="request-form" className="font-bold text-primary">
                    Technical Manpower form
                  </Link>{" "}
                  captures more detail. You can still continue here.
                </p>
              )}
              {enquiryType === "Products & Procurement" && (
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  For a full RFQ, the{" "}
                  <Link to="/products" hash="enquire" className="font-bold text-primary">
                    Products &amp; Procurement form
                  </Link>{" "}
                  captures more detail. You can still continue here.
                </p>
              )}
            </div>
          )}

          {isContact &&
            [
              {
                name: "Project Location",
                label: "Project location",
                type: "text",
                required: false,
              },
              {
                name: "Preferred Start Or Required-By Date",
                label: "Preferred start or required-by date",
                type: "date",
                required: false,
              },
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={`${id}-${field.name}`} className="text-sm font-bold">
                  {field.label}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  id={`${id}-${field.name}`}
                  maxLength={160}
                  className={inputClass}
                />
              </div>
            ))}

          <div className="sm:col-span-2">
            <label htmlFor={`${id}-country`} className="text-sm font-bold">
              {kind === "careers" ? "Current country" : "Project country"} *
            </label>
            <select
              id={`${id}-country`}
              name="Country"
              required
              value={countryValue}
              onChange={(event) => setCountryValue(event.target.value)}
              className={inputClass}
            >
              <option value="" disabled>
                Select a country
              </option>
              {countryOptions.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
          </div>

          {countryValue === "Other" && (
            <div className="sm:col-span-2">
              <label htmlFor={`${id}-Country Other`} className="text-sm font-bold">
                Country *
              </label>
              <input
                name="Country (Other)"
                type="text"
                required
                pattern=".*\S.*"
                id={`${id}-Country Other`}
                maxLength={80}
                className={inputClass}
              />
            </div>
          )}
        </div>
        <div>
          <label htmlFor={`${id}-message`} className="text-sm font-bold">
            {kind === "careers"
              ? "Experience and availability"
              : isManpower || isProducts
                ? "Additional requirement details"
                : isContact
                  ? "Requirement details"
                  : "Your requirement"}{" "}
            *
          </label>
          <p id={`${id}-prompt`} className="mt-2 text-sm leading-6 text-muted-foreground">
            {prompts[kind]}
          </p>
          <textarea
            id={`${id}-message`}
            name="Details"
            required
            minLength={20}
            maxLength={2000}
            rows={6}
            aria-describedby={`${id}-prompt`}
            className={inputClass}
          />
        </div>
        <p className="text-sm leading-6 text-muted-foreground">
          Your details stay in this page until you open an email draft or copy them. Attach any CV,
          RFQ or supporting files in your email app. Avoid including sensitive identity documents in
          an initial enquiry.
        </p>
        <button
          type="submit"
          disabled={!ready}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {isManpower || isContact
            ? "Prepare Enquiry Email"
            : isProducts
              ? "Prepare RFQ Email"
              : "Prepare email"}{" "}
          <Mail className="h-4 w-4" />
        </button>
      </form>
      <noscript>
        <p>
          Email your requirement directly to <a href={`mailto:${site.email}`}>{site.email}</a>.
          Enable JavaScript to prepare a draft on this page.
        </p>
      </noscript>
      {draft && (
        <section
          className="mt-6 rounded-xl border border-primary/20 bg-surface p-5"
          aria-label="Email draft"
        >
          <p role="status" className="font-bold">
            Your draft is ready. Send it from your email app to complete your enquiry.
          </p>
          <label htmlFor={`${id}-draft`} className="mt-4 block text-sm font-bold">
            Review your email
          </label>
          <textarea
            ref={preview}
            id={`${id}-draft`}
            readOnly
            value={draft}
            rows={8}
            className={inputClass}
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(draft)}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white"
            >
              Open email app <Mail className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={copyDraft}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary/30 px-4 py-3 text-sm font-bold"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy email text"}
            </button>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground" role="status">
            {copyError
              ? "Copy is unavailable. The draft is selected so you can copy it manually."
              : `If your email app does not open, copy the draft into an email to ${site.email}.`}
          </p>
        </section>
      )}
    </div>
  );
}

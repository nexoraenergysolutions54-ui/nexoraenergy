import type { Collaboration } from "@/lib/collaborations";

/** Original-colour artwork or a quiet name placeholder; no public verification labels. */
export function CollaborationLogoTile({
  org,
  loading = "lazy",
}: {
  org: Collaboration;
  loading?: "lazy" | "eager";
}) {
  return (
    <div className="flex h-24 w-full min-w-0 items-center justify-center bg-white px-3 py-4">
      {org.status === "verified" && org.logo ? (
        <img
          src={org.logo}
          alt={org.alt}
          width={org.logoWidth}
          height={org.logoHeight}
          loading={loading}
          decoding="async"
          className="h-16 w-full max-w-40 object-contain"
        />
      ) : (
        <span className="text-center font-display text-sm font-semibold leading-snug text-muted-foreground">
          {org.name}
        </span>
      )}
    </div>
  );
}

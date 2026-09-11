import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ClipboardCheck,
  Factory,
  Flame,
  Gauge,
  HardHat,
  MapPinned,
  Package,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";
import aboutNexoraTeam from "@/assets/optimized/about-nexora-team.webp";
import homeHeroBriefing from "@/assets/optimized/home-hero-briefing.webp";
import homeHeroLng from "@/assets/optimized/home-hero-lng.webp";
import homeHeroMaintenance from "@/assets/optimized/home-hero-maintenance.webp";
import homeHeroPlanning from "@/assets/optimized/home-hero-planning.webp";
import homeHeroProcurement from "@/assets/optimized/home-hero-procurement.webp";
import heroManpower from "@/assets/optimized/hero-manpower-refinery.webp";
import industrialServicesValveTeam from "@/assets/optimized/industrial-services-valve-team.webp";
import manpowerHeroCrewBriefing from "@/assets/optimized/manpower-hero-crew-briefing.webp";
import pEng from "@/assets/optimized/project-engineering.webp";
import pMaint from "@/assets/optimized/project-maintenance.webp";
import pPipeline from "@/assets/optimized/project-pipeline.webp";
import pPlant from "@/assets/optimized/project-plant.webp";
import pRefinery from "@/assets/optimized/project-refinery.webp";
import technicalManpowerTeam from "@/assets/optimized/technical-manpower-team.webp";

export const site = {
  name: "Nexora Energy Solutions",
  legalName: "Nexora Energy Solutions W.L.L",
  url: "https://www.nexoraqa.com",
  phone: "+974 5546 7325",
  whatsapp: "+974 5546 7325",
  whatsappUrl: "https://wa.me/97455467325",
  email: "sales@nexoraqa.com",
  city: "Doha",
  country: "Qatar",
  address: "Al Muntazah St., Doha, Qatar",
};

export const markets = ["Qatar", "Saudi Arabia", "UAE", "Kuwait", "Bahrain", "Oman"];

export const heroSlides = [
  {
    label: "Technical manpower deployment",
    image: manpowerHeroCrewBriefing,
    position: "object-[52%_50%]",
  },
  { label: "LNG facility support", image: homeHeroLng, position: "object-[54%_50%]" },
  {
    label: "Industrial maintenance",
    image: homeHeroMaintenance,
    position: "object-[50%_50%]",
  },
  {
    label: "Procurement and materials",
    image: homeHeroProcurement,
    position: "object-[52%_50%]",
  },
  { label: "Project execution", image: homeHeroPlanning, position: "object-[54%_50%]" },
];

export const industrialImages = {
  coordination: aboutNexoraTeam,
  manpower: technicalManpowerTeam,
  lng: homeHeroLng,
  maintenance: industrialServicesValveTeam,
  procurement: homeHeroProcurement,
  execution: homeHeroPlanning,
  briefing: homeHeroBriefing,
  workforce: heroManpower,
  refinery: pRefinery,
  plant: pPlant,
  pipeline: pPipeline,
  engineering: pEng,
  maintenanceProject: pMaint,
};

export type IndustryCard = {
  icon: LucideIcon;
  title: string;
  slug: string;
  image: string;
  summary: string;
};

export const industryCards: IndustryCard[] = [
  {
    icon: Factory,
    title: "Oil & Gas",
    slug: "oil-and-gas",
    image: pRefinery,
    summary:
      "Support for manpower, maintenance and project requirements across relevant upstream, midstream and downstream environments.",
  },
  {
    icon: Flame,
    title: "LNG & Gas Processing",
    slug: "lng",
    image: homeHeroLng,
    summary:
      "Project-focused support for LNG and gas-processing requirements, aligned with the submitted scope and site conditions.",
  },
  {
    icon: Building2,
    title: "Petrochemical",
    slug: "petrochemical",
    image: pPlant,
    summary:
      "Technical and industrial support for defined petrochemical project, maintenance and operational requirements.",
  },
  {
    icon: MapPinned,
    title: "Infrastructure & Pipelines",
    slug: "infrastructure",
    image: pPipeline,
    summary:
      "Support for pipeline and industrial-infrastructure requirements involving technical personnel, coordination and project services.",
  },
  {
    icon: Zap,
    title: "Manufacturing",
    slug: "manufacturing",
    image: industrialServicesValveTeam,
    summary:
      "Technical manpower and industrial support structured around manufacturing, fabrication and facility requirements.",
  },
  {
    icon: HardHat,
    title: "EPC Projects",
    slug: "epc",
    image: homeHeroPlanning,
    summary:
      "Coordinated manpower and technical support for defined engineering, procurement and construction project requirements.",
  },
];

export const primaryServices = [
  {
    icon: UsersRound,
    title: "Technical Manpower Supply",
    slug: "manpower-supply",
    image: technicalManpowerTeam,
    summary:
      "Engineers, supervisors, technicians and tradespeople screened for industrial project environments.",
  },
  {
    icon: Wrench,
    title: "Shutdown Support",
    slug: "shutdown-support",
    image: manpowerHeroCrewBriefing,
    summary:
      "Rapidly mobilized teams for planned shutdown windows, permit coordination and close-out support.",
  },
  {
    icon: Gauge,
    title: "Maintenance Support",
    slug: "maintenance-support",
    image: industrialServicesValveTeam,
    summary:
      "Preventive and corrective maintenance support for process plants, utilities and industrial assets.",
  },
  {
    icon: Package,
    title: "Procurement Support",
    slug: "procurement-support",
    image: homeHeroProcurement,
    summary:
      "Industrial materials, vendor coordination and documentation follow-up for EPC procurement teams.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Support",
    slug: "project-support",
    image: homeHeroPlanning,
    summary:
      "Site coordination, document control, QA/QC and project personnel for active execution scopes.",
  },
  {
    icon: Building2,
    title: "Engineering Support",
    slug: "engineering-support",
    image: pEng,
    summary:
      "Engineering, inspection and technical documentation support for controlled delivery environments.",
  },
];

export type ProductCategory = {
  icon: LucideIcon;
  title: string;
  types: string[];
  summary: string;
};

/**
 * Shared taxonomy for the Products & Procurement page - used by both the
 * visible category grid and the RFQ enquiry form's category select, so the
 * two never drift apart. "Other Industrial Requirement" is form-only (see
 * EnquiryForm) since it isn't a displayable category in its own right.
 */
export const productCategories: ProductCategory[] = [
  {
    icon: Settings2,
    title: "Isolation Valves",
    types: ["Ball Valves", "Butterfly Valves", "Gate Valves", "Globe Valves"],
    summary:
      "Valve options for isolation, flow control and industrial piping requirements, subject to approved project specifications.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control and Actuated Valves",
    types: ["Control Valves"],
    summary:
      "Control and actuation products selected according to process conditions, control requirements and approved specifications.",
  },
  {
    icon: Gauge,
    title: "Instrumentation and Measurement",
    types: [
      "Pressure Instruments",
      "Temperature Instruments",
      "Flow Instruments",
      "Level Instruments",
    ],
    summary:
      "Measurement and instrumentation products coordinated around process variables, application conditions and project requirements.",
  },
  {
    icon: Zap,
    title: "Electrical Products",
    types: ["Switchgear", "Distribution Panels", "Cables and Accessories"],
    summary:
      "Electrical products reviewed against the required ratings, application, certification and project specification.",
  },
];

export const trustCards = [
  {
    icon: ShieldCheck,
    title: "Compliance-led mobilisation",
    text: "Personnel documentation, training records, certifications and project requirements are checked before site deployment.",
  },
  {
    icon: Truck,
    title: "Responsive GCC coordination",
    text: "Doha-based coordination supports deployment across Qatar, Saudi Arabia, UAE, Kuwait, Bahrain and Oman.",
  },
  {
    icon: HardHat,
    title: "Industrial site understanding",
    text: "Nexora is built around permit-driven, HSE-controlled and schedule-sensitive industrial environments.",
  },
  {
    icon: UsersRound,
    title: "Practical workforce planning",
    text: "We help clients align disciplines, headcount, rotation, documentation and mobilisation timing.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear reporting",
    text: "Project teams receive structured communication around candidate status, onboarding and deployment readiness.",
  },
  {
    icon: Factory,
    title: "Energy-sector focus",
    text: "Our positioning is focused on LNG, oil and gas, petrochemical, EPC, utilities and industrial operations.",
  },
];

export const seoLandingContent = {
  "oil-and-gas": {
    type: "industry",
    title: "Oil & Gas Manpower and Industrial Support in Qatar and the GCC",
    eyebrow: "Oil & Gas",
    image: pRefinery,
    description:
      "Technical manpower, shutdown support, maintenance teams and procurement coordination for upstream, downstream and terminal operations.",
  },
  lng: {
    type: "industry",
    title: "LNG Facility Manpower and Maintenance Support",
    eyebrow: "LNG",
    image: homeHeroLng,
    description:
      "Qualified technical personnel and industrial support for LNG trains, storage, utilities, terminals and critical maintenance windows.",
  },
  petrochemical: {
    type: "industry",
    title: "Petrochemical Plant Technical Manpower and Services",
    eyebrow: "Petrochemical",
    image: pPlant,
    description:
      "Engineering, maintenance, QA/QC, HSE and trades support for petrochemical process units, shutdowns and brownfield scopes.",
  },
  infrastructure: {
    type: "industry",
    title: "Industrial Infrastructure Project Support",
    eyebrow: "Infrastructure",
    image: pPipeline,
    description:
      "Project manpower and technical support for pipelines, utilities corridors, construction packages and industrial infrastructure programs.",
  },
  manufacturing: {
    type: "industry",
    title: "Manufacturing Facility Manpower and Maintenance Support",
    eyebrow: "Manufacturing",
    image: pEng,
    description:
      "Technical manpower, maintenance coordination and project support for production-critical manufacturing and industrial facilities.",
  },
  epc: {
    type: "industry",
    title: "EPC Contractor Manpower and Project Support",
    eyebrow: "EPC",
    image: homeHeroPlanning,
    description:
      "Flexible technical manpower, engineering support, procurement coordination and site services for EPC delivery teams.",
  },
  "manpower-supply": {
    type: "service",
    title: "Technical Manpower Supply for Energy and Industrial Projects",
    eyebrow: "Technical Manpower",
    image: technicalManpowerTeam,
    description:
      "Engineers, technicians, supervisors, tradespeople and site support staff for Qatar and GCC energy projects.",
  },
  "shutdown-support": {
    type: "service",
    title: "Shutdown Support Services for Plants and Refineries",
    eyebrow: "Shutdown Support",
    image: manpowerHeroCrewBriefing,
    description:
      "Multi-discipline shutdown manpower, supervision and coordination support for critical maintenance windows.",
  },
  "maintenance-support": {
    type: "service",
    title: "Industrial Maintenance Support Services",
    eyebrow: "Maintenance Support",
    image: industrialServicesValveTeam,
    description:
      "Preventive, corrective and routine maintenance support for process plants, utilities and industrial facilities.",
  },
  "procurement-support": {
    type: "service",
    title: "Industrial Procurement Support and Materials Supply",
    eyebrow: "Procurement Support",
    image: homeHeroProcurement,
    description:
      "Industrial materials sourcing, vendor coordination and documentation support for EPC and facility teams.",
  },
  "project-support": {
    type: "service",
    title: "Industrial Project Support Services",
    eyebrow: "Project Support",
    image: homeHeroPlanning,
    description:
      "Site coordination, project controls assistance, document control and technical manpower support for active industrial execution scopes.",
  },
  "engineering-support": {
    type: "service",
    title: "Engineering Support for Industrial Projects",
    eyebrow: "Engineering Support",
    image: pEng,
    description:
      "Engineering, inspection, technical documentation and discipline support for EPC and industrial project teams.",
  },
} as const;

export type SeoLandingSlug = keyof typeof seoLandingContent;

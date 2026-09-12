import { Link } from "@tanstack/react-router";
import { collaborations } from "@/lib/collaborations";
import { CollaborationLogoTile } from "@/components/CollaborationLogoTile";

/** Compact static preview with no duplicated or hidden organization list. */
export function CollaborationsPreview() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 lg:grid-cols-6">
        {collaborations.slice(0, 12).map((org) => (
          <li key={org.id} className="min-w-0">
            <CollaborationLogoTile org={org} loading="eager" />
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <Link
          to="/about"
          hash="collaborations"
          className="rounded text-sm font-semibold text-foreground underline decoration-border underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-energy"
        >
          View the full list
        </Link>
      </div>
    </div>
  );
}

import { collaborations } from "@/lib/collaborations";
import { CollaborationLogoTile } from "@/components/CollaborationLogoTile";

/** Full, static grid of every collaborating organization - used on About only. */
export function CollaborationsGrid() {
  return (
    <ul className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {collaborations.map((org) => (
        <li key={org.id} className="min-w-0">
          <CollaborationLogoTile org={org} />
        </li>
      ))}
    </ul>
  );
}

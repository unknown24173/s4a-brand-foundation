import engineStripDown from "@/assets/gallery/engine-strip-down.jpg.asset.json";
import frontEndInspection from "@/assets/gallery/front-end-inspection.jpg.asset.json";
import inCarDiagnostics from "@/assets/gallery/in-car-diagnostics.jpg.asset.json";
import pumpRebuild from "@/assets/gallery/pump-rebuild.jpg.asset.json";
import teamEvent from "@/assets/gallery/team-event.jpg.asset.json";
import workshopBay from "@/assets/gallery/workshop-bay.jpg.asset.json";
import workshopSignWall from "@/assets/gallery/workshop-sign-wall.jpg.asset.json";
import workshopSign from "@/assets/gallery/workshop-sign.jpg.asset.json";

export type GalleryPhoto = {
  id: string;
  url: string;
  alt: string;
  caption: string;
  orientation: "landscape" | "portrait" | "square";
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "workshop-bay",
    url: workshopBay.url,
    alt: "Several cars with bonnets open under the S4A workshop shelter while a technician works beneath one of them",
    caption: "A working day in the S4A bay",
    orientation: "landscape",
  },
  {
    id: "front-end-inspection",
    url: frontEndInspection.url,
    alt: "S4A technician in blue overalls inspecting the front underside of a light blue saloon car",
    caption: "Front-end inspection before repair",
    orientation: "landscape",
  },
  {
    id: "engine-strip-down",
    url: engineStripDown.url,
    alt: "Technician working on a vehicle stripped down to its engine bay and front chassis members",
    caption: "Major engine bay strip-down",
    orientation: "portrait",
  },
  {
    id: "pump-rebuild",
    url: pumpRebuild.url,
    alt: "Technician opening a power steering pump on a workbench with tools laid out beside it",
    caption: "Component rebuild on the bench",
    orientation: "landscape",
  },
  {
    id: "in-car-diagnostics",
    url: inCarDiagnostics.url,
    alt: "S4A technician running a diagnostic scan on a tablet from the driver's seat of a customer car",
    caption: "Diagnostics before we quote",
    orientation: "portrait",
  },
  {
    id: "team-event",
    url: teamEvent.url,
    alt: "Three members of the S4A team in branded shirts at an industry event backdrop",
    caption: "The S4A team out representing",
    orientation: "square",
  },
  {
    id: "workshop-sign",
    url: workshopSign.url,
    alt: "S4A team member beside the hand-painted S4A Auto Repairs and Maintenance Services wall sign",
    caption: "Solution for all auto care",
    orientation: "landscape",
  },
  {
    id: "workshop-sign-wall",
    url: workshopSignWall.url,
    alt: "Hand-painted S4A logo on the workshop wall with a team member pointing towards it",
    caption: "At the S4A workshop entrance",
    orientation: "portrait",
  },
];

export const heroPhoto = galleryPhotos[0]!;
export const consultPhoto = galleryPhotos[4]!;
export const aboutPhoto = galleryPhotos[6]!;
export const siwesPhoto = galleryPhotos[3]!;

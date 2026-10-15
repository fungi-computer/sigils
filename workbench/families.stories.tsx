import type { StoryDefault } from "@ladle/react";
import { IconGallery } from "./gallery.js";

export const AppIcons = () => <IconGallery family="Apps" />;
export const Actions = () => <IconGallery family="Actions" />;
export const Conversation = () => <IconGallery family="Conversation" />;
export const Generation = () => <IconGallery family="Generation" />;
export const Status = () => <IconGallery family="Status" />;

export default { title: "Families" } satisfies StoryDefault;

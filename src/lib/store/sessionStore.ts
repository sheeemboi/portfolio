import { writable, type Writable } from "svelte/store";

// export const homeLoaded: Writable<boolean> = writable(false);
// export const projectsLoaded: Writable<boolean> = writable(false);
// export const contactLoaded: Writable<boolean> = writable(false);


export const visitedPages = writable(new Set<string>());
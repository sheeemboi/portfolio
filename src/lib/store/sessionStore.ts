import { writable, type Writable } from "svelte/store";

export const session_loaded: Writable<boolean> = writable(false);
  import { visitedPages } from "$lib/store/sessionStore";
  
  export function markVisited(path: string) {
    visitedPages.update((pages) => new Set(pages).add(path));
    console.log('test');
  }
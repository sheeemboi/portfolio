<script lang="ts">
  import { page } from '$app/stores';
  import { Heading, P, Tooltip } from 'flowbite-svelte';
  import { onMount, tick } from 'svelte';
  import { fly } from 'svelte/transition';
  import { markVisited } from '$lib/helper/markVisited';
  import { visitedPages } from '$lib/store/sessionStore';

  export let data;
  let showGrid = false;
  $: currentPath = $page.url.pathname;

  onMount(async () => {
    await tick();
    showGrid = true;

    visitedPages.update((pages) => {
      if (!pages.has(currentPath)) {
        visitedPages.update((p) => new Set(p).add(currentPath));
      }
      return pages;
    });
  });

  $: isFirstVisit = !$visitedPages.has(currentPath);
  $: console.log($visitedPages);
</script>

{#if data}
  <Heading tag="h2" class="text-center my-8">Designs</Heading>
  {#if showGrid && isFirstVisit}
    <div
      class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto px-4"
    >
      {#each data.designs.designs as design (design.url)}
        <div
          in:fly|global={{ delay: design.delay, x: design.x, duration: 500 }}
          on:introend={() => {
            if (design.delay === 2750) markVisited(currentPath);
          }}
          class="bg-gray-900 {design.layout} transition-all duration-500 outline outline-1 dark:outline-zinc-500/20 dark:hover:outline-red-600 rounded-lg overflow-hidden md:h-[228px] flex items-center justify-center"
        >
          <img src="/designs{design.url}" alt={design.name} class="w-full" />
          <Tooltip>{design.name}</Tooltip>
        </div>
      {/each}
    </div>
  {:else}
    <div
      class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto px-4"
    >
      {#each data.designs.designs as design}
        <div
          class="bg-gray-900 col-span-1 {design.layout} transition-all duration-500 outline outline-1 dark:outline-zinc-500/20 dark:hover:outline-red-600 rounded-lg overflow-hidden md:h-[228px] flex items-center justify-center"
        >
          <img src="/designs{design.url}" alt={design.name} class="w-full" />
          <Tooltip>{design.name}</Tooltip>
        </div>
      {/each}
    </div>
  {/if}
{/if}

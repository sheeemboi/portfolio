<script lang="ts">
  export let data;
  let homeData = data.data;

  import mandalatest from '$lib/assets/test/mandalatest.png';
  import { Button, Card, P, Spinner } from 'flowbite-svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  import Hero from '$lib/components/home/Hero.svelte';
  import ShortIntro from '$lib/components/home/ShortIntro.svelte';
  import TechnologiesAndTools from '$lib/components/home/TechnologiesAndTools.svelte';
  import Work from '$lib/components/home/Work.svelte';
  import Education from '$lib/components/home/Education.svelte';
  import Projects from '$lib/components/home/Projects.svelte';
  import Designs from '$lib/components/home/Designs.svelte';
  import { get } from 'svelte/store';
  import { visitedPages } from '$lib/store/sessionStore';
  import { markVisited } from '$lib/helper/markVisited.js';
  import { page } from '$app/stores';

  let gridItemDefaultClass =
    'overflow-hidden dark:bg-zinc-900 rounded-2xl w-full outline outline-1 dark:outline-zinc-500/20 h-fit sm:h-full p-8';
  let gridItemNoPadding =
    'overflow-hidden rounded-2xl w-full outline outline-1 dark:outline-zinc-500/20 h-fit sm:h-full';

  // showGrid is used for initiating the transition of grids. Removing so will make the grids render instantly without in:fly transitions.
  // onMount(() => {
  //   console.log(get(homeLoaded));
  //   showGrid = true;
  //   if (!get(homeLoaded)) {
  //     setTimeout(() => {
  //       homeLoaded.set(true);
  //       console.log('homeLoaded after flip:', get(homeLoaded));
  //     }, 2000);
  //   }
  // });

  // let isLoaded: boolean;

  // onMount(() => {
  //   showGrid = true;
  //   isLoaded = true;
  //   const currentPath = $page.url.pathname;

  //   visitedPages.update((pages) => {
  //     if (!pages.has(currentPath)) {
  //       isLoaded = false;
  //       setTimeout(() => {
  //         visitedPages.update((p) => new Set(p).add(currentPath));
  //         isLoaded = true;
  //       }, 2000);
  //     }
  //     return pages;
  //   });

  //   console.log($visitedPages);
  // });

  let showGrid = false;
  $: currentPath = $page.url.pathname;
  $: isFirstVisit = !$visitedPages.has(currentPath);

  onMount(() => {
    showGrid = true;
  });
</script>

{#if data}
  {#if showGrid && isFirstVisit}
    <div
      class="grid grid-cols-1 sm:grid-rows-6 sm:grid-cols-4 sm:h-[768px] gap-4"
    >
      <div
        in:fly={{ y: -100, duration: 500 }}
        class="{gridItemNoPadding} bg-zinc-900 sm:col-span-3 sm:row-span-2"
      >
        <Hero hero={homeData.hero} />
      </div>
      <div
        in:fly={{ delay: 250, x: -100, duration: 500 }}
        class="{gridItemDefaultClass} sm:row-start-3 sm:col-start-1 sm:col-end-4"
      >
        <ShortIntro shortIntro={homeData.shortIntro} />
      </div>
      <div
        in:fly={{ delay: 1000, x: -100, duration: 500 }}
        class="{gridItemDefaultClass} sm:row-start-4 sm:row-span-2 sm:col-start-1 sm:col-end-3"
      >
        <TechnologiesAndTools tools={homeData.tools} />
      </div>
      <div
        in:fly={{ delay: 750, y: 25, duration: 500 }}
        class="{gridItemDefaultClass} sm:row-start-4 sm:row-span-3"
      >
        <Projects projects={homeData.projects} />
      </div>
      <div
        in:fly={{ delay: 1500, x: -100, duration: 500 }}
        class="{gridItemNoPadding} dark:bg-zinc-900 sm:row-start-6 sm:col-span-2"
      >
        <Designs />
      </div>
      <div
        in:fly={{ delay: 500, x: 100, duration: 500 }}
        class="{gridItemDefaultClass} sm:col-span-1 sm:row-span-3"
      >
        <Work work={homeData.work} />
      </div>
      <div
        in:fly={{ delay: 1500, x: 100, duration: 500 }}
        class="{gridItemNoPadding} dark:bg-red-700 sm:col-span-1 sm:row-span-1 flex items-center"
        on:introend={() => markVisited(currentPath)}
      >
        <img src={mandalatest} alt="" class="scale-150" />
      </div>
      <div
        in:fly={{ delay: 1250, x: 100, duration: 500 }}
        class="{gridItemDefaultClass} sm:col-span-1 sm:row-span-2"
      >
        <Education education={homeData.education} />
      </div>
    </div>
  {:else}
    <div
      class="grid grid-cols-1 sm:grid-rows-6 sm:grid-cols-4 sm:h-[768px] gap-4"
    >
      <div class="{gridItemNoPadding} bg-zinc-900 sm:col-span-3 sm:row-span-2">
        <Hero hero={homeData.hero} />
      </div>
      <div
        class="{gridItemDefaultClass} sm:row-start-3 sm:col-start-1 sm:col-end-4"
      >
        <ShortIntro shortIntro={homeData.shortIntro} />
      </div>
      <div
        class="{gridItemDefaultClass} sm:row-start-4 sm:row-span-2 sm:col-start-1 sm:col-end-3"
      >
        <TechnologiesAndTools tools={homeData.tools} />
      </div>
      <div class="{gridItemDefaultClass} sm:row-start-4 sm:row-span-3">
        <Projects projects={homeData.projects} />
      </div>
      <div
        class="{gridItemNoPadding} dark:bg-zinc-900 sm:row-start-6 sm:col-span-2"
      >
        <Designs />
      </div>
      <div class="{gridItemDefaultClass} sm:col-span-1 sm:row-span-3">
        <Work work={homeData.work} />
      </div>
      <div
        class="{gridItemNoPadding} dark:bg-red-700 sm:col-span-1 sm:row-span-1 flex items-center"
      >
        <img src={mandalatest} alt="" class="scale-150" />
      </div>
      <div class="{gridItemDefaultClass} sm:col-span-1 sm:row-span-2">
        <Education education={homeData.education} />
      </div>
    </div>
  {/if}
{:else}
  <div class="flex w-full items-center justify-center mt-[30vh]">
    <Card padding="xl" class="dark:bg-zinc-900 border-none">
      <P align="center" class="pb-8">Content missing. :/</P>
      <Button color="red" on:click={() => location.reload()}>Reload Page</Button
      >
    </Card>
  </div>
{/if}

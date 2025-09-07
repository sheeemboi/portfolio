<script lang="ts">
  export let data;
  let homeData = data.data;

  import { Button, Card, Heading, P, Spinner } from 'flowbite-svelte';
  import { fade, fly, slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  import Hero from '$lib/components/home/Hero.svelte';
  import ShortIntro from '$lib/components/home/ShortIntro.svelte';
  import TechnologiesAndTools from '$lib/components/home/TechnologiesAndTools.svelte';
  import Work from '$lib/components/home/Work.svelte';
  import Education from '$lib/components/home/Education.svelte';
  import Projects from '$lib/components/home/Projects.svelte';
  import Designs from '$lib/components/home/Designs.svelte';
  import { visitedPages } from '$lib/store/sessionStore';
  import { markVisited } from '$lib/helper/markVisited';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  let gridItemDefaultClass =
    'overflow-hidden dark:bg-zinc-900 rounded-2xl w-full outline transition-all duration-500 outline-1 dark:outline-zinc-500/20 dark:hover:outline-red-600 h-fit sm:h-full p-8';
  let gridItemNoPadding =
    'overflow-hidden rounded-2xl w-full outline outline-1 transition-all duration-500 dark:outline-zinc-500/20 dark:hover:outline-red-600 h-fit sm:h-full';

  // showGrid is used for initiating the transition of grids. Removing so will make the grids render instantly without in:fly transitions.

  let showGrid = false;
  $: currentPath = $page.url.pathname;

  let formattedTime: string;

  const formatter = new Intl.DateTimeFormat('en-PH', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Manila', // ✅ Force Manila time
  });

  function tickTock() {
    formattedTime = formatter.format(new Date());
  }

  onMount(() => {
    tickTock();
    const interval = setInterval(tickTock, 500);
    showGrid = true;

    visitedPages.update((pages) => {
      if (!pages.has(currentPath)) {
        visitedPages.update((p) => new Set(p).add(currentPath));
      }
      return pages;
    });

    return () => clearInterval(interval);
  });

  $: isFirstVisit = !$visitedPages.has(currentPath);
</script>

<svelte:head>
  <title>Shem - Frontend Dev.</title>
</svelte:head>
{#if data}
  {#if showGrid && isFirstVisit}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="grid grid-cols-1 sm:grid-rows-6 sm:grid-cols-4 sm:h-[768px] gap-4 mx-4"
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
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        in:fly={{ delay: 750, y: 25, duration: 500 }}
        class="{gridItemNoPadding} sm:row-start-4 sm:row-span-3"
        on:click={() => goto('/projects')}
      >
        <Projects projects={homeData.projects} />
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        in:fly={{ delay: 1500, x: -100, duration: 500 }}
        class="{gridItemNoPadding} dark:bg-zinc-900 sm:row-start-6 sm:col-span-2"
        on:click={() => goto('/design')}
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
        class="{gridItemNoPadding} relative bg-gray-900 sm:col-span-1 sm:row-span-1 flex flex-col items-center justify-center"
        on:introend={() => markVisited(currentPath)}
      >
        <div class="my-2 mx-2">
          <Heading tag="h4">{formattedTime}</Heading>
          <P class="dark:text-gray-400">Philippine Standard Time</P>
        </div>
        <div class="absolute flex flex-col right-0 h-full w-6">
          <div class="bg-blue-500 flex-1"></div>
          <div class="bg-red-600 flex-1"></div>
        </div>
      </div>
      <div
        in:fly={{ delay: 1250, x: 100, duration: 500 }}
        class="{gridItemDefaultClass} sm:col-span-1 sm:row-span-2"
      >
        <Education education={homeData.education} />
      </div>
    </div>
  {:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="grid grid-cols-1 sm:grid-rows-6 sm:grid-cols-4 sm:h-[768px] gap-4 mx-4"
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
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="{gridItemNoPadding} sm:row-start-4 sm:row-span-3"
        on:click={() => goto('/projects')}
      >
        <Projects projects={homeData.projects} />
      </div>
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="{gridItemNoPadding} dark:bg-zinc-900 sm:row-start-6 sm:col-span-2"
        on:click={() => goto('/design')}
      >
        <Designs />
      </div>
      <div class="{gridItemDefaultClass} sm:col-span-1 sm:row-span-3">
        <Work work={homeData.work} />
      </div>
      <div
        class="{gridItemNoPadding} relative bg-gray-900 sm:col-span-1 sm:row-span-1 flex flex-col items-center justify-center"
      >
        <div class="my-2 mx-2">
          <Heading tag="h4">{formattedTime}</Heading>
          <P class="dark:text-gray-400">Philippine Standard Time</P>
        </div>
        <div class="absolute flex flex-col right-0 h-full w-6">
          <div class="bg-blue-500 flex-1"></div>
          <div class="bg-red-600 flex-1"></div>
        </div>
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

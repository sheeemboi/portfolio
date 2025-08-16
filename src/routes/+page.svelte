<script lang="ts">
  export let data;

  import { Spinner } from 'flowbite-svelte';
  import { fade, fly, slide } from 'svelte/transition';

  import { onMount, tick } from 'svelte';
  import { get } from 'svelte/store';
  import { session_loaded } from '$lib/store/sessionStore.js';

  import Hero from '$lib/components/home/Hero.svelte';
  import ShortIntro from '$lib/components/home/ShortIntro.svelte';
  import TechnologiesAndTools from '$lib/components/home/TechnologiesAndTools.svelte';
  import Work from '$lib/components/home/Work.svelte';
  import Education from '$lib/components/home/Education.svelte';
  import Projects from '$lib/components/home/Projects.svelte';
  import Designs from '$lib/components/home/Designs.svelte';

  let gridItemDefaultClass =
    'overflow-hidden dark:bg-zinc-900 rounded-2xl w-full outline outline-1 dark:outline-zinc-500/20 h-fit sm:h-full p-8';
  let gridItemNoPadding =
    'overflow-hidden rounded-2xl w-full outline outline-1 dark:outline-zinc-500/20 h-fit sm:h-full';

  onMount(() => {
    if (!$session_loaded) {
      setTimeout(() => {
        session_loaded.set(true);
      }, 1000);
    }
  });
</script>

{#if data}
  {#if !$session_loaded}
    <div class="dark:text-zinc-200"></div>
  {:else}
    <div
      class="grid grid-cols-1 sm:grid-rows-6 sm:grid-cols-4 sm:h-[768px] gap-4"
    >
      <div
        transition:fly={{ y: -100, duration: 500 }}
        class="{gridItemNoPadding} bg-zinc-900 sm:col-span-3 sm:row-span-2"
      >
        <Hero hero={data.data.hero} />
      </div>
      <div
        transition:fly={{ delay: 250, x: -100, duration: 500 }}
        class="{gridItemDefaultClass} sm:row-start-3 sm:col-start-1 sm:col-end-4"
      >
        <ShortIntro shortIntro={data.data.shortIntro} />
      </div>
      <div
        transition:fly={{ delay: 1000, x: -100, duration: 500 }}
        class="{gridItemDefaultClass} sm:row-start-4 sm:row-span-2 sm:col-start-1 sm:col-end-3"
      >
        <TechnologiesAndTools tools={data.data.tools} />
      </div>
      <div
        transition:fly={{ delay: 750, y: 25, duration: 500 }}
        class="{gridItemDefaultClass} sm:row-start-4 sm:row-span-3"
      >
        <Projects projects={data.data.projects} />
      </div>
      <div
        transition:fly={{ delay: 1500, x: -100, duration: 500 }}
        class="{gridItemNoPadding} dark:bg-zinc-900 sm:row-start-6 sm:col-span-2"
      >
        <Designs />
      </div>
      <div
        transition:fly={{ delay: 500, x: 100, duration: 500 }}
        class="{gridItemDefaultClass} sm:col-span-1 sm:row-span-3"
      >
        <Work work={data.data.work} />
      </div>
      <div
        transition:fly={{ delay: 1500, x: 100, duration: 500 }}
        class="{gridItemNoPadding} dark:bg-red-700 sm:col-span-1 sm:row-span-1"
      ></div>
      <div
        transition:fly={{ delay: 1250, x: 100, duration: 500 }}
        class="{gridItemDefaultClass} sm:col-span-1 sm:row-span-2"
      >
        <Education education={data.data.education} />
      </div>
    </div>
  {/if}
{/if}

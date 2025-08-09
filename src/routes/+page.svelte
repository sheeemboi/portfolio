<script lang="ts">
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
</script>

<div class="grid grid-cols-1 sm:grid-rows-6 sm:grid-cols-4 sm:h-[768px] gap-4">
  <div class="{gridItemNoPadding} bg-zinc-900 sm:col-span-3 sm:row-span-2">
    <Hero />
  </div>
  <div
    class="{gridItemDefaultClass} sm:row-start-3 sm:col-start-1 sm:col-end-4"
  >
    <ShortIntro />
  </div>
  <div
    class="{gridItemDefaultClass} sm:row-start-4 sm:row-span-2 sm:col-start-1 sm:col-end-3"
  >
    <TechnologiesAndTools />
  </div>
  <div class="{gridItemDefaultClass} sm:row-start-4 sm:row-span-3">
    <Projects />
  </div>
  <div
    class="{gridItemNoPadding} dark:bg-zinc-900 sm:row-start-6 sm:col-span-2"
  >
    <Designs />
  </div>
  <div class="{gridItemDefaultClass} sm:col-span-1 sm:row-span-3"><Work /></div>
  <div
    class="{gridItemNoPadding} dark:bg-red-700 sm:col-span-1 sm:row-span-1"
  ></div>
  <div class="{gridItemDefaultClass} sm:col-span-1 sm:row-span-2">
    <Education />
  </div>
</div>

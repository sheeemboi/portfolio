<script lang="ts">
  import { Heading, Tooltip } from 'flowbite-svelte';
  import { tools } from '$lib/data/homeData';
  import 'iconify-icon';
</script>

<section class="flex flex-col h-full">
  <Heading tag="h5" class="text-center">Current Technologies</Heading>

  <div class="flex flex-wrap gap-4 justify-center w-full mt-2">
    {#each tools as tool}
      <div
        class="bg-zinc-800 flex items-center justify-center rounded-lg p-3 aspect-square hover:bg-zinc-900 hover:outline hover:outline-1"
        style="outline-color: {tool.color}"
      >
        <iconify-icon
          icon={tool.icon}
          class="lg:text-4xl sm:text-3xl mr-1"
          style="color: {tool.color}"
        ></iconify-icon>
      </div>
      <Tooltip>{tool.name}</Tooltip>
    {/each}
  </div>
</section>

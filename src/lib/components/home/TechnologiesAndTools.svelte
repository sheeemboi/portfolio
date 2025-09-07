<script lang="ts">
  import { Heading, P, Tooltip } from 'flowbite-svelte';
  import 'iconify-icon';
  export let tools;
</script>

<section class="flex flex-col h-full">
  <Heading tag="h5" class="text-center">Current Technologies</Heading>

  <div class="flex flex-wrap gap-3 justify-center w-full my-auto overflow-auto">
    {#each tools as tool}
      <div
        class="bg-zinc-800 flex flex-1 sm:flex-none items-center justify-center rounded-lg p-3 hover:bg-zinc-900 hover:outline hover:outline-1"
        style="outline-color: {tool.color}"
      >
        <iconify-icon
          icon={tool.icon}
          class="lg:text-2xl mr-1"
          style="color: {tool.color}"
        ></iconify-icon>
        <P size="sm" class="inline dark:text-gray-300">{tool.name}</P>
      </div>
      <Tooltip>{tool.name}</Tooltip>
    {/each}
  </div>
</section>

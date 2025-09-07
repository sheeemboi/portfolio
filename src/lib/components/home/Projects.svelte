<script lang="ts">
  import { Heading, P, Hr } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  export let projects;
</script>

<div
  class="group h-full p-8 cursor-pointer dark:bg-gray-900 hover:dark:bg-gray-800"
>
  <Heading tag="h5" class="text-center mb-4">Projects</Heading>

  <div>
    {#each projects as proj, x}
      <div class="mb-3">
        <Heading tag="h6">{proj.name}</Heading>
        <P size="sm" class="dark:text-zinc-400 mb-1">{proj.desc}</P>
        <P size="sm" class="dark:text-zinc-600">
          {#each proj.tools as tool, i}
            {tool}
            {#if i < proj.tools.length - 1}
              <span class="px-1">&bull;</span>
            {/if}
          {/each}
        </P>
      </div>
    {/each}
  </div>
  <P class="group-hover:dark:translate-x-32 transition-all duration-200"
    >View
    <ArrowRightOutline class="inline dark:text-gray-300 w-6 h-6" />
  </P>
</div>

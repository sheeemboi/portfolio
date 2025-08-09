<script lang="ts">
  import { Heading, P, Hr } from 'flowbite-svelte';
  import { projects } from '$lib/data/homeData';
</script>

<Heading tag="h5" class="text-center mb-4">Projects</Heading>

<div>
  {#each projects as proj, x}
    <div class="mb-6">
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

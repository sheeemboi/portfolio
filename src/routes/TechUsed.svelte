<script>
  // @ts-nocheck

  import { TECH_STACK } from "$lib/utils/data";
  import { Heading, P, Card, Tooltip } from "flowbite-svelte";
  import Icon from "@iconify/svelte";
</script>

<!-- Reusable Category-->
{#snippet toolCard(tech)}
  <div class="flex flex-wrap gap-2">
    {#each tech as t}
      <div
        class="bg-zinc-800 outline-zinc-800 flex items-center justify-center rounded-lg p-3 aspect-square hover:bg-zinc-900 hover:outline-1"
      >
        <Icon icon={t.icon} class="text-3xl mr-1" style="color: {t.color}" />
      </div>
      <Tooltip>{t.name}</Tooltip>
    {/each}
  </div>
{/snippet}

<!-- Snippets injected here -->
<section class="flex flex-col min-h-full">
  <Heading tag="h5">Technologies and Tools</Heading>
  <div class=" mt-auto">
    {@render toolCard(TECH_STACK)}
    <!-- {@render toolCard(TECH_STACK[1], "Design")} -->
  </div>
</section>

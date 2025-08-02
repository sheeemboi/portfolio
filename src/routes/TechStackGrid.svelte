<script>
  // @ts-nocheck

  let { TECH_STACK } = $props();
  import { Heading, P, Card, Tooltip } from "flowbite-svelte";
  import Icon from "@iconify/svelte";
</script>

<div class="mt-3">
  <div class="flex flex-wrap gap-2">
    {#each TECH_STACK as t}
      <div
        class="bg-zinc-800 outline-zinc-800 flex items-center justify-center rounded-lg p-3 aspect-square hover:bg-zinc-900 hover:outline-1"
      >
        <Icon icon={t.icon} class="text-3xl mr-1" style="color: {t.color}" />
      </div>
      <Tooltip>{t.name}</Tooltip>
    {/each}
  </div>
</div>

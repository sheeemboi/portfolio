<script lang="ts">
  import { Card } from "flowbite-svelte";
  import Icon from "@iconify/svelte";
  let { color, icon, children } = $props();
</script>

<Card color="gray" horizontal class="bg-white flex-row max-w-fit p-2 m-2">
  <Icon {icon} class="text-2xl mr-1" style="color: {color}" />
  <span style="color: {color}">{@render children()}</span>
</Card>

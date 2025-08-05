<script>
  let { data, children } = $props();
  import { Spinner, P } from "flowbite-svelte";
</script>

{#if data.error}
  <div class=" h-full flex items-center justify-center flex-1">
    <Spinner color="cyan" />
    <P class="ml-2">Loading data...</P>
  </div>
{:else}
  {@render children()}
{/if}

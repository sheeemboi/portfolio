<script>
  let { onclick, children, gridPos } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="rounded-2xl bg-zinc-900 outline-1 outline-zinc-700 p-8 {gridPos} hover:outline-teal-600 transition-all duration-500"
  {onclick}
>
  {@render children()}
</div>

<script>
  let { children, gridClass } = $props();
</script>

<div class="rounded-2xl bg-zinc-900 outline-1 p-8 {gridClass}">
  {@render children()}
</div>

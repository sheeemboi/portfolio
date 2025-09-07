<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <link rel="icon" href="apple-touch-icon.png" />
</svelte:head>
<div
  class="flex flex-col relative font-rubik max-w-6xl mx-auto min-h-screen border-1"
>
  <Navbar />
  <slot />
  <Footer />
</div>

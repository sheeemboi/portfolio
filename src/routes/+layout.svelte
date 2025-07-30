<script lang="ts">
  import { page } from "$app/state";
  import { Navbar, NavUl, NavLi } from "flowbite-svelte";

  let { children } = $props();
  let activeUrl = $derived(page.url.pathname);
</script>

<svelte:head>
  <title>Shem | Frontend Developer</title>
  <meta
    name="description"
    content="Portfolio website off Shem Mariano, Filipino Frontend Developer"
  />
</svelte:head>

<div class="max-w-5xl mx-auto">
  <Navbar>
    <NavUl class="mx-auto" {activeUrl}>
      <!-- svelte-ignore attribute_quoted -->
      <NavLi class="hover:outline-1 rounded-full" href="/">Home</NavLi>
      <NavLi class="hover:outline-1 mx-2 rounded-full" href="/projects"
        >Projects</NavLi
      >
      <NavLi class="hover:outline-1 rounded-full" href="/contact"
        >Contact Me</NavLi
      >
    </NavUl>
  </Navbar>
  <main class="px-4">{@render children()}</main>
</div>

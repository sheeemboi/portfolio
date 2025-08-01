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
    <NavUl
      class="mx-auto"
      {activeUrl}
      classes={{
        active: "rounded-xl dark:text-teal-500 dark:md:text-teal-500",
      }}
    >
      <NavLi href="/">Home</NavLi>
      <NavLi href="/projects">Projects</NavLi>
      <NavLi href="/contact">Contact Me</NavLi>
    </NavUl>
  </Navbar>
  <main>{@render children()}</main>
</div>

<script lang="ts">
  import { page } from "$app/state";
  import {
    Navbar,
    NavUl,
    NavLi,
    Footer,
    FooterCopyright,
    P,
  } from "flowbite-svelte";

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

<div class="flex flex-col justify-between max-w-5xl mx-auto h-screen">
  <Navbar>
    <NavUl
      class="mx-auto block font-medium"
      {activeUrl}
      classes={{
        active:
          "rounded-xl dark:bg-transparent dark:text-teal-500 dark:md:text-teal-500",
        nonActive: "dark:text-white",
        ul: "flex-row justify-center",
      }}
    >
      <NavLi href="/">Home</NavLi>
      <NavLi href="/projects">Projects</NavLi>
      <NavLi href="/contact">Contact Me</NavLi>
    </NavUl>
  </Navbar>
  <main class="px-3">{@render children()}</main>
  <Footer class="dark:bg-zinc-950 mt-2  ">
    <FooterCopyright class="dark:text-zinc-300 text-center" year={2025}
    ></FooterCopyright>
    <P size="sm" class="dark:text-zinc-300 text-center"
      >Made with <span class="text-orange-500">SvelteKit</span>
      & <span class="text-purple-500">Flowbite-Svelte</span>.</P
    >
  </Footer>
</div>

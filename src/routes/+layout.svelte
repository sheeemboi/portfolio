<script lang="ts">
  import { page } from "$app/state";
  import {
    Navbar,
    NavBrand,
    NavUl,
    NavLi,
    NavHamburger,
    DarkMode,
  } from "flowbite-svelte";
  import { GithubSolid } from "flowbite-svelte-icons";

  let { children } = $props();
  let activeUrl = $derived(page.url.pathname);

  const activeDark = (path: string) => {
    return activeUrl === path
      ? "dark:text-secondary-500 md:dark:text-secondary-500 dark:bg-gray-700"
      : "";
  };
</script>

<div class="max-w-3xl mx-auto">
  <Navbar>
    <NavBrand>
      <span class="bg-red-500 h-4 aspect-square mr-2"></span>
    </NavBrand>
    <NavUl class="ml-auto" {activeUrl}>
      <!-- svelte-ignore attribute_quoted -->
      <NavLi href="/" class={activeDark("/")}>Home</NavLi>
      <NavLi href="/about" class={activeDark("/about")}>About</NavLi>
      <NavLi href="/projects" class={activeDark("/projects")}>Projects</NavLi>
      <NavLi href="/contact" class={activeDark("/contact")}>Contact Me</NavLi>
    </NavUl>
    <div class="flex items-center">
      <a
        href="https://github.com/sheeemboi"
        target="_blank"
        aria-label="Github"
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-hidden rounded-lg text-sm p-2.5"
      >
        <GithubSolid />
      </a>
      <DarkMode />
      <NavHamburger class="ml-0" />
    </div>
  </Navbar>
  <main class="px-4">{@render children()}</main>
</div>

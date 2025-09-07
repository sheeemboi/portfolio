<script>
  // @ts-nocheck

  import { goto } from '$app/navigation';
  import { Badge, Card, Heading, P } from 'flowbite-svelte';
  import { markVisited } from '$lib/helper/markVisited';
  import { visitedPages } from '$lib/store/sessionStore';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  export let data;
  let projects = data.projects.projects;
  let showProjects = false;
  $: currentPath = $page.url.pathname;

  onMount(() => {
    showProjects = true;

    visitedPages.update((page) => {
      if (!page.has(currentPath)) {
        visitedPages.update((p) => new Set(p).add(currentPath));
      }
      return page;
    });
  });

  $: isFirstVisit = !$visitedPages.has(currentPath);
</script>

<svelte:head>
  <title>Projects - Shem</title>
</svelte:head>
<Heading tag="h2" class="my-8 text-center">Projects</Heading>
{#if showProjects && isFirstVisit}
  <div class="flex flex-col gap-8 mx-auto px-4">
    {#each projects as proj, i}
      <div
        in:fly|global={{ delay: i * 200, y: 100, duration: 500 }}
        on:introend={() => {
          if (i === projects.length - 1) markVisited(currentPath);
        }}
      >
        <Card
          size="md"
          img={proj.img}
          class="hover:dark:border-red-600 transition-all duration-300"
        >
          <Heading tag="h3">{proj.name}</Heading>
          <div class="flex gap-2 flex-wrap my-2">
            {#each proj.tools as tool}
              <Badge color="dark">{tool}</Badge>
            {/each}
          </div>
          <P class="my-4">{proj.desc}</P>
          <div class="flex gap-3">
            {#each proj.links as link}
              <button
                on:click={() => window.open(link.url, '_blank')}
                class="px-2 py-1 rounded-lg bg-gray-700 flex items-center gap-1 hover:bg-gray-600"
              >
                <iconify-icon
                  icon={link.label === 'Website' ? 'mdi:web' : 'mdi:github'}
                ></iconify-icon>
                <small>{link.label}</small></button
              >
            {/each}
          </div>
        </Card>
      </div>
    {/each}
  </div>
{:else}
  <div class="flex flex-col gap-8 mx-auto px-4">
    {#each projects as proj, i}
      <div>
        <Card
          size="md"
          img={proj.img}
          class="hover:dark:border-red-600 transition-all duration-300 "
        >
          <Heading tag="h3">{proj.name}</Heading>
          <div class="flex gap-2 flex-wrap my-2">
            {#each proj.tools as tool}
              <Badge color="dark">{tool}</Badge>
            {/each}
          </div>
          <P class="my-4">{proj.desc}</P>
          <div class="flex gap-3">
            {#each proj.links as link}
              <button
                on:click={() => window.open(link.url, '_blank')}
                class="px-2 py-1 rounded-lg bg-gray-700 flex items-center gap-1 hover:bg-gray-600"
              >
                <iconify-icon
                  icon={link.label === 'Website' ? 'mdi:web' : 'mdi:github'}
                ></iconify-icon>
                <small>{link.label}</small></button
              >
            {/each}
          </div>
        </Card>
      </div>
    {/each}
  </div>
{/if}

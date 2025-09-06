<script lang="ts">
  export let hero;
  import bitmoji_hi from '$lib/assets/bitmoji/bitmoji_hi.png';
  import bitmoji_sus from '$lib/assets/bitmoji/bitmoji_sus.png';
  import { Heading, P, Button } from 'flowbite-svelte';
  import {
    MapPinOutline,
    GithubSolid,
    LinkedinSolid,
    EnvelopeOutline,
    DownloadOutline,
  } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let willShowCat = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="h-full w-full flex"
  on:mouseenter={() => (willShowCat = true)}
  on:mouseleave={() => (willShowCat = false)}
>
  <div class="h-full flex flex-col p-8">
    <Heading tag="h3" class="mb-2">{hero.name}</Heading>
    <P size="lg" class="dark:text-gray-400">
      {#each hero.roles as role, i}
        <span>{role}</span>
        {#if i < hero.roles.length - 1}
          <span class="mx-2">&bull;</span>
        {/if}
      {/each}
    </P>
    <P size="lg" class="mt-2 dark:text-gray-400">
      <MapPinOutline class="inline" />
      {hero.location}
    </P>
    <div class="mt-auto text-zinc-200 flex gap-4 items-center">
      <a href={hero.links.github} target="_blank">
        <GithubSolid />
      </a>
      <a href={hero.links.linkedin} target="_blank">
        <LinkedinSolid />
      </a>
      <a href="/contact">
        <EnvelopeOutline />
      </a>
      <a href={hero.links.resume} download>
        <Button outline color="alternative">
          Resume
          <DownloadOutline class="ml-2" />
        </Button>
      </a>
    </div>
  </div>
  <div class="w-[30%] h-full ml-auto">
    {#if !willShowCat}
      <img
        in:fly={{ y: 50, duration: 500 }}
        src={bitmoji_hi}
        alt="Avatar says Hi!"
        class="mr-8"
      />
    {:else}
      <img
        in:fly={{ x: 50, duration: 500 }}
        src={bitmoji_sus}
        alt="Cat says Hi!"
      />
    {/if}
  </div>
</div>

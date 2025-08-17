<script lang="ts">
  export let hero;
  import mandalatest from '$lib/assets/test/mandalatest.png';
  import { Heading, P, Button } from 'flowbite-svelte';
  import {
    MapPinOutline,
    GithubSolid,
    LinkedinSolid,
    EnvelopeOutline,
    DownloadOutline,
  } from 'flowbite-svelte-icons';
</script>

<div class="h-full w-full flex">
  <div class="h-full flex flex-col p-8">
    <Heading tag="h3" class="mb-2">{hero.name}</Heading>
    <P size="lg">
      {#each hero.roles as role, i}
        <span>{role}</span>
        {#if i < hero.roles.length - 1}
          <span class="mx-2">&bull;</span>
        {/if}
      {/each}
    </P>
    <P size="lg" class="mt-2">
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
      <a href="mailto:{hero.links.email}">
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
  <div class="w-[33%] h-full ml-auto">
    <img src={mandalatest} alt="" class="scale-150" />
  </div>
</div>

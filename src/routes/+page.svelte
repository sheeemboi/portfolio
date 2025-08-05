<script>
  // @ts-nocheck
  let { data } = $props();
  import { goto } from "$app/navigation";
  import {
    Heading,
    P,
    Hr,
    Button,
    Card,
    Spinner,
    span,
    Modal,
  } from "flowbite-svelte";
  import {
    FilePdfSolid,
    GithubSolid,
    ArrowUpRightFromSquareOutline,
  } from "flowbite-svelte-icons";

  import { fade, fly, slide } from "svelte/transition";

  import GridCard from "$lib/components/GridCard.svelte";
  import Grid from "$lib/grids/Grid.svelte";
  import Hero from "$lib/grids/Hero.svelte";
  import WorkExperience from "$lib/grids/WorkExperience.svelte";
  import Intro from "$lib/grids/Intro.svelte";
  import TechStackGrid from "$lib/grids/TechStackGrid.svelte";
  import Education from "$lib/grids/Education.svelte";

  import { sess_loaded } from "$lib/data/sessionStore.js";

  const onGridClick = (url) => goto(url);

  let popupModal = $state(false);
  let delay = $state(false);
  $effect(() => {
    if (!$sess_loaded) sess_loaded.set(true);
  });
</script>

{#if data}
  {#if !$sess_loaded}
    <div transition:fade={{ duration: 1000 }}></div>
  {:else}
    <div
      transition:slide={{ delay: 500, duration: 1000 }}
      class="grid grid-cols-4 gap-4 grid-rows-6 h-[720px]"
    >
      <!-- Hero Section -->
      <GridCard gridPos="col-span-3 row-span-2">
        <Hero />
      </GridCard>

      <!-- Work Experience -->
      <GridCard gridPos="col-span-1 row-span-4">
        <Heading tag="h5">Work</Heading>

        <WorkExperience WORK_EXP={data.work_exp} />
      </GridCard>

      <!-- Short Intro -->
      <GridCard gridPos="col-span-3 row-start-3">
        <Intro />
      </GridCard>
      <!-- Tech Stack -->
      <GridCard gridPos="flex flex-col col-span-2 row-span-2">
        <Heading tag="h5">Technologies and Tools</Heading>

        <TechStackGrid TECH_STACK={data.tech_stack} />
      </GridCard>
      <!-- Designs -->
      <GridCard
        gridPos="cursor-pointer col-start-1 col-span-2 hover:bg-zinc-800 "
        onclick={() => onGridClick("/projects")}
      >
        <div class="container h-full flex flex-col">
          <Heading class="flex items-center" tag="h5">
            Designs
            <ArrowUpRightFromSquareOutline class="ms-2" size="md" />
          </Heading>
          <div class="h-1 w-[30%] flex-1 mt-1 flex gap-1">
            <div class="rounded-sm bg-cyan-500 flex-1 h-full"></div>
            <div class="rounded-sm bg-fuchsia-500 flex-1 h-full"></div>
            <div class="rounded-sm bg-yellow-500 flex-1 h-full"></div>
            <div class="rounded-sm bg-zinc-500 flex-1 h-full"></div>
          </div>
        </div>
      </GridCard>
      <GridCard gridPos="row-start-4 col-start-3 row-span-3">
        <Heading tag="h5">Projects</Heading>
      </GridCard>
      <GridCard gridPos="row-start-5 col-start-4 row-span-2">
        <Heading tag="h5">Education</Heading>
        <Education EDUCATION={data.education} />
      </GridCard>
    </div>
  {/if}
{/if}

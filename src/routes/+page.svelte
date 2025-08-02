<script>
  // @ts-nocheck
  let { data } = $props();
  import { goto } from "$app/navigation";
  import { Heading, P, Hr, Button, Card, Spinner, span } from "flowbite-svelte";
  import {
    FilePdfSolid,
    GithubSolid,
    ArrowUpRightFromSquareOutline,
  } from "flowbite-svelte-icons";
  import GridCard from "$lib/components/GridCard.svelte";
  import Hero from "./Hero.svelte";
  import Intro from "./Intro.svelte";
  import WorkExperience from "./WorkExperience.svelte";
  import TechStackGrid from "./TechStackGrid.svelte";

  // let TechStack = $state(null);

  // $effect(async () => {
  //   const module = await import("./TechStackGrid.svelte");
  //   TechStack = module.default;
  // });

  const onGridClick = (url) => goto(url);
  console.log(data);
</script>

<div class="grid grid-cols-4 gap-4 grid-rows-5 h-[600px]">
  <GridCard gridPos="col-span-3 row-span-2"><Hero /></GridCard>
  <GridCard gridPos="col-span-1 row-span-3">
    {#if data.error}
      <div class=" h-full flex items-center justify-center flex-1">
        <Spinner color="cyan" />
        <P class="ml-2">Loading data...</P>
      </div>
    {:else}
      <WorkExperience WORK_EXP={data.work_exp} />
    {/if}
  </GridCard>
  <GridCard gridPos="col-span-3 row-start-3"><Intro /></GridCard>
  <GridCard gridPos="flex flex-col col-span-2 row-span-2">
    <Heading tag="h5">Technologies and Tools</Heading>
    {#if data.error}
      <div class="flex items-center justify-center flex-1">
        <Spinner color="cyan" />
        <P class="ml-2">Loading data...</P>
      </div>
    {:else}
      <TechStackGrid TECH_STACK={data.tech_stack} />
    {/if}
  </GridCard>
  <GridCard gridPos="cursor-pointer" onclick={() => onGridClick("/projects")}>
    <div class="container h-full flex flex-col">
      <Heading class="flex items-center" tag="h5"
        >Designs<ArrowUpRightFromSquareOutline class="ms-2" size="md" />
      </Heading>
      <div class="h-1 w-full flex-1 mt-1 flex gap-1">
        <div class="rounded-sm bg-cyan-500 flex-1 h-full"></div>
        <div class="rounded-sm bg-fuchsia-500 flex-1 h-full"></div>
        <div class="rounded-sm bg-yellow-500 flex-1 h-full"></div>
        <div class="rounded-sm bg-zinc-500 flex-1 h-full"></div>
      </div>
    </div>
  </GridCard>
  <GridCard gridPos="row-span-2">5</GridCard>
  <GridCard gridPos="">6</GridCard>
</div>

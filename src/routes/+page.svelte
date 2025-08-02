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
  import Grid from "./Grid.svelte";
  const onGridClick = (url) => goto(url);
</script>

<div class="grid grid-cols-4 gap-4 grid-rows-5 h-[600px]">
  <GridCard gridPos="col-span-3 row-span-2"
    ><Grid {data}>
      <Hero />
    </Grid>
  </GridCard>
  <GridCard gridPos="col-span-1 row-span-3">
    <Grid {data}>
      <WorkExperience WORK_EXP={data.work_exp} />
    </Grid>
  </GridCard>
  <GridCard gridPos="col-span-3 row-start-3">
    <Grid {data}>
      <Intro />
    </Grid>
  </GridCard>
  <GridCard gridPos="flex flex-col col-span-2 row-span-2">
    <Heading tag="h5">Technologies and Tools</Heading>
    <Grid {data}>
      <TechStackGrid TECH_STACK={data.tech_stack} />
    </Grid>
  </GridCard>
  <GridCard gridPos="cursor-pointer" onclick={() => onGridClick("/projects")}>
    <Grid {data}>
      <div class="container h-full flex flex-col">
        <Heading class="flex items-center" tag="h5">
          Designs
          <ArrowUpRightFromSquareOutline class="ms-2" size="md" />
        </Heading>
        <div class="h-1 w-full flex-1 mt-1 flex gap-1">
          <div class="rounded-sm bg-cyan-500 flex-1 h-full"></div>
          <div class="rounded-sm bg-fuchsia-500 flex-1 h-full"></div>
          <div class="rounded-sm bg-yellow-500 flex-1 h-full"></div>
          <div class="rounded-sm bg-zinc-500 flex-1 h-full"></div>
        </div>
      </div>
    </Grid>
  </GridCard>
  <GridCard gridPos="row-span-2">5</GridCard>
  <GridCard gridPos="">6</GridCard>
</div>

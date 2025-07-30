<script>
  import { goto } from "$app/navigation";
  import { Heading, P, Hr, Button, Card } from "flowbite-svelte";
  import { FilePdfSolid, GithubSolid } from "flowbite-svelte-icons";
  import GridCard from "$lib/components/GridCard.svelte";
  import Hero from "./Hero.svelte";
  import Intro from "./Intro.svelte";
  import WorkExperience from "./WorkExperience.svelte";
  import TechUsed from "./TechUsed.svelte";
</script>

<div class="grid grid-cols-4 gap-4 grid-rows-5 h-[600px]">
  <GridCard gridClass="col-span-3 row-span-2"><Hero /></GridCard>
  <GridCard gridClass="col-span-1 row-span-4"><WorkExperience /></GridCard>
  <GridCard gridClass="col-span-3 row-start-3"><Intro /></GridCard>
  <GridCard gridClass="col-span-2 row-span-2"><TechUsed/></GridCard>
  <GridCard gridClass="">4</GridCard>
  <GridCard gridClass="">5</GridCard>
  <GridCard gridClass="">6</GridCard>
</div>

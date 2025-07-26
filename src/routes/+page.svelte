<script>
  // import { goto } from "$app/navigation";
  import { Heading, P, Hr, Button } from "flowbite-svelte";
  import { FilePdfSolid, GithubSolid } from "flowbite-svelte-icons";

  import { TECH_STACK } from "../lib/utils/data";
  import TechBadge from "../lib/components/badge.svelte";

  let profileIconClass = "inline mr-1";
</script>

<section>
  <Heading tag="h5">Shem E. Mariano</Heading>
  <P>Frontend Developer</P>
  <P>Aklan, Philippines</P>
  <div class="mt-2">
    <a
      href="https://github.com/sheeemboi"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button size="xs" color="alternative"
        ><GithubSolid class={profileIconClass} /> Github</Button
      >
    </a>
    <Button size="xs" color="alternative"
      ><FilePdfSolid class={profileIconClass} /> Resume</Button
    >
  </div>
</section>
<Hr class="my-4 " />
<section>
  <P>
    Hi! I'm a 23-year-old someone who went late into web development. Does
    graphic design and layout since high school but now shifts focus into
    frontend development.
  </P>
</section>
<Hr class="my-4 " />
<section>
  <Heading tag="h5" class="mb-2 text-center">Technologies and Tools</Heading>
  <div>
    <P class="container mt-2 mb-2">Languages and Frameworks</P>
    <div class="flex flex-wrap">
      {#each TECH_STACK[0] as ts}
        <TechBadge color={ts.color} icon={ts.icon}>{ts.name}</TechBadge>
      {/each}
    </div>

    <P class="container mt-2 mb-2">Development Tools</P>
    <div class="flex flex-wrap">
      {#each TECH_STACK[1] as ts}
        <TechBadge color={ts.color} icon={ts.icon}>{ts.name}</TechBadge>
      {/each}
    </div>

    <P class="container mt-2 mb-2 ">Design Tools</P>
    <div class="flex flex-wrap">
      {#each TECH_STACK[2] as ts}
        <TechBadge color={ts.color} icon={ts.icon}>{ts.name}</TechBadge>
      {/each}
    </div>
  </div>
</section>

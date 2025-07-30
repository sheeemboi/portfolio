<script>
  import { Heading, P, Button } from "flowbite-svelte";
  import {
    FilePdfSolid,
    GithubSolid,
    LinkedinSolid,
  } from "flowbite-svelte-icons";
  let profileIconClass = "inline mr-1";
</script>

<section class="max-w-fit h-full flex flex-col">
  <Heading tag="h3">Shem E. Mariano</Heading>
  <P>Frontend Developer</P>
  <P>Graphic Designer</P>
  <P>Aklan, Philippines</P>
  <div class="mt-auto">
    <Button
      size="xs"
      outline
      color="alternative"
      onclick={() => window.open("https://github.com/sheeemboi", "_blank")}
    >
      <GithubSolid class={profileIconClass} /> Github
    </Button>
    <Button
      size="xs"
      outline
      color="alternative"
      onclick={() => window.open("https://github.com/sheeemboi", "_blank")}
    >
      <LinkedinSolid class={profileIconClass} /> LinkedIn
    </Button>
    <Button size="xs" outline color="alternative"
      ><FilePdfSolid class={profileIconClass} /> Resume</Button
    >
  </div>
</section>

<script>
  import { goto } from "$app/navigation";
  import { Heading, P, Button } from "flowbite-svelte";
  import {
    FilePdfOutline,
    GithubSolid,
    LinkedinSolid,
    MapPinOutline,
    EnvelopeOutline,
  } from "flowbite-svelte-icons";
  let iconClass = "inline m-2";
</script>

<section class="max-w-fit h-full flex flex-col">
  <Heading tag="h3">Shem E. Mariano</Heading>
  <P class="dark:text-zinc-300 mt-1">Frontend Developer<br /></P>
  <P class="dark:text-zinc-300 mb-1">Graphic Designer</P>
  <P class="dark:text-zinc-400 text-sm">
    <MapPinOutline class="inline" /> Philippines
  </P>
  <div class="mt-auto flex items-center text-zinc-400">
    <a href="https://github.com/sheeemboi" target="_blank">
      <GithubSolid size="lg" class="{iconClass} ml-0" />
    </a>
    <a href="https://github.com/sheeemboi" target="_blank">
      <LinkedinSolid class={iconClass} />
    </a>
    <a href="https://github.com/sheeemboi" target="_blank">
      <EnvelopeOutline class={iconClass} />
    </a>
    <a href="/resume.pdf" target="_blank" download>
      <Button size="xs" outline color="alternative" class="ml-2">
        Resume<FilePdfOutline class="inline ml-1" />
      </Button>
    </a>
  </div>
</section>

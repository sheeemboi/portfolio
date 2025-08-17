<script lang="ts">
  export let data;
  let projectsData = data.data;
  console.log(projectsData);
  import { Badge, Button, Card, Heading } from 'flowbite-svelte';
  import { CodeOutline, GlobeOutline } from 'flowbite-svelte-icons';
</script>

{#if data}
  <div class="mx-auto w-fit">
    <Heading tag="h3">Projects</Heading>
    <div class="flex flex-col gap-8 my-8">
      {#each projectsData.projects as proj}
        <Card size="lg" img={proj.img} class="dark:bg-zinc-900">
          <Heading tag="h4">{proj.name}</Heading>
          <p>{proj.desc}</p>
          <div class="flex gap-2 my-2 text-zinc-200">
            {#each proj.tools as tool}
              <Badge color="none" large class="rounded-lg p-2 px-3 bg-zinc-800"
                >{tool}</Badge
              >
            {/each}
          </div>
          <div class="flex gap-2 mt-6 text-zinc-200">
            {#each proj.links as link}
              <Button outline color="dark" href={link.url}>
                {#if link.label === 'Source'}
                  <CodeOutline />
                {:else}
                  <GlobeOutline />
                {/if}
                <span class="ml-1">{link.label}</span>
              </Button>
            {/each}
          </div>
        </Card>
      {/each}
    </div>
  </div>
{/if}

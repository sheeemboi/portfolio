<script lang="ts">
  import {
    Heading,
    Timeline,
    TimelineItem,
    P,
    List,
    Li,
  } from 'flowbite-svelte';
  export let work;
  let h3Class = 'text-md';
  import { BriefcaseOutline } from 'flowbite-svelte-icons';
</script>

<Heading tag="h5" class="text-center">Work</Heading>
<Timeline class="mt-6">
  {#each work as w}
    <TimelineItem svgClass="dark:text-zinc-200" title={w.title} date={w.date}>
      <P size="sm" class="dark:text-zinc-400">{w.company}</P>
    </TimelineItem>
  {/each}
</Timeline>

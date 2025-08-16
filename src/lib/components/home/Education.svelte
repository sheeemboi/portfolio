<script lang="ts">
  export let education;
  import { Heading, Timeline, TimelineItem, P } from 'flowbite-svelte';
</script>

<section class="relative min-h-full flex flex-col justify-between">
  <Heading tag="h5" class="text-center">Education</Heading>
  <Timeline class="mt-2">
    <TimelineItem title={education.program} date={education.date}>
      <P size="sm" class="dark:text-zinc-400">{education.school}</P>
    </TimelineItem>
  </Timeline>
</section>

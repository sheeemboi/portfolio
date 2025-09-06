<script lang="ts">
  export let education;
  import { Heading, Timeline, TimelineItem, P } from 'flowbite-svelte';
</script>

<section class="relative min-h-full flex flex-col">
  <Heading tag="h5" class="text-center">Education</Heading>
  <!-- <Timeline class="mt-2">
    <TimelineItem title={education.program} date={education.date}>
      <P size="sm" class="dark:text-zinc-400">{education.school}</P>
      <P size="sm" class="dark:text-zinc-500 mt-2">{education.location}</P>
    </TimelineItem>
  </Timeline> -->
  <div class="mt-8">
    <P size="sm" color="dark:text-gray-500 mb-1">{education.date}</P>
    <P size="lg" weight="semibold">{education.program}</P>
    <P color="dark:text-zinc-200">{education.school}</P>
    <P size="sm" color="dark:text-zinc-500">{education.location}</P>
  </div>
</section>

<script>
  let { EDUCATION } = $props();
  import { Timeline, TimelineItem, P, List, Li } from "flowbite-svelte";
  let h3Class = "text-md";
</script>

<section class="relative min-h-full">
  <Timeline class="mt-2 h-fit">
    <TimelineItem {h3Class} title={EDUCATION.program} date={EDUCATION.date}>
      <P size="sm" class="dark:text-zinc-400">{EDUCATION.school}</P>
      <List position="outside" tag="ul" class="ml-4 text-sm">
        {#each EDUCATION.description as desc}
          <Li>{desc}</Li>
        {/each}
      </List>
    </TimelineItem>
  </Timeline>
</section>

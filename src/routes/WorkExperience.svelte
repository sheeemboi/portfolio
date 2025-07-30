<script>
  import { Heading, P, Timeline, TimelineItem, Button } from "flowbite-svelte";
  import Icon from "@iconify/svelte";
  import { WORK_EXP } from "$lib/utils/data";
</script>

<section class="relative min-h-full">
  <Heading tag="h5">Work Experience</Heading>
  <Timeline class="mt-6 h-fit" order="vertical">
    {#each WORK_EXP as we}
      <TimelineItem title={we.title} date={we.date}>
        <P>{we.company}</P>
      </TimelineItem>
    {/each}
  </Timeline>
  <Button
    outline
    color="alternative"
    class="max-w-fit mt-auto ml-auto absolute end-0">Read More</Button
  >
</section>
<!-- marker -->
{#snippet orientationSlot()}
  <div
    class="flex items-center justify-center rounded-full w-fit p-1 aspect-square bg-gray-900 absolute -start-3"
  >
    <Icon icon="mdi:calendar" class="text-white text-1xl"></Icon>
  </div>
{/snippet}

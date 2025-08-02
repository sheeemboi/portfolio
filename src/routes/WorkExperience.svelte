<script>
  import { Heading, P, Timeline, TimelineItem, Button } from "flowbite-svelte";
  import Icon from "@iconify/svelte";
  let { WORK_EXP } = $props();
  // contains deprecated warning. classes feature not working so stuck with h3Class
  let h3Class = "text-md";
</script>

<section class="relative min-h-full">
  <Timeline class="mt-6 h-fit">
    {#each WORK_EXP as we}
      {@render orientationSlot()}
      <TimelineItem {h3Class} title={we.title} date={we.date}>
        <P size="sm" class="dark:text-zinc-400">{we.company}</P>
      </TimelineItem>
    {/each}
  </Timeline>
</section>
<!-- marker -->
{#snippet orientationSlot()}
  <div
    class="flex items-center justify-center rounded-full w-fit p-1 aspect-square dark:bg-zinc-900 absolute -start-3"
  >
    <Icon icon="mdi:calendar" class="text-white text-1xl"></Icon>
  </div>
{/snippet}

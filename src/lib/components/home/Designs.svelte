<script lang="ts">
  import mandalatest from '$lib/assets/test/mandalatest.png';
  import { Heading } from 'flowbite-svelte';
  import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
</script>

<div class="flex w-full h-full items-center">
  <div class="w-[50%] h-full bg-red-700 flex items-center">
    <img src={mandalatest} alt="" class="scale-150" />
  </div>
  <Heading tag="h5" class="ml-6 flex items-center justify-center flex-1 w-fit">
    <span>Design Gallery </span>
    <ArrowUpRightFromSquareOutline size="lg" class="ml-2 inline" /></Heading
  >
</div>

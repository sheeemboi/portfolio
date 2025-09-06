<script lang="ts">
  import { Heading } from 'flowbite-svelte';
  import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
</script>

<div
  class="group flex w-full h-full items-center cursor-pointer hover:bg-gray-800"
>
  <div class="w-[50%] h-full flex items-center">
    <img
      src="/designs/mandala.png"
      alt=""
      class="scale-125 group-hover:-translate-x-10 transition-all duration-150"
    />
  </div>
  <Heading
    tag="h5"
    class="ml-auto flex items-center justify-center flex-1 w-fit group-hover:scale-125 group-hover:-translate-x-5 transition-all duration-150 select-none"
  >
    <span>Design Gallery </span>
    <ArrowUpRightFromSquareOutline size="lg" class="ml-2 inline" /></Heading
  >
</div>

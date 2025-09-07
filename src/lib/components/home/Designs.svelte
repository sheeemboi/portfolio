<script lang="ts">
  import { Heading } from 'flowbite-svelte';
  import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
</script>

<div
  class="relative group flex w-full h-full py-4 items-center cursor-pointer hover:bg-gray-800 pr-4"
>
  <div class="absolute w-1/2 sm:h-full md:h-fit flex flex-1">
    <img
      src="/designs/mandala.png"
      alt=""
      class="group-hover:-translate-x-10 transition-all duration-150"
    />
  </div>
  <Heading
    class="text-sm sm:text-base md:text-xl ml-auto text-nowrap flex items-center justify-center w-1/2 group-hover:scale-125 group-hover:-translate-x-5 transition-all duration-150 select-none"
  >
    Design Gallery
    <ArrowUpRightFromSquareOutline size="lg" class="ml-2 inline" /></Heading
  >
</div>

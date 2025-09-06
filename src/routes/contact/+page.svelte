<script lang="ts">
  import { Input, Button, Textarea, Label, Heading } from 'flowbite-svelte';
  import bitmoji_coffee from '$lib/assets/bitmoji/bitmoji_coffee.png';
  import bitmoji_catsleep from '$lib/assets/bitmoji/bitmoji_catsleep.png';
    import { enhance } from '$app/forms';
</script>

<div
  class="flex-1 w-fit mx-auto flex flex-col justify-center items-center gap-6"
>
  <Heading tag="h1" class="text-start mb-8">Contact Me</Heading>
  <div class="flex">
    <form action="" method="POST" class="flex flex-col gap-4" use:enhance>
      <div class="flex gap-3">
        <span>
          <Label class="mb-1">First Name *</Label>
          <Input name="firstname" required />
        </span>
        <span>
          <Label class="mb-1">Last Name</Label>
          <Input name="lastname" />
        </span>
      </div>
      <div>
        <Label class="mb-1">Email *</Label>
        <Input type="email" name="email" required></Input>
      </div>
      <div>
        <Label class="mb-1">Message *</Label>
        <Textarea name="message" class="resize-none" rows={10} required
        ></Textarea>
      </div>
      <Button type="submit" class="w-1/2 mx-auto">Send Message</Button>
    </form>
    <div class="aspect-square">
      <img src={bitmoji_coffee} alt="" class="scale-75 border-b" />
    </div>
  </div>
</div>

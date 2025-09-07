<script lang="ts">
  import { Input, Button, Textarea, Label, Heading, P } from 'flowbite-svelte';
  import bitmoji_coffee from '$lib/assets/bitmoji/bitmoji_coffee.png';
  import bitmoji_catsleep from '$lib/assets/bitmoji/bitmoji_catsleep.png';
  import { enhance } from '$app/forms';
  import emailjs from '@emailjs/browser';

  let firstName = '';
  let lastName = '';
  let name = '';
  let email = '';
  let message = '';
  let isEmailSent: boolean;
  async function submitEmail(e: Event) {
    e.preventDefault();
    name = `${firstName} ${lastName}`;
    try {
      await emailjs.send(
        'service_f8qbpep',
        'template_06yfhws',
        { name, email, message },
        '1ZtAEUgqN_VYRjqp9',
      );

      isEmailSent = true;
      firstName = '';
      lastName = '';
      name = '';
      email = '';
      message = '';
    } catch (err) {
      console.error('Email error:', err);
      isEmailSent = false;
    }
  }
</script>

<div
  class="flex-1 w-fit mx-auto flex flex-col justify-center items-center gap-6"
>
  <Heading tag="h1" class="text-center mb-8">Contact Me</Heading>
  <div class="flex flex-col md:flex-row px-4">
    <form
      action=""
      method="POST"
      class="flex flex-col gap-4"
      on:submit={submitEmail}
    >
      <div class="flex gap-3">
        <span>
          <Label class="mb-1">First Name *</Label>
          <Input name="firstname" required bind:value={firstName} />
        </span>
        <span>
          <Label class="mb-1">Last Name</Label>
          <Input name="lastname" bind:value={lastName} />
        </span>
      </div>
      <div>
        <Label class="mb-1">Email *</Label>
        <Input type="email" name="email" required bind:value={email}></Input>
      </div>
      <div>
        <Label class="mb-1">Message *</Label>
        <Textarea
          name="message"
          class="resize-none"
          rows={10}
          bind:value={message}
          required
        ></Textarea>
      </div>
      <Button type="submit" class="w-1/2 mx-auto">Send Message</Button>
    </form>
    <div class="aspect-square">
      {#if isEmailSent === true}
        <P align="center" size="xl">Message have been sent!</P>
      {:else if isEmailSent === false}
        <P align="center" size="xl">Something went wrong. Try again?</P>
      {/if}
      <img src={bitmoji_coffee} alt="" class="scale-75 border-b" />
    </div>
  </div>
</div>

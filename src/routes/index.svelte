<script lang="ts">
  import { onMount } from 'svelte';
  import { passwordGenerator } from '$lib/passwordGenerator';

  let password = '';
  let length = 12;
  let useUppercase = true;
  let useNumbers = true;
  let useSpecialChars = true;
  let darkMode = false;

  onMount(() => {
    generatePassword();
  });

  function generatePassword() {
    password = passwordGenerator(length, useUppercase, useNumbers, useSpecialChars);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(password);
  }

  function toggleDarkMode() {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark', darkMode);
  }
</script>

<main class="container">
  <h1>Simple Password Generator</h1>
  <form on:submit|preventDefault={generatePassword}>
    <label>
      Length:
      <input type="number" bind:value={length} min="8" max="128" />
    </label>
    <label>
      Uppercase:
      <input type="checkbox" bind:checked={useUppercase} />
    </label>
    <label>
      Numbers:
      <input type="checkbox" bind:checked={useNumbers} />
    </label>
    <label>
      Special Chars:
      <input type="checkbox" bind:checked={useSpecialChars} />
    </label>
    <button type="submit">Generate</button>
  </form>
  <p>Password: {password}</p>
  <button on:click={copyToClipboard}>Copy to Clipboard</button>
  <button on:click={toggleDarkMode}>Toggle Dark Mode</button>
</main>

<style>
  .container {
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .dark .container {
    background-color: #333;
    color: #fff;
  }
</style>
<!-- src/routes/_layout.passwordGenerator.svelte -->
<script lang="ts">
  import { darkMode } from '../lib/darkMode';

  let isDarkMode = darkMode.isEnabled();
</script>

<svelte:options accessors={true} />

<div class={`container ${isDarkMode ? 'dark-mode' : ''}`}>
  <slot />
</div>

<style>
  .container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .dark-mode {
    background-color: #333;
    color: #fff;
  }
</style>
<script lang="ts">
  import { darkMode } from '$lib/darkMode';

  darkMode.init();
</script>

<header>
  <nav>
    <button on:click={darkMode.toggleDarkMode}>
      {#if darkMode.isDarkMode}
        Light Mode
      {:else}
        Dark Mode
      {/if}
    </button>
  </nav>
</header>

<main>
  <slot />
</main>

<style>
  :global(body) {
    background-color: #f0f0f0;
    transition: background-color 0.2s ease;
  }

  :global(.dark-mode body) {
    background-color: #333;
  }
</style>
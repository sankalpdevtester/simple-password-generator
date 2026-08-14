<script lang="ts">
  import { passwordLength } from '$routes/passwordLength';
</script>

<div class="password-length-layout">
  <slot />
  <div class="password-length-container">
    <passwordLength />
  </div>
</div>

<style>
  .password-length-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .password-length-container {
    margin-top: 20px;
  }
</style>
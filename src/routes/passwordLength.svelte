<script lang="ts">
  import { onMount } from 'svelte';
  import { passwordGenerator } from '$lib/passwordGenerator';
  import { characterSet } from '$lib/characterSet';
  import { clipboard } from '$lib/clipboard';

  let passwordLength: number = 12;
  let password: string = '';
  let characterSetOptions: string[] = characterSet.getOptions();

  onMount(async () => {
    generatePassword();
  });

  function generatePassword() {
    password = passwordGenerator.generatePassword(passwordLength, characterSet.getSelected());
  }

  function handleLengthChange(event: Event) {
    const target = event.target as HTMLInputElement;
    passwordLength = parseInt(target.value, 10);
    generatePassword();
  }

  function copyPasswordToClipboard() {
    clipboard.copy(password);
  }
</script>

<div class="password-length-container">
  <h2>Password Length</h2>
  <input type="number" min="8" max="128" value={passwordLength} on:input={handleLengthChange} />
  <button on:click={copyPasswordToClipboard}>Copy to Clipboard</button>
  <p>Password: {password}</p>
</div>
</code>
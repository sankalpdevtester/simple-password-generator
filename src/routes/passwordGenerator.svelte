<!-- src/routes/passwordGenerator.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { characterSets, getSelectedCharacterSet, validateCharacterSetSelection } from '../lib/characterSet';
  import { generatePassword } from '../lib/passwordGenerator';
  import { copyToClipboard } from '../lib/clipboard';

  let passwordLength = 12;
  let characterSetNames = ['Lowercase', 'Uppercase', 'Numbers'];
  let generatedPassword = '';

  onMount(async () => {
    generatePasswordAndCopyToClipboard();
  });

  function generatePasswordAndCopyToClipboard() {
    if (!validateCharacterSetSelection(characterSetNames)) {
      alert('Invalid character set selection');
      return;
    }
    const selectedCharacterSet = getSelectedCharacterSet(characterSetNames);
    generatedPassword = generatePassword(passwordLength, selectedCharacterSet);
    copyToClipboard(generatedPassword);
  }

  function handleCharacterSetChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const characterSetName = target.name;
    if (target.checked) {
      characterSetNames.push(characterSetName);
    } else {
      characterSetNames = characterSetNames.filter((name) => name !== characterSetName);
    }
    generatePasswordAndCopyToClipboard();
  }

  function handlePasswordLengthChange(event: Event) {
    const target = event.target as HTMLInputElement;
    passwordLength = parseInt(target.value, 10);
    generatePasswordAndCopyToClipboard();
  }
</script>

<h1>Password Generator</h1>
<form>
  <label>
    Password Length:
    <input type="number" value={passwordLength} on:input={handlePasswordLengthChange} />
  </label>
  {#each characterSets as characterSet}
    <label>
      <input type="checkbox" name={characterSet.name} checked={characterSetNames.includes(characterSet.name)} on:click={handleCharacterSetChange} />
      {characterSet.name}
    </label>
  {/each}
</form>
<p>Generated Password: {generatedPassword}</p>
<script lang="ts">
  import { generatePassword } from '$lib/passwordGenerator';
  import { validatePasswordLength } from '$lib/validation';

  let passwordLength: number = 12;
  let characterSet: string = 'all';
  let generatedPassword: string = '';

  function handleGeneratePassword() {
    const validatedLength = validatePasswordLength(passwordLength);
    if (validatedLength) {
      generatedPassword = generatePassword(validatedLength, characterSet);
    } else {
      alert('Invalid password length');
    }
  }

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(generatedPassword);
    alert('Password copied to clipboard');
  }

  function handleLengthChange(event: Event) {
    const target = event.target as HTMLInputElement;
    passwordLength = parseInt(target.value);
  }

  function handleCharacterSetChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    characterSet = target.value;
  }
</script>

<main>
  <h1>Password Generator</h1>
  <form>
    <label for="password-length">Password Length:</label>
    <input type="number" id="password-length" value={passwordLength} on:input={handleLengthChange} />
    <br />
    <label for="character-set">Character Set:</label>
    <select id="character-set" on:change={handleCharacterSetChange}>
      <option value="all">All Characters</option>
      <option value="letters">Letters Only</option>
      <option value="numbers">Numbers Only</option>
    </select>
    <br />
    <button type="button" on:click={handleGeneratePassword}>Generate Password</button>
    <button type="button" on:click={handleCopyToClipboard}>Copy to Clipboard</button>
  </form>
  <p>Generated Password: {generatedPassword}</p>
</main>
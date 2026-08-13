// src/lib/characterSet.ts
import { validate } from '../lib/validation';

interface CharacterSet {
  name: string;
  characters: string;
}

const characterSets: CharacterSet[] = [
  {
    name: 'Lowercase',
    characters: 'abcdefghijklmnopqrstuvwxyz',
  },
  {
    name: 'Uppercase',
    characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  },
  {
    name: 'Numbers',
    characters: '0123456789',
  },
  {
    name: 'Special Characters',
    characters: '!@#$%^&*()_+~`|}{[]:;?><,./-='
  }
];

function getSelectedCharacterSet(characterSetNames: string[]): string {
  let selectedCharacterSet = '';
  characterSetNames.forEach((characterSetName) => {
    const characterSet = characterSets.find((characterSet) => characterSet.name === characterSetName);
    if (characterSet) {
      selectedCharacterSet += characterSet.characters;
    }
  });
  return selectedCharacterSet;
}

function validateCharacterSetSelection(characterSetNames: string[]): boolean {
  if (!characterSetNames || characterSetNames.length === 0) {
    return false;
  }
  characterSetNames.forEach((characterSetName) => {
    if (!characterSets.find((characterSet) => characterSet.name === characterSetName)) {
      throw new Error(`Invalid character set name: ${characterSetName}`);
    }
  });
  return true;
}

export { characterSets, getSelectedCharacterSet, validateCharacterSetSelection };
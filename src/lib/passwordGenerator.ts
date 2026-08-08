function passwordGenerator(length: number, useUppercase: boolean, useNumbers: boolean, useSpecialChars: boolean): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  let password = '';
  const charSet = chars + (useUppercase ? uppercaseChars : '') + (useNumbers ? numbers : '') + (useSpecialChars ? specialChars : '');

  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return password;
}

export { passwordGenerator };
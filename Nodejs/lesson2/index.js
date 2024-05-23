function generatePassword(length = 8, options = {}) {
    const {
      useNumbers = true,
      useSymbols = true,
      useUpperCase = true,
      useLowerCase = true,
    } = options;
  
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  
    let characters = '';
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;
    if (useUpperCase) characters += upperCase;
    if (useLowerCase) characters += lowerCase;
  
    if (!characters.length) {
      throw new Error('No characters selected for password generation');
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return password;
  }
  
  module.exports = {
    generatePassword,
  };
function generateRandomName() {
    const syllables = ['ba', 'be', 'bi', 'bo', 'bu', 'ca', 'ce', 'ci', 'co', 'cu', 'da', 'de', 'di', 'do', 'du', 'fa', 'fe', 'fi', 'fo', 'fu', 'ga', 'ge', 'gi', 'go', 'gu', 'ha', 'he', 'hi', 'ho', 'hu', 'ja', 'je', 'ji', 'jo', 'ju', 'ka', 'ke', 'ki', 'ko', 'ku', 'la', 'le', 'li', 'lo', 'lu', 'ma', 'me', 'mi', 'mo', 'mu', 'na', 'ne', 'ni', 'no', 'nu', 'pa', 'pe', 'pi', 'po', 'pu', 'ra', 're', 'ri', 'ro', 'ru', 'sa', 'se', 'si', 'so', 'su', 'ta', 'te', 'ti', 'to', 'tu', 'va', 've', 'vi', 'vo', 'vu', 'za', 'ze', 'zi', 'zo', 'zu'];
  
    // Generate a random number of syllables (between 2 and 4)
    const numSyllables = Math.floor(Math.random() * 3) + 2;
  
    // Create the random name by concatenating random syllables
    let randomName = '';
    for (let i = 0; i < numSyllables; i++) {
      const randomSyllable = syllables[Math.floor(Math.random() * syllables.length)];
      randomName += randomSyllable;
    }
  
    return randomName;
  }
  
  // Example usage:
  export { generateRandomName };
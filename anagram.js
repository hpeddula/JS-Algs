const input = ["star", "rats", "car", "arc", "arts", "stars","rats"]

const anagram = (input) => {
    const anagrams = new Map();
    for (let word of input) {
        let sortedWord = word.split('').sort().join('');
        if (anagrams.has(sortedWord)) {
            let existingWords = anagrams.get(sortedWord)
            if (!existingWords.includes(word)) anagrams.set(sortedWord, [...existingWords, word])
        } else {
            anagrams.set(sortedWord,[word])
        }
    }
    return anagrams;
}
console.log(anagram(input))
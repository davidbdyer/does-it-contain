const wordBankIn = document.getElementById('word-bank');
const textToCheck = document.getElementById('text-to-check');
const textOutput = document.getElementById('text-output');
let wordBankArray = []
let textInArray = []


const sleep = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const setTextInArray = (textIn, wordBank) => {
	if (textIn.value != '') {
		textInArray = textIn.value.split(/\W/)
		// console.log(textInArray)
	}
}

const setWordBankArray = async (wordBank) => {
	if (wordBank.value != '') {
		wordBankArray = wordBank.value.split(/\W/);
		// console.log(wordBankArray)
	}
}

const compareText = (wordBankArray, textInArray) => {
	textInArray.forEach((word, index) => {
		if (wordBankArray.includes(word)) {
			textInArray[index] = `<b> ${word} </b>`
			textOutput.innerHTML = textInArray.join(' ')
		} else {
			textOutput.innerHTML = textInArray.join(' ')
		}
	})
}

addEventListener('paste', async (event) => {
	await sleep(500)
	setWordBank(wordBankIn)
	textChecker(textToCheck, wordBankArray)
	compareText(wordBankArray, textInArray)
})


addEventListener('keyup', async (event) => {
	await sleep(500)
	setWordBankArray(wordBankIn)
	setTextInArray(textToCheck, wordBankArray)
	compareText(wordBankArray, textInArray)
})
const wordBankIn = document.getElementById('word-bank');
const textToCheck = document.getElementById('text-to-check');
const textOutput = document.getElementById('text-output');
const checkBtn = document.getElementById('check-btn');
const resetBtn = document.getElementById('reset-btn');
const wordBankArray = [];
const textInArray = [];

const textInToArray = async (text, array) => {
	if (text.value != '') {
		let tmpArray = text.value.split(/\W/); // none word characters
		for (word of tmpArray) {
			if (word != '') {
				array.push(word);
			}
		}
	}
};

// clears arrays
const clearArrays = () => {
	wordBankArray.length = 0;
	textInArray.length = 0;
	textOutput.innerHTML = '';
};

// resets page
const resetPage = () => {
	clearArrays();
	wordBankIn.value = '';
	textToCheck.value = '';
};

const compareText = (wordBank, textIn) => {
	for (word of textIn) {
		if (wordBank.includes(word)) {
			textOutput.innerHTML += `<span class="found"> ${word} </span>`;
		}
	}
};

// Run Page Functions

checkBtn.addEventListener('click', async (event) => {
	await clearArrays();
	textInToArray(wordBankIn, wordBankArray);
	textInToArray(textToCheck, textInArray);
	compareText(wordBankArray, textInArray);
});

resetBtn.addEventListener('click', resetPage);

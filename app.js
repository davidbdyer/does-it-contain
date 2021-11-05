const filterKeyRaw = document.getElementById('filter-key');
const textToCheck = document.getElementById('text-to-check');
const textOutput = document.getElementById('text-output');

textChecker = (str, array) => {
	strArray = str.value.split(' ')
	strArray.forEach((word, index) => {
		if (word.includes(array)) {
			strArray[index] = strArray[index].replace(word, `<b>${word}</b>`)
			textOutput.innerHTML = strArray.join(' ')
		}
	})
}

filterKeyRaw.addEventListener('keyup', () => {
	const filterKeyArray = filterKeyRaw.value.split(' ');
	textToCheck.addEventListener('keyup', (e) => {
		e.code === 'Space' ? textChecker(textToCheck, filterKeyArray) : console.log('no')
	})
})
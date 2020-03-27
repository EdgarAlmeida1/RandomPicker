const textChoices = document.getElementById('textChoices');
const divChoices = document.getElementById('divChoices');

textChoices.focus();

textChoices.addEventListener('keyup', (e) => {
	// Create the choices the user entered
	createTags(e.target.value);
	
	// If the user press Enter, the program will random select one tag 
	if(e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 100)
		
		randomSelect();
	}
});

function createTags(input) {
	const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
	
	divChoices.innerHTML = '';
	
	// Appending the new choices
	tags.forEach(tag => {
		const newChoice = document.createElement('span');
		newChoice.classList.add('tag');
		newChoice.innerText = tag;
		divChoices.appendChild(newChoice);
	})
}

function randomSelect() {
	const times = 29;
	
	const interval = setInterval(() => {
		const randomTag = pickRandomTag();
		
		highlightTag(randomTag);
		
		setTimeout(() => {
			unhighlightTag(randomTag);
		}, 100);
	}, 100);
	
	setTimeout(() => {
		clearInterval(interval);
		
		setTimeout(() => {
			const randomTag = pickRandomTag();
			
			highlightTag(randomTag)
		}, 100);
	}, times * 100);
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
	tag.classList.add('highlight');
}

function unhighlightTag(tag) {
	tag.classList.remove('highlight');
}
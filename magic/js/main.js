// create elements
const question = document.createElement('input');
const getAnswer = document.createElement('button');
const answer = document.createElement('image');
question.value = 'Ask Me Anything';
getAnswer.setAttribute('id', 'answerButton');
getAnswer.setAttribute('type', 'button');
getAnswer.textContent = 'Get Answer';

// place elements on the page
document.body.appendChild(question);
document.body.appendChild(getAnswer);


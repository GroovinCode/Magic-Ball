// create elements
const question = document.createElement('input');
const getAnswer = document.createElement('button');
const answer = document.createElement('img');
question.id = 'askInput';
question.type = 'text';
question.placeholder = 'Ask Me A Question';
getAnswer.id = 'answerButton';
getAnswer.type = 'button';
getAnswer.textContent = 'Get Answer';
answer.id = 'answerOutput';
answer.setAttribute('src', '/magic/images/magic8ball_start.png');

// place elements on the page
document.body.appendChild(question);
document.body.appendChild(getAnswer);
document.body.appendChild(answer);

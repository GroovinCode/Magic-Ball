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
getAnswer.addEventListener('click', magicAnswer);
answer.id = 'answerOutput';
answer.setAttribute('src', '/magic/images/magic8ball_start.png');

// place elements on the page
document.body.appendChild(question);
document.body.appendChild(getAnswer);
document.body.appendChild(answer);

function magicAnswer() {
  let i = question.value == '' ? 'extra' : Math.floor(Math.random() * (21-1) + 1); 
  question.value = '';
  return answer.setAttribute('src', `/magic/images/magic8ball_${i}.png`);
}
// create elements
const question = document.createElement('input');
const getanswer = document.createElement('button');
question.value = 'Ask Me Anything';
getanswer.innerHTML = 'Get Answer';

// place elements on the page
document.body.appendChild(question);
document.body.appendChild(getanswer);
document.body.appendChild(line);

// add text
getanswer.innerHTML = 'Get Answer for me please';

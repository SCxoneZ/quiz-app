/*

      <ul>
        
        <li>
          <input type="radio" id="a" name="option">
          <label for="a">Test Doang</label>
        </li>
        
        <li>
          <input type="radio" id="b" name="option">
          <label for="b">Test Doang</label>
        </li>
        
      </ul>


*/

import datas from './data.js';

const button = document.querySelector('button.submit');
const questionBox = document.querySelector('.container .question');
const optionsBox = document.querySelector('.container .options ul');
let currentIndex = 0;

changeQuiz(currentIndex);

button.addEventListener('click', () => {
  const options = document.querySelectorAll('.container .options ul li input:checked');
  
  if(options.length == 1){
    if(options[0].id == datas[currentIndex].answer){
      alert('Correct!');
    }
    else{
      alert('Incorrect!');
  }
  optionsBox.innerHTML = '';
  ++currentIndex;
  changeQuiz(currentIndex);
}
  
});

function changeQuiz(index) {
  questionBox.innerHTML = datas[index].question;
  for (const option in datas[index].options) {
    const newLi = document.createElement('li');

    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'radio');
    newInput.setAttribute('id', option);
    newInput.setAttribute('name', 'option');

    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', option);
    newLabel.innerHTML = datas[index].options[option];

    newLi.appendChild(newInput);
    newLi.appendChild(newLabel);

    optionsBox.appendChild(newLi);
  }
}

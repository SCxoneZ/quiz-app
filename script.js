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

const questionBox = document.querySelector('.container .question'),
optionsBox = document.querySelector('.container .options ul'),
button = document.querySelector('button.submit');

questionBox.innerHTML = datas[0].question;

const newLi = document.createElement('li');

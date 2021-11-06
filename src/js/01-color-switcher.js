function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};



refs.btnStart.addEventListener("click", handlerButtonStart);
refs.btnStop.addEventListener("click", handlerButtonStop);

let timerId = null;


function handlerButtonStart() {
  
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.btnStart.setAttribute('disabled', true);
  refs.btnStop.removeAttribute('disabled');

  timerId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
      //console.log('interval')
  }, 1000);
}


function handlerButtonStop() {

  clearInterval(timerId);
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', true);
    //console.log('close')
}
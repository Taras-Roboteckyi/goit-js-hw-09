import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.1.0.min.css';

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
   
  let delayPromise = Number(delay.value);

  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, delayPromise)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        }, delay)
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        }, delay)
      });
    delayPromise += Number(step.value);
    
  };
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
      if (shouldResolve) {
    resolve({position, delay})
      } else {
    reject({position, delay})
      }
      
  })
}
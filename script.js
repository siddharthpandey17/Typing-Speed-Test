// Typing Speed Test starter.
// TODO 1: Choose a random passage and render each character as a span.
// TODO 2: Start a 60-second timer on the first keystroke.
// TODO 3: Highlight correct, incorrect and current characters.
// TODO 4: Calculate WPM, accuracy and error count.
// TODO 5: Stop timer at zero or on Finish; implement New test.
// TODO 6: Bonus: save best WPM in localStorage.

const timeLeftElement=document.querySelector("#time-left");
const wpmElement=document.querySelector("#wpm");
const accuracyElement=document.querySelector("#accuracy");
const errorsElement=document.querySelector("#errors");
const quoteDisplay=document.querySelector("#quote-display");
const typingInput=document.querySelector("#typing-input");
const testStatus=document.querySelector("#test-status");
const restartButton=document.querySelector("#restart-button");
const finishButton=document.querySelector("#finish-button");
const message=document.querySelector("#message");
const passages=[
"Learning to code takes patience and practice. Write a little every day, test your ideas, and keep improving one step at a time.",
"Small habits can create big changes. Stay curious, focus on accuracy, and remember that consistent effort is more useful than rushing.",
"A good developer solves problems carefully. Break large tasks into smaller steps, learn from mistakes, and celebrate every improvement."
];
let timerId=null,timeLeft=60,started=false,finished=false,targetText="";
// TODO: Implement startTest(), renderPassage(), updateStats(), finishTest() and resetTest().
// Remember to call clearInterval(timerId) when the test ends.
typingInput.addEventListener("input",()=>{/* TODO: start timer, highlight characters and update stats */});
restartButton.addEventListener("click",()=>{/* TODO: stop timer, reset state and select a new passage */});
finishButton.addEventListener("click",()=>{/* TODO: finish test and show final stats */});
// TODO: Initialize a new test on page load.

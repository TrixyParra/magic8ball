// Magic 8 Ball Response 
const answers = [
    'It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']; 

const randomAnswer = Math.floor(Math.random() * 20);  // or  * answers.length  can also be used 


// Button 1 Onclick Function 
function ask() {
    // Adding Shake Effect 
    let magicBall = document.getElementById('magic-ball');
    magicBall.classList.add('shake-effect') 

    // Removing Question Input Element 
    let question = document.getElementById('question');
    question.remove(); 

    // Removing Button 1 
    button1.remove(); 

    // Creating h3 Element with Inner Text Inside Input Section div
    let inputDiv = document.getElementById('input-section');
    let userQuestion = document.createElement('h3'); 
    inputDiv.appendChild(userQuestion); 
    userQuestion.innerText = question.value; 

    // Creating Button 2 inside Input Section div 
    let button2 = document.createElement('button'); 
    inputDiv.appendChild(button2)[1]; 
    button2.type = 'button'; 
    button2.id = 'button-2'; 
    button2.innerText = 'New Question'; 
    // Button 2 Onclick Event Listener Function 
    button2.addEventListener('click', () => {
        window.location.reload(true); 
    }) 

    // Removing Number Eight 
    setTimeout(() => {
        let numberEight = document.getElementById('eight'); 
        numberEight.textContent = '';  // empty string removes the content or  nunberEight.remove(); 
    }, 1000) 

    // Getting the Answer
    setTimeout(() => {
        let answer = document.getElementById('answer'); 
        answer.innerHTML = answers[randomAnswer]; 
    }, 1500)
} 


// Button 1 Event Listener 
let button1 = document.getElementById('button-1'); 

button1.addEventListener('click', () => {
    // Inner circle answer background color change 
    setTimeout(() => {
        let newInnerCircle = document.getElementById('inner'); 
        newInnerCircle.style.backgroundColor = 'black'; 
        newInnerCircle.style.border = '10px solid #131419'; 
    }, 1000) 
}) 

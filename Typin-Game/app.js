// Array of speed words
const SpeedWords = ["football", "practice", "titanic", "window", "quick", "smart", "good", "love", "exercise", "happiness", "success", "phone", "father", "electronic", "Maschine", "intellegend", "purpose", "lime", "important", "developer", "release"];

// Selectors
const complete = document.querySelector('.complete');
const speed_area = document.querySelector('#speed-area');
const final_score = document.querySelector('.final_score');
const input = document.querySelector('#input');
const time_left = document.querySelector('#time_left');
const result = document.querySelector('#result');
const speed_words = document.querySelector("#speed_words");
const play_again = document.querySelector('#play_again');
const start = document.querySelector('#start')

// Initially
let index = Math.floor(Math.random() * SpeedWords.length);
let score = 0;
let time = 10;
let countdownInterval;

// Function to display the current speed word
const Words = (index) => {
    speed_words.innerHTML = SpeedWords[index];
};

// Function to display the current score
const ScoreShow = (score) => {
    result.innerHTML = `Score : ${score}`;
};

// Function to manage the countdown timer
const TimeLeft = (time) => {

    const updateCountdown = () => {
        time_left.innerText = `Time Left: ${time}s`;
        if (time === 0) {
            clearInterval(countdownInterval);
            speed_area.style.display = 'none';
            complete.classList.add('active');
        } else {
            time--;
        }
    };

    updateCountdown();
    clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 1000);
};

// Function to display the final score
const FinalScore = (score) => {
    score == 0 ? final_score.innerHTML = `Your final score is ${score} 🙁` : final_score.innerHTML = `Your final score is ${score} ✨`;
};

// Function to start the game
const StartWrite = () => {
    const value = input.value.trim().toUpperCase();
    const wordsValue = speed_words.innerHTML.trim().toUpperCase();

    if (value === wordsValue) {
        input.value = '';
        score++;
        index = (index + 1) % SpeedWords.length;
        TimeLeft(time);
        Words(index);
        ScoreShow(score);
        FinalScore(score);
    }
};

// Function to set up the initial state
const Default = () => {
    Words(index);
    ScoreShow(score);
    FinalScore(score);
};

// Set up initial game state
Default();

// Function to reset the game
const PlayAgain = () => {
    score = 0;
    time = 10;
    Default();
    speed_area.style.display = 'block';
    complete.classList.remove('active');
    start.style.display = 'block'
    time_left.innerText = `Time Left: 10s`;
};

// Start Playing
const Start = () => {
    StartWrite()
    TimeLeft(time);
    start.style.display = 'none'
}

// Event listeners
start.addEventListener('click', Start)
input.addEventListener('keyup', StartWrite);
play_again.addEventListener('click', PlayAgain);
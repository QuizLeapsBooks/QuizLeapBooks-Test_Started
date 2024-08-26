let time = 3600; // 60 minutes in seconds

const timerElement = document.getElementById('timer');
const quizForm = document.getElementById('quizForm');
const timeOverMessage = document.getElementById('timeOverMessage');

const updateTimer = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(timerInterval);
        quizForm.submit();
        timeOverMessage.classList.remove('hidden');
        setTimeout(() => {
            window.location.href = '/';
        }, 10000);
    }
};

window.onload = () => {
    updateTimer(); 
    setInterval(updateTimer, 1000);
};





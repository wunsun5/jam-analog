function rotateClockHands() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hour = document.querySelector('.hour');
    const minute = document.querySelector('.minute');
    const second = document.querySelector('.second');

    const hourRotation = (hours * 30) + (minutes * 0.5);
    const minuteRotation = (minutes * 6) + (seconds * 0.1);
    const secondRotation = seconds * 6;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;
}

// Rotate the hands initially
rotateClockHands();

// Update the clock every second
setInterval(rotateClockHands, 1000);
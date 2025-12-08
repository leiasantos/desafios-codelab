function startCountdown(targetDate) {
  const countdown = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
  <span>${days}</span>d -
  <span>${hours}</span>h -
  <span>${minutes}</span>m -
  <span>${seconds}</span>s
`;

    if (distance < 0) {
      clearInterval(timer);
      countdown.innerHTML = "Tempo esgotado!";
    }
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
}

const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();

startCountdown(targetDate);

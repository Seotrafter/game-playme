document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let speed = target / 100;

    const updateCount = () => {
      count += speed;
      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    gsap.fromTo(
      counter,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    updateCount();
  });
});

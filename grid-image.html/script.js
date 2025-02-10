function startCounter() {
    let counterElement = document.getElementById('counter');
    let count = 0;
        setInterval(() => { 
        count++;
         counterElement.textContent = count;
         }, 1000); // Counts up every second }
        }


        // Function to handle the counting animation
const counters = document.querySelectorAll('.counter-number');

const countUp = (element, target) => {
  let current = 0;
  const increment = target / 100;

  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.textContent = Math.round(current);
  }, 10);
};

// Intersection observer to trigger counting when section comes into view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counterBoxes = entry.target.querySelectorAll('.counter-box');
      counterBoxes.forEach(box => {
        const targetCount = box.getAttribute('data-count');
        const counterElement = box.querySelector('.counter-number');
        countUp(counterElement, targetCount);
      });
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 // When half of the section is in view
});

// Observe the section
const section = document.querySelector('#counter-section');
observer.observe(section);



function enterWebsite() {
  document.getElementById("loaderContainer").style.display = "none";
}






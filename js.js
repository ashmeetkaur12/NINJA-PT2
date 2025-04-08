let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

let observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let valueDisplay = entry.target;
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(interval / endValue);

                let counter = setInterval(() => {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);

                observer.unobserve(valueDisplay); // Stop observing after counting starts
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
);

// Attach the observer to each `.num` element
valueDisplays.forEach((valueDisplay) => {
    observer.observe(valueDisplay);
});

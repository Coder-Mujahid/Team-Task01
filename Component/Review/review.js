const slider = document.querySelector('.customer .slider');
const reviews = document.querySelectorAll('.customer .review');
const prevButton = document.querySelector('.customer .prev');
const nextButton = document.querySelector('.customer .next');

let currentIndex = 0;

function updateSlider() {
    const newPosition = -currentIndex * 100 + '%';
    slider.style.transform = `translateX(${newPosition})`;
}

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.toggle('active', i === index);
    });
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
        showReview(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < reviews.length - 1) {
        currentIndex++;
        updateSlider();
        showReview(currentIndex);
    }
});
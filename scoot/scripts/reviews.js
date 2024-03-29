const url = 'data/reviews.json';

async function fetchReviewsData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const reviewsData = await response.json();
        return reviewsData;
    } catch (error) {
        console.error('Error fetching reviews data:', error);
        return null;
    }
}

async function displayRandomReviews() {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = '';

    try {
        const data = await fetchReviewsData(url);

        const reviews = data.reviews;
        const selectedReviews = [];

        while (selectedReviews.length < 4) {
            const randomIndex = Math.floor(Math.random() * reviews.length);
            const review = reviews[randomIndex];
            if (!selectedReviews.includes(review)) {
                selectedReviews.push(review);
            }
        }

        selectedReviews.forEach((review, index) => {
            const reviewDiv = document.createElement('div');
            const reviewId = `review-${index + 1}`;
            reviewDiv.id = reviewId;
            reviewDiv.innerHTML = `
                <h3>${review.author}</h3>
                <p>Rating: ${review.rating}</p>
                <p>${review.comment}</p>
                <p>Date: ${review.date}</p>
            `;
            reviewsContainer.appendChild(reviewDiv);
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}

displayRandomReviews();
const initialData = [
    {
      product: "Apple iPhone 13",
      reviews: [
        { id: "1", text: "Отличный телефон! Батарея держится долго." },
        { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
      ],
    },
    {
      product: "Samsung Galaxy Z Fold 3",
      reviews: [{ id: "3", text: "Интересный дизайн, но дорогой." }],
    },
    {
      product: "Sony PlayStation 5",
      reviews: [{ id: "4", text: "Люблю играть на PS5, графика на высоте." }],
    },
  ];
  
  const reviewsContainer = document.getElementById('reviews-container');
  const reviewInput = document.getElementById('review-input');
  const submitReviewButton = document.getElementById('submit-review');
  
  function displayReviews() {
    initialData.forEach(product => {
      product.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.textContent = review.text;
        reviewsContainer.appendChild(reviewElement);
      });
    });
  }
  
  function addReview(reviewText) {
    if (reviewText.length < 50) {
      throw new Error('Review is too short. It should be at least 50 characters long.');
    }
    if (reviewText.length > 500) {
      throw new Error('Review is too long. It should be at most 500 characters long.');
    }
  
    const reviewElement = document.createElement('div');
    reviewElement.textContent = reviewText;
    reviewsContainer.appendChild(reviewElement);
  }
  
  submitReviewButton.addEventListener('click', () => {
    const reviewText = reviewInput.value;
    try {
      addReview(reviewText);
      reviewInput.value = '';
    } catch (error) {
      alert(error.message);
    }
  });
  
  displayReviews();
  
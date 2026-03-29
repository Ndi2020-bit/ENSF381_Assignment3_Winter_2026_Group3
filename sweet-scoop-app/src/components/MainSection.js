import { useState, useEffect } from 'react';
import flavors from '../data/flavors';
import reviews from '../data/reviews';

function MainSection() {
  const [featuredFlavors, setFeaturedFlavors] = useState([]);
  const [featuredReviews, setFeaturedReviews] = useState([]);

  useEffect(() => {
    // Pick 3 random flavors
    const shuffledFlavors = [...flavors].sort(() => Math.random() - 0.5);
    setFeaturedFlavors(shuffledFlavors.slice(0, 3));

    // Pick 2 random reviews
    const shuffledReviews = [...reviews].sort(() => Math.random() - 0.5);
    setFeaturedReviews(shuffledReviews.slice(0, 2));
  }, []);

  // Convert numeric rating to stars e.g. 4 → ★★★★☆
  function renderStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

  return (
    <div className="main-section">

      {/* About */}
      <section>
        <h2>About Sweet Scoop Ice Cream</h2>
        <p>
          Sweet Scoop Ice Cream is a family-owned business that has been serving
          delicious ice cream since 1990. We pride ourselves on using only the
          freshest ingredients to create our unique flavors. Whether you're in
          the mood for a classic vanilla or something more adventurous like our
          signature "Chocolate Explosion," we have something for everyone. Come
          visit us and treat yourself to a sweet scoop today!
        </p>
      </section>

      {/* Featured Flavors */}
      <section>
        <h2>Featured Flavors</h2>
        <div className="flavor-grid">
          {featuredFlavors.map((flavor) => (
            <div key={flavor.id} className="flavor-card">
              <h3>{flavor.name}</h3>
              <p>{flavor.description}</p>
              <p>Price: {flavor.price}</p>
              <img src={flavor.image} alt={flavor.name} />
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section>
        <h2>Customer Reviews</h2>
        {featuredReviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.customerName}</h3>
            <p>Rating: {renderStars(review.rating)}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </section>

    </div>
  );
}

export default MainSection;
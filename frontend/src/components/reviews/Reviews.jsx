import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import PropTypes from "prop-types";
import "./Reviews.css";
import { useEffect, useState } from "react";

const Reviews = ({ active, singleProduct, setsingleProduct }) => {
  const [users, setUsers] = useState([]);
  const url = import.meta.env.VITE_API_BASE_URL;
  const thisReviews = [];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${url}/api/users`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        }
      } catch (error) {
        console.log("Veri Hatası", error);
      }
    };
    fetchUsers();
  }, [url]);

  singleProduct.reviews.forEach((review) => {
    const matchingUsers = users?.filter((user) => user._id === review.user);

    matchingUsers.forEach((matchingUser) => {
      thisReviews.push({
        review: review,
        user: matchingUser,
      });
    });
  });
  return (
    <div className={`tab-panel-reviews ${active}`}>
      {singleProduct.reviews.length > 0 ? (
        <>
          <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
          <div className="comments">
            <ol className="comment-list">
              {thisReviews.map((item, i) => (
                <ReviewItem key={i} reviewItem={item} />
              ))}
            </ol>
          </div>
        </>
      ) : (
        <h3>Hiç yorum yok...</h3>
      )}
      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm
          singleProduct={singleProduct}
          setsingleProduct={setsingleProduct}
        />
      </div>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  active: PropTypes.string,
  singleProduct: PropTypes.object,
  setsingleProduct: PropTypes.func,
};

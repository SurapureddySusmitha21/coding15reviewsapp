// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  getReview = reviewsList => {
    const {activeReviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewIndex
    ]
    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} className="" alt={username} />
        <p className="user-paragraph">{username}</p>
        <p className="company-paragraph">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onRight = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    console.log(activeReviewIndex)
    return (
      <div className="app-container">
        <button
          className="btn"
          data-testid="leftArrow"
          onClick={this.onLeft}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            className="arrow"
            alt="left arrow"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          data-testid="rightArrow"
          className="btn"
          onClick={this.onRight}
          type="button"
        >
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}
export default ReviewsCarousel

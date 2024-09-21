
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    /* Initialize the counters*/
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings:0,
      /*events to handle the clicks*/
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },

      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
    };
  }

  render() {
    return (
     <>
        <h1>Text Content Rating</h1>
        <div className='content-rating'>
          <p>
            The app will count the rating by clicking like and dislike button.
          </p>
          <p>Click Like button if you like this app!</p>
          <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLike}>
              Like ({this.state.likes})
            </button>
            <button className='dislike-button' onClick={this.state.handleDislike}>
              Dislike ({this.state.dislikes})
            </button>
          </div>
          <p>Total Ratings: {this.state.totalRatings}</p>
      </div>
     </>
    );
  }
}

export default ContentRating;

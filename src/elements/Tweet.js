import React, {Component} from 'react';
import './Tweet.css';
import moment from 'moment';

export default class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { text, created_at, url, image } = this.props;
    let timeElapsed = moment(created_at).fromNow();
    // console.log(moment(created_at).fromNow())
    return (
        <div className="tweet">
          <a className="tweet-link" href={url} target="_blank" rel="noopener noreferrer">
            <img className="tweet-image" src={image} alt='Profile'/>
            <div className="tweet-text">
              <p className="text">{ text }</p>
              <p className="time-elapsed">{ timeElapsed }</p>
            </div>
            
          </a>
        </div>
    );
  }

}

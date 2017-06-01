import React from 'react';
import api from '../api.js';
import Tweet from '../elements/Tweet.js';
import './Tweets.css';

class Tweets extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            tweets: []
        };
    }
    
    componentDidMount() {
        this.fetchData();
    }
    
    fetchData() {
        api.getTweets(this.props.account, 10)
        .then(tweets => {
            // this.setState({
            //     created_at: tweets.created_at,
            //     text: tweets.text,
            //     url: tweets.url,
            //     image: tweets.image,
            //     id: tweets.id
            // })
            this.setState({
                tweets: tweets
            })
        })
    }
    
    render() {
        return (
            <div className="TweetBoard"> 
                <h2>@{this.props.account}</h2>
                <ul>
                    { this.state.tweets.map(tweet => 
                        <Tweet  
                            text={tweet.text}
                            created_at={tweet.created_at}
                            url={tweet.url}
                            image={tweet.image}
                            key={tweet.id}
                        />
                    )}
                </ul>
            </div>
        );
    }
  
}

export default Tweets;
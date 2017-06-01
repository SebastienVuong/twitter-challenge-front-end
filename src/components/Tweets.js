import React from 'react';
import api from '../api.js';
import Tweet from '../elements/Tweet.js';
import './Tweets.css';

class Tweets extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            created_at: [],
            text: [],
            url: [],
            image: []
        };
    }
    
    componentDidMount() {
        this.fetchData();
    }
    
    fetchData() {
        api.getTweets(this.props.account, 10)
        .then(tweets => {
            console.log('tweets fetched')
            this.setState({
                created_at: tweets.created_at,
                text: tweets.text,
                url: tweets.url,
                image: tweets.image,
                id: tweets.id
            })
        })
    }
    
    render() {
        console.log('rendering')
        return (
            <div className="TweetBoard"> 
                <h2>@{this.props.account}</h2>
                <ul>
                    { this.state.text.map((text,idx) => 
                        <Tweet  
                            text={text}
                            created_at={this.state.created_at[idx]}
                            url={this.state.url[idx]}
                            image={this.state.image[idx]}
                            key={this.state.id[idx]}
                        />
                    )}
                </ul>
            </div>
        );
    }
  
}

export default Tweets;
import React, { Component } from 'react';
import './App.css';

import Tweets from './Tweets.js';

class App extends Component {
    
    render() {
	    return (
	        <div className="App">
	            <h1>Twitter Challenge</h1>
	            <div className="TweetBoards">
                    <Tweets account="decodemtl"/>
                    <Tweets account="reactjs"/>
                    <Tweets account="nodejs"/>
                </div>
            </div>
	    );
    }

}

export default App;
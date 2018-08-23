import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteBox from './QuoteBox.js';
import quotes from './quotes.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = quotes[Math.floor(Math.random() * quotes.length)];

		this.showNewQuote = this.showNewQuote.bind(this);
	}

	showNewQuote() {
		// let quote = quotes[Math.floor(Math.random() * quotes.length)];
		// Get another random quote if the quote is the same as the previous one
		while (true) {
			let randomIndex = Math.floor(Math.random() * quotes.length);
			console.log(quotes[randomIndex]);
			if (quotes[randomIndex].text !== this.state.text) {
				this.setState(quotes[randomIndex]);
				break;
			}
		}		
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Random Quote Machine</h1>
					<div className="App-react-app">
						<img src={logo} className="App-logo" alt="logo" />
						<h2 className="App-intro">React App</h2>
						<img src={logo} className="App-logo" alt="logo" />
					</div>
				</header>
				<QuoteBox quote={this.state} newQuoteHandler={this.showNewQuote} />
			</div>
		);
	}
}

export default App;

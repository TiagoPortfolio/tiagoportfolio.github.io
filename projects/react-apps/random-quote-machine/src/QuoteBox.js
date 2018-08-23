import React from 'react';
import PropTypes from 'prop-types';

const QuoteBox = ({quote, newQuoteHandler}) => {
	return (
		<div id="quote-box">
			<div className="QuoteBox-quote">
				<span id="text">" {quote.text} "</span>
				<span id="author"> - {quote.author}</span>
			</div>
			<hr />
			<div className="QuoteBox-controls">
				<div id="new-quote" role="button" tabIndex="0" onClick={newQuoteHandler}>New Quote</div>
				<a id="tweet-quote" 
					 href="https://twitter.com/share"
					 className="twitter-share-button" data-size="large"
					 data-text={`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`}
					 data-show-count="false">
					 Tweet
				</a>
				<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
			</div>
		</div>
	);
}

QuoteBox.propTypes = {
	quote: PropTypes.object.isRequired,
	newQuoteHandler: PropTypes.func.isRequired
};

export default QuoteBox;

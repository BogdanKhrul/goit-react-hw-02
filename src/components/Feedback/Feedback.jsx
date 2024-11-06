const Feedback = ({ onFeedback, totalFeedback, onReset }) => {
    return (
        <div>
            <button onClick={() => onFeedback('good')}>Good</button>
            <button onClick={() => onFeedback('neutral')}>Neutral</button>
            <button onClick={() => onFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
        </div>
    );
};

export default Feedback;

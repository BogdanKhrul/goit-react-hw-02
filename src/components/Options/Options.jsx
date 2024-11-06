const Options = ({ feedbackCount, positivePercenttage }) => {
    return (
        <div>
            <p>Good: {feedbackCount.good}</p>
            <p>Neutral: {feedbackCount.neutral}</p>
            <p>Bad: {feedbackCount.bad}</p>
            <p>Positive: {positivePercenttage}%</p>
        </div>
    );
};

export default Options;

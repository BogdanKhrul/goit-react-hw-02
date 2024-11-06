import 'normalize.css';
import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

const App = () => {
    const savedFeedbacks = JSON.parse(window.localStorage.getItem('feedbacks'));

    const [feedbackCount, setFeedbackCount] = useState(savedFeedbacks || { good: 0, neutral: 0, bad: 0 });

    useEffect(() => {
        window.localStorage.setItem('feedbacks', JSON.stringify(feedbackCount));
    }, [feedbackCount]);

    const handleFeedback = type => {
        setFeedbackCount(prevState => ({
            ...prevState,
            [type]: prevState[type] + 1,
        }));
    };

    const resetFeedback = () => {
        setFeedbackCount({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    const totalFeedback = feedbackCount.good + feedbackCount.neutral + feedbackCount.bad;
    const positivePercenttage = totalFeedback > 0 ? Math.round((feedbackCount.good / totalFeedback) * 100) : 0;

    return (
        <div>
            <Description />
            <Feedback onFeedback={handleFeedback} totalFeedback={totalFeedback} onReset={resetFeedback} />
            {totalFeedback === 0 ? (
                <Notification />
            ) : (
                <Options
                    feedbackCount={feedbackCount}
                    totalFeedback={totalFeedback}
                    positivePercenttage={positivePercenttage}
                />
            )}
        </div>
    );
};

export default App;

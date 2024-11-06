import 'normalize.css';
import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

function App() {
    const feedbackCounts = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');

        if (savedFeedback !== null) {
            return JSON.parse(savedFeedback);
        }

        return feedbackCounts;
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = feedbackType => {
        setFeedback({
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1,
        });
    };

    const resetFeedback = () => {
        setFeedback(feedbackCounts);
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const hasFeedback = totalFeedback > 0;
    const resetDisabled = totalFeedback < 1;
    const positiveFeedbackPercentage = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    return (
        <>
            <div>
                <Description />
                <Options
                    onUpdateFeedback={updateFeedback}
                    onResetFeedback={resetFeedback}
                    resetDisabled={resetDisabled}
                />
                {!hasFeedback ? (
                    <Notification />
                ) : (
                    <Feedback
                        feedback={feedback}
                        totalFeedbackCounts={totalFeedback}
                        positiveCounter={positiveFeedbackPercentage}
                    />
                )}
            </div>
        </>
    );
}

export default App;

import { useState } from 'react';

import FeedbackOptions from "./FeedbackOptions";
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

 
  const onLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case 'good': setGood(prevState => prevState + 1);
        break;
      case 'neutral': setNeutral(prevState => prevState + 1);
        break;
      case 'bad': setBad(prevState => prevState + 1);
        break;
      default:
        return new Error(`State doesn't exist`);
    }
    
    
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedBackPercentage = () => {
    
    const total = countTotalFeedback();
    const positivePercentage = total ? ((good / total) * 100).toFixed(0) : 0;
    return Number(positivePercentage);
  };

  
  
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedBackPercentage();

    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title='Statistics'>
          {!total ? (<Notification message='There is no feedback' />) :
            (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />)}
        </Section>
      </>
    )
  }







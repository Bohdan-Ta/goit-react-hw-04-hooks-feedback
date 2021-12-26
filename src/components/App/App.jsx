import { useState } from "react";
import Feedback from "../Feedback";
import Section from "../Section";
import Statistics from "../Statistics";
import Notification from "../Notification";

export default function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const incrementFeedback = (nameFeedback) => {
    setState((prevState) => ({
      ...prevState,
      [nameFeedback]: prevState[nameFeedback] + 1,
    }));
  };

  const totalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const percentageGoodFeedback = () => {
    return Math.trunc((state.good / totalFeedback()) * 100);
  };

  const options = Object.keys(state);
  const statistics = Object.entries(state);
  const total = totalFeedback();
  const percent = percentageGoodFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={options} onIncrementFeedback={incrementFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 && (
          <Statistics
            statistics={statistics}
            total={total}
            percentageGoodFeedback={percent}
          />
        )}
        {!total > 0 && (
          <Notification
            message="There is no feedback!       
            Make your choice"
          />
        )}
      </Section>
    </>
  );
}

import { Component } from 'react';
import Feedback from '../Feedback';
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = nameFeedback => {
    this.setState(prevState => ({
      [nameFeedback]: prevState[nameFeedback] + 1,
    }));
  };

  totalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  persantageGoodFeedback = () => {
    const { good } = this.state;
    const sumFeedback = this.totalFeedback();
    return Math.trunc((good / sumFeedback) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.totalFeedback();
    const persantege = this.persantageGoodFeedback();
    const statistics = Object.entries(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={options}
            onIncrementFeedback={this.incrementFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 && (
            <Statistics
              statistics={statistics}
              total={total}
              persantageGoodFeedback={persantege}
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
}

export default App;

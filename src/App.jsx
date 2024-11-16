import { useState, useEffect } from "react";
import "./App.css";
import "modern-normalize";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [voteData, setVoteData] = useState(() => {
    const savedData = localStorage.getItem("voteData");
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("voteData", JSON.stringify(voteData));
  }, [voteData]);

  const totalFeedback = voteData.good + voteData.neutral + voteData.bad;
  const positivePercentage =
    totalFeedback > 0 ? (voteData.good / totalFeedback) * 100 : 0;
  const hasFeedback = totalFeedback > 0;

  const handleFeedbackUpdate = (type) => {
    setVoteData((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const handleReset = () => {
    setVoteData({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        onFeedbackUpdate={handleFeedbackUpdate}
        onReset={handleReset}
      />
      {hasFeedback ? (
        <Feedback
          voteData={voteData}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import { Card, Radio, Button, Space } from "antd";
import Timer from "./Timer";
import ReviewAnswers from "./ReviewAnswers";
import ScoreCard from "./ScoreCard";

export default function Preview({ questions, timer, onBack }) {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submitQuiz = () => {
    let total = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) {
        total++;
      }
    });

    setScore(total);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <ReviewAnswers
          questions={questions}
          answers={answers}
        />

        <ScoreCard
          score={score}
          total={questions.length}
          onBack={onBack}
        />
      </>
    );
  }

  return (
    <>
      <Timer
        seconds={timer}
        onFinish={submitQuiz}
      />

      {questions.map((q, i) => (
        <Card
          key={i}
          title={`Question ${i + 1}`}
          style={{ marginBottom: 16 }}
        >
          <p>
            <strong>{q.question}</strong>
          </p>

          <Radio.Group
            value={answers[i]}
            onChange={(e) =>
              setAnswers({
                ...answers,
                [i]: e.target.value,
              })
            }
          >
            <Space direction="vertical">
              {q.choices.map((choice, j) => (
                <Radio key={j} value={j}>
                  {choice}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </Card>
      ))}

      <Space>
        <Button onClick={onBack}>
          Back
        </Button>

        <Button
          type="primary"
          onClick={submitQuiz}
        >
          Submit Quiz
        </Button>
      </Space>
    </>
  );
}
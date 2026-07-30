import { Card, Tag } from "antd";

export default function ReviewAnswers({ questions, answers }) {
  return (
    <>
      {questions.map((q, i) => {
        const correct = answers[i] === q.correctAnswer;

        return (
          <Card
            key={i}
            title={`Question ${i + 1}`}
            style={{ marginBottom: 16 }}
          >
            <p><strong>{q.question}</strong></p>

            <p>
              Your Answer:
              {" "}
              <Tag color={correct ? "green" : "red"}>
                {answers[i] !== undefined
                  ? q.choices[answers[i]]
                  : "No Answer"}
              </Tag>
            </p>

            <p>
              Correct Answer:
              {" "}
              <Tag color="green">
                {q.choices[q.correctAnswer]}
              </Tag>
            </p>
          </Card>
        );
      })}
    </>
  );
}
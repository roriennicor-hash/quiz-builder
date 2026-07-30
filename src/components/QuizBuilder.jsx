import { useState } from "react";
import { Form, Card, InputNumber, Space, message } from "antd";
import { initialValues } from "../data/initialValues";
import QuestionPanel from "./QuestionPanel";
import ActionButtons from "./ActionButtons";
import Preview from "./Preview";

export default function QuizBuilder() {
  const [form] = Form.useForm();
  const [preview, setPreview] = useState(false);
  const [questions, setQuestions] = useState([]);

  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  const showPreview = () => {
    const totalTime = minutes * 60 + seconds;

    if (totalTime === 0) {
      message.warning("Please set the timer to at least 1 second.");
      return;
    }

    const data = form.getFieldsValue();
    setQuestions(data.questions || []);
    setPreview(true);
  };

  if (preview) {
    return (
      <Preview
        questions={questions}
        timer={minutes * 60 + seconds}
        onBack={() => setPreview(false)}
      />
    );
  }

  return (
    <Form form={form} layout="vertical" initialValues={initialValues}>
      <Card
        size="small"
        style={{
          marginBottom: 20,
          borderRadius: 10,
        }}
      >
        <Space size="large">
          <strong>⏰ Quiz Timer</strong>

          <div>
            <label>Minutes</label>
            <br />
            <InputNumber
              min={0}
              max={30}
              value={minutes}
              onChange={(value) => setMinutes(value ?? 0)}
            />
          </div>

          <div>
            <label>Seconds</label>
            <br />
            <InputNumber
              min={0}
              max={59}
              value={seconds}
              onChange={(value) => setSeconds(value ?? 0)}
            />
          </div>
        </Space>
      </Card>

      <QuestionPanel form={form} />
      <ActionButtons onPreview={showPreview} />
    </Form>
  );
}
import { Form, Radio, Space } from "antd";

export default function CorrectAnswer({ name }) {
  return (
    <Form.Item
      label="Correct Answer"
      name={[name, "correctAnswer"]}
      rules={[
        {
          required: true,
          message: "Select the correct answer",
        },
      ]}
    >
      <Radio.Group>
        <Space direction="vertical">
          <Radio value={0}>Choice 1</Radio>
          <Radio value={1}>Choice 2</Radio>
          <Radio value={2}>Choice 3</Radio>
          <Radio value={3}>Choice 4</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>
  );
}
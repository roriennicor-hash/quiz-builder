import { Form, Button, Space } from "antd";
import { PlusOutlined, EyeOutlined } from "@ant-design/icons";

export default function ActionButtons({ onPreview }) {
  return (
    <Form.List name="questions">
      {(_, { add }) => (
        <Space style={{ marginTop: 20 }}>
          <Button
            type="dashed"
            icon={<PlusOutlined />}
            onClick={() =>
              add({
                question: "",
                choices: ["", "", "", ""],
                correctAnswer: 0,
              })
            }
          >
            Add Question
          </Button>

          <Button
            type="primary"
            icon={<EyeOutlined />}
            onClick={onPreview}
          >
            Preview Quiz
          </Button>
        </Space>
      )}
    </Form.List>
  );
}
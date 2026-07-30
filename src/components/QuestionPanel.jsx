import { Form, Collapse, Input, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import ChoiceList from "./ChoiceList";
import CorrectAnswer from "./CorrectAnswer";

export default function QuestionPanel() {
  return (
    <Form.List name="questions">
      {(fields, { remove }) => (
        <Collapse accordion>
          {fields.map(({ key, name }) => (
            <Collapse.Panel header={`Question ${name + 1}`} key={key}>
              <Form.Item
                label="Question"
                name={[name, "question"]}
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter question" />
              </Form.Item>

              <ChoiceList name={name} />
              <CorrectAnswer name={name} />

              <Button danger icon={<DeleteOutlined />} onClick={() => remove(name)}>
                Remove Question
              </Button>
            </Collapse.Panel>
          ))}
        </Collapse>
      )}
    </Form.List>
  );
}
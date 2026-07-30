import { Form, Input, Typography } from "antd";

const { Title } = Typography;

export default function ChoiceList({ name }) {
  return (
    <Form.List name={[name, "choices"]}>
      {(fields) => (
        <>
          <Title level={5}>Choices</Title>

          {fields.map(({ key, name }) => (
            <Form.Item
              key={key}
              label={`Choice ${name + 1}`}
              name={name}
              rules={[
                {
                  required: true,
                  message: "Please enter a choice",
                },
              ]}
            >
              <Input placeholder={`Choice ${name + 1}`} />
            </Form.Item>
          ))}
        </>
      )}
    </Form.List>
  );
}
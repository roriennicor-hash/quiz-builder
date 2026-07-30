import { Card, Progress, Typography, Button, Space } from "antd";

const { Title, Text } = Typography;

export default function ScoreCard({
  score,
  total,
  onBack,
}) {
  const percent = Math.round((score / total) * 100);

  let message = "";
  let color = "";

  if (percent === 100) {
    message = "🏆 Perfect!";
    color = "#52c41a";
  } else if (percent >= 80) {
    message = "🥇 Excellent!";
    color = "#1677ff";
  } else if (percent >= 60) {
    message = "🥈 Good Job!";
    color = "#faad14";
  } else {
    message = "📚 Keep Practicing!";
    color = "#ff4d4f";
  }

  return (
    <Card style={{ textAlign: "center" }}>
      <Title>{message}</Title>

      <Progress
        type="circle"
        percent={percent}
        strokeColor={color}
      />

      <Title level={2}>
        {score} / {total}
      </Title>

      <Text>
        You answered {score} out of {total} correctly.
      </Text>

      <br />
      <br />

      <Space>
        <Button
          type="primary"
          onClick={onBack}
        >
          Back to Builder
        </Button>
      </Space>
    </Card>
  );
}
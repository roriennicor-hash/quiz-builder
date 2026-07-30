import { Layout, Typography } from "antd";
import QuizBuilder from "./components/QuizBuilder";
import classroom from "./assets/classroom.jpg";

const { Header, Content } = Layout;
const { Title } = Typography;

export default function App() {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${classroom})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header
        style={{
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        }}
      >
        <Title level={2} style={{ color: "#fff", margin: 0 }}>
          📚 Quiz Builder
        </Title>
      </Header>

      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "900px",
            background: "rgba(255,255,255,0.92)",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          }}
        >
          <QuizBuilder />
        </div>
      </Content>
    </Layout>
  );
}
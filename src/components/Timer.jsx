import { useEffect, useState } from "react";

export default function Timer({ seconds, onFinish }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  // Reset timer whenever a new quiz starts
  useEffect(() => {
    setTimeLeft(seconds);
  }, [seconds]);

  // Countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      onFinish();
      return;
    }

    const timeout = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timeLeft, onFinish]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: 20,
      }}
    >
      <h2
        style={{
          fontSize: 34,
          fontWeight: "bold",
          color: timeLeft <= 10 ? "#ff4d4f" : "#1677ff",
          transition: "0.3s",
        }}
      >
        ⏰ {String(mins).padStart(2, "0")}:
        {String(secs).padStart(2, "0")}
      </h2>
    </div>
  );
}
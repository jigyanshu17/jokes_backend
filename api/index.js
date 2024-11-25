import express from "express";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "https://jokes-frontend-ten.vercel.app",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
      category: "Science",
      createdAt: new Date(),
      sentCount: 0,
    },
    {
      id: 2,
      setup: "What did the grape say when it got stepped on?",
      punchline: "Nothing, it just let out a little wine!",
      category: "Food",
      createdAt: new Date(),
      sentCount: 0,
    },
    {
      id: 3,
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
      category: "Agriculture",
      createdAt: new Date(),
      sentCount: 0,
    },
    {
      id: 4,
      setup: "What do you call a bear with no teeth?",
      punchline: "A gummy bear!",
      category: "Animals",
      createdAt: new Date(),
      sentCount: 0,
    },
    {
      id: 5,
      setup: "Why did the math book look so sad?",
      punchline: "Because it had too many problems!",
      category: "Education",
      createdAt: new Date(),
      sentCount: 0,
    },
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});

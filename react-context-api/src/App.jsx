// App.jsx
import { useState } from "react";
import PostsPage from "./pages/PostsPage";
import { PostsContext } from "./context/PostsContext"; 

function App() {
  const [posts] = useState([
    {
      id: 1,
      title: "React Basis",
      content: "React apps are made out of components...",
      category: "FrontEnd",
    },
    {
      id: 2,
      title: "What is Express.js?",
      content: "Express is a minimal and flexible Node.js...",
      category: "Backend",
    },
    {
      id: 3,
      title: "Run JavaScript Everywhere",
      content: "Node.js® is a free, open-source...",
      category: "Backend",
    },
    {
      id: 4,
      title: "Build fast, responsive sites with Bootstrap",
      content: "Powerful, extensible frontend toolkit...",
      category: "Frontend",
    },
  ]);

  return (
    <PostsContext.Provider value={posts}>
      <PostsPage />
    </PostsContext.Provider>
  );
}

export default App;

import "./App.css";

import { useEffect, useState } from "react";

import Accordion from "./components/Accordion/Accordion";
import { Post } from "./utils/types";

function App() {
  const [items, setItems] = useState<Post[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const newItems: Post[] = await res.json();

      setItems((prevItems: Post[]) => [...prevItems, ...newItems.slice(0, 5)]);
    };

    getData();
  }, []);

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;

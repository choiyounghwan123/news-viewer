import axios from "axios";
import { useCallback, useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((catagory) => {
    setCategory(catagory);
    console.log(catagory);
  }, []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category}></NewsList>;
    </>
  );
}

export default App;

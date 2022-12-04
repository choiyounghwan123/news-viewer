import axios from "axios";
import { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";
import NewsPage from "./pages/NewsPage";

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((catagory) => {
    setCategory(catagory);
    console.log(catagory);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/:category" element={<NewsPage></NewsPage>}></Route>
        <Route path="/" element={<NewsPage></NewsPage>}></Route>
      </Routes>
    </>
  );
}

export default App;

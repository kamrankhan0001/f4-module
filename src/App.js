import { useEffect } from "react";
import { fetchPosts } from "./redux/actions/imageActions";
import { useSelector, useDispatch } from "react-redux";

import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/Homepage";
import PostDetails from "./components/PostDetails";
import "./App.css";

const App = () => {
  let loading = useSelector((state) => state.loading);
  let data = useSelector((state) => state.data);
  let error = useSelector((state) => state.error);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return <h2>Page is loading...</h2>;
  }

  if (error) {
    return <div>Error fetching data, here's what went wrong {error}</div>;
  }

  return (
    <>
      <div className="header">
        <div className="h"><h1>Social Media App</h1></div>
       
      </div>
      <div className="bod"></div>

      <Routes>
        <Route path="/" element={<HomePage data={data}/>}></Route>
        <Route path="/item/:id" element={<PostDetails data={data}/>}></Route>
      </Routes>

      
    </>
  );
};

export default App;



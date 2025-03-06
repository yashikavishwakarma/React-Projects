import "./App.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import BlogPage from "./pages/BlogPage";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";




export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  // useSearchParams - accessing current data
  const[searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();  //access current location

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;//?? -- means ya(or) //bydefault page1 show

    if(location.pathname.includes("tags")){
      // iska matlab tag wala page show karna hai 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      // last wale tag par split karna -- written above// 
      fetchBlogPosts(Number(page),tag);
    }
    // calling basis on category
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname,location.search]); //jab pathname change ho ya page number change ho

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* :blogId" dynamic paramerter */}
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
  );
}




// uselocation hook - access data at that current location

import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import './App.css';
import { Navonetouch } from './components/Navonetouch';
import NewsContent from './components/NewsContent/NewsContent';

import Footer from  './components/Footer/Footer';

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(12);
  console.log(process.env);
  const newsApi = async () => {
    try{
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=e3e54763d6b8448ab4414e9f16fc7de4&category=${category}&pageSize=${loadmore}`);
      console.log(news)
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    }
    catch(error)
    {
      console.log(error);
    }
  };
  console.log(newsArray);
  useEffect(() => {
   newsApi();
    // eslint-disable-next-line
  }, [newsResults,category,loadmore]);
  
  return (
    <div className="App">
      <Navonetouch setCategory={setCategory}></Navonetouch>
      <NewsContent setLoadmore = {setLoadmore} newsArray={newsArray} newsResults={newsResults} loadmore={loadmore}></NewsContent>
      <Footer/>
    </div>
  );
}

export default App;

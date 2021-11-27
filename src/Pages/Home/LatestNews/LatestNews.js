import React, { useEffect, useState } from 'react';
import News from '../News/News';

const LatestNews = () => {
    const [news,setNews]=useState([]);
    useEffect(()=>{
        fetch('/news.json')
        .then(res=>res.json())
        .then(data=>setNews(data))

    },[])
    return (
        <div className="container mb-5">
               <h1 className="text-center  fitness-title rounded-pill py-3 my-5">LATEST NEWS>></h1>
              <div className="row gy-3">
              {
                   news?.map(nw=><News key={nw.id} nw={nw}> 
                   </News>)
               }
              </div>
            </div>
    );
};

export default LatestNews;


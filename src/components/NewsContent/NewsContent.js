import React from 'react'
import Container from '@material-ui/core/Container';
import './NewsContent.css'
import NewsCard from '../NewsCard/NewsCard';
const NewsContent = ({newsArray, newsResults,loadmore, setLoadmore}) => {
  return (
  <Container maxWidth="md">
    <div className="content">
      <div className="downloadMessage">
        <span className="downloadText">
          For the best experience android app will out soon
        </span>
        <img 
        alt="app store"
        height="80%"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvBIDmY9kcmDEnfc2keGJ9s4Ae8cYGdtyMoeytLJ0QRYzbLfBOnP6ZpEt9d9S6NZ0Yg&usqp=CAU"
        />
          
       
       
      </div>
    
      {
        newsArray.map((newsItem) =>(
          <NewsCard newsItem={newsItem} key={newsItem.title}/>

        ))
      }
      {
        loadmore <=newsResults && (
          <>
    <hr />
    <div className='button'>
    <button className='loadmore' onClick={()=> setLoadmore(loadmore + 15)}>
      Load More
    </button>
    </div>
    
           </>
        )
      }
      </div>  
  </Container>
  );
  
};

export default NewsContent;
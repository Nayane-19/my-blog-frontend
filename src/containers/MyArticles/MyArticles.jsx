import React, { useEffect, useState } from 'react';
import './MyArticles.scss'
import { useBlogContext } from '../../contexts/BlogContext';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import { useParams } from 'react-router-dom';



function MyArticles() {
    const {articles} = useBlogContext()
    const userId = useParams();
    const [myArticles, setMyArticles] = useState([])


    useEffect(() => {
        if(articles)
        {
            articles?.sort((a,b) => b.id - a.id)
            setMyArticles(articles?.filter((b) => b.attributes?.user?.data?.id == userId.id))
        }
    }, [articles])

  return (
    <>
    <Navigation/>
     <div className='Articles container'>
        {myArticles.length > 0 ?
        <>
        <h3 className='title'>Seus artigos publicados</h3>
        <div className="flex cards">
            {myArticles.map(article => {
                return(
                    <div key={article.id} className='flex'>
                        <Card article={article.attributes} id={article.id}/>
                    </div>
                )
            })}
        </div>
        </>
        :
        <h3 className='title'>Você ainda não tem artigos publicados</h3>
    }
    </div>
    </>   
  );
}

export default MyArticles;
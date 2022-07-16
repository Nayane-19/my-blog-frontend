import React, { useEffect } from 'react';
import './Articles.scss'
import { useBlogContext } from '../../contexts/BlogContext';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';



function Articles() {
    const {articles} = useBlogContext()

    useEffect(() => {
        if(articles)
        articles?.sort((a,b) => b.id - a.id)
    }, [articles])

  return (
    <>
    <Navigation/>
     <div className='Articles container'>
        {articles &&
        <>
        <h3 className='title'>Artigos publicados</h3>
        <div className="flex cards">
            {articles.map(article => {
                return(
                    <div key={article.id} className='flex'>
                        <Card article={article.attributes} id={article.id}/>
                    </div>
                )
            })}
        </div>
        </>
        }
    </div>
    </>   
  );
}

export default Articles;
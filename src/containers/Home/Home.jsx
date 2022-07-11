import React, { useEffect } from 'react';
import './Home.scss'
import { useBlogContext } from '../../contexts/BlogContext';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import Ilustration from '../../assets/img/ilustration.png'
import ButtonLink from '../../components/ButtonLink/ButtonLink';



function Home() {
    const {articles} = useBlogContext()

    useEffect(() => {
        if(articles)
        articles?.sort((a,b) => b.id - a.id)
    }, [articles])

  return (
    <div className='Home container'>
        <div className="header flex">
            <img src={Ilustration} alt="" className='ilustration'/>
            <div className="column box-right">
                <Navigation/>
                <div className="column info">
                    <h1>
                        Venha aprender e compartilhar conhecimento!
                    </h1>
                    <p>
                        De dev para dev tem o intuito de aproximar o máximos de desenvolvedores póssiveis por meio de artigos.
                        Onde todos poderão aprender uns com os outros
                    </p>
                    <div className="flex btn-header">
                        <ButtonLink link='/' full={false} >
                            Entrar
                        </ButtonLink>
                        <ButtonLink link='/' full={true}>
                            Seja um autor
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </div>
        {articles &&
        <div className="flex cards">
            {articles.map(article => {
                return(
                    <div key={article.id} className='flex'>
                        <Card article={article.attributes}/>
                    </div>
                )
            })}
        </div>
        }
    </div>
  );
}

export default Home;
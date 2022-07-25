import React, { useEffect } from 'react';
import './Home.scss'
import { useBlogContext } from '../../contexts/BlogContext';
import useWindowDimensions from "../../contexts/WindowDimensions";
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import Ilustration from '../../assets/img/ilustration.png'
import ButtonLink from '../../components/ButtonLink/ButtonLink';



function Home() {
    const {articles, user} = useBlogContext()
    const {width} = useWindowDimensions();

    useEffect(() => {
        if(articles)
        articles?.sort((a,b) => b.id - a.id)
    }, [articles])

  return (
    <>
    {width < 1201 &&
    <Navigation/>
    }
    <div className='Home container'>
        {width > 1201 ?
        <div className="header flex">
            <img src={Ilustration} alt="" className='ilustration'/>
            <div className="column box-right">
                <Navigation/>
                <div className="column info">
                    <h1>
                        {user ? 'Seja bem-vindo(a) a nossa comunidade!' : 'Venha fazer parte dessa comunidade!'}
                    </h1>
                    <p>
                        De dev para dev tem o intuito de aproximar o máximos de desenvolvedores póssiveis por meio de artigos.
                        Onde todos poderão aprender uns com os outros compartilhando conhecimento.
                    </p>
                    {user ?
                    <div className="flex btn-header">
                        <ButtonLink link={`/meus-artigos/${user.id}`} full={false} >
                            Ver seus artigos
                        </ButtonLink>
                        <ButtonLink link='/escrever-artigo' full={true}>
                           Escrever um artigo
                        </ButtonLink>
                     </div>
                     :
                     <div className="flex btn-header">
                        <ButtonLink link='/login' full={false} >
                            Entrar
                        </ButtonLink>
                        <ButtonLink link='/cadastro' full={true}>
                            Seja um autor
                        </ButtonLink>
                    </div>
                    }
                </div>
            </div>
        </div>
        :
        <div className="header flex">
            <div className="column box-right">
                <div className="column info">
                    <h1>
                        {user ? 'Seja bem-vindo(a) a nossa comunidade!' : 'Venha fazer parte dessa comunidade!'}
                    </h1>
                    <p>
                        De dev para dev tem o intuito de aproximar o máximos de desenvolvedores póssiveis por meio de artigos.
                        Onde todos poderão aprender uns com os outros compartilhando conhecimento.
                    </p>
                </div>
            </div>
            {user ?
                <div className="flex btn-header column">
                    <ButtonLink link={`/meus-artigos/${user.id}`} full={false} >
                        Ver seus artigos
                    </ButtonLink>
                    <ButtonLink link='/escrever-artigo' full={true}>
                       Escrever um artigo
                    </ButtonLink>
                 </div>
                 :
                 <div className="flex btn-header column">
                    <ButtonLink link='/login' full={false} >
                        Entrar
                    </ButtonLink>
                    <ButtonLink link='/cadastro' full={true}>
                        Seja um autor
                    </ButtonLink>
                </div>
                }
        </div>
        }
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

export default Home;
import React from 'react';
import './Card.scss'
import {ReactComponent as Writer} from '../../assets/svg/poem.svg';
import {ReactComponent as ArrowRight} from '../../assets/svg/arrow-right.svg';
import {ReactComponent as Calendar} from '../../assets/svg/calendar.svg';
import {ReactComponent as Trash} from '../../assets/svg/trash-2.svg';
import ButtonLink from '../ButtonLink/ButtonLink';
import { deleteArticle } from '../../blogApi/apiMethod';
import { useBlogContext } from '../../contexts/BlogContext';



function Card({article, authenticated, id}) {
    const {setArticlesWriter} = useBlogContext();
    
    const setDeleteArticle = async (id) =>{
        await deleteArticle(id)
        setArticlesWriter();
    }

  return (
    <div className='Card'>
        {article &&
        <div className="column box-card">
            <div className="column">
            <div className="title column">
                <h5 className='flex'>
                    {article.title}
                </h5>
                <span className='flex'>
                    <Calendar />
                    {article.date_publish}
                </span>
            </div>
            <div className="description">
                <p>
                    {article.description}
                </p>
            </div>
        </div>
        <div className="flex box-bottom">
            <span className='flex'>
                <Writer/>
                {article.author}
            </span>
            <div className="flex btns-user-article">
            <ButtonLink className='flex' full={true} link={`/artigo/${article.slug}`}>
                Ler mais
                <ArrowRight/>
            </ButtonLink>
            {authenticated &&
                <ButtonLink className='flex delete' full={true} onClick={() => setDeleteArticle(id)}>
                    Deletar artigo
                    <Trash/>
                </ButtonLink>
                }
            </div>
        </div>
        </div>
        }
    </div>
  );
}

export default Card;
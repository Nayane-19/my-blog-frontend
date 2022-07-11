import React from 'react';
import './Card.scss'
import {ReactComponent as Writer} from '../../assets/svg/poem.svg';
import {ReactComponent as Check} from '../../assets/svg/check-circle-400.svg';
import ImageUrl from '../ImageUrl/ImageUrl';



function Card({article}) {

  return (
    <div className='Card'>
        {article &&
        <div className="flex box-card">
             <div className="image flex">
                <ImageUrl image={article.picture.data.attributes.url} />
            </div>
            <div className="column">
            <div className="title column">
                <h5 className='flex'>
                    {article.title}
                </h5>
                <span className='flex'>
                    <Writer/>
                    {article.author}
                </span>
                <span className='flex'>
                    <Check />
                    {article.date_publish}
                </span>
            </div>
            <div className="description">
                <p>
                    {article.description}
                </p>
            </div>
        </div>
        </div>
        }
    </div>
  );
}

export default Card;
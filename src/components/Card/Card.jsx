import React, { useEffect, useState } from 'react';
import './Card.scss'
import {ReactComponent as Writer} from '../../assets/svg/poem.svg';
import {ReactComponent as ArrowRight} from '../../assets/svg/arrow-right.svg';
import {ReactComponent as Calendar} from '../../assets/svg/calendar.svg';
import ButtonLink from '../ButtonLink/ButtonLink';



function Card({article, id}) {   

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
            <ButtonLink className='flex' full={true} link="/">
                Ler mais
                <ArrowRight/>
            </ButtonLink>
        </div>
        </div>
        }
    </div>
  );
}

export default Card;
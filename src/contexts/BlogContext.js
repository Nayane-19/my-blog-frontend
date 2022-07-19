import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../lib/api';
    
    // create Blog Context
    const BlogContext = createContext();

    export const useBlogContext = () => {
        return useContext(BlogContext);
    };

    // create Pet Provider
    export const BlogProvider = ({children}) => {
        const [articles, setArticles] = useState("");
        const [ user, setUser] = useState('')

        const setUserInfo = () => {
          if(localStorage.getItem('userdata')){
            setUser(JSON.parse(localStorage.getItem('userdata')))            
          }else {
            setUser('')
          }
        }

        const setArticlesWriter = async () => {
            const response = await http.get("/api/articles?populate=*");
            const responseArr = Object.values(response.data.data);
            setArticles(responseArr);
        }


        useEffect(() => {
          if(localStorage.getItem('userdata')){
            setUser(JSON.parse(localStorage.getItem('userdata')))            
          }
        }, [])
    
    
        useEffect(()=>{
            const readAllArticles = async () => {
                const response = await http.get("/api/articles?populate=*");
                const responseArr = Object.values(response.data.data);
                setArticles(responseArr);
            };
            return readAllArticles;
        }, []);
    
        const value = {
            articles,
            user,
            setUserInfo,
            setArticlesWriter
        };
        return(
          <BlogContext.Provider value={value}>
            {children}
          </BlogContext.Provider>
        )
      };
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

        // const [nav_value, set_nav_value] = useState("PetList");
        // const [petId, setPetId] = useState("");
        
        // // add new pet
        // const createNewPet = async (data) => {
        //     await http.post("/api/pets", data);
        // };
        // // update a pet entry
        // const updatePet = async (petId, data) => {
        //     await http.put(`/api/pets/${petId}`, data);
        // };
        // // delete a pet entry
        // const deletePet = async (petId) => {
        //     await http.delete(`/api/pets/${petId}`);
        // };
        // // change navigation value
        // const changeNavValue = (value) => {
        //     set_nav_value(value);
        // };
        // // get pet id value
        // const getPetId = (id) => {
        //     setPetId(id);
        // };
    
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
        };
        return(
          <BlogContext.Provider value={value}>
            {children}
          </BlogContext.Provider>
        )
      };
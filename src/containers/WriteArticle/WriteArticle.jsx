import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Navigation from "../../components/Navigation/Navigation";
import "./WriteArticle.scss"
import Writer from '../../assets/img/writer.png';
import { ReactComponent as Plus } from "../../assets/svg/plus.svg";
import { useBlogContext } from "../../contexts/BlogContext";
import { createArticle, uploadImage } from "../../blogApi/apiMethod";
import alertify from "alertifyjs";

function WriteArticle() {
  const {user, setArticlesWriter} = useBlogContext();
  const [articleData, setArticleData] = useState({});
  const [imageFile, setImage] = useState([]); 

  const handleChange = (e) => {
    setArticleData({...articleData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = {
      ...articleData,
      author: user.username,
      date_publish: new Date(),
      slug: articleData.title.toLowerCase().replace(' ', '-'),
      user: user.id
    }

    const formData = new FormData()
    formData.append('files', imageFile[0])

  
    await uploadImage(formData).then(r => {
      console.log(r);
        if(r.status == 200){
          console.log(r.data);
          const responseArr = r.data;
          data = {...data, picture: responseArr[0].id}
      }else {
        alertify.notify('Não foi possível carregar a foto,verifique o formato e tente novamente','error',5, null);
        setImage([])
        return
      }
      })
      

    await createArticle(data);
    setArticlesWriter();
    setImage([])

    e.target.reset();

  }


  return (
    <>
      <Navigation />
      <div className="WriteArticle container">
        <div className="flex box-write">
          <img src={Writer} alt="" />
        <form action="" className="column" onSubmit={handleSubmit}>
          <p>Escreva seu artigo aqui</p>
          <Input placeholder='Titulo do artigo' onChange={handleChange} id='title'/>
          <div className="image-upload">
            <label htmlFor="custom-file" className="flex custom-file-label">
                  <Plus/>
                  {imageFile.length > 0 ? imageFile[0].name : 'Escolha uma foto para seu artigo'}
            </label>
              <input type="file" id="custom-file" className="custom-file-input" onChange={(e) => setImage(e.target.files)} name='picture'/>
          </div>
          <textarea name="description" id="" cols="30" rows="10" placeholder="Escreva seu artigo aqui" onChange={handleChange}></textarea>
          <button type='submit'>Publicar Artigo</button>
        </form>
        </div>
      </div>
    </>
  );
}

export default WriteArticle;

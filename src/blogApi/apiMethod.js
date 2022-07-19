import alertify from 'alertifyjs';
import http from '../lib/api';

//post newsletter
export const setNewsletter = async (data) => {
    try {
        await http.post('/api/lead-newsletters', {data: data})
        return {success: true};
    } catch (error) {
        alertify.notify('Algo de errado aconteceu, tente novamente','error',5, null);
        return {success: false};
    }
}

//register users
export const register = async (data) => {
   try {
    const response = await http.post('/api/auth/local/register', data);
    if(response.status == 200){
        const responseArr = response.data;
        localStorage.setItem('userauth', responseArr.jwt)
        localStorage.setItem('userdata', JSON.stringify(responseArr.user))
        return {success: true};
    }
   } catch (error) {
        alertify.notify('Algo de errado aconteceu, tente novamente','error',5, null);
        return {success: false};
   }
}

//login
export const login = async (data) => {
    try {
        const response = await http.post('/api/auth/local', data)
        if(response.status == 200){
            const responseArr = response.data;
            localStorage.setItem('userauth', responseArr.jwt)
            localStorage.setItem('userdata', JSON.stringify(responseArr.user))
        }
        return {success: true};
    } catch (error) {
        alertify.notify('Algo de errado aconteceu, tente novamente','error',5, null);
        return {success: false};
    }
    
}

//logout
export const logout = () => {
    localStorage.setItem('userauth', '')
    localStorage.setItem('userdata', '')
  }


// create article 
export const createArticle = async (data) => {
    try {
        await http.post('/api/articles', {data: data})
        alertify.notify('Artigo publicado com sucesso','success',5, null);
    } catch (error) {
        alertify.notify('Algo de errado aconteceu, tente novamente','error',5, null);
        return {success: false};
    }
}

// upload image
export const uploadImage = async (data) => {
    const response = await http.post('/api/upload', data)
    return response
}
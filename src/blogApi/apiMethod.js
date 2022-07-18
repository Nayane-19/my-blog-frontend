import http from '../lib/api';

//post newsletter
export const setNewsletter = async (data) => {
    await http.post('/api/lead-newsletters', {data: data})
}

//register users
export const register = async (data) => {
    const response = await http.post('/api/auth/local/register', data);
    if(response.status == 200){
        const responseArr = response.data;
        localStorage.setItem('userauth', responseArr.jwt)
        localStorage.setItem('userdata', JSON.stringify(responseArr.user))
    }
}

//login
export const login = async (data) => {
    const response = await http.post('/api/auth/local', data)
    if(response.status == 200){
        const responseArr = response.data;
        localStorage.setItem('userauth', responseArr.jwt)
        localStorage.setItem('userdata', JSON.stringify(responseArr.user))
    }
}

//logout
export const logout = () => {
    localStorage.setItem('userauth', '')
    localStorage.setItem('userdata', '')
  }


// create article 
export const createArticle = async (data) => {
    await http.post('/api/articles', {data: data})
}

// upload image
export const uploadImage = async (data) => {
    const response = await http.post('/api/upload', data)
    return response
}
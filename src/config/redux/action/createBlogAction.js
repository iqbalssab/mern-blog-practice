import  Axios  from "axios"

export const setForm = (formType, formValue) => {
    return {type: 'SET_FORM_DATA', formType, formValue}

}

export const setImgPreview = (payload) => {
    return {type: 'SET_IMG_PREVIEW', payload}
}

export const postToAPI = (form) => {
    let data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', form.image);


    Axios.post('http://localhost:4000/v1/blog/post', data)
    .then(res => console.log('post success... ',res))
    .catch(err => console.log('Error Message: ',err))
}

export const updateToAPI = (form, id) => {
    let data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', form.image);


    Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data)
    .then(res => console.log('Update success... ',res))
    .catch(err => console.log('Error Message: ',err))
}
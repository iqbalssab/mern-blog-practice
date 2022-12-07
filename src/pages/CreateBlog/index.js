import React, { useEffect, useState } from 'react'
import {Button, Gap, Input, Link, TextArea, Upload} from '../../components'
import './createBlog.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action'
import Axios from 'axios'

const CreateBlog = () => {
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()

  const [isUpdate, setIsUpdate] = useState(false)
  const {form, imgPreview} = useSelector(state => state.createBlogReducer)
  const {title, body} = form
  
  useEffect(() => {
      console.log('Params: ', params);
      if(params.id){
        setIsUpdate(true)
        Axios.get(`http://localhost:4000/v1/blog/post/${params.id}`)
        .then(res => {
          const data = res.data.data
          console.log('Result: ',data);
          dispatch(setForm('title', data.title)) 
          dispatch(setForm('body', data.body)) 
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`))
        })
        .catch(err => {
          console.log('Erro: ',err);
        })
      }
      if(!isUpdate){
        dispatch(setForm('title', ''))
        dispatch(setForm('body', ''))
        dispatch(setImgPreview(``))
      }
  },[params, dispatch, isUpdate])

  const onSubmit = () => {
      const id = params.id
      if(isUpdate){
        console.log('Update data');
        updateToAPI(form, id)
      } else{
        console.log('Create data');
        postToAPI(form)

      }
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0]
    dispatch(setForm('image',file)) 
    dispatch(setImgPreview(URL.createObjectURL(file))) 
  }

  return (
    <div className='blog-post'>
        <Link title='kembali' onClick={() => navigate('/') } />
        <p className='title'>{isUpdate ? 'Edit Blog' : 'Create New'} Post</p>
        <Input label='Judul Post' 
               placeholder='Tulis judul blog kamu' 
               value={title} 
               onChange={(e) => dispatch(setForm('title',e.target.value)) } 
               />
        <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
        <TextArea placeholder='tuliskan isi blog kamu...' value={body} onChange={(e) => dispatch(setForm('body',e.target.value)) } />
        <Gap height={20} />
        <div className='button-action'>
        <Button title={isUpdate ? 'Update' : 'Post'} onClick={onSubmit} />
        </div>
    </div>    
  )
}

export default CreateBlog
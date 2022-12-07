import React, { useEffect, useState } from 'react'
import { Link } from '../../components'
import './detailBlog.scss'
import { useNavigate, useParams} from 'react-router-dom'
import Axios from 'axios'

  const DetailBlog = () => {
    const navigate = useNavigate()
    const params = useParams()

    const[data, setData] = useState({})

    useEffect(() => {
      Axios.get(`http://localhost:4000/v1/blog/post/${params.id}`)
           .then(res => {
            setData(res.data.data)
           })
           .catch(err => {
            console.log('Error: ',err);
           })

    }, [params])
    if(data.author){
      return (
        <div className='detail-blog-wrapper'>
        <img className='img-cover' src={`http://localhost:4000/${data.image}`} alt='gambar' />
          <p className='blog-title'>{data.title}</p>
          <p className='blog-author'>{data.author.name} - {data.createdAt} </p>
          <p className='blog-body'>{data.body} </p>
          <Link title='Kembali ke Home' onClick={() => navigate('/') } />
      </div>
      )
    }
    return <p>Loading data...</p>
    
  }
 

export default DetailBlog
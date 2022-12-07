import React, { useEffect, useState } from 'react'
import {BlogItem, Button, Gap} from '../../components'
import './home.scss'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { setDataBlog } from '../../config/redux/action'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import  Axios  from 'axios'

const Home = () => {
  const [counter, setCounter] = useState(1)
  const {dataBlog, page} = useSelector(state => state.homeReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDataBlog(counter))
    
  },[dispatch, counter])

  const navigate = useNavigate()

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1)
    
  }

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
    
  }

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Menghapus Post Blog',
      message: 'Yakin untuk menghapus?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
              console.log('Berhasil Delete!', res.data);
              dispatch(setDataBlog(counter))
            })
            .catch(err => {
              console.log('Gagal Delete ', err);
            })
          }
        },
        {
          label: 'Tidak',
          onClick: () => console.log('Kaga Hapuuuuuuuuusss')
        }
      ]
    });
  }

  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title='Create Blog' onClick={() => navigate('/create-blog')} />
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
        {dataBlog.map(blog => {
          return <BlogItem 
                 key={blog._id} 
                 image={`http://localhost:4000/${blog.image}`} 
                 title={blog.title} 
                 body={blog.body}
                 name={blog.author.name}
                 date={blog.createdAt}
                 _id={blog._id}
                 onDelete={confirmDelete}
                 />
        })}
        
      </div>
      <div className='pagination'>
       <Button title='previous' onClick={previous} />
       <Gap width={20} />
       <p className='text-page'>{page.currentPage} / {page.totalPage}</p>
       <Gap width={20} />
       <Button title='next' onClick={next} />
      </div>
       <Gap height={10} />
    </div>
  )
}

export default Home
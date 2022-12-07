import React from 'react'
import { Button, Gap } from '../../atoms'
import './blogItem.scss'
import { useNavigate } from 'react-router-dom'

const BlogItem = (props) => {
  const navigate = useNavigate()
  const {image, title, body, date, name, _id, onDelete} = props
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={image} alt='post' />
        <div className='content-detail'>
        <div>
        <p className='title'>{title}</p>
          <div className='title-wrapper'>
            <div className='edit-wrapper'>
              <p className='edit' onClick={() => navigate(`/create-blog/${_id}`)}>Edit</p> | <p className='delete' onClick={() => onDelete(_id)}>Delete</p>
            </div>
          </div>
        </div>
        <p className='author'>{name} - {date}</p>
        <p className='body'>{body}</p>
        <Gap height={10} />
        <Button title='View Detail' onClick={() => navigate(`/detail-blog/${_id}`) } />

        </div>
    </div>
  )
}

export default BlogItem
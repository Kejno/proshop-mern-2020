import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  const { id, image, name, rating, numReviews, price } = product
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${id}`}>
        <Card.Img src={image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${id}`}>
          <Card.Title as='div'>
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={rating} text={`${numReviews} reviews`} color='red' />
        </Card.Text>

        <Card.Text as='h3'>${price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product

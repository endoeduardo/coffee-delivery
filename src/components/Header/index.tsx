import { MapPin, ShoppingCart  } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Aside, Container } from './styles'

export function Header() {
  return (
    <Container>
        <img src='/logo.svg' alt='Coffee Delivery' />
      <Aside>
        <div>
          <MapPin size={22} weight='fill' />
          <span>Porto Alegre, RS</span>
        </div>
        <a href='#' className='shopping-cart'>
          <ShoppingCart size={22} weight='fill' className="shopping-cart-img" />
        </a>
      </Aside>
    </Container>
  )
}
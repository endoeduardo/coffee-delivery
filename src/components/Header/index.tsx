import { MapPin, ShoppingCart  } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Aside, Container } from './styles'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src='/logo.svg' alt='Coffee Delivery' />
      </Link>
      <Aside>
        <div>
          <MapPin size={22} weight='fill' />
          <span>Porto Alegre, RS</span>
        </div>
        <Link to='/checkout' className='shopping-cart'>
          <ShoppingCart size={22} weight='fill' className="shopping-cart-img" />
        </Link>
      </Aside>
    </Container>
  )
}
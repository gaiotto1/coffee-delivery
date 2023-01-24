import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  ContainerHeader,
  Main,
  ContainerButtons,
  ContainerPin,
  ContainerButtonCart,
} from './styles'

import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  const [itemsQuantity, setItemsQuantity] = useState(0)

  return (
    <ContainerHeader>
      <Main>
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>

        <ContainerButtons>
          <ContainerPin>
            <MapPin size={20} weight="fill" />
            <p>Porto Alegre, RS</p>
          </ContainerPin>

          <ContainerButtonCart>
            <NavLink to="/checkout">
              <ShoppingCart size={20} weight="fill" />
              {itemsQuantity > 0 && <p>{itemsQuantity}</p>}
            </NavLink>
          </ContainerButtonCart>
        </ContainerButtons>
      </Main>
    </ContainerHeader>
  )
}

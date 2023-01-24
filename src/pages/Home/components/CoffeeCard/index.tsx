import React, { useState } from 'react'

import { QuantityInput } from '../../../../components/QuantityInput'
import {
  Card,
  ContainerCategories,
  PriceFooter,
  Price,
  WrapperShoppingCart,
} from './styles'

import { ShoppingCart } from 'phosphor-react'

import { formatMoney } from '../../../../utils/formatMoney'

type Coffee = {
  id: number
  name: string
  category: string[]
  description: string
  price: number
  image: string
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    console.log('increase')
    setQuantity(quantity + 1)
  }

  function handleDecrease() {
    console.log('decrease')

    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <Card>
      <img src={`/coffees/${coffee.image}.png`} alt={coffee.name} />

      <ContainerCategories>
        {coffee.category.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </ContainerCategories>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <PriceFooter>
        <Price>
          <span>R$</span>
          <p>{formatMoney(coffee.price)}</p>
        </Price>

        <QuantityInput
          onIncrease={() => handleIncrease()}
          onDecrease={() => handleDecrease()}
          quantity={quantity}
        />

        <WrapperShoppingCart>
          <ShoppingCart size={23} weight="fill" />
        </WrapperShoppingCart>
      </PriceFooter>
    </Card>
  )
}

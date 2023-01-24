import React from 'react'
import { Minus, Plus } from 'phosphor-react'

import { QuantityContainer, Quantity, QuantityButton } from './styles'

interface QuantityInputProps {
  size?: 'small' | 'medium'
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({
  size = 'small',
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityContainer size={size}>
      <QuantityButton onClick={onDecrease}>
        <Minus size={15} weight="fill" />
      </QuantityButton>

      <Quantity>{quantity}</Quantity>

      <QuantityButton onClick={onIncrease}>
        <Plus size={15} weight="fill" />
      </QuantityButton>
    </QuantityContainer>
  )
}

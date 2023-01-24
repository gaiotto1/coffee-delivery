import styled, { css } from 'styled-components'

interface QuantityInputContainerProps {
  size: 'small' | 'medium'
}

export const QuantityContainer = styled.div<QuantityInputContainerProps>`
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 16px;
  background-color: ${({ theme }) => theme.colors['base-button']};

  ${({ size }) =>
    size === 'small' &&
    css`
      height: 38px;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      height: 40px;
    `}
`
export const Quantity = styled.div`
  width: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
  color: ${({ theme }) => theme.colors['base-title']};
  font-family: ${({ theme }) => theme.fonts.regular};
`
export const QuantityButton = styled.button`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-button']};

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
`

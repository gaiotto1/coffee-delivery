import styled from 'styled-components'

export const Card = styled.div`
  width: 256px;
  min-height: 310px;
  height: auto;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  margin-bottom: 30px;
  background: ${({ theme }) => theme.colors['base-card']};

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-top: -25px;
  }

  h3 {
    font-size: ${({ theme }) => theme.textSizes['title-title-s']};
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-top: 15px;
  }

  p {
    width: 95%;
    max-width: 216px;
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors['base-label']};
    margin-top: 5px;
    text-align: center;
    line-height: 130%;
  }
`

export const ContainerCategories = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  span {
    background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.regular};
    padding: 5px 8px;
    margin: 0px 2.5px;
    border-radius: 100px;
    text-transform: uppercase;
  }
`

export const PriceFooter = styled.div`
  width: 100%;
  height: 38px;
  margin-bottom: 20px;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const Price = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    color: ${({ theme }) => theme.colors['base-text']};
    margin-top: 4px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['title-title-m']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-weight: 800;
    margin-left: 4px;
  }
`

export const WrapperShoppingCart = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  border: none;
  background: ${({ theme }) => theme.colors['brand-purple-dark']};

  svg {
    color: ${({ theme }) => theme.colors['base-card']};
  }
`

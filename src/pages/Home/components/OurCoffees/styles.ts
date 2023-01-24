import styled from 'styled-components'

export const OurCoffeesContainer = styled.div`
  width: 100%;
`

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  list-style: none;
`

export const Title = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-size: ${({ theme }) => theme.textSizes['title-title-l']};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 800;
  margin-bottom: 50px;
`

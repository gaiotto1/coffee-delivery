import styled from 'styled-components'

export const ContainerHeader = styled.header`
  position: relative;
  height: 104px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Main = styled.main`
  position: relative;
  width: 100%;
  max-width: 1120px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerButtons = styled.div`
  position: relative;
  width: 195px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerPin = styled.div`
  position: relative;
  width: 143px;
  height: 40px;
  border-radius: 6px;
  padding: 0px 8px;
  background-color: ${({ theme }) => theme.colors['brand-purple-light']};
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  }

  svg {
    color: ${({ theme }) => theme.colors[`brand-purple`]};
  }
`

export const ContainerButtonCart = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['brand-yellow-light']};

  svg {
    color: ${({ theme }) => theme.colors[`brand-yellow-dark`]};
    margin-top: 4px;
  }

  p {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    right: -8px;
    top: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors['base-white']};
    font-size: ${({ theme }) => theme.textSizes['text-bold-s']};
    background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`

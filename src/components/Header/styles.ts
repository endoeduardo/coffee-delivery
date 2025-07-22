import { styled } from 'styled-components'

export const Container = styled.header`
max-width: 1160px;
padding: 32px 20px;
margin: 0 auto;

display: flex;
justify-content: space-between;
align-items: center;
`

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors['purple-light']};
    color: ${({ theme }) => theme.colors['purple']};
    padding: 8px;
    border-radius: 6px;
    gap: 4px;
    
    span {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  a {
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    padding: 8px;
    border-radius: 6px;

    svg {
      display: block;
    }
  }
`
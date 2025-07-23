import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1160px;
  margin: 0 auto;
  padding: 2rem;

  h2 {
    ${mixins.fonts.titleL};
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 1rem;
    }

`
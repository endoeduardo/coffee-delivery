import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const MainCoffeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;

  h1 {
    ${mixins.fonts.titleXL};
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 1rem;
  }

  span {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 2rem;
  }
`;

export const SubCoffeDescriptionContainer = styled.div`
.grid-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
}
`;

import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'
import type { defaultTheme } from '../../../../styles/themes/default';

export const MainCoffeDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1160px;
  height: 34rem;
  margin: 0 auto;

.home-description-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  text-align: left;
  padding: 2rem;
  
  h1 {
    ${mixins.fonts.titleXL};
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 1rem;
    }

    p {
      ${mixins.fonts.textL};
      color: ${({ theme }) => theme.colors['base-subtitle']};
      margin-bottom: 2rem;
      }
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

  li {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .icon-text-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.75rem;
  }

  span {
    ${mixins.fonts.textM};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 0; /* Remove bottom margin so it aligns better vertically */
  }
}
`

type ColorKey = keyof typeof defaultTheme.colors

export const IconStyle = styled.div<{ bgColor?: ColorKey; size?: number }>`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor || 'yellow-dark']};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ size }) => (size ? `${size}px` : '32px')};
  height: ${({ size }) => (size ? `${size}px` : '32px')};
`
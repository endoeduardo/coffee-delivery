import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";


const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 16rem;
  max-height: 19.375rem;
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px;

  h2 {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors["base-text"]};
    margin: 0;
  }

  h3 {
    ${mixins.fonts.titleS};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  p {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors["base-label"]};
    text-align: center;
  }

  span {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors["base-text"]};
  }
  
  .product-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // margin: 8px;
    width: 100%;

    .price-wrapper {
      display: flex;
      align-items: flex-end;
    }

    .button-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 72px;
      height: 38px;

      button {
        background: ${({ theme }) => theme.colors["purple-dark"]};
        border: none;
        border-radius: 6px;
        padding: 8px;
        cursor: pointer;

        &:hover {
          background: ${({ theme }) => theme.colors["purple"]};
        }
        
        svg {
          display: block;
        }
      }
    }
  }
`;

export { ProductCardContainer };
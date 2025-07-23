import { ShoppingCart } from "phosphor-react";
import { ProductCardContainer } from "./styles";

export function ProductCard() {
  return (
    <ProductCardContainer>
      <img src="/assets/expresso.png" alt="Expresso Tradicional" />
      <div>TRADICIONAL</div>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div className="product-footer">
        <div className="price-wrapper">
          <span>R$</span>
          <h2>9,90</h2>
        </div>
        <div className="button-wrapper">
          <input type="number" value={1} step={1} />
          <button><ShoppingCart color="#fff" size={22}/></button>
        </div>
      </div>
    </ProductCardContainer>
  );
}
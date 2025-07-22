import { MainCoffeDescriptionContainer, SubCoffeDescriptionContainer } from "./styles";
import { ShoppingCart, Package, Coffee, Timer } from "phosphor-react";

export function Home() {
  return (
    <div className='home-description-container'>
      <MainCoffeDescriptionContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
        <SubCoffeDescriptionContainer>
          <ul className='grid-list'>
            <li>
              <ShoppingCart size={32} weight="fill" />
              <span>Compra simples e segura</span>
            </li>
            <li>
              <Package size={32} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <Coffee size={32} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <Timer size={32} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </SubCoffeDescriptionContainer>
      </MainCoffeDescriptionContainer>
      <img src=".src/assets/maincoffeecup.png" alt="Coffee Delivery" />
    </div>
  );
}
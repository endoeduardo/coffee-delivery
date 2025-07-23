import { MainCoffeDescriptionContainer, SubCoffeDescriptionContainer, IconStyle } from "./styles";
import { ShoppingCart, Package, Coffee, Timer } from "phosphor-react";

export function HomeDescription() {
  return (
    <MainCoffeDescriptionContainer>
      <div className='home-description-container'>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <SubCoffeDescriptionContainer>
          <ul className='grid-list'>
            <li>
              <div className="icon-text-wrapper">
                <IconStyle bgColor="yellow-dark" size={32}>
                  <ShoppingCart color="#fff" size={16} weight="fill"/>
                </IconStyle>
                <span>Compra simples e segura</span>
              </div>
            </li>
            <li>
              <div className="icon-text-wrapper">
                <IconStyle bgColor="base-text" size={32}>
                  <Package color="#fff" size={16} weight="fill"/>
                </IconStyle>
                <span>Embalagem mantém o café intacto</span>
              </div>
            </li>
            <li>
              <div className="icon-text-wrapper">
                <IconStyle bgColor="yellow" size={32}>
                  <Coffee color="#fff" size={16} weight="fill"/>
                </IconStyle>
              <span>Entrega rápida e rastreada</span>
              </div>
            </li>
            <li>
              <div className="icon-text-wrapper">
                <IconStyle bgColor="purple" size={32}>
                  <Timer color="#fff" size={16} weight="fill"/>
                </IconStyle>
              <span>O café chega fresquinho até você</span>
              </div>
            </li>
          </ul>
        </SubCoffeDescriptionContainer>
      </div>
      <img src="./src/assets/maincoffeecup.png" alt="Coffee Delivery" />
    </MainCoffeDescriptionContainer>
  )
}
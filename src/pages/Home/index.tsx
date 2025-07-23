import { HomeDescription } from "./components/HomeDescription";
import { ProductsContainer } from './styles';

export function Home() {
  return (
    <>
      <HomeDescription />
      <ProductsContainer>
        <h2>Nossos Produtos</h2>
      </ProductsContainer>
    </>
  );
}
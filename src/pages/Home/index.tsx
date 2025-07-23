import { HomeDescription } from "./components/HomeDescription";
import { ProductCard } from "./components/ProductCard";
import { ProductsContainer } from './styles';

export function Home() {
  return (
    <>
      <HomeDescription />
      <ProductsContainer>
        <h2>Nossos Produtos</h2>
        <ProductCard />
      </ProductsContainer>
    </>
  );
}
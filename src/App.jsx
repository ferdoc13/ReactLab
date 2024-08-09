import ProductCard from "./components/ProductCard";


export function App() {

  return (
    <div className="container pt-4">
      <section className="row">
        <ProductCard title="MacBook" price={0} image="Mac" isDiscounted={true} discount="32" isSpecial={true} />
        <ProductCard title="iPhone13 ProMax" price={200} image="iPhone" isDiscounted={false} discount="0" isSpecial={true} />
        <ProductCard title="Airpod2" price={300} image="Airpod" isDiscounted={false} discount="0" />
        <ProductCard title="Headphone" price={300} image="Headphone" isDiscounted={true} discount="20" />
      </section>
    </div>
  );
}

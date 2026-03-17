import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <section className="px-6 py-20">
      <h1 className="text-3xl font-serif mb-10">Our Collection</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}

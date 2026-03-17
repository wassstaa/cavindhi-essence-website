import { products, type Product } from "@/data/products";
import NotesVisual from "@/components/NotesVisual";
import { notFound } from "next/navigation";

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product: Product | undefined = products.find(
    (p: Product) => p.slug === params.slug
  );

  if (!product) return notFound();

  // 🔥 AUTO CHAT WA
  const message = `Halo, saya tertarik dengan parfum ${product.name}. Apakah masih tersedia?`;
  const url = `https://wa.me/62819175776677?text=${encodeURIComponent(message)}`;

  return (
    <section className={`px-6 py-20 min-h-screen ${product.gradient}`}>
      
      {/* TITLE */}
      <h1 className="text-3xl font-serif mb-4">
        {product.name}
      </h1>

      {/* DESCRIPTION */}
      <p className="mb-6 max-w-xl leading-relaxed">
        {product.description}
      </p>

      {/* NOTES */}
      <div className="mb-8">
        <NotesVisual notes={product.notes} />
      </div>

      {/* CTA */}
      <div className="mt-8 flex items-center gap-4">
        <span className="text-lg font-semibold">
          {product.price}
        </span>

        <a
          href={url}
          target="_blank"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:scale-105 hover:opacity-90 transition"
        >
          Order via WhatsApp
        </a>
      </div>

    </section>
  );
}
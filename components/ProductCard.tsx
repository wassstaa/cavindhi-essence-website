import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: any) {
  const message = `Halo saya mau order ${product.name}`;
  const url = `https://wa.me/6281917977687?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className={`p-6 rounded-xl ${product.gradient} hover:scale-[1.02] transition`}
    >
      {/* 🔥 GAMBAR PRODUK */}
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />

      {/* LINK KE DETAIL */}
      <Link href={`/products/${product.slug}`}>
        <h2 className="font-serif text-xl mb-2">{product.name}</h2>
      </Link>

      <p className="text-sm text-neutral-700 mb-4">{product.shortDesc}</p>

      <span className="text-sm font-medium">{product.price}</span>

      {/* BUTTON WA */}
      <a
        href={url}
        target="_blank"
        className="ml-4 inline-block bg-black text-white px-4 py-2 rounded-lg text-sm hover:opacity-80 transition"
      >
        Order via WhatsApp
      </a>
    </div>
  );
}

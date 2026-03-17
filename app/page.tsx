import Link from "next/link";

export default function HomePage() {
  return (
    <section className="px-6 py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-serif mb-6">
        Cavindhi Essence
      </h1>

      <p className="max-w-xl mx-auto text-neutral-600 mb-10">
        Fragrances that whisper memories — crafted to feel personal,
        intimate, and unforgettable.
      </p>

      <Link
        href="/products"
        className="inline-block border border-neutral-900 px-8 py-3 text-sm hover:bg-neutral-900 hover:text-white transition"
      >
        Explore Collection
      </Link>
    </section>
  );
}

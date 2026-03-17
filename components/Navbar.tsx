import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-200 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="leading-tight">
          <h1 className="text-xl font-serif tracking-wide">
            Cavindhi <span className="font-medium">Essence</span>
          </h1>
          <p className="text-xs text-neutral-500 italic">
            Be Gentle, Be Unforgettable
          </p>
        </Link>

        {/* Menu */}
        <div className="flex gap-3">
          <Link
            href="/products"
            className="px-4 py-2 rounded-md bg-[#e8dfd3] text-sm hover:bg-[#ded2c3] transition"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-md bg-[#e8dfd3] text-sm hover:bg-[#ded2c3] transition"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

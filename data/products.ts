export type Product = {
  slug: string;
  name: string;
  price: string;
  image: string;
  gradient: string;
  shortDesc: string;
  description: string;
  notes: {
    top: readonly string[];
    mid: readonly string[];
    base: readonly string[];
  };
};

export const products: Product[] = [
  {
    slug: "verelune",
    name: "Verelune",
    price: "IDR 90.000",
    image: "/verelune.jpg",
    gradient: "bg-gradient-to-br from-[#1a1a1a] to-[#3a2f2f]",
    shortDesc:
      "A sensual night fragrance with calm intensity and masculine depth.",
    description: `
Inspired by the word Lune, meaning moon, Verelune is a men’s fragrance crafted for the night.
Fresh lavender and mint open the scent with a cool, clean touch.
As it develops, vanilla and benzoin bring creamy warmth.
The base of honey, tonka bean, and tobacco creates a deep, dark sweetness that lingers long after.
    `.trim(),
    notes: {
      top: ["Lavender", "Mint"] as string[],
      mid: ["Vanilla", "Benzoin"] as string[],
      base: ["Honey", "Tonka Bean", "Tobacco"] as string[],
    },
  },

  {
    slug: "roselat",
    name: "Rosélat",
    price: "IDR 90.000",
    image: "/roselat.jpg",
    gradient: "bg-gradient-to-br from-pink-100 to-rose-200",
    shortDesc:
      "A romantic blend of rose and chocolate with a soft, elegant finish.",
    description: `
Rosélat is a delicate yet captivating fragrance that blends floral and gourmand elements.
The opening reveals fresh rose petals paired with subtle fruity sweetness.
In the heart, rich chocolate and creamy notes create a warm indulgence.
The base settles into a soft, musky sweetness that feels intimate and long-lasting.
    `.trim(),
    notes: {
      top: ["Rose", "Fruity Notes"] as string[],
      mid: ["Chocolate", "Creamy Notes"] as string[],
      base: ["Musk", "Sweet Notes"] as string[],
    },
  },

  {
    slug: "peachave",
    name: "Peachave",
    price: "IDR 90.000",
    image: "/peachave.jpg",
    gradient: "bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100",
    shortDesc:
      "A playful sweet fruity scent with cheerful energy.",
    description: `
Peachave is a unisex fragrance that feels joyful, bright, and playful.
Juicy pear and peach open with fresh sweetness.
Bubblegum adds a fun, nostalgic twist.
Vanilla and musk settle softly, leaving a warm and creamy trail.
    `.trim(),
    notes: {
      top: ["Pear", "Peach"] as string[],
      mid: ["Bubblegum"] as string[],
      base: ["Vanilla", "Musk"] as string[],
    },
  },
]

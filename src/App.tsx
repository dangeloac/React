import Card from "./Card";
const products = [
  {
    id: 1,
    name: "Polo Basico - GOKU",
    href: "#",
    imageSrc:
      "https://akiraseihin.pe/wp-content/uploads/2023/12/POLO-DRAGON-BALL-Z-001.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 100,
    color: "Negro",
  },
  {
    id: 2,
    name: "Polo Basico - GOKU",
    href: "#",
    imageSrc:
      "https://akiraseihin.pe/wp-content/uploads/2023/12/POLO-DRAGON-BALL-Z-001.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 200,
    color: "Negro",
  },

  {
    id: 3,
    name: "Polo Basico - GOKU",
    href: "#",
    imageSrc:
      "https://akiraseihin.pe/wp-content/uploads/2023/12/POLO-DRAGON-BALL-Z-001.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 300,
    color: "Negro",
  },

  {
    id: 4,
    name: "Polo Basico - GOKU",
    href: "#",
    imageSrc:
      "https://akiraseihin.pe/wp-content/uploads/2023/12/POLO-DRAGON-BALL-Z-001.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 400,
    color: "Negro",
  },
  // More products...
];

function App() {
  return (
    <div>
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          imageSrc={product.imageSrc}
          imageAlt={product.imageAlt}
          price={product.price}
          color={product.color}
        />
      ))}
    </div>
  );
}
export default App;

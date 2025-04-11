const arrayPrueba = [
  "Carey Mulligan",
  "Ana de Armas",
  "Katherine Langford",
  "Margot Robbie",
  "Kiernan Shipka",
];

interface CardProps {
  key: number;
  name: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  color: string;
}

export default function Card({
  key,
  name,
  imageSrc,
  imageAlt,
  price,
  color,
}: CardProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Los clientes cabeza de rata
        </h2>

        {arrayPrueba.map((person) => (
          <li>{person}</li>
        ))}

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div key={key} className="group relative">
            <img
              alt={imageAlt}
              src={imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={"falta"}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">S/. ${price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

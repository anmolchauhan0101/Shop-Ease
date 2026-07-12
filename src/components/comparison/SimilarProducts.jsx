import {
  Heart,
  ArrowRight,
  Star,
} from "lucide-react";

export default function SimilarProducts() {

  const products = [
    {
      id: 1,
      name: "Amul Taaza Milk",
      category: "Dairy • 1 Litre",
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=1200",
      price: 58,
      oldPrice: 64,
      badge: "Best Value",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Mother Dairy Toned Milk",
      category: "Fresh Dairy",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1200",
      price: 62,
      oldPrice: 70,
      badge: "Popular",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Nestle A+ Milk",
      category: "Premium Dairy",
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=1200",
      price: 69,
      oldPrice: 75,
      badge: "Organic",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Heritage Full Cream Milk",
      category: "Fresh Milk",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1200",
      price: 60,
      oldPrice: 67,
      badge: "Trending",
      rating: 4.6,
    },
  ];

  return (

    <section className="mt-24">

      {/* Header */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h2 className="text-4xl font-black">
            Similar Products
          </h2>

          <p className="mt-2 text-zinc-500">
            You may also like these products
          </p>

        </div>

        <button
          className="
          text-blue-600
          font-semibold
          hover:underline
          "
        >
          View All →
        </button>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

        {products.map((item) => (

          <div
            key={item.id}
            className="
            group

            overflow-hidden

            rounded-[30px]

            border

            border-zinc-200

            bg-white

            transition-all
            duration-300

            hover:-translate-y-2
            hover:shadow-xl
            "
          >

            {/* Image */}

            <div className="relative">

              <img
                src={item.image}
                alt={item.name}
                className="
                h-64
                w-full
                object-cover

                transition-transform
                duration-500

                group-hover:scale-105
                "
              />

              <button
                className="
                absolute
                top-4
                right-4

                h-11
                w-11

                rounded-full

                bg-white/90

                backdrop-blur

                flex
                items-center
                justify-center

                shadow
                "
              >
                <Heart size={18}/>
              </button>

              <div
                className="
                absolute
                left-4
                top-4

                rounded-full

                bg-green-100

                px-4
                py-2

                text-xs

                font-semibold

                text-green-700
                "
              >
                {item.badge}
              </div>

            </div>

            {/* Content */}

            <div className="p-6">

              <div className="flex justify-between">

                <span
                  className="
                  text-sm

                  text-zinc-500
                  "
                >
                  {item.category}
                </span>

                <span
                  className="
                  flex

                  items-center

                  gap-1

                  text-sm

                  font-semibold
                  "
                >
                  <Star
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  {item.rating}
                </span>

              </div>

              <h3
                className="
                mt-3

                text-2xl

                font-bold

                leading-tight
                "
              >
                {item.name}
              </h3>

              {/* Price */}

              <div
                className="
                mt-6

                flex

                items-end

                gap-3
                "
              >

                <div
                  className="
                  text-4xl

                  font-black

                  text-blue-600
                  "
                >
                  ₹{item.price}
                </div>

                <div
                  className="
                  line-through

                  text-zinc-400

                  mb-1
                  "
                >
                  ₹{item.oldPrice}
                </div>

              </div>

              {/* Button */}

              <button
                className="
                mt-7

                w-full

                rounded-2xl

                bg-blue-600

                py-4

                text-white

                font-semibold

                flex

                items-center

                justify-center

                gap-2

                hover:bg-blue-700

                transition
                "
              >

                Compare Product

                <ArrowRight size={18}/>

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}
import {
  Heart,
  Share2,
  ShoppingCart,
  TrendingDown,
} from "lucide-react";

export default function ProductOverview() {
  return (
    <section
      className="
      grid
      lg:grid-cols-[380px_1fr]
      gap-12
      items-center
      "
    >
      {/* Product Image */}

      <div
        className="
        bg-white
        rounded-[32px]
        border
        border-zinc-200
        p-8

        shadow-sm

        hover:shadow-xl
        transition
        "
      >
        <img
          src="https://images.unsplash.com/photo-1563636619-e9143da7973b?w=1200"
          alt="Milk"
          className="
          w-full
          aspect-square
          object-cover
          rounded-3xl
          "
        />
      </div>

      {/* Product Details */}

      <div>

        <span
          className="
          inline-flex
          items-center

          rounded-full

          bg-blue-100

          text-blue-600

          px-4

          py-2

          text-sm

          font-semibold
          "
        >
          Dairy • Fresh Milk
        </span>

        <h1
          className="
          mt-6

          text-5xl
          lg:text-6xl

          font-black

          leading-tight

          text-zinc-900
          "
        >
          Amul Gold Full Cream Milk
        </h1>

        <p
          className="
          mt-4

          text-lg

          text-zinc-500
          "
        >
          1 Litre Tetra Pack
        </p>

        {/* Stats */}

        <div
          className="
          mt-10

          flex

          flex-wrap

          gap-12
          "
        >
          <div>

            <p className="text-zinc-500">
              Average Price
            </p>

            <h2
              className="
              mt-2

              text-5xl

              font-black

              text-zinc-900
              "
            >
              ₹66
            </h2>

          </div>

          <div>

            <p className="text-zinc-500">
              Price Trend
            </p>

            <div
              className="
              mt-2

              flex

              items-center

              gap-2

              text-green-600

              font-bold

              text-2xl
              "
            >
              <TrendingDown size={24} />

              2% this week
            </div>

          </div>

        </div>

        {/* Buttons */}

        <div
          className="
          mt-12

          flex

          flex-wrap

          gap-4
          "
        >

          <button
            className="
            flex

            items-center

            gap-2

            rounded-2xl

            bg-blue-600

            px-8

            py-4

            text-white

            font-semibold

            hover:bg-blue-700

            transition
            "
          >
            <ShoppingCart size={20} />

            Add To Basket

          </button>

          <button
            className="
            flex

            items-center

            gap-2

            rounded-2xl

            border

            border-zinc-200

            bg-white

            px-7

            py-4

            hover:bg-zinc-100

            transition
            "
          >
            <Heart size={20} />

            Watchlist

          </button>

          <button
            className="
            flex

            items-center

            gap-2

            rounded-2xl

            border

            border-zinc-200

            bg-white

            px-7

            py-4

            hover:bg-zinc-100

            transition
            "
          >
            <Share2 size={20} />

            Share

          </button>

        </div>

        {/* Feature Chips */}

        <div
          className="
          mt-12

          flex

          flex-wrap

          gap-3
          "
        >
          {[
            "Instant Delivery",
            "Price Protected",
            "AI Recommended",
            "Verified Product",
          ].map((item) => (
            <span
              key={item}
              className="
              rounded-full

              bg-zinc-100

              px-4

              py-2

              text-sm

              text-zinc-600
              "
            >
              {item}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
}
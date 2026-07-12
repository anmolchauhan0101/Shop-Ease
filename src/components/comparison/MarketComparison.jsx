import {
  Clock3,
  Truck,
  ShoppingBag,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export default function MarketComparison() {

  const stores = [
    {
      store: "Instamart",
      price: 325,
      oldPrice: 365,
      delivery: "FREE",
      eta: "12 mins",
      service: "₹5",
      winner: true,
      savings: "SAVE ₹40",
    },
    {
      store: "Zepto",
      price: 340,
      oldPrice: 352,
      delivery: "₹10",
      eta: "14 mins",
      service: "₹3",
      winner: false,
      savings: "Cheapest Overall",
    },
    {
      store: "Blinkit",
      price: 345,
      oldPrice: 360,
      delivery: "₹15",
      eta: "8 mins",
      service: "₹5",
      winner: false,
      savings: "Fastest",
    },
  ];

  return (
    <section className="mt-20">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-4xl font-black text-zinc-900">
            Market Comparison
          </h2>

          <p className="mt-2 text-zinc-500">
            Live prices from all supported platforms
          </p>

        </div>

        <span className="text-sm text-zinc-400">
          Updated 2 mins ago
        </span>

      </div>

      {/* Cards */}

      <div className="grid lg:grid-cols-3 gap-7">

        {stores.map((item) => (

          <div
            key={item.store}
            className={`
              rounded-[32px]
              border
              overflow-hidden
              transition-all
              duration-300

              ${
                item.winner
                  ? "border-blue-600 shadow-xl"
                  : "border-zinc-200 hover:shadow-xl hover:-translate-y-1"
              }
            `}
          >

            {/* Winner */}

            {item.winner && (

              <div
                className="
                bg-blue-600
                text-white

                flex
                items-center
                justify-between

                px-6
                py-3
                "
              >
                <span className="font-semibold">
                  WINNER
                </span>

                <BadgeCheck size={20}/>
              </div>

            )}

            {/* Content */}

            <div className="bg-white p-7">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-3xl font-bold">
                    {item.store}
                  </h3>

                  <p className="text-zinc-500 mt-1">
                    {item.savings}
                  </p>

                </div>

                <ShoppingBag
                  size={28}
                  className="text-blue-600"
                />

              </div>

              {/* Price */}

              <div className="mt-8">

                <div className="text-6xl font-black text-blue-600">
                  ₹{item.price}
                </div>

                <div className="line-through text-zinc-400 mt-2">
                  ₹{item.oldPrice}
                </div>

              </div>

              {/* Info */}

              <div className="grid grid-cols-3 gap-4 mt-8">

                <div>

                  <Clock3
                    size={18}
                    className="text-zinc-500 mb-2"
                  />

                  <p className="text-xs uppercase text-zinc-400">
                    ETA
                  </p>

                  <h4 className="font-bold mt-1">
                    {item.eta}
                  </h4>

                </div>

                <div>

                  <Truck
                    size={18}
                    className="text-zinc-500 mb-2"
                  />

                  <p className="text-xs uppercase text-zinc-400">
                    Delivery
                  </p>

                  <h4 className="font-bold mt-1">
                    {item.delivery}
                  </h4>

                </div>

                <div>

                  <ShoppingBag
                    size={18}
                    className="text-zinc-500 mb-2"
                  />

                  <p className="text-xs uppercase text-zinc-400">
                    Service
                  </p>

                  <h4 className="font-bold mt-1">
                    {item.service}
                  </h4>

                </div>

              </div>

              {/* Button */}

              <button
                className={`
                  mt-8
                  w-full
                  rounded-2xl
                  py-4

                  flex
                  items-center
                  justify-center
                  gap-2

                  font-semibold

                  transition

                  ${
                    item.winner
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-zinc-100 hover:bg-zinc-200"
                  }
                `}
              >

                Checkout with {item.store}

                <ArrowRight size={18}/>

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );

}
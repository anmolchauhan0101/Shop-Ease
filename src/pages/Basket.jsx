import BasketNavbar from "../components/basket/BasketNavbar";

export default function Basket() {

  const rows = [
    {
      id: 1,
      name: "Organic Whole Milk",
      subtitle: "1 Gallon • Fresh Dairy",
      price: 180,
      qty: 1,
      save: "Lowest Price",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600",
    },
    {
      id: 2,
      name: "Brown Bread",
      subtitle: "400g • Whole Wheat",
      price: 55,
      qty: 2,
      save: "Save ₹12",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600",
    },
    {
      id: 3,
      name: "Hass Avocados",
      subtitle: "2 Pack • Ready To Eat",
      price: 240,
      qty: 1,
      save: "Save ₹20",
      image:
        "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=600",
    },
  ];

  const stores = [
    {
      name: "Blinkit",
      total: 530,
      eta: "8 mins",
      delivery: "₹15",
      save: "₹45",
      winner: true,
    },
    {
      name: "Zepto",
      total: 562,
      eta: "7 mins",
      delivery: "₹10",
      save: "₹13",
      winner: false,
    },
    {
      name: "Instamart",
      total: 575,
      eta: "12 mins",
      delivery: "FREE",
      save: "₹0",
      winner: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      <div className="max-w-[1450px] mx-auto bg-white min-h-screen">

        <BasketNavbar />

        <div className="grid lg:grid-cols-[1fr_360px]">

          {/* LEFT */}

          <section className="p-8">

            <div className="flex justify-between items-center">

              <div>

                <h1 className="text-4xl font-black text-zinc-900">
                  Your Basket
                </h1>

                <p className="text-zinc-500 mt-2">
                  3 selected items
                </p>

              </div>

              <button className="text-blue-600 font-medium">
                Clear All
              </button>

            </div>

            {/* Basket Items */}

            <div className="mt-8 space-y-5">

              {rows.map((item) => (

                <div
                  key={item.id}
                  className="
                  bg-white
                  border
                  border-zinc-200
                  rounded-[24px]
                  p-5
                  flex
                  items-center
                  hover:shadow-md
                  transition
                  "
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                    w-24
                    h-24
                    rounded-2xl
                    object-cover
                    "
                  />

                  <div className="ml-5 flex-1">

                    <h2 className="text-xl font-bold text-zinc-900">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-zinc-500">
                      {item.subtitle}
                    </p>

                    <div className="mt-4 flex items-center gap-3">

                      <div
                        className="
                        flex
                        items-center
                        rounded-xl
                        bg-zinc-100
                        overflow-hidden
                        "
                      >

                        <button
                          className="
                          w-10
                          h-10
                          hover:bg-zinc-200
                          "
                        >
                          −
                        </button>

                        <span className="px-4 font-semibold">
                          {item.qty}
                        </span>

                        <button
                          className="
                          w-10
                          h-10
                          hover:bg-zinc-200
                          "
                        >
                          +
                        </button>

                      </div>

                      <span
                        className="
                        rounded-full
                        bg-green-100
                        text-green-700
                        px-3
                        py-1
                        text-sm
                        font-medium
                        "
                      >
                        {item.save}
                      </span>

                    </div>

                  </div>

                  <div className="text-right">

                    <div className="text-4xl font-black">
                      ₹{item.price}
                    </div>

                    <button
                      className="
                      mt-4
                      text-red-500
                      hover:text-red-700
                      text-sm
                      "
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Upgrade Banner */}

            <div
              className="
              mt-8
              rounded-[24px]
              bg-gradient-to-r
              from-blue-600
              to-blue-500
              text-white
              p-7
              "
            >

              <h2 className="text-2xl font-bold">
                Unlock Extra Savings
              </h2>

              <p className="mt-2 text-blue-100 max-w-md">
                Become a Shop Ease Pro member and enjoy free delivery,
                exclusive coupons and AI basket optimization.
              </p>

              <button
                className="
                mt-5
                bg-white
                text-blue-600
                px-6
                py-3
                rounded-xl
                font-semibold
                "
              >
                Upgrade Pro
              </button>

            </div>

          </section>
          <aside
            className="
            bg-[#fafcff]
            border-l
            border-zinc-200
            p-6
            sticky
            top-[72px]
            h-fit
            "
          >

            {/* Promo */}

            <div
              className="
              rounded-[24px]
              bg-white
              border
              border-zinc-200
              p-6
              shadow-sm
              "
            >

              <p
                className="
                text-xs
                uppercase
                tracking-widest
                text-zinc-400
                font-semibold
                "
              >
                Promo Code
              </p>

              <div className="mt-4 flex gap-3">

                <input
                  placeholder="Enter coupon code"
                  className="
                  flex-1
                  h-12
                  rounded-xl
                  border
                  border-zinc-200
                  bg-zinc-50
                  px-4
                  outline-none
                  focus:border-blue-500
                  "
                />

                <button
                  className="
                  px-6
                  rounded-xl
                  bg-zinc-900
                  text-white
                  hover:bg-black
                  transition
                  "
                >
                  Apply
                </button>

              </div>

            </div>

            {/* Store Comparison */}

            <div className="mt-8">

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-black">
                  Compare Basket
                </h2>

                <span className="text-sm text-zinc-400">
                  Live
                </span>

              </div>

              <div className="mt-5 space-y-4">

                {stores.map((store) => (

                  <div
                    key={store.name}
                    className={`
                    rounded-[24px]
                    border
                    p-5
                    transition-all

                    ${
                      store.winner
                        ? "border-blue-600 bg-blue-50 shadow-lg"
                        : "border-zinc-200 bg-white hover:shadow-md"
                    }
                    `}
                  >

                    <div className="flex items-start justify-between">

                      <div>

                        <h3 className="text-xl font-bold">
                          {store.name}
                        </h3>

                        <p className="mt-1 text-sm text-zinc-500">
                          Delivery • {store.eta}
                        </p>

                      </div>

                      {store.winner && (

                        <span
                          className="
                          rounded-full
                          bg-green-100
                          text-green-700
                          px-3
                          py-1
                          text-xs
                          font-semibold
                          "
                        >
                          BEST
                        </span>

                      )}

                    </div>

                    <div className="mt-6">

                      <p className="text-sm text-zinc-500">
                        Basket Total
                      </p>

                      <h2 className="mt-1 text-4xl font-black text-blue-600">
                        ₹{store.total}
                      </h2>

                    </div>

                    <div className="mt-5 space-y-2 text-sm">

                      <div className="flex justify-between">

                        <span className="text-zinc-500">
                          Delivery
                        </span>

                        <span className="font-medium">
                          {store.delivery}
                        </span>

                      </div>

                      <div className="flex justify-between">

                        <span className="text-zinc-500">
                          Savings
                        </span>

                        <span className="font-semibold text-green-600">
                          {store.save}
                        </span>

                      </div>

                    </div>

                    <button
                      className={`
                      mt-6
                      w-full
                      rounded-xl
                      py-3
                      font-semibold
                      transition

                      ${
                        store.winner
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-zinc-100 hover:bg-zinc-200"
                      }
                      `}
                    >
                      {store.winner
                        ? "Checkout Here →"
                        : "Compare Store"}
                    </button>

                  </div>

                ))}

              </div>

            </div>

            {/* Basket Summary */}

            <div
              className="
              mt-8
              rounded-[24px]
              bg-blue-600
              text-white
              p-6
              "
            >

              <p className="text-sm text-blue-100">
                Best Basket Total
              </p>

              <h2 className="mt-2 text-5xl font-black">
                ₹530
              </h2>

              <div className="mt-5 space-y-2 text-sm">

                <div className="flex justify-between">

                  <span>Total Savings</span>

                  <span className="font-semibold">
                    ₹45
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Estimated Delivery</span>

                  <span className="font-semibold">
                    8 mins
                  </span>

                </div>

              </div>

              <button
                className="
                mt-6
                w-full
                rounded-xl
                bg-white
                py-3
                text-blue-600
                font-bold
                hover:scale-[1.02]
                transition
                "
              >
                Proceed to Checkout →
              </button>

            </div>

          </aside>

        </div>

      </div>

    </div>

  );

}

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasketNavbar from "../components/basket/BasketNavbar";
import { useCart } from "../store/cartStore";

export default function Basket() {
  const navigate = useNavigate();
  const {
    items,
    total,
    storeComparison,
    status,
    error,
    fetchBasket,
    updateQty,
    removeItem,
    clearCart,
  } = useCart();

  useEffect(() => {
    fetchBasket();
  }, [fetchBasket]);

  const best = storeComparison[0];

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <div className="max-w-[1450px] mx-auto bg-white min-h-screen">
        <BasketNavbar />

        <div className="grid lg:grid-cols-[1fr_360px]">
          {/* LEFT */}
          <section className="p-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-black text-zinc-900">Your Basket</h1>
                <p className="text-zinc-500 mt-2">
                  {items.length} selected item{items.length === 1 ? "" : "s"}
                </p>
              </div>
              {items.length > 0 && (
                <button onClick={clearCart} className="text-blue-600 font-medium">
                  Clear All
                </button>
              )}
            </div>

            {error && (
              <p className="mt-6 text-sm text-red-500 bg-red-50 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            {status === "loading" && items.length === 0 && (
              <p className="mt-8 text-zinc-500">Loading your basket…</p>
            )}

            {status !== "loading" && items.length === 0 && (
              <div className="mt-10 rounded-[24px] border border-dashed border-zinc-300 p-14 text-center">
                <p className="text-zinc-500">Your basket is empty.</p>
                <button
                  onClick={() => navigate("/explore")}
                  className="mt-5 text-blue-600 font-semibold"
                >
                  Browse deals →
                </button>
              </div>
            )}

            {/* Basket Items */}
            <div className="mt-8 space-y-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-zinc-200 rounded-[24px] p-5 flex items-center hover:shadow-md transition"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 rounded-2xl object-cover"
                  />

                  <div className="ml-5 flex-1">
                    <h2 className="text-xl font-bold text-zinc-900">
                      {item.product.name}
                    </h2>
                    <p className="mt-1 text-zinc-500">
                      {item.product.subtitle} • {item.store}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex items-center rounded-xl bg-zinc-100 overflow-hidden">
                        <button
                          onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                          className="w-10 h-10 hover:bg-zinc-200"
                        >
                          −
                        </button>
                        <span className="px-4 font-semibold">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-10 h-10 hover:bg-zinc-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-4xl font-black">₹{item.lineTotal}</div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-4 text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className="mt-8 rounded-[24px] bg-gradient-to-r from-blue-600 to-blue-500 text-white p-7">
                <h2 className="text-2xl font-bold">Unlock Extra Savings</h2>
                <p className="mt-2 text-blue-100 max-w-md">
                  Become a Shop Ease Pro member and enjoy free delivery,
                  exclusive coupons and AI basket optimization.
                </p>
                <button className="mt-5 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold">
                  Upgrade Pro
                </button>
              </div>
            )}
          </section>

          <aside className="bg-[#fafcff] border-l border-zinc-200 p-6 sticky top-[72px] h-fit">
            {/* Store Comparison */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black">Compare Basket</h2>
                <span className="text-sm text-zinc-400">Live</span>
              </div>

              {storeComparison.length === 0 && (
                <p className="mt-5 text-sm text-zinc-500">
                  Add items to see store comparisons.
                </p>
              )}

              <div className="mt-5 space-y-4">
                {storeComparison.map((store) => (
                  <div
                    key={store.store}
                    className={`rounded-[24px] border p-5 transition-all ${
                      store.winner
                        ? "border-blue-600 bg-blue-50 shadow-lg"
                        : "border-zinc-200 bg-white hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold">{store.store}</h3>
                      {store.winner && (
                        <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
                          BEST
                        </span>
                      )}
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-zinc-500">Basket Total</p>
                      <h2 className="mt-1 text-4xl font-black text-blue-600">
                        ₹{store.total}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Basket Summary */}
            {items.length > 0 && (
              <div className="mt-8 rounded-[24px] bg-blue-600 text-white p-6">
                <p className="text-sm text-blue-100">Your Basket Total</p>
                <h2 className="mt-2 text-5xl font-black">₹{total}</h2>
                {best && (
                  <p className="mt-3 text-sm text-blue-100">
                    Cheapest as one order: {best.store} → ₹{best.total}
                  </p>
                )}
                <button className="mt-6 w-full rounded-xl bg-white py-3 text-blue-600 font-bold hover:scale-[1.02] transition">
                  Proceed to Checkout →
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../store/cartStore";
import { useAuth } from "../../store/authStore";

// Expects a product object shaped like the API response from GET /api/products:
// { id, name, image, storePrices: [{store, price, delivery, eta}], bestPrice, averagePrice }
export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const addToCart = useCart((state) => state.addToCart);
  const isAuthenticated = useAuth((s) => s.isAuthenticated());
  const [adding, setAdding] = useState(false);

  const prices = [...product.storePrices].sort((a, b) => a.price - b.price);
  const best = prices[0];

  async function handleAdd() {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: `/compare/${product.id}` } });
      return;
    }
    setAdding(true);
    try {
      await addToCart(product.id, best.store, 1);
      navigate("/basket");
    } catch {
      // error already captured in cartStore.error
    } finally {
      setAdding(false);
    }
  }

  function handleCompare() {
    navigate(`/compare/${product.id}`);
  }

  return (
    <div
      className="
      group
      w-full
      rounded-[32px]
      overflow-hidden
      bg-white
      dark:bg-zinc-950
      border
      dark:border-zinc-800
      hover:shadow-2xl
      hover:-translate-y-2
      duration-300
      "
    >
      {/* IMAGE */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 duration-700"
        />
        <div className="absolute top-5 left-5 rounded-full bg-green-100 text-green-700 px-4 py-2 text-xs font-bold">
          Best: {best.store}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h2 className="text-[28px] font-bold leading-tight dark:text-white">
          {product.name}
        </h2>
        <p className="mt-2 text-zinc-500">Live basket comparison</p>

        {/* PRICE TABLE */}
        <div className="mt-7 space-y-4">
          {prices.map((sp) => (
            <div
              key={sp.store}
              className={`flex justify-between ${
                sp.store === best.store ? "font-bold text-green-600" : ""
              }`}
            >
              <span className={sp.store === best.store ? "" : "text-zinc-500"}>
                {sp.store}
              </span>
              <span className={sp.store === best.store ? "" : "font-semibold"}>
                ₹{sp.price}
              </span>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          <button
            onClick={handleCompare}
            className="rounded-2xl border dark:border-zinc-800 py-3 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
          >
            Compare
          </button>
          <button
            onClick={handleAdd}
            disabled={adding}
            className="rounded-2xl bg-blue-600 text-white py-3 font-medium hover:bg-blue-700 hover:shadow-xl transition disabled:opacity-60"
          >
            {adding ? "Adding..." : "Add Basket"}
          </button>
        </div>
      </div>
    </div>
  );
}
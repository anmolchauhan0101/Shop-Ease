import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Share2,
  Bell,
  ShoppingCart,
  Search,
} from "lucide-react";

import { useCart } from "../store/cartStore";
import { useAuth } from "../store/authStore";
import { api } from "../lib/api";

export default function Compare() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCart((state) => state.addToCart);
  const isAuthenticated = useAuth((s) => s.isAuthenticated());

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [addingStore, setAddingStore] = useState(null);

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resets loading state for a new data fetch
    setStatus("loading");

    api
      .get(`/products/${id}`)
      .then((data) => {
        if (!cancelled) {
          setProduct(data);
          setStatus("ready");
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  async function handleAddBasket(store) {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: `/compare/${id}` } });
      return;
    }
    setAddingStore(store);
    try {
      await addToCart(id, store, 1);
      navigate("/basket");
    } catch {
      // surfaced via cartStore.error
    } finally {
      setAddingStore(null);
    }
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black dark:text-white">
        Loading product…
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-zinc-50 dark:bg-black dark:text-white px-6 text-center">
        <p className="text-red-500">Couldn't load this product: {error}</p>
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 font-semibold"
        >
          ← Back home
        </button>
      </div>
    );
  }

  const stores = [...product.storePrices].sort((a, b) => a.price - b.price);
  const history = product.priceHistory.map((p) => p.price);
  const maxHistory = Math.max(...history, 1);
  const trendPct =
    history.length > 1
      ? Math.round(
          ((history[history.length - 1] - history[0]) / history[0]) * 100
        )
      : 0;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black dark:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur border-b dark:border-zinc-800">
        <div className="max-w-[1500px] mx-auto h-20 px-8 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <button onClick={() => navigate("/")} className="text-zinc-500">
              <ArrowLeft />
            </button>
            <h1 className="text-2xl font-black text-blue-600">Shop Ease</h1>
            <nav className="hidden lg:flex gap-8 text-zinc-500">
              <button onClick={() => navigate("/explore")}>Deals</button>
              <button>Markets</button>
              <button>History</button>
              <button>Favorites</button>
            </nav>
          </div>

          <div className="hidden md:block relative w-[420px]">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              placeholder="Search products..."
              className="w-full h-12 pl-14 rounded-full bg-zinc-100 dark:bg-zinc-900 outline-none"
            />
          </div>

          <div className="flex gap-3">
            <button className="w-11 h-11 rounded-full bg-zinc-100 dark:bg-zinc-900">
              <Bell />
            </button>
            <button
              onClick={() => navigate("/basket")}
              className="w-11 h-11 rounded-full bg-zinc-100 dark:bg-zinc-900"
            >
              <ShoppingCart />
            </button>
            {isAuthenticated ? (
              <button
                onClick={() => navigate("/basket")}
                className="px-5 h-11 rounded-full bg-blue-600 text-white"
              >
                My Basket
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-5 h-11 rounded-full bg-blue-600 text-white"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        {/* PRODUCT */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-14">
          <div className="rounded-[36px] bg-white dark:bg-zinc-950 p-8">
            <img src={product.image} className="w-full rounded-3xl" alt={product.name} />
          </div>

          <div>
            <p className="text-blue-600">{product.category} • {product.subtitle}</p>
            <h1 className="mt-4 text-5xl font-black">{product.name}</h1>
            <p className="mt-5 text-zinc-500">{product.description}</p>

            <div className="mt-10 flex gap-14">
              <div>
                <p className="text-zinc-500">Average Price</p>
                <h2 className="text-6xl font-black">₹{product.averagePrice}</h2>
              </div>
              <div>
                <p className="text-zinc-500">Price Trend</p>
                <h2
                  className={`text-3xl font-bold ${
                    trendPct <= 0 ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {trendPct <= 0 ? "↘" : "↗"} {Math.abs(trendPct)}%
                </h2>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl">
                <Heart size={18} className="inline mr-2" />
                Watchlist
              </button>
              <button className="border px-8 py-4 rounded-2xl">
                <Share2 size={18} className="inline mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* MARKET */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold mb-8">Market Comparison</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {stores.map((item, i) => (
              <div
                key={item.store}
                className={`rounded-[32px] bg-white dark:bg-zinc-950 p-8 hover:-translate-y-2 hover:shadow-2xl transition ${
                  i === 0 ? "ring-2 ring-blue-600" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold">{item.store}</h3>
                  {i === 0 && (
                    <span className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
                      BEST
                    </span>
                  )}
                </div>
                <p className="mt-2 text-zinc-500">Quick Delivery</p>
                <div className="mt-8 text-6xl font-black text-blue-600">
                  ₹{item.price}
                </div>
                <div className="mt-8 space-y-3">
                  <p>Delivery → {item.delivery}</p>
                  <p>ETA → {item.eta}</p>
                </div>
                <button
                  onClick={() => handleAddBasket(item.store)}
                  disabled={addingStore === item.store}
                  className="mt-10 w-full bg-blue-600 text-white py-4 rounded-2xl disabled:opacity-60"
                >
                  {addingStore === item.store ? "Adding…" : "Add Basket →"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* PRICE HISTORY */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold mb-10">Price History (7 days)</h2>
          <div className="bg-white dark:bg-zinc-950 rounded-[32px] p-8">
            <div className="flex items-end gap-5 h-[250px]">
              {history.map((v, i) => (
                <div
                  key={i}
                  className="flex-1 bg-blue-600 rounded-t-xl"
                  style={{ height: `${(v / maxHistory) * 230 + 10}px` }}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
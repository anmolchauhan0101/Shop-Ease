import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Bell,
  Heart,
  BadgePercent,
  ExternalLink,
} from "lucide-react";

import { api } from "../lib/api";
import { useCart } from "../store/cartStore";
import { useAuth } from "../store/authStore";

export default function DealDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCart((state) => state.addToCart);
  const isAuthenticated = useAuth((s) => s.isAuthenticated());

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resets loading state for a new data fetch
    setStatus("loading");

    api
      .get(`/products/${id}`)
      .then(async (data) => {
        if (cancelled) return;
        setProduct(data);
        setStatus("ready");
        try {
          const all = await api.get(`/products?category=${encodeURIComponent(data.category)}`);
          if (!cancelled) setRelated(all.filter((p) => p.id !== data.id).slice(0, 4));
        } catch {
          // related products are a nice-to-have; ignore failures
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

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f8fb]">
        Loading deal…
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#f6f8fb] px-6 text-center">
        <p className="text-red-500">Couldn't load this deal: {error}</p>
        <button onClick={() => navigate("/")} className="text-blue-600 font-semibold">
          ← Back home
        </button>
      </div>
    );
  }

  const stores = [...product.storePrices].sort((a, b) => a.price - b.price);
  const best = stores[0];
  const prices = product.priceHistory.map((p) => p.price);
  const maxPrice = Math.max(...prices, 1);

  async function handleGoToDeal() {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: `/deal/${id}` } });
      return;
    }
    await addToCart(product.id, best.store, 1);
    navigate("/basket");
  }

  return (
    <div className="min-h-screen bg-[#f6f8fb]">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-[1600px] mx-auto h-20 px-8 flex items-center justify-between">
          <h1 className="text-3xl font-black text-blue-700">Shop Ease</h1>
          <nav className="hidden lg:flex gap-10">
            <button onClick={() => navigate("/explore")}>Explore</button>
            <button>Stores</button>
            <button className="text-blue-600 border-b-2">Deals</button>
          </nav>
          <div className="flex items-center gap-4">
            <Search />
            <div className="relative cursor-pointer" onClick={() => navigate("/basket")}>
              <ShoppingCart />
            </div>
            <Bell />
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-10 py-8">
        <p className="text-zinc-500">
          Home › {product.category} › {product.name}
        </p>

        <div className="mt-6 grid xl:grid-cols-[1fr_340px] gap-8">
          <div>
            <div className="overflow-hidden rounded-[34px] bg-white">
              <div className="relative">
                <img src={product.image} className="w-full h-[520px] object-cover" alt={product.name} />
                <div className="absolute left-5 top-5 flex gap-3">
                  {product.tags?.map((tag) => (
                    <div key={tag} className="rounded-full bg-red-500 text-white px-4 py-2">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-5xl font-black">{product.name}</h1>
                    <p className="mt-5 text-zinc-500">{product.description}</p>
                  </div>
                  <Heart className="shrink-0" />
                </div>

                <div className="mt-8 flex gap-10 text-zinc-600">
                  <div>
                    <BadgePercent className="inline" /> Best price ₹{best.price} at {best.store}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[32px] bg-white p-8">
              <div className="flex justify-between mb-8">
                <h2 className="text-3xl font-bold">7-Day Price History</h2>
                <div className="rounded-full bg-green-100 text-green-700 px-4 py-2">
                  Live prices
                </div>
              </div>
              <div className="flex gap-4 items-end h-[240px]">
                {prices.map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-blue-700 rounded-t-xl"
                    style={{
                      height: `${(v / maxPrice) * 220 + 10}px`,
                      opacity: i === prices.length - 1 ? 1 : 0.35,
                    }}
                  />
                ))}
              </div>
            </div>

            {related.length > 0 && (
              <section className="mt-16">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">People also compared</h2>
                  <button onClick={() => navigate("/explore")} className="text-blue-600">
                    View all →
                  </button>
                </div>
                <div className="mt-8 grid grid-cols-2 xl:grid-cols-4 gap-6">
                  {related.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => navigate(`/deal/${item.id}`)}
                      className="rounded-[28px] bg-white overflow-hidden cursor-pointer hover:shadow-lg transition"
                    >
                      <img src={item.image} className="h-[220px] w-full object-cover" alt={item.name} />
                      <div className="p-5">
                        <h3>{item.name}</h3>
                        <div className="mt-3 text-3xl font-black text-blue-700">
                          ₹{item.bestPrice.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT */}
          <div>
            <div className="rounded-[32px] bg-white p-8">
              <h3 className="font-bold mb-6">COMPARE &amp; SAVE</h3>
              <div className="space-y-4">
                {stores.map((s, i) => (
                  <div
                    key={s.store}
                    className={`rounded-3xl p-5 ${
                      i === 0 ? "bg-blue-700 text-white" : "bg-zinc-100"
                    }`}
                  >
                    {s.store} ₹{s.price}
                  </div>
                ))}
              </div>
              <button
                onClick={handleGoToDeal}
                className="mt-8 w-full bg-blue-700 text-white rounded-2xl py-5"
              >
                Go To Deal
                <ExternalLink className="inline ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
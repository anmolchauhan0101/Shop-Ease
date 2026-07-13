import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Bell, ShoppingCart, Flame } from "lucide-react";
import { api } from "../lib/api";
import { useCart } from "../store/cartStore";
import { useAuth } from "../store/authStore";

export default function Explore() {
  const navigate = useNavigate();
  const addToCart = useCart((state) => state.addToCart);
  const isAuthenticated = useAuth((s) => s.isAuthenticated());

  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [deals, setDeals] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/products/meta/categories").then(setCategories).catch(() => {});
  }, []);

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resets loading state for a new data fetch
    setStatus("loading");

    const query =
      activeCategory === "All" ? "" : `?category=${encodeURIComponent(activeCategory)}`;

    api
      .get(`/products${query}`)
      .then((data) => {
        if (!cancelled) {
          setDeals(data);
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
  }, [activeCategory]);

  async function handleAdd(product) {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/explore" } });
      return;
    }
    const best = [...product.storePrices].sort((a, b) => a.price - b.price)[0];
    await addToCart(product.id, best.store, 1);
    navigate("/basket");
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-[1800px] mx-auto h-20 px-8 flex items-center justify-between">
          <h1
            onClick={() => navigate("/")}
            className="text-2xl font-black text-blue-600 cursor-pointer"
          >
            Shop Ease
          </h1>
          <div className="relative hidden md:block w-[540px]">
            <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              placeholder="Search deals"
              className="w-full h-14 rounded-full bg-zinc-100 pl-14 outline-none"
            />
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-zinc-100">
              <Bell />
            </button>
            <button
              onClick={() => navigate("/basket")}
              className="w-12 h-12 rounded-full bg-zinc-100"
            >
              <ShoppingCart />
            </button>
          </div>
        </div>
      </header>

      {/* LAYOUT */}
      <div className="max-w-[1800px] mx-auto grid lg:grid-cols-[260px_1fr]">
        {/* LEFT */}
        <aside className="hidden lg:block border-r px-8 py-10">
          <h1 className="text-5xl font-black text-blue-600">Shop Ease</h1>
          <div className="mt-16 space-y-5">
            {["Dashboard", "Explore", "Price Alerts", "Store Map", "Smart Split", "Settings"].map(
              (item) => (
                <button key={item} className="block text-lg hover:text-blue-600">
                  {item}
                </button>
              )
            )}
          </div>
        </aside>

        {/* CENTER */}
        <main className="px-6 md:px-10 py-10">
          {/* HERO */}
          <section className="rounded-[42px] bg-gradient-to-br from-green-300 to-yellow-100 p-14">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/60 px-5 py-3">
              <Flame />
              Trending Grocery Deals
            </div>
            <h1 className="mt-8 text-[52px] md:text-[72px] leading-[0.9] font-black max-w-[850px]">
              Save More.
              <br />
              Shop Better.
            </h1>
            <p className="mt-8 text-xl max-w-[700px]">
              Explore live discounts and compare prices instantly across stores.
            </p>
          </section>

          {/* FILTER */}
          <div className="mt-10 flex gap-4 overflow-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-7 py-3 shrink-0 ${
                  activeCategory === cat ? "bg-black text-white" : "bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* DEALS */}
          <section className="mt-14">
            <div className="flex justify-between mb-8">
              <div>
                <h2 className="text-5xl font-black">Flash Deals</h2>
                <p className="mt-2 text-zinc-500">Today's grocery offers</p>
              </div>
            </div>

            {status === "loading" && <p className="text-zinc-500">Loading deals…</p>}
            {status === "error" && (
              <p className="text-red-500">Couldn't load deals: {error}</p>
            )}
            {status === "ready" && deals.length === 0 && (
              <p className="text-zinc-500">No products in this category yet.</p>
            )}

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {deals.map((item) => {
                const best = [...item.storePrices].sort((a, b) => a.price - b.price)[0];
                return (
                  <div
                    key={item.id}
                    className="group rounded-[34px] overflow-hidden bg-white hover:-translate-y-2 hover:shadow-xl duration-300"
                  >
                    <img
                      onClick={() => navigate(`/deal/${item.id}`)}
                      src={item.image}
                      alt={item.name}
                      className="h-[240px] w-full object-cover group-hover:scale-105 duration-500 cursor-pointer"
                    />
                    <div className="p-7">
                      <h3
                        onClick={() => navigate(`/deal/${item.id}`)}
                        className="text-3xl font-bold cursor-pointer"
                      >
                        {item.name}
                      </h3>
                      <div className="mt-4 flex justify-between">
                        <div className="text-4xl font-black text-blue-600">₹{best.price}</div>
                        <div className="text-green-600 font-bold">at {best.store}</div>
                      </div>
                      <div className="mt-8 grid grid-cols-2 gap-3">
                        <button
                          onClick={() => navigate(`/compare/${item.id}`)}
                          className="border rounded-2xl py-4"
                        >
                          Compare
                        </button>
                        <button
                          onClick={() => handleAdd(item)}
                          className="bg-blue-600 text-white rounded-2xl py-4"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
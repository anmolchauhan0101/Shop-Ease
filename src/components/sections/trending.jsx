import { useEffect, useState } from "react";
import ProductCard from "../cards/ProductCard";
import { api } from "../../lib/api";

export default function Trending() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await api.get("/products");
        if (!cancelled) {
          setProducts(data.slice(0, 6));
          setStatus("ready");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setStatus("error");
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="mt-20 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5">
        <div>
          <h2 className="text-4xl font-black dark:text-white">Trending Now</h2>
          <p className="mt-2 text-zinc-500">
            Live price comparison across your favorite stores
          </p>
        </div>
      </div>

      {status === "loading" && (
        <p className="mt-10 text-zinc-500">Loading products…</p>
      )}

      {status === "error" && (
        <p className="mt-10 text-red-500">
          Couldn't load products: {error}. Is the backend server running?
        </p>
      )}

      {status === "ready" && products.length === 0 && (
        <p className="mt-10 text-zinc-500">
          No products yet — run the seed script on the backend.
        </p>
      )}

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
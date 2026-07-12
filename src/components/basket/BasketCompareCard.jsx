import { CheckCircle, Clock, Truck } from "lucide-react";

export default function BasketCompareCard({
  store,
  total,
  delivery,
  eta,
  savings,
  recommended = false,
}) {
  return (
    <div
      className={`rounded-3xl border p-6 transition-all duration-300 ${
        recommended
          ? "border-blue-600 bg-blue-50 shadow-lg"
          : "border-zinc-200 bg-white hover:shadow-md"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-zinc-900">{store}</h3>

          <p className="mt-1 flex items-center gap-2 text-sm text-zinc-500">
            <Clock size={14} />
            {eta}
          </p>
        </div>

        {recommended && (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Recommended
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mt-6">
        <p className="text-sm text-zinc-500">Basket Total</p>

        <h2 className="mt-1 text-4xl font-black text-blue-600">
          ₹{total}
        </h2>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-zinc-500">
            <Truck size={15} />
            Delivery
          </span>

          <span className="font-semibold text-zinc-800">
            {delivery}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-500">Savings</span>

          <span className="font-semibold text-green-600">
            {savings}
          </span>
        </div>
      </div>

      {/* CTA */}
      <button
        className={`mt-8 w-full rounded-2xl py-3 font-semibold transition ${
          recommended
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
        }`}
      >
        {recommended ? (
          <span className="flex items-center justify-center gap-2">
            <CheckCircle size={18} />
            Checkout Here
          </span>
        ) : (
          "Compare Store"
        )}
      </button>
    </div>
  );
}
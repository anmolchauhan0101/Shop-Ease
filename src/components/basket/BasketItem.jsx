import {
  Minus,
  Plus,
  Trash2,
  BadgePercent,
} from "lucide-react";

export default function BasketItem({
  image,
  name,
  desc,
  price,
  qty,
  save,
}) {
  return (
    <div
      className="
      group

      flex
      items-center

      gap-5

      rounded-3xl

      border
      border-zinc-200

      bg-white

      p-5

      transition-all
      duration-300

      hover:-translate-y-1
      hover:shadow-lg
      "
    >
      {/* Product Image */}

      <div
        className="
        h-24
        w-24

        overflow-hidden

        rounded-2xl

        bg-zinc-100

        flex
        items-center
        justify-center

        shrink-0
        "
      >
        <img
          src={image}
          alt={name}
          className="
          h-full
          w-full

          object-cover

          transition-transform
          duration-300

          group-hover:scale-105
          "
        />
      </div>

      {/* Product Details */}

      <div className="flex-1">

        <h3
          className="
          text-xl

          font-bold

          text-zinc-900
          "
        >
          {name}
        </h3>

        <p
          className="
          mt-1

          text-sm

          text-zinc-500
          "
        >
          {desc}
        </p>

        <div className="mt-4 flex items-center gap-4">

          {/* Quantity */}

          <div
            className="
            flex

            items-center

            rounded-xl

            border

            border-zinc-200

            bg-zinc-50

            overflow-hidden
            "
          >
            <button
              className="
              h-10
              w-10

              flex
              items-center
              justify-center

              hover:bg-zinc-200

              transition
              "
            >
              <Minus size={16} />
            </button>

            <span
              className="
              w-10

              text-center

              font-semibold
              "
            >
              {qty}
            </span>

            <button
              className="
              h-10
              w-10

              flex
              items-center
              justify-center

              hover:bg-zinc-200

              transition
              "
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Savings */}

          <div
            className="
            inline-flex

            items-center

            gap-2

            rounded-full

            bg-green-100

            px-3

            py-1

            text-sm

            font-medium

            text-green-700
            "
          >
            <BadgePercent size={14} />
            {save}
          </div>

        </div>

      </div>

      {/* Price */}

      <div
        className="
        flex

        flex-col

        items-end
        "
      >
        <div
          className="
          text-3xl

          font-black

          text-zinc-900
          "
        >
          {price}
        </div>

        <button
          className="
          mt-5

          flex

          items-center

          gap-2

          text-sm

          text-red-500

          hover:text-red-600

          transition
          "
        >
          <Trash2 size={15} />
          Remove
        </button>
      </div>
    </div>
  );
}
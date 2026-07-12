import {
  X
} from "lucide-react";

import {
  useLayout
}
from "../../store/layoutStore";

export default function RightPanel() {

  const {
    rightOpen,
    toggleRight
  } = useLayout();

  const searches = [
    {
      name: "Amul Milk (1L)",
      price: "₹54",
      source: "Lowest at Blinkit"
    },
    {
      name: "Organic Eggs (6pk)",
      price: "₹82",
      source: "Lowest at Zepto"
    }
  ];

  return (

    <aside

      className={`

      fixed

      right-0

      top-[81px]

      z-30

      w-[300px]

      h-[calc(100vh-81px)]

      overflow-auto

      bg-white

      dark:bg-black

      border-l

      dark:border-zinc-800

      px-5

      py-6

      shadow-xl

      transition-transform

      duration-300

      ${

        rightOpen

        ?

        "translate-x-0"

        :

        "translate-x-full"

      }

      `}
    >

      {/* Header */}

      <div
        className="
        flex

        justify-between

        items-center

        mb-8
        "
      >

        <div>

          <h3
            className="
            text-lg

            font-semibold

            dark:text-white
            "
          >

            Activity

          </h3>

          <p
            className="
            text-sm

            text-zinc-500
            "
          >

            Dashboard

          </p>

        </div>

        <button

          onClick={toggleRight}

          className="
          hover:rotate-90

          transition
          "
        >

          <X size={18}/>

        </button>

      </div>

      {/* Savings */}

      <div
        className="
        rounded-3xl

        bg-gradient-to-br

        from-green-100

        to-green-200

        p-6
        "
      >

        <p
          className="
          text-sm
          "
        >

          Today's Savings

        </p>

        <h1
          className="
          mt-2

          text-5xl

          font-bold
          "
        >

          ₹184

        </h1>

        <p
          className="
          mt-2

          text-sm
          "
        >

          Across 4 items

        </p>

      </div>

      {/* Searches */}

      <div
        className="
        mt-10
        "
      >

        <h4
          className="
          font-semibold

          dark:text-white

          mb-5
          "
        >

          Recent Searches

        </h4>

        <div className="space-y-4">

          {

            searches.map(
              (item)=>(

                <button

                  key={item.name}

                  className="
                  w-full

                  rounded-2xl

                  border

                  dark:border-zinc-800

                  p-4

                  text-left

                  hover:shadow-lg

                  transition
                  "
                >

                  <div
                    className="
                    flex

                    justify-between
                    "
                  >

                    <div>

                      <h4
                        className="
                        dark:text-white
                        "
                      >

                        {item.name}

                      </h4>

                      <p
                        className="
                        text-sm

                        mt-1

                        text-zinc-500
                        "
                      >

                        {item.source}

                      </p>

                    </div>

                    <span
                      className="
                      font-bold

                      text-green-600
                      "
                    >

                      {item.price}

                    </span>

                  </div>

                </button>

              )

            )

          }

        </div>

      </div>

      {/* CTA */}

      <button
        className="
        mt-8

        w-full

        rounded-2xl

        bg-blue-600

        py-4

        text-white

        hover:bg-blue-700

        transition
        "
      >

        View Basket →

      </button>

    </aside>

  );

}
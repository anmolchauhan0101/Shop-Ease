import {
  Apple,
  Milk,
  Sandwich,
  ShoppingBag,
  Settings,
  ChevronRight,
  X
} from "lucide-react";

import {
  useLayout
} from "../../store/layoutStore";

export default function Sidebar() {

  const {
    leftOpen,
    toggleLeft
  } = useLayout();

  const categories = [
    {
      icon: Apple,
      name: "Fruits"
    },
    {
      icon: ShoppingBag,
      name: "Vegetables"
    },
    {
      icon: Milk,
      name: "Dairy"
    },
    {
      icon: Sandwich,
      name: "Snacks"
    }
  ];

  const stores = [
    "Blinkit",
    "Instamart",
    "Zepto"
  ];

  return (

    <aside

      className={`

      fixed

      left-0

      top-[81px]

      z-30

      flex

      flex-col

      w-[230px]

      h-[calc(100vh-81px)]

      bg-white

      dark:bg-black

      border-r

      dark:border-zinc-800

      px-5

      py-6

      overflow-auto

      shadow-xl

      transition-transform

      duration-300

      ${

        leftOpen

        ?

        "translate-x-0"

        :

        "-translate-x-full"

      }

      `}
    >

      {/* Header */}

      <div
        className="
        flex

        items-center

        justify-between

        mb-8
        "
      >

        <h2
          className="
          text-lg

          font-semibold

          dark:text-white
          "
        >

          Categories

        </h2>

        <button

          onClick={toggleLeft}

          className="
          hover:rotate-90

          transition
          "
        >

          <X size={18} />

        </button>

      </div>

      {/* Categories */}

      <div className="space-y-2">

        {

          categories.map(
            ({ icon: Icon, name }, index)=>(

              <button

                key={name}

                className={`

                w-full

                flex

                items-center

                justify-between

                rounded-xl

                px-4

                py-3

                transition-all

                ${

                  index===0

                  ?

                  "bg-blue-600 text-white"

                  :

                  "dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"

                }

                `}
              >

                <div
                  className="
                  flex

                  items-center

                  gap-3
                  "
                >

                  <Icon size={18}/>

                  {name}

                </div>

                <ChevronRight size={16}/>

              </button>

            )

          )

        }

      </div>

      {/* Stores */}

      <div
        className="
        mt-10
        "
      >

        <h3
          className="
          text-xs

          uppercase

          text-zinc-500

          mb-4
          "
        >

          Filter By Store

        </h3>

        <div className="space-y-3">

          {

            stores.map(
              (store)=>(

                <label

                  key={store}

                  className="
                  flex

                  items-center

                  gap-3

                  dark:text-white
                  "
                >

                  <input

                    type="checkbox"

                    defaultChecked

                    className="
                    accent-blue-600
                    "
                  />

                  {store}

                </label>

              )

            )

          }

        </div>

      </div>

      {/* Footer */}

      <div
        className="
        mt-auto

        pt-10
        "
      >

        <button
          className="
          flex

          items-center

          gap-3

          text-zinc-500

          hover:text-blue-600

          transition
          "
        >

          <Settings size={18}/>

          Settings

        </button>

      </div>

    </aside>

  );

}
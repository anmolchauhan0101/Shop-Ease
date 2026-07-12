import {
  Moon,
  Sun,
  ShoppingCart,
  Search,
  Bell,
  Menu
} from "lucide-react";

import {
  useTheme
} from "../../store/themeStore";

import {
  useLayout
} from "../../store/layoutStore";

export default function Navbar() {

  const {
    theme,
    toggleTheme
  } = useTheme();

  const {
    toggleLeft,
    toggleRight
  } = useLayout();

  return (

    <nav
      className="
      sticky
      top-0
      z-50

      h-20

      px-5
      md:px-8

      flex
      items-center
      justify-between

      border-b

      bg-white/80
      dark:bg-black/80

      backdrop-blur-md

      dark:border-zinc-800
      "
    >

      {/* Left */}

      <div
        className="
        flex
        items-center
        gap-4
        "
      >

        <button

          onClick={toggleLeft}

          className="
          w-11
          h-11

          rounded-full

          bg-zinc-100

          dark:bg-zinc-900

          flex
          items-center
          justify-center

          dark:text-white

          hover:scale-105

          transition
          "
        >

          <Menu size={18} />

        </button>

        <div
          className="
          w-10
          h-10

          rounded-2xl

          bg-blue-600

          text-white

          flex
          items-center
          justify-center

          font-bold
          "
        >

          S

        </div>

        <h1
          className="
          hidden
          sm:block

          text-2xl

          font-bold

          text-blue-600
          "
        >

          Shop Ease

        </h1>

      </div>

      {/* Search */}

      <div
        className="
        hidden
        md:block

        relative

        flex-1

        max-w-[700px]

        mx-10
        "
      >

        <Search
          size={18}

          className="
          absolute

          left-5

          top-1/2

          -translate-y-1/2

          text-zinc-500
          "
        />

        <input

          type="text"

          placeholder="Search groceries..."

          className="
          w-full

          h-[56px]

          rounded-full

          pl-14

          pr-6

          bg-zinc-100

          dark:bg-zinc-900

          dark:text-white

          outline-none

          focus:ring-2

          focus:ring-blue-500

          focus:shadow-xl

          transition
          "

        />

      </div>

      {/* Actions */}

      <div
        className="
        flex

        items-center

        gap-3
        "
      >

        <button

          onClick={toggleRight}

          className="
          w-11

          h-11

          rounded-full

          bg-zinc-100

          dark:bg-zinc-900

          flex

          items-center

          justify-center

          dark:text-white

          hover:scale-105

          transition
          "
        >

          <Bell size={18} />

        </button>

        <button

          onClick={toggleTheme}

          className="
          w-11

          h-11

          rounded-full

          bg-zinc-100

          dark:bg-zinc-900

          flex

          items-center

          justify-center

          dark:text-white

          hover:rotate-12

          transition
          "
        >

          {

            theme === "dark"

            ?

            <Sun size={18} />

            :

            <Moon size={18} />

          }

        </button>

        <button
          className="
          w-11

          h-11

          rounded-full

          bg-blue-600

          text-white

          flex

          items-center

          justify-center

          hover:scale-105

          transition
          "
        >

          <ShoppingCart size={18} />

        </button>

      </div>

    </nav>

  );

}
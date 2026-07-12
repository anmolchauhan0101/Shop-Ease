import {
  TrendingDown,
  TrendingUp,
  CalendarDays,
  IndianRupee,
} from "lucide-react";

export default function PriceHistory() {

  const prices = [74, 71, 69, 67, 65, 66, 64];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (

    <section className="mt-24">

      {/* Header */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h2 className="text-4xl font-black">
            Price History
          </h2>

          <p className="text-zinc-500 mt-2">
            Last 7 day price movement
          </p>

        </div>

        <button
          className="
          rounded-xl
          border
          border-zinc-200
          px-5
          py-3
          hover:bg-zinc-100
          transition
          "
        >
          <CalendarDays className="inline mr-2" size={18}/>
          Last 7 Days
        </button>

      </div>

      {/* Cards */}

      <div className="grid lg:grid-cols-[1fr_320px] gap-8">

        {/* Graph */}

        <div
          className="
          rounded-[30px]
          bg-white
          border
          border-zinc-200
          p-8
          shadow-sm
          "
        >

          <div className="flex justify-between">

            <div>

              <p className="text-zinc-500">
                Current Price
              </p>

              <h3 className="text-5xl font-black mt-2">
                ₹64
              </h3>

            </div>

            <div
              className="
              flex
              items-center
              gap-2

              text-green-600
              font-semibold
              "
            >

              <TrendingDown size={20}/>

              14% cheaper

            </div>

          </div>

          {/* Graph */}

          <div
            className="
            mt-12

            flex
            items-end

            justify-between

            h-[280px]
            "
          >

            {

              prices.map((price,index)=>(

                <div
                  key={index}
                  className="
                  flex
                  flex-col
                  items-center
                  flex-1
                  "
                >

                  <div
                    className="
                    w-12

                    rounded-t-2xl

                    bg-gradient-to-t
                    from-blue-600
                    to-blue-300

                    hover:scale-105

                    transition
                    "
                    style={{
                      height:`${price*3}px`
                    }}
                  />

                  <span
                    className="
                    mt-4

                    text-sm

                    text-zinc-500
                    "
                  >
                    {days[index]}
                  </span>

                </div>

              ))

            }

          </div>

        </div>

        {/* Analytics */}

        <div className="space-y-6">

          {/* Lowest */}

          <div
            className="
            rounded-[28px]
            border
            border-zinc-200
            bg-white
            p-7
            "
          >

            <div className="flex justify-between">

              <div>

                <p className="text-zinc-500">
                  Lowest Price
                </p>

                <h2 className="text-4xl font-black mt-2">
                  ₹64
                </h2>

              </div>

              <TrendingDown
                className="text-green-600"
                size={30}
              />

            </div>

          </div>

          {/* Highest */}

          <div
            className="
            rounded-[28px]
            border
            border-zinc-200
            bg-white
            p-7
            "
          >

            <div className="flex justify-between">

              <div>

                <p className="text-zinc-500">
                  Highest Price
                </p>

                <h2 className="text-4xl font-black mt-2">
                  ₹74
                </h2>

              </div>

              <TrendingUp
                className="text-red-500"
                size={30}
              />

            </div>

          </div>

          {/* Average */}

          <div
            className="
            rounded-[28px]
            bg-blue-600
            text-white
            p-7
            "
          >

            <div className="flex justify-between">

              <div>

                <p className="text-blue-200">
                  Average Price
                </p>

                <h2 className="text-5xl font-black mt-2">
                  ₹68
                </h2>

              </div>

              <IndianRupee size={32}/>

            </div>

            <p className="mt-5 text-blue-100">

              Based on the last 7 days across all supported stores.

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}
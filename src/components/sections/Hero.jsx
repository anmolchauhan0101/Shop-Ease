import { useNavigate } from "react-router-dom";

export default function Hero() {

const navigate = useNavigate();

function handleCompare(){
navigate("/compare");
}

function handleExplore(){
navigate("/explore");
}

return(

<section
className="
max-w-[920px]

pt-8
"
>

{/* Badge */}

<div
className="
inline-flex

items-center

rounded-full

bg-blue-50

dark:bg-zinc-900

text-blue-600

px-5

py-2

text-sm

font-medium

mb-8
"
>

Compare Across Blinkit • Instamart • Zepto

</div>

{/* Heading */}

<h1
className="
max-w-[900px]

text-[44px]

md:text-[72px]

leading-[0.95]

font-black

tracking-[-0.03em]

text-black

dark:text-white
"
>

Find the

<span
className="
text-blue-600
"
>

{" "}cheapest{" "}

</span>

grocery delivery in seconds

</h1>

{/* Subtitle */}

<p
className="
mt-8

max-w-[720px]

text-lg

leading-8

text-zinc-500
"
>

Search once and instantly compare basket prices across all major quick-commerce platforms.

Save time, delivery fees and money.

</p>

{/* Buttons */}

<div
className="
mt-10

flex

flex-wrap

gap-4
"
>

<button

type="button"

onClick={handleCompare}

className="
rounded-2xl

bg-blue-600

px-8

py-4

text-white

font-medium

hover:bg-blue-700

hover:scale-[1.03]

shadow-lg

transition
"
>

Start Comparing →

</button>

<button

type="button"

onClick={handleExplore}

className="
rounded-2xl

bg-zinc-100

dark:bg-zinc-800

dark:text-white

px-8

py-4

font-medium

hover:bg-zinc-200

dark:hover:bg-zinc-700

hover:scale-[1.02]

transition
"
>

Explore Deals →

</button>

</div>

{/* Stats */}

<div
className="
mt-16

grid

grid-cols-2

md:grid-cols-3

gap-8

max-w-[700px]
"
>

<div>

<div
className="
text-4xl

font-bold

text-blue-600
"
>

10k+

</div>

<div
className="
mt-2

text-zinc-500
"
>

Price Checks

</div>

</div>

<div>

<div
className="
text-4xl

font-bold

text-green-600
"
>

₹2L+

</div>

<div
className="
mt-2

text-zinc-500
"
>

Potential Savings

</div>

</div>

<div>

<div
className="
text-4xl

font-bold

text-purple-600
"
>

3 Apps

</div>

<div
className="
mt-2

text-zinc-500
"
>

Compared

</div>

</div>

</div>

</section>

);

}
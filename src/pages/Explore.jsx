import { Search, Bell, ShoppingCart, Flame, ArrowRight } from "lucide-react";

const categories=[ "All", "Fruits", "Dairy", "Snacks", "Beverages", "Vegetables", "Household" ];

const deals=[
{
name:"Amul Gold Milk",
price:"₹54",
save:"Save ₹14",
img:"https://images.unsplash.com/photo-1563636619-e9143da7973b"
},

{
name:"Fresh Eggs",
price:"₹82",
save:"Save ₹17",
img:"https://images.unsplash.com/photo-1518569656558-1f25e69d93d7"
},

{
name:"Atta Bread",
price:"₹45",
save:"Save ₹15",
img:"https://images.unsplash.com/photo-1509440159596-0249088772ff"
}
];

export default function Explore(){

return(

<div
className=" min-h-screen
bg-zinc-50
dark:bg-black
"
>

{/* NAVBAR */}

<header
className="
sticky
top-0
z-50

bg-white/90
backdrop-blur
border-b
"
>

<div
className="
max-w-[1800px]
mx-auto
h-20
px-8
flex
items-center
justify-between
"
>

<h1
className="
text-2xl
font-black
text-blue-600
"
>

Shop Ease

</h1>

<div
className="
relative
hidden
md:block
w-[540px]
"
>

<Search
size={18}

className="
absolute
left-5
top-1/2
-translate-y-1/2
"
/>

<input

placeholder="Search deals"

className="
w-full
h-14
rounded-full
bg-zinc-100
pl-14
outline-none
"
/>

</div>

<div
className="
flex
gap-4
"
>

<button className="w-12 h-12 rounded-full bg-zinc-100">
<Bell/>
</button>

<button className="w-12 h-12 rounded-full bg-zinc-100">
<ShoppingCart/>
</button>

</div>

</div>

</header>

{/* LAYOUT */}

<div
className="
max-w-[1800px]

mx-auto

grid

lg:grid-cols-[260px_1fr_340px]
"
>

{/* LEFT */}

<aside
className="
hidden
lg:block

border-r

px-8

py-10
"
>

<h1
className="
text-5xl

font-black

text-blue-600
"
>

Shop Ease

</h1>

<div
className="
mt-16

space-y-5
"
>

{

[
"Dashboard",
"Explore",
"Price Alerts",
"Store Map",
"Smart Split",
"Settings"
].map(
(item)=>(

<button

key={item}

className="
block

text-lg

hover:text-blue-600
"
>

{item}

</button>

)

)

}

</div>

</aside>

{/* CENTER */}

<main
className="
px-10

py-10
"
>

{/* HERO */}

<section
className="
rounded-[42px]

bg-gradient-to-br

from-green-300

to-yellow-100

p-14
"
>

<div
className="
inline-flex

items-center

gap-3

rounded-full

bg-white/60

px-5

py-3
"
>

<Flame/>

Trending Grocery Deals

</div>

<h1
className="
mt-8

text-[72px]

leading-[0.9]

font-black

max-w-[850px]
"
>

Save More.

<br/>

Shop Better.

</h1>

<p
className="
mt-8

text-xl

max-w-[700px]
"
>

Explore live discounts and compare prices instantly across stores.

</p>

<div
className="
mt-10

flex

gap-4
"
>

<button
className="
bg-black

text-white

rounded-2xl

px-8

py-4
"
>

Grab Deal

</button>

<button
className="
bg-white

rounded-2xl

px-8

py-4
"
>

Compare Prices

</button>

</div>

</section>

{/* FILTER */}

<div
className="
mt-10

flex

gap-4

overflow-auto
"
>

{

categories.map(
(cat,index)=>(

<button

key={cat}

className={`

rounded-full

px-7

py-3

shrink-0

${
index===0

?

"bg-black text-white"

:

"bg-white"
}

`}
>

{cat}

</button>

)

)

}

</div>

{/* DEALS */}

<section
className="
mt-14
"
>

<div
className="
flex

justify-between

mb-8
"
>

<div>

<h2
className="
text-5xl

font-black
"
>

Flash Deals

</h2>

<p
className="
mt-2

text-zinc-500
"
>

Today's grocery offers

</p>

</div>

<button
className="
text-blue-600

font-bold
"
>

View All →

</button>

</div>

<div
className="
grid

md:grid-cols-2

xl:grid-cols-3

gap-8
"
>

{

deals.map(
(item)=>(

<div

key={item.name}

className="
group

rounded-[34px]

overflow-hidden

bg-white

hover:-translate-y-2

hover:shadow-xl

duration-300
"
>

<img

src={item.img}

className="
h-[240px]

w-full

object-cover

group-hover:scale-105

duration-500
"
/>

<div className="p-7">

<h3
className="
text-3xl

font-bold
"
>

{item.name}

</h3>

<div
className="
mt-4

flex

justify-between
"
>

<div
className="
text-4xl

font-black

text-blue-600
"
>

{item.price}

</div>

<div
className="
text-green-600

font-bold
"
>

{item.save}

</div>

</div>

<button
className="
mt-8

w-full

bg-blue-600

text-white

rounded-2xl

py-4
"
>

Compare

</button>

</div>

</div>

)

)

}

</div>

</section>

</main>

{/* RIGHT */}

<aside
className="
hidden

xl:block

border-l

p-8
"
>

<div
className="
rounded-[36px]

bg-white

p-8
"
>

<h2
className="
text-5xl

font-black
"
>

Deal Basket

</h2>

<p
className="
mt-3

text-zinc-500
"
>

Best price selection

</p>

<div
className="
mt-10

space-y-4
"
>

<div className="rounded-2xl bg-zinc-100 p-7">
Milk → ₹56
</div>

<div className="rounded-2xl bg-zinc-100 p-7">
Bread → ₹49
</div>

</div>

<div
className="
mt-10

flex

justify-between

font-bold

text-3xl
"
>

<span>Total</span>

₹105

</div>

<button
className="
mt-8

w-full

bg-blue-600

text-white

rounded-2xl

py-5
"
>

Checkout →

</button>

</div>

</aside>

</div>

</div>

)

}
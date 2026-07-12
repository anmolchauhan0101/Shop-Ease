import {
ArrowLeft,
Heart,
Share2,
Bell,
ShoppingCart,
Search
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useCart } from "../store/cartStore";

export default function Compare() {

const navigate = useNavigate();

const addToCart =
useCart(
(state)=>state.addToCart
);

const stores = [
{
store:"Blinkit",
price:"₹68",
delivery:"₹15",
eta:"8 min"
},
{
store:"Instamart",
price:"₹64",
delivery:"FREE",
eta:"12 min"
},
{
store:"Zepto",
price:"₹67",
delivery:"₹10",
eta:"6 min"
}
];

const history = [
42,
58,
63,
74,
61,
55,
66
];

const products = [
{
name:"Fresh Milk 1L",
price:"₹65"
},
{
name:"Toned Milk",
price:"₹44"
},
{
name:"Cow Milk",
price:"₹82"
},
{
name:"Tetra Milk",
price:"₹54"
}
];

function handleAddBasket(price){

addToCart({

name:"Amul Gold Full Cream Milk",

image:
"https://images.unsplash.com/photo-1563636619-e9143da7973b",

price:Number(
price.replace("₹","")
)

});

navigate("/basket");

}

return(

<div
className="
min-h-screen
bg-zinc-50
dark:bg-black
dark:text-white
"
>

{/* HEADER */}

<header
className="
sticky
top-0
z-50

bg-white/90
dark:bg-black/90

backdrop-blur

border-b

dark:border-zinc-800
"
>

<div
className="
max-w-[1500px]
mx-auto

h-20

px-8

flex
items-center
justify-between
"
>

<div
className="
flex
items-center
gap-10
"
>

<button
onClick={()=>navigate("/")}

className="
text-zinc-500
"
>

<ArrowLeft/>

</button>

<h1
className="
text-2xl
font-black
text-blue-600
"
>

Shop Ease

</h1>

<nav
className="
hidden
lg:flex
gap-8
text-zinc-500
"
>

<button>Deals</button>

<button>Markets</button>

<button>History</button>

<button>Favorites</button>

</nav>

</div>

<div
className="
hidden
md:block

relative

w-[420px]
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

placeholder="Search products..."

className="
w-full
h-12
pl-14

rounded-full

bg-zinc-100

dark:bg-zinc-900

outline-none
"
/>

</div>

<div
className="
flex
gap-3
"
>

<button
className="
w-11
h-11
rounded-full
bg-zinc-100
dark:bg-zinc-900
"
>

<Bell/>

</button>

<button

onClick={()=>navigate("/basket")}

className="
w-11
h-11
rounded-full
bg-zinc-100
dark:bg-zinc-900
"
>

<ShoppingCart/>

</button>

<button
className="
px-5

h-11

rounded-full

bg-blue-600

text-white
"
>

Sign In

</button>

</div>

</div>

</header>

{/* CONTENT */}

<div
className="
max-w-[1400px]

mx-auto

px-8

py-12
"
>

{/* PRODUCT */}

<div
className="
grid

lg:grid-cols-[380px_1fr]

gap-14
"
>

<div
className="
rounded-[36px]

bg-white

dark:bg-zinc-950

p-8
"
>

<img

src="https://images.unsplash.com/photo-1563636619-e9143da7973b"

className="
w-full
rounded-3xl
"
/>

</div>

<div>

<p
className="
text-blue-600
"
>

Dairy • Fresh Milk

</p>

<h1
className="
mt-4

text-5xl

font-black
"
>

Amul Gold Full Cream Milk

</h1>

<p
className="
mt-5

text-zinc-500
"
>

1 Litre Tetra Pack

</p>

<div
className="
mt-10

flex

gap-14
"
>

<div>

<p className="text-zinc-500">

Average Price

</p>

<h2
className="
text-6xl

font-black
"
>

₹66

</h2>

</div>

<div>

<p className="text-zinc-500">

Price Trend

</p>

<h2
className="
text-green-600

text-3xl

font-bold
"
>

↘ 2%

</h2>

</div>

</div>

<div
className="
mt-10

flex

gap-4
"
>

<button
className="
bg-blue-600

text-white

px-8

py-4

rounded-2xl
"
>

<Heart
size={18}
className="inline mr-2"
/>

Watchlist

</button>

<button
className="
border

px-8

py-4

rounded-2xl
"
>

<Share2
size={18}
className="inline mr-2"
/>

Share

</button>

</div>

</div>

</div>

{/* MARKET */}

<section
className="
mt-24
"
>

<h2
className="
text-4xl

font-bold

mb-8
"
>

Market Comparison

</h2>

<div
className="
grid

lg:grid-cols-3

gap-6
"
>

{

stores.map(
(item)=>(

<div

key={item.store}

className="
rounded-[32px]

bg-white

dark:bg-zinc-950

p-8

hover:-translate-y-2

hover:shadow-2xl

transition
"
>

<h3
className="
text-3xl

font-bold
"
>

{item.store}

</h3>

<p
className="
mt-2

text-zinc-500
"
>

Quick Delivery

</p>

<div
className="
mt-8

text-6xl

font-black

text-blue-600
"
>

{item.price}

</div>

<div
className="
mt-8

space-y-3
"
>

<p>

Delivery → {item.delivery}

</p>

<p>

ETA → {item.eta}

</p>

</div>

<button

onClick={()=>
handleAddBasket(
item.price
)
}

className="
mt-10

w-full

bg-blue-600

text-white

py-4

rounded-2xl
"
>

Add Basket →

</button>

</div>

)

)

}

</div>

</section>

{/* PRICE HISTORY */}

<section className="mt-24">

<h2 className="text-4xl font-bold mb-10">

Price History

</h2>

<div
className="
bg-white

dark:bg-zinc-950

rounded-[32px]

p-8
"
>

<div
className="
flex

items-end

gap-5

h-[250px]
"
>

{

history.map(
(v,i)=>(

<div

key={i}

className="
flex-1

bg-blue-600

rounded-t-xl
"

style={{
height:`${v*2}px`
}}
/>

)

)

}

</div>

</div>

</section>

</div>

</div>

);

}
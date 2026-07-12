import { useNavigate } from "react-router-dom";
import { useCart } from "../../store/cartStore";

export default function ProductCard({

name,
image,
price1,
price2,
price3,
winner

}) {

const navigate = useNavigate();

const addToCart =
useCart(
(state)=>state.addToCart
);

function handleAdd() {

addToCart({

name,
image,
price:Number(price3)

});

navigate("/basket");

}

function handleCompare() {

navigate("/compare");

}

return(

<div
className="
group

w-full

rounded-[32px]

overflow-hidden

bg-white

dark:bg-zinc-950

border

dark:border-zinc-800

hover:shadow-2xl

hover:-translate-y-2

duration-300
"
>

{/* IMAGE */}

<div
className="
relative

h-[220px]

overflow-hidden
"
>

<img

src={image}

alt={name}

className="
w-full
h-full

object-cover

group-hover:scale-110

duration-700
"
/>

<div
className="
absolute

top-5
left-5

rounded-full

bg-green-100

text-green-700

px-4

py-2

text-xs

font-bold
"
>

{winner}

</div>

</div>

{/* CONTENT */}

<div
className="
p-6
"
>

<h2
className="
text-[28px]

font-bold

leading-tight

dark:text-white
"
>

{name}

</h2>

<p
className="
mt-2

text-zinc-500
"
>

Live basket comparison

</p>

{/* PRICE TABLE */}

<div
className="
mt-7

space-y-4
"
>

<div
className="
flex

justify-between
"
>

<span
className="
text-zinc-500
"
>

Blinkit

</span>

<span
className="
font-semibold
"
>

₹{price1}

</span>

</div>

<div
className="
flex

justify-between
"
>

<span
className="
text-zinc-500
"
>

Instamart

</span>

<span
className="
font-semibold
"
>

₹{price2}

</span>

</div>

<div
className="
flex

justify-between

font-bold

text-green-600
"
>

<span>

Zepto

</span>

<span>

₹{price3}

</span>

</div>

</div>

{/* ACTIONS */}

<div
className="
mt-8

grid

grid-cols-2

gap-3
"
>

<button

onClick={handleCompare}

className="
rounded-2xl

border

dark:border-zinc-800

py-3

font-medium

hover:bg-zinc-100

dark:hover:bg-zinc-900

transition
"
>

Compare

</button>

<button

onClick={handleAdd}

className="
rounded-2xl

bg-blue-600

text-white

py-3

font-medium

hover:bg-blue-700

hover:shadow-xl

transition
"
>

Add Basket

</button>

</div>

</div>

</div>

);

}
import {
Search,
ShoppingCart,
Bell,
Heart,
Clock,
BadgePercent,
ExternalLink
} from "lucide-react";

export default function DealDetails(){

const prices=[160,150,170,130,180,145,119];

const related=[

{
name:"Premium Olive Oil",
price:"₹640",
img:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5"
},

{
name:"Roasted Nuts",
price:"₹320",
img:"https://images.unsplash.com/photo-1508747703725-719777637510"
},

{
name:"Dark Chocolate",
price:"₹185",
img:"https://images.unsplash.com/photo-1511381939415-e44015466834"
},

{
name:"Oat Milk",
price:"₹299",
img:"https://images.unsplash.com/photo-1628088062854-d1870b4553da"
}

];

return(

<div
className="
min-h-screen
bg-[#f6f8fb]
"
>

<header
className="
sticky
top-0
z-50

bg-white

border-b
"
>

<div
className="
max-w-[1600px]

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
text-3xl

font-black

text-blue-700
"
>

Shop Ease

</h1>

<nav
className="
hidden
lg:flex

gap-10
"
>

<button>Explore</button>
<button>Stores</button>

<button
className="
text-blue-600

border-b-2
"
>

Deals

</button>

</nav>

<div
className="
flex

items-center

gap-4
"
>

<Search/>

<div className="relative">

<ShoppingCart/>

<span
className="
absolute
-right-2
-top-2

w-5
h-5

rounded-full

bg-blue-600

text-white

text-xs

flex

items-center

justify-center
"
>

2

</span>

</div>

<Bell/>

<img
src="https://i.pravatar.cc/50"

className="
w-10

rounded-full
"
/>

</div>

</div>

</header>

<div
className="
max-w-[1600px]

mx-auto

px-10

py-8
"
>

<p
className="
text-zinc-500
"
>

Home › Groceries › Deal Details

</p>

<div
className="
mt-6

grid

xl:grid-cols-[1fr_340px]

gap-8
"
>

<div>

<div
className="
overflow-hidden

rounded-[34px]

bg-white
"
>

<div className="relative">

<img
src="https://images.unsplash.com/photo-1603046891744-76e6300f82ef"

className="
w-full

h-[520px]

object-cover
"
/>

<div
className="
absolute

left-5

top-5

flex

gap-3
"
>

<div
className="
rounded-full

bg-red-500

text-white

px-4

py-2
"
>

Flash Sale

</div>

<div
className="
rounded-full

bg-green-700

text-white

px-4

py-2
"
>

60% OFF

</div>

</div>

</div>

<div className="p-8">

<div
className="
flex

justify-between
"
>

<div>

<h1
className="
text-5xl

font-black
"
>

Organic Hass Avocados

</h1>

<p
className="
mt-5

text-zinc-500
"
>

Certified organic and perfectly ripened.

</p>

</div>

<Heart/>

</div>

<div
className="
mt-8

flex

gap-10

text-zinc-600
"
>

<div>

<Clock className="inline"/>

 Ends in 02:45

</div>

<div>

<BadgePercent className="inline"/>

 Code: FRESH60

</div>

</div>

</div>

</div>

<div
className="
mt-8

rounded-[32px]

bg-white

p-8
"
>

<div
className="
flex

justify-between

mb-8
"
>

<h2
className="
text-3xl

font-bold
"
>

7-Day Price History

</h2>

<div
className="
rounded-full

bg-green-100

text-green-700

px-4

py-2
"
>

Cheapest in 30 days

</div>

</div>

<div
className="
flex

gap-4

items-end

h-[240px]
"
>

{

prices.map(
(v,i)=>(

<div
key={i}
className="
flex-1
bg-blue-700
rounded-t-xl
"

style={{
height:`${v}px`,
opacity:i===6?1:0.15
}}
>

</div>

)

)

}

</div>

</div>

<div
className="
mt-8

grid

md:grid-cols-2

gap-6
"
>

<div
className="
rounded-3xl

bg-white

p-6
"
>

<h3
className="
text-green-600

font-bold
"
>

Lowest in 30 Days

</h3>

<p className="mt-3">

Price 45% lower.

</p>

</div>

<div
className="
rounded-3xl

bg-white

p-6
"
>

<h3
className="
text-blue-600

font-bold
"
>

Free Delivery

</h3>

<p className="mt-3">

Eligible for ultra fast shipping.

</p>

</div>

</div>

<section
className="
mt-16
"
>

<div
className="
flex

justify-between
"
>

<h2
className="
text-3xl

font-bold
"
>

People also compared

</h2>

<button className="text-blue-600">

View all →

</button>

</div>

<div
className="
mt-8

grid

grid-cols-2

xl:grid-cols-4

gap-6
"
>

{

related.map(
(item)=>(

<div
key={item.name}

className="
rounded-[28px]

bg-white

overflow-hidden
"
>

<img
src={item.img}

className="
h-[220px]

w-full

object-cover
"
/>

<div className="p-5">

<h3>

{item.name}

</h3>

<div
className="
mt-3

text-3xl

font-black

text-blue-700
"
>

{item.price}

</div>

</div>

</div>

)

)

}

</div>

</section>

</div>

{/* RIGHT */}

<div>

<div
className="
rounded-[32px]

bg-white

p-8
"
>

<h3
className="
font-bold

mb-6
"
>

COMPARE & SAVE

</h3>

<div className="space-y-4">

<div className="rounded-3xl bg-blue-700 text-white p-5">

Blinkit ₹119

</div>

<div className="rounded-3xl bg-zinc-100 p-5">

Zepto ₹145

</div>

<div className="rounded-3xl bg-zinc-100 p-5">

Instamart ₹152

</div>

</div>

<button
className="
mt-8

w-full

bg-blue-700

text-white

rounded-2xl

py-5
"
>

Go To Deal

<ExternalLink
className="inline ml-2"
/>

</button>

</div>

</div>

</div>

</div>

</div>

);

}
import {
Search,
Bell,
ShoppingCart
}
from "lucide-react";

export default function ExploreNavbar(){

return(

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
h-20

px-10

flex

items-center

justify-between
"
>

<div
className="
text-2xl

font-bold
"
>

Explore Deals

</div>

<div
className="
relative

w-[500px]
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

h-12

pl-14

rounded-full

bg-zinc-100

dark:bg-zinc-900
"
/>

</div>

<div
className="
flex

gap-3
"
>

<button>

<Bell/>

</button>

<button>

<ShoppingCart/>

</button>

</div>

</div>

</header>

)

}
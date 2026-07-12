import {
Bell,
ShoppingCart,
Search,
User
} from "lucide-react";

export default function BasketNavbar(){

return(

<header
className="
h-[72px]

bg-white

border-b

border-zinc-100

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

<h1
className="
text-[24px]

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

text-sm

text-zinc-500
"

>

<button className="hover:text-black">
Deals
</button>

<button className="hover:text-black">
Categories
</button>

<button className="hover:text-black">
Price History
</button>

</nav>

</div>

<div
className="
hidden

md:block

relative

w-[440px]
"

>

<Search
size={18}

className="
absolute

left-5

top-1/2

-translate-y-1/2

text-zinc-400
"
/>

<input

placeholder="Search basket"

className="
w-full

h-[48px]

rounded-full

bg-zinc-100

pl-14

pr-5

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
w-10

h-10

rounded-full

bg-zinc-100

flex

items-center

justify-center
"

>

<Bell size={18}/>

</button>

<button
className="
w-10

h-10

rounded-full

bg-zinc-100

flex

items-center

justify-center
"

>

<ShoppingCart size={18}/>

</button>

<button
className="
w-10

h-10

rounded-full

bg-blue-600

text-white

flex

items-center

justify-center
"

>

<User size={16}/>

</button>

</div>

</header>

)

}

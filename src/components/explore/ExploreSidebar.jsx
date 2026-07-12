export default function ExploreSidebar(){

const menu=[

"Dashboard",

"Explore",

"Price Alerts",

"Store Map",

"Smart Split",

"Settings"

];

return(

<aside
className="
hidden

lg:flex

flex-col

border-r

dark:border-zinc-800

p-8
"
>

<h1
className="
text-3xl

font-black

text-blue-600
"
>

Shop Ease

</h1>

<div
className="
mt-12

space-y-4
"
>

{

menu.map(
(item)=>(

<button

key={item}

className="
w-full

text-left

rounded-2xl

p-4

hover:bg-blue-600

hover:text-white
"
>

{item}

</button>

)

)

}

</div>

</aside>

)

}
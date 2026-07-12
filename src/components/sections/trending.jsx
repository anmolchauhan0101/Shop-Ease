import ProductCard from "../cards/ProductCard";

export default function Trending() {

return(

<section
className="
mt-20
w-full
"
>

{/* Header */}

<div
className="
flex

flex-col

md:flex-row

items-start

md:items-end

justify-between

gap-5

mb-10
"
>

<div>

<h2
className="
text-4xl

font-black

tracking-tight

dark:text-white
"
>

Trending Comparisons

</h2>

<p
className="
mt-2

text-zinc-500

text-lg
"
>

Popular grocery price checks across stores

</p>

</div>

<button
className="
text-blue-600

font-semibold

hover:translate-x-1

transition
"
>

View All →

</button>

</div>

{/* Products */}

<div
className="
grid

grid-cols-1

sm:grid-cols-2

xl:grid-cols-3

gap-8

justify-items-center
"
>

<ProductCard
name="Amul Gold Milk"
image="https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=1200"
price1="54"
price2="56"
price3="50"
winner="Price Winner"
/>

<ProductCard
name="Fresh Eggs"
image="https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?q=80&w=1200"
price1="86"
price2="82"
price3="84"
winner="Best Deal"
/>

<ProductCard
name="Atta Bread"
image="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200"
price1="45"
price2="45"
price3="42"
winner="Lowest Price"
/>

</div>

</section>

)

}
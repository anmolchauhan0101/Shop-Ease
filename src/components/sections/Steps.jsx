import {

Search,
GitCompare,
Wallet

}

from
"lucide-react"

export default function Steps(){

const items=[

[
Search,
"Search Once"
],

[
GitCompare,
"Compare"
],

[
Wallet,
"Save"
]

]

return(

<section
className="
mt-24
"
>

<h2
className="
text-center
text-3xl
font-bold
dark:text-white
"
>

Save Money in 3 Steps

</h2>

<div
className="
flex
justify-center
gap-10
mt-10
"
>

{

items.map(

([Icon,title])=>(

<div
key={title}

className="
w-[250px]
text-center
"

>

<Icon
size={40}
/>

<h3
className="
mt-4
font-bold
dark:text-white
"
>

{title}

</h3>

</div>

)

)

}

</div>

</section>

)

}
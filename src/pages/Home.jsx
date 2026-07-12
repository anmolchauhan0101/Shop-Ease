import Navbar from "../components/layout/Navbar";

import Sidebar from "../components/layout/Sidebar";

import RightPanel from "../components/layout/RightPanel";

import Hero from "../components/sections/Hero";

import Trending from "../components/sections/Trending";

import Steps from "../components/sections/Steps";

import Footer from "../components/layout/Footer";

import { useLayout } from "../store/layoutStore";

export default function Home(){

const{

leftOpen,

rightOpen,

closeAll

}=useLayout()

return(

<div
className="
min-h-screen

bg-white

dark:bg-black
"
>

<Navbar/>

{

(leftOpen||rightOpen)

&&

<div

onClick={closeAll}

className="
fixed

inset-0

top-20

bg-black/10

backdrop-blur-sm

z-20
"
/>

}

<Sidebar/>

<RightPanel/>

<main
className="
max-w-[1200px]

mx-auto

px-8

py-12

relative

z-10
"
>

<Hero/>

<Trending/>

<Steps/>

<Footer/>

</main>

</div>

)

}
import { create } from "zustand"

export const useTheme = create((set)=>({

theme:
localStorage.getItem("theme")
||
"dark",

toggleTheme:()=>{

set((state)=>{

const next=

state.theme==="dark"

?

"light"

:

"dark"

localStorage.setItem(
"theme",
next
)

return{

theme:next

}

})

}

}))
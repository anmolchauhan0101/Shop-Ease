import { create } from "zustand";

export const useCart = create((set)=>({

cart:[],

addToCart:(product)=>

set((state)=>{

const exists =
state.cart.find(
i=>i.name===product.name
);

if(exists){

return{

cart:

state.cart.map(
i=>

i.name===product.name

?

{
...i,
qty:i.qty+1
}

:

i

)

};

}

return{

cart:[
...state.cart,
{
...product,
qty:1
}
]

};

}),

removeItem:(name)=>

set(
(state)=>({

cart:

state.cart.filter(
i=>

i.name!==name

)

})

),

clearCart:()=>

set({
cart:[]
})

}));
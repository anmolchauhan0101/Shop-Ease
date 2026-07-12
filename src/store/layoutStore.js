import { create } from "zustand";

export const useLayout = create((set)=>({

leftOpen:false,

rightOpen:false,

toggleLeft:()=>{

set((state)=>({

leftOpen:!state.leftOpen,

rightOpen:false

}));

},

toggleRight:()=>{

set((state)=>({

rightOpen:!state.rightOpen,

leftOpen:false

}));

},

closeAll:()=>{

set({

leftOpen:false,

rightOpen:false

});

}

}));
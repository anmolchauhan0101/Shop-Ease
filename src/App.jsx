import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Basket from "./pages/Basket";
import Explore from "./pages/Explore";

export default function App() {

return (

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Home />}
/>

<Route
path="/compare"
element={<Compare />}
/>

<Route
path="/basket"
element={<Basket />}
/>
<Route
path="/explore"
element={<Explore/>}
/>

</Routes>

</BrowserRouter>

);

}
import { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Сторінки сайту
import NoMatch from "./pages/NoMatch";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Order from "./pages/Order";
import Search from "./pages/Search";
import Category from "./pages/Category";

import { initialCartState, cartReducer } from "./reducer/cartReducer";

function App() {
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout cartState={cartState} dispatch={dispatch} />}>
                    <Route index element={<Home cartState={cartState} dispatch={dispatch} />} />
                    <Route path="/category/:categoryId" element={<Category cartState={cartState} dispatch={dispatch} />} />
                    <Route path="about" element={<About />} />
                    <Route path="delivery" element={<Delivery />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="search" element={<Search cartState={cartState} dispatch={dispatch} />} />
                    <Route path="order" element={<Order cartState={cartState} dispatch={dispatch} />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

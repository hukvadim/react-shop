import {Outlet } from "react-router-dom";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Cart from '../components/cart/Cart';

export default function Layout({ cartState, dispatch }) {
	return (
	  <>
		<Navigation cartState={cartState} />
		<Outlet />
		<Footer />
		<Cart cartState={cartState} dispatch={dispatch} />
	  </>
	);
}


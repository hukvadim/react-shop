import {Outlet } from "react-router-dom";
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
	return (
	  <div>
		<Navigation />
		<Outlet />
		<Footer />
	  </div>
	);
  }
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";


export default function Home() {

	const [products, setProducts] = useState([]);
	const [productsCount, setProductsCount] = useState(0);

	useEffect(() => {
		// Отримання даних з API за допомогою fetch
		fetch("https://6558482de93ca47020a93e41.mockapi.io/catalog")
			.then((response) => response.json())
			.then((products) => {
				setProductsCount(products.length);
				setProducts(products);
				console.log(products);
			})
			.catch((error) => console.error("Помилка при отриманні даних:", error));
	  }, []);

	return (
		<div className="catalog" id="catalog">
			<div className="container">
				<div className="catalog__header">
					<div className="catalog__select-category dropdown">
						<h3 className="dropdown-btn">Вибрати категорію</h3>
						<div className="dropdown-content" id="category-list">
							<Link to="#" className="dropdown-item">Скинути вибір</Link>
						</div>
					</div>
					<h3 className="catalog__products-summ">Знайдено товарів: <span id="view-count-products">{productsCount}</span></h3>
				</div>

				<div className="catalog__content">

					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}

				</div>

			</div>
		</div>
	);
}


  
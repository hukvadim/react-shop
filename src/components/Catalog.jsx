import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getData, { apiUrl} from '../api/getData';
import CatalogHeader from '../components/CatalogHeader';
import CatalogContent from '../components/CatalogContent';

function Catalog() {
	
	const { categoryId } = useParams(); // Отримуємо параметр зі шляху

	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [productsCount, setProductsCount] = useState(0);
	
	useEffect(() => {
		
		// Отримуємо категорії каталогу
		getData(apiUrl.category).then((category) => {
			setCategories(category);
		})
	
		// Отримуємо товари каталогу
		getData(apiUrl.catalog).then((products) => {
	
			// Задаємо підрахунок товарів
			setProductsCount(products.length);
	
			// Виводимо товарів
			setProducts(products);
		})
	
	}, []);

	return (
		<div className="catalog" id="catalog">
			<div className="container">
					
				<CatalogHeader categories={categories} categoryId={categoryId} productsCount={productsCount} />

				<CatalogContent products={products} />
					
			</div>
		</div>
	);
}

export default Catalog;
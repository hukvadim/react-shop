import ProductCard from './ProductCard';

function CatalogContent( {products} ) {
	return (
		<div className="catalog__content">

			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}

		</div>
	);
}

export default CatalogContent;
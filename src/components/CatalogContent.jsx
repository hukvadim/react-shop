import ProductCard from './ProductCard';

function CatalogContent( { products, cartState, dispatch } ) {
	return (
		<div className="catalog__content">

			{products.map((product) => (
				<ProductCard key={product.id} product={product} cartState={cartState} dispatch={dispatch} />
			))}

		</div>
	);
}

export default CatalogContent;
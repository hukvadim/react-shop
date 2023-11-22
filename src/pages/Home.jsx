import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div class="catalog" id="catalog">
			<div class="container">
				<div class="catalog__header">
					<div class="catalog__select-category dropdown">
						<h3 class="dropdown-btn">Вибрати категорію</h3>
						<div class="dropdown-content" id="category-list">
							<Link to="#" class="dropdown-item">Скинути вибір</Link>
						</div>
					</div>
					<h3 class="catalog__products-summ">Знайдено товарів: <span id="view-count-products">24</span></h3>
				</div>

				<div class="catalog__content" id="catalog-products">

					<div class="card-product">
						<div class="card-product__img-hold">
							<img src="img/catalog/1.jpg" alt="" class="card-product__img"></img>
						</div>
						<div class="card-product__text-hold">
							<a href="#" class="card-product__title-link">Планшет Lenovo Tab M10 Plus 4/128 Grey</a>
							<span class="card-product__price">8 999 грн <small>12 999 грн</small></span>
							<a href="#" class="card-product__btn-add">
								<svg class="icon icon-cart"><use href="#icon-cart-add"></use></svg>
							</a>
						</div>
					</div>

				</div>

			</div>
		</div>
	);
  }
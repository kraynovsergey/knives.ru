(function() {
	'use strict';

	const search = document.querySelectorAll('.search'),
		headerContent = document.querySelector('.header__content'),
		searchOpacity = document.querySelectorAll('.search__opacity');

	if ( search.length > 0 ) {
		search.forEach((searchItem) => {
			let searchInput = searchItem.querySelector('.search__input input'),
				searchReset = searchItem.querySelector('.search__reset'),
				searchResultsResult = searchItem.querySelector('.search__results-result'),
				searchResultsTemp = searchItem.querySelector('.search__results-temp'),
				searchBlockClear = searchItem.querySelector('.search__block-clear'),
				searchBlockTitle = searchItem.querySelectorAll('.search__block-title'),
				searchBlockRemove = searchItem.querySelectorAll('.search__block-remove');

			if (searchInput) {
				searchInput.addEventListener('keyup', () => {
					searchValue(searchInput, searchItem, searchResultsResult, searchResultsTemp);
				});

				searchInput.addEventListener('click', () => {
					searchValue(searchInput, searchItem, searchResultsResult, searchResultsTemp);
				});
			}

			if (searchReset) {
				searchReset.addEventListener('click', () => {
					searchInput.value = '';
					searchValue(searchInput, searchItem, searchResultsResult, searchResultsTemp);
				});
			}

			if (searchBlockClear) {
				searchBlockClear.addEventListener('click', () => {
					searchBlockClear.closest('.search__block').classList.add('_hide');
				});
			}

			if (searchBlockRemove.length > 0) {
				searchBlockRemove.forEach((item) => {
					item.addEventListener('click', () => {
						let searchBlock = item.closest('.search__block');

						item.closest('.search__block-item').remove();

						let searchBlockRemoves = searchBlock.querySelectorAll('.search__block-item');

						searchBlockRemoves.length === 0 ? searchBlock.classList.add('_hide') : '';
					});
				});
			}

			if (searchBlockTitle.length > 0) {
				searchBlockTitle.forEach((item) => {
					item.addEventListener('click', () => {
						let searchForm = item.closest('.search').querySelector('.search__form'),
							searchInput = searchForm.querySelector('.search__input input');

						searchInput.value = item.getAttribute('data-value');
						searchForm.submit();
					});
				});
			}


			searchOpacity.forEach((item) => {
				item.addEventListener('click', () => {
					searchOpacity.forEach((backdrop) => {
						backdrop.classList.remove('_active');
					});

					searchItem.classList.remove('_active');
				});
			})
		});
	}

	function searchValue(input, searchItem, searchResultsResult, searchResultsTemp) {
		let searchReset = searchItem.querySelector('.search__reset');

		searchItem.classList.add('_active');
		headerContent.classList.add('_active');

		searchOpacity.forEach((item) => {
			item.classList.add('_active');
		});

		if ( input.value ) {
			searchResultsResult.classList.add('_active');
			searchResultsTemp.classList.remove('_active');
			searchReset.classList.add('_active');
		} else {
			searchResultsResult.classList.remove('_active');
			searchResultsTemp.classList.add('_active');
			searchReset.classList.remove('_active');
		}
	}

	const header = document.querySelector('.header'),
		filterAside = document.querySelector('.filter-aside');

	if ( header ) {
		window.addEventListener('scroll', () => {
			document.documentElement.scrollTop > 10 ?
				header.classList.add('_scroll') : header.classList.remove('_scroll');

			if ( filterAside ) {
				document.documentElement.scrollTop > 10 ?
					filterAside.classList.add('_scroll') : filterAside.classList.remove('_scroll');
			}
		});
	}

	const headerCatalog = document.querySelector('.header-catalog'),
		headerCatalogBtn = document.querySelector('.header__catalog'),
		headerCatalogOpacity = document.querySelector('.header-catalog__opacity'),
		headerCatalogMobile = document.querySelector('.header__mobile-catalog');

	if ( headerCatalog && headerCatalogBtn && headerCatalogOpacity && headerCatalogMobile ) {
		headerCatalogBtn.addEventListener('click', (e) => {
			e.preventDefault();

			headerCatalog.classList.toggle('_active');
			headerCatalogBtn.classList.toggle('_active');
			headerCatalogOpacity.classList.toggle('_active');
			headerContent.classList.toggle('_white');
		});

		document.addEventListener('click', (e) => {
			if ( ( !headerCatalog.contains(e.target) ) && ( !headerCatalogBtn.contains(e.target) )
				&& ( !headerCatalogMobile.contains(e.target) ) ) {
				headerCatalog.classList.remove('_active');
				headerCatalogBtn.classList.remove('_active');
				headerCatalogOpacity.classList.remove('_active');
				headerContent.classList.remove('_white');
				headerCatalogMobile.classList.remove('_active');
			}
		});

		headerCatalogMobile.addEventListener('click', (e) => {
			e.stopPropagation();

			headerCatalogMobile.classList.toggle('_active');
			headerCatalog.classList.toggle('_active');
		})
	}

	const searchTags = document.querySelectorAll('.search__tags');

	if ( searchTags.length > 0 ) {
		searchTags.forEach((item) => {
			new Swiper(item, {
				spaceBetween: 10,
				slidesPerView: 'auto'
			});
		});
	}

	const headerCatalogTabs = document.querySelector('.header-catalog__tabs'),
		headerCatalogCarousel = document.querySelector('.header-catalog__cols.swiper');

	if ( ( headerCatalogTabs ) && ( headerCatalogCarousel ) ) {
		const headerCatalogThumbs = new Swiper(headerCatalogTabs, {
			spaceBetween: 15,
			slidesPerView: 'auto'
		});

		const headerCatalogSwiper = new Swiper(headerCatalogCarousel, {
			spaceBetween: 0,
			slidesPerView: 'auto',
			thumbs: {
				swiper: headerCatalogThumbs
			},
		});
	}

	const tagsCarousel = document.querySelector('.tags__carousel');

	if ( tagsCarousel ) {
		new Swiper(tagsCarousel, {
			spaceBetween: 10,
			slidesPerView: 'auto'
		});
	}

	const homeSlider = document.querySelector('.home-slider__carousel');

	if ( homeSlider ) {
		new Swiper(homeSlider, {
			spaceBetween: 15,
			slidesPerView: 'auto',
			centeredSlides: true,
			loop: true,
			navigation: {
				nextEl: '.home-slider__next',
				prevEl: '.home-slider__prev'
			}
		});
	}

	const productModule = document.querySelectorAll('.product__module');

	if ( productModule.length > 0 ) {
		productModule.forEach((item) => {
			item.addEventListener('click', (e) => {
				item.classList.toggle('_active');

				e.stopPropagation();
			});
		});
	}

	const popularCarousel = document.querySelectorAll('.popular__carousel');

	if ( popularCarousel.length > 0 ) {
		popularCarousel.forEach((carousel) => {
			new Swiper(carousel, {
				spaceBetween: 15,
				slidesPerView: 'auto',
				navigation: {
					nextEl: carousel.closest('.popular__content').querySelector('.carousel-arrows__item._next'),
					prevEl: carousel.closest('.popular__content').querySelector('.carousel-arrows__item._prev')
				}
			});
		});
	}

	const popularTab = document.querySelectorAll('.popular__tab'),
		popularTabContent = document.querySelectorAll('.popular__content');

	if ( ( popularTab.length > 0 ) && ( popularTabContent.length > 0 ) ) {
		popularTab.forEach((tab) => {
			tab.addEventListener('click', () => {
				let tabItem = tab.getAttribute('data-item');

				popularTab.forEach((item) => {
					item.classList.remove('_active');

					item.getAttribute('data-item') === tabItem ?
						item.classList.add('_active') : '';
				});

				popularTabContent.forEach((item) => {
					item.classList.remove('_active');

					item.getAttribute('data-item') === tabItem ?
						item.classList.add('_active') : '';
				});
			});
		});
	}

	const categoriesCarousel = document.querySelector('.categories-carousel__carousel');

	if ( categoriesCarousel ) {
		new Swiper(categoriesCarousel, {
			spaceBetween: 15,
			slidesPerView: 'auto',
			navigation: {
				nextEl: document.querySelector('.categories-carousel__arrows .carousel-arrows__item._next'),
				prevEl: document.querySelector('.categories-carousel__arrows .carousel-arrows__item._prev')
			}
		});
	}

	const brandsCarousel = document.querySelector('.brands__carousel');

	if ( brandsCarousel ) {
		new Swiper(brandsCarousel, {
			spaceBetween: 30,
			slidesPerView: 'auto'
		});
	}

	const articlesCarousel = document.querySelectorAll('.articles-carousel__carousel');

	if ( articlesCarousel.length > 0 ) {
		articlesCarousel.forEach((carousel) => {
			new Swiper(carousel, {
				spaceBetween: 15,
				slidesPerView: 'auto',
				navigation: {
					nextEl: carousel.closest('.articles-carousel').querySelector('.articles-carousel__arrows .carousel-arrows__item._next'),
					prevEl: carousel.closest('.articles-carousel').querySelector('.articles-carousel__arrows .carousel-arrows__item._prev')
				}
			});
		});
	}

	const footerListTitle = document.querySelectorAll('.footer__list-title');

	if ( (footerListTitle.length > 0) && (window.innerWidth < 768) ) {
		footerListTitle.forEach((item) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				item.classList.toggle('_active');
			})
		});
	}

	const filterAsideTitle = document.querySelectorAll('.filter-aside__title');

	if ( filterAsideTitle.length > 0 ) {
		filterAsideTitle.forEach((item) => {
			item.addEventListener('click', () => {
				item.classList.toggle('_active');
			});
		});
	}

	const filterContentTitle = document.querySelectorAll('.filter-content__title');

	if ( filterContentTitle.length > 0 ) {
		filterContentTitle.forEach((item) => {
			item.addEventListener('click', () => {
				let itemData = item.getAttribute('data-item');

				filterContentTitle.forEach((el) => {
					itemData !== el.getAttribute('data-item') ?
						el.classList.remove('_active') : '';
				});

				item.classList.toggle('_active');

				filterContentOverlay(item);
			});
		});
	}

	const filterContentSorting = document.querySelectorAll('.filter-content__sorting-item input');

	if ( filterContentSorting.length > 0 ) {
		filterContentSorting.forEach((item) => {
			item.addEventListener('change', () => {
				let itemTitle = item.closest('.filter-content__item').querySelector('.filter-content__title');

				itemTitle.classList.remove('_active');

				filterContentOverlay(itemTitle);
			});
		});
	}

	const filterContentBlock = document.querySelectorAll('.filter-content__block');

	if ( filterContentBlock.length > 0 ) {
		filterContentBlock.forEach((block) => {
			let blockInputs = block.querySelectorAll('.filter-aside__checkbox-input'),
				blockSubmit = block.querySelector('.filter-content__submit');

			blockInputs.forEach((blockInput) => {
				blockInput.addEventListener('change', () => {
					let countChecked = block.querySelectorAll('.filter-aside__checkbox-input:checked').length;

					if (countChecked > 0) {
						blockSubmit.classList.add('_active');
						blockSubmit.querySelector('.filter-content__submit-text').innerHTML = countChecked;
					} else {
						blockSubmit.classList.remove('_active');
						blockSubmit.querySelector('.filter-content__submit-text').innerHTML = 0;
					}
				});
			});

			if ( blockSubmit ) {
				blockSubmit.addEventListener('click', () => {
					block.closest('.filter-content__item').querySelector('.filter-content__title').classList.remove('_active');
					blockSubmit.classList.remove('_active');

					filterContentOverlay(block.closest('.filter-content__item').querySelector('.filter-content__title'));
				});
			}
		});
	}

	const filterBlockClose = document.querySelectorAll('.filter-content__title-mobile button');

	if ( filterBlockClose.length > 0 ) {
		filterBlockClose.forEach((item) => {
			item.addEventListener('click', () => {
				let filterTitle = item.closest('.filter-content__item').querySelector('.filter-content__title');

				filterTitle.classList.remove('_active');

				filterContentOverlay(filterTitle);
			});
		});
	}

	function filterContentOverlay(item) {
		if ( window.innerWidth < 992 ) {
			if ( item.classList.contains('_active')  ) {
				document.querySelector('body').style = 'overflow: hidden';
			} else {
				document.querySelector('body').style = '';
			}
		}
	}

	const filterSelectedItems = document.querySelectorAll('.filter-selected__item'),
		filterSelectedClear = document.querySelector('.filter-selected__clear'),
		filterSelected = document.querySelector('.filter-selected');

	if ( ( filterSelectedItems.length >0 ) && filterSelectedClear ) {
		filterSelectedItems.forEach((item) => {
			item.addEventListener('click', () => {
				item.remove();

				let itemSelected = document.querySelectorAll('.filter-selected__item');

				if (itemSelected.length < 1) {
					filterSelectedClear.classList.remove('_active');
					filterSelected.classList.remove('_active');
				}
			});
		});

		filterSelectedClear.addEventListener('click', () => {
			filterSelectedItems.forEach((item) => {
				item.remove();

				filterSelectedClear.classList.remove('_active');
				filterSelected.classList.remove('_active');
			});
		});
	}

	document.addEventListener('touchstart', handleTouchStart, false);
	document.addEventListener('touchmove', handleTouchMove, false);
	var xDown = null;
	var yDown = null;

	function getTouches(evt) {
		return evt.touches;
	}

	function handleTouchStart(evt) {
		const firstTouch = getTouches(evt)[0];
		xDown = firstTouch.clientX;
		yDown = firstTouch.clientY;
	}

	function handleTouchMove(evt) {
		if ( ! xDown || ! yDown ) {
			return;
		}

		var xUp = evt.touches[0].clientX;
		var yUp = evt.touches[0].clientY;

		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;

		if ( Math.abs( xDiff ) < Math.abs( yDiff ) ) {
			if ( yDiff < -10 ) {
				if ( document.querySelector('.filter-content__block') ) {
					const panelBox = document.querySelectorAll('.filter-content__block');

					panelBox.forEach((item)=> {
						let itemTitle = item.closest('.filter-content__item').querySelector('.filter-content__title');
						itemTitle.classList.remove('_active');
						filterContentOverlay(itemTitle);
					});
				}
			}
		}
		xDown = null;
		yDown = null;
	}

	const formInputs = document.querySelectorAll('.form__input');

	if ( formInputs.length > 0 ) {
		formInputs.forEach((item) => {
			formLabels(item);
		});
	}

	const formTextarea = document.querySelectorAll('.form__textarea');

	if ( formTextarea.length > 0 ) {
		formTextarea.forEach((item) => {
			formLabels(item);
		});
	}

	function formLabels(item) {
		item.value ? item.classList.add('_active') : item.classList.remove('_active');

		item.addEventListener('keyup', () => {
			item.value ? item.classList.add('_active') : item.classList.remove('_active');
		});
	}

	const formClear = document.querySelectorAll('.form__clear');

	if ( formClear.length > 0 ) {
		formClear.forEach((item) => {
			item.addEventListener('click', () => {
				let itemInput = item.closest('.form__fieldset').querySelector('.form__input');

				itemInput.value = '';
				itemInput.classList.remove('_active');
			});
		});
	}

	window.addEventListener("DOMContentLoaded", () => {
		[].forEach.call( document.querySelectorAll('input[type="tel"]'), (input) => {
			let keyCode;

			function mask(event) {
				event.keyCode && (keyCode = event.keyCode);
				let pos = this.selectionStart;
				if (pos < 3) event.preventDefault();
				let matrix = "+7 (___) ___-__-__",
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = this.value.replace(/\D/g, ""),
					new_value = matrix.replace(/[_\d]/g, function(a) {
						return i < val.length ? val.charAt(i++) || def.charAt(i) : a
					});
				i = new_value.indexOf("_");
				if (i !== -1) {
					i < 5 && (i = 3);
					new_value = new_value.slice(0, i)
				}
				let reg = matrix.substr(0, this.value.length).replace(/_+/g,
					function(a) {
						return "\\d{1," + a.length + "}"
					}).replace(/[+()]/g, "\\$&");
				reg = new RegExp("^" + reg + "$");
				if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
				if (event.type === "blur" && this.value.length < 5)  this.value = ""
			}

			input.addEventListener("input", mask, false);
			input.addEventListener("focus", mask, false);
			input.addEventListener("blur", mask, false);
			input.addEventListener("keydown", mask, false);
		});
	});

	const productPageThumbs = document.querySelector('.product-page__thumbs'),
		productPageCarousel = document.querySelector('.product-page__carousel');

	if ( productPageThumbs && productPageCarousel ) {
		const productPageThumbsSwiper = new Swiper(productPageThumbs, {
			spaceBetween: 10,
			slidesPerView: 'auto',
			breakpoints: {
				0: {
					direction: 'horizontal'
				},
				991: {
					direction: 'vertical'
				}
			},
		});

		new Swiper(productPageCarousel, {
			slidesPerView: 1,
			spaceBetween: 0,
			thumbs: {
				swiper: productPageThumbsSwiper
			}
		});
	}

	const productPageCount = document.querySelectorAll('.product-page__count-btn');

	if ( productPageCount.length > 0 ) {
		productPageCount.forEach((btn) => {
			btn.addEventListener('click', () => {
				let btnInput = btn.closest('.product-page__count').querySelector('.product-page__count-input');

				if ( btn.classList.contains('_minus') ) {
					btnInput.value > 1 ? btnInput.value-- : '';
				} else {
					btnInput.value++;
				}
			});
		});
	}

	const productPageTabs = document.querySelectorAll('.product-page__tab'),
		productPageContent = document.querySelectorAll('.product-page__tab-content');

	if ( ( productPageTabs.length > 0 ) && ( productPageContent.length > 0 ) ) {
		productPageTabs.forEach((item) => {
			item.addEventListener('click', () => {
				let itemData = item.getAttribute('data-item');

				productPageTabs.forEach((tmp) => {
					tmp.classList.remove('_active');
				});

				productPageContent.forEach((tmp) => {
					tmp.classList.remove('_active');

					tmp.getAttribute('data-item') === itemData ? tmp.classList.add('_active') : '';
				});

				item.classList.add('_active');
			});
		});
	}

	const reviewsCarousel = document.querySelectorAll('.reviews-carousel__carousel');

	if ( reviewsCarousel.length > 0 ) {
		reviewsCarousel.forEach((carousel) => {
			new Swiper(carousel, {
				spaceBetween: 5,
				slidesPerView: 'auto',
				navigation: {
					nextEl: carousel.closest('.reviews-carousel').querySelector('.reviews-carousel__arrows .carousel-arrows__item._next'),
					prevEl: carousel.closest('.reviews-carousel').querySelector('.reviews-carousel__arrows .carousel-arrows__item._prev')
				}
			});
		});
	}

	const compareCarousel = document.querySelector('.compare__products'),
		compareSlider = document.querySelectorAll('.compare__param-slider');

	if ( compareCarousel && compareSlider.length > 0 ) {
		const compareCarouselSwiper = new Swiper(compareCarousel, {
			navigation: {
				nextEl: document.querySelector('.compare__arrows .carousel-arrows__item._next'),
				prevEl: document.querySelector('.compare__arrows .carousel-arrows__item._prev')
			},
			pagination: {
				el: '.compare__products .slider-progress',
				type: 'progressbar',
			},
			breakpoints: {
				0: {
					spaceBetween: 1,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 15,
					slidesPerView: 'auto',
				}
			},
		});


		compareSlider.forEach((item) => {
			let compareSliderSwiper = new Swiper(item, {
				breakpoints: {
					0: {
						spaceBetween: 1,
						slidesPerView: 2
					},
					768: {
						spaceBetween: 15,
						slidesPerView: 'auto',
					}
				},
			});

			compareCarouselSwiper.on('slideChange', function (e) {
				let activeIndexSwiper = e.activeIndex;
				compareSliderSwiper.slideTo(activeIndexSwiper);
			});

			compareSliderSwiper.on('slideChange', function (e) {
				let activeIndexSwiper = e.activeIndex;
				compareCarouselSwiper.slideTo(activeIndexSwiper);
			});
		})
	}

	const compareBtns = document.querySelectorAll('.compare__param-btn');

	if ( compareBtns.length > 0 ) {
		compareBtns.forEach((item) => {
			item.addEventListener('click', () => {
				item.classList.toggle('_active');
			});
		});
	}

	const formSelect = document.querySelectorAll('.cart__form-select-input button');

	if ( formSelect.length > 0 ) {
		formSelect.forEach((item) => {
			let itemParent = item.closest('.cart__form-select'),
				itemRadios = itemParent.querySelectorAll('input[type="radio"]'),
				itemInput = itemParent.querySelector('input[type="text"]');

			item.addEventListener('click', (e) => {
				e.preventDefault();
				itemParent.classList.toggle('_active');
			});

			itemRadios.forEach((radio) => {
				radio.addEventListener('change', () => {
					itemInput.value = radio.value;
					itemParent.classList.remove('_active');
				});
			});

			document.addEventListener('click', (e) => {
				if ( !itemParent.contains(e.target) ) {
					itemParent.classList.remove('_active');
				}
			});
		});
	}

	const formPolicy = document.querySelectorAll('input[name="policy"]');

	if (formPolicy.length > 0) {
		formPolicy.forEach((item) => {
			item.addEventListener('change', () => {
				let itemSubmit = item.closest('form').querySelector('button[type="submit"]');

				item.checked ? itemSubmit.disabled = false : itemSubmit.disabled = true;
			});
		});
	}

	const orderBtns = document.querySelectorAll('.order__btn');

	if ( orderBtns.length > 0 ) {
		orderBtns.forEach((btn) => {
			btn.addEventListener('click', () => {
				btn.classList.toggle('_active');
			});
		});
	}

	const cartAttention = document.querySelector('._cart-attention');

	if (cartAttention) {
		cartAttention.addEventListener('change', () => {
			let block = cartAttention.closest('.cart__form').querySelector('.cart__form-attention');
			cartAttention.checked ?
				block.classList.add('_active') : block.classList.remove('_active');
		});
	}

	const productCarousel = document.querySelectorAll('.product__carousel');

	if (productCarousel.length > 0) {
		productCarousel.forEach((carousel) => {
			let carouselPagination = carousel.querySelector('.product__carousel-pagination');

			let carouselSwiper = new Swiper(carousel, {
				pagination: {
					el: carouselPagination,
					clickable: false
				}
			});

			let carouselBullets = carouselPagination.querySelectorAll('.swiper-pagination-bullet');
			carouselBullets.forEach((item) => {
				item.addEventListener('mouseover', () => {
					item.closest('.product__carousel-pagination').addEventListener("mouseover", function(event){
						let position = [].indexOf.call(this.children, event.target);

						position >= 0 ? carouselSwiper.slideTo(position) : '';
					});
				});
			});
		});
	}

	const products = document.querySelectorAll('.product');

	if (products.length > 0) {
		products.forEach((product) => {
			product.addEventListener('click', () => {
				let link = product.querySelector('.product__title').getAttribute('href');
				window.location.href = link;
			});
		});
	}

	const filterReset = document.querySelectorAll('.filter-content__submit-remove');

	if ( filterReset.length > 0 ) {
		filterReset.forEach((item) => {
			item.addEventListener('click', () => {
				let itemCheckboxes = item.closest('.filter-content__block').querySelectorAll('.filter-aside__checkbox-input');

				itemCheckboxes.forEach((checkbox) => {
					checkbox.checked = false;
				});
			});
		});
	}

	const productPred = document.querySelectorAll('.product__cart button[data-src="#modal-pre-order"]');

	if (productPred.length > 0) {
		productPred.forEach((item) => {
			item.addEventListener('click', (e) => {
				Fancybox.show([
					{
						src: "#modal-pre-order",
						type: "inline",
					}
				]);

				e.stopPropagation();
			});
		});
	}

	/* TEMP SCRIPTS */
	const authSubmit = document.querySelector('#modal-auth .form__submit button');

	if ( authSubmit ) {
		authSubmit.addEventListener('click', () => {
			Fancybox.close();

			Fancybox.show(
				[
					{
						src: "#modal-auth-confirm",
						type: "inline"
					},
				]
			);
		});
	}
})();
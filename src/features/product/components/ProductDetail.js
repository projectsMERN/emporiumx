import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAsync, selectProductById, selectProductListStatus } from '../productSlice';
import { Link, useParams } from 'react-router-dom';
import { addToCartAsync, selectItems } from '../../cart/cartSlice';
import { selectLoggedInUser } from '../../auth/authSlice';
import { useAlert } from 'react-alert';
import { Grid } from 'react-loader-spinner';
import { selectUserInfo } from '../../user/userSlice';
import { RadioGroup } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const items = useSelector(selectItems);
  const product = useSelector(selectProductById);
  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();
  const status = useSelector(selectProductListStatus);
  const [showAlert, setShowAlert] = useState(false);
  const userInfo = useSelector(selectUserInfo);
  const [buttonPopup, setButtonPopup] = useState(false);

  const popUpMethod = (e) => {
    e.preventDefault();
    setButtonPopup(true);
  };

  const handleCart = (e) => {
    e.preventDefault();
    if (!selectedColor || !selectedSize) {
      setShowAlert(true); // Show alert if size or color is not selected
      return;
    }

    if (userInfo.verified) {
      if (items.findIndex((item) => item.product.id === product.id) < 0) {
        const newItem = {
          product: product.id,
          quantity: 1,
        };
        if (selectedColor) {
          newItem.color = selectedColor;
        }
        if (selectedSize) {
          newItem.size = selectedSize;
        }
        dispatch(addToCartAsync({ item: newItem, alert }));
      } else {
        alert.error('Item Already added');
      }
    } else {
      alert.error('Verification Email has been triggered. Please verify the account.');
    }
  };

  useEffect(() => {
    dispatch(fetchProductByIdAsync(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="bg-white">
      {status === 'loading' ? (
        <Grid
          height="80"
          width="80"
          color="rgb(79, 70, 229) "
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : null}
      {product && (
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {product.breadcrumbs &&
                product.breadcrumbs.map((breadcrumb) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center">
                      <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                        {breadcrumb.name}
                      </a>
                      <svg
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>
                ))}
              <li className="text-sm">
                <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {product.title}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product.images[1]}
                  alt={product.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  src={product.images[2]}
                  alt={product.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={product.images[3]}
                alt={product.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-xl line-through tracking-tight text-gray-900">₹{product.price}</p>
              <p className="text-3xl tracking-tight text-gray-900">₹{product.discountPrice}</p>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>
                    <button
                      onClick={(e) => popUpMethod(e)}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size Guide
                    </button>
                  </div>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Sizes */}
              {/* Sizes */}
{product.sizes && product.sizes.length > 0 && (
  <div className="mt-10">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-medium text-gray-900">Size</h3>
      <button onClick={(e) => popUpMethod(e)} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
        Size Guide
      </button>
    </div>

    <select
      value={selectedSize?.id || ''}
      onChange={(e) => {
        const selected = product.sizes.find(size => size.id === e.target.value);
        setSelectedSize(selected);
      }}
      className="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    >
      <option value="">Select a size</option>
      {product.sizes.map((size) => (
        <option key={size.id} value={size.id}>
          {size.name}
        </option>
      ))}
    </select>
  </div>
)}

<button
  onClick={handleCart}
  type="submit"
  className="mt-10 flex w-full items-center justify-center rounded-md border px-8 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
  Add to Cart
</button>

<Link to="/cart">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Go to Cart
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>

              {showAlert && (
                <div className="mt-4 text-red-500">
                  Please select both a color and a size.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

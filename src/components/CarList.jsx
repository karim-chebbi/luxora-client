import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCars } from '../JS/Actions/CarActions'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'
import AddCar from './AddCar'


export default function CarList() {
    const dispatch = useDispatch()
    const cars = useSelector((state) => state.CarReducer.cars);
    const load = useSelector((state) => state.CarReducer.load);

    const isAuth = useSelector((state)=> state.AuthReducer.isAuth)

    useEffect(() => {
      dispatch(getCars())
    }, [dispatch])
    

    console.log(cars)
  return (
    <div className="bg-white">
      {load && (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      )}
      <AddCar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {cars.map((product) => (
            <Link
              key={product.id}
              to={ isAuth ? `/carDetails/${product._id}` : "/login"}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt="hey"
                  src={product.image}
                  className="h-56 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.brand}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.model}
              </p>
              <p className="mt-1 text-lg font-medium text-gray-400">
                {product.year}
              </p>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

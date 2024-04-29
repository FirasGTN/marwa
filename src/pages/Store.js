import React, { useEffect, useState } from "react";
import "../Styles/store.css";
import axios from "axios";
import Loding from "../components/Loding";
import ItemShow from "../components/ItemShow";

export const getAllProducts = (setProducts) => {
  axios
    .get("/getproduct")
    .then((res) => {
      setProducts(res.data.product);
    })
    .catch((err) => console.log(err));
};
function Store(props) {
  const [products, setProducts] = useState();
  const [product, setProduct] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAllProducts(setProducts);
  }, []);
  return (
    <>
      <div
        className={
          props.LoginIsOpen || props.CartIsOpen || props.SignupIsOpen
            ? "overflow-hidden store h-screen"
            : "store"
        }
      >
        {open && product ? (
          <ItemShow
            setUserDataChanged={props.setUserDataChanged}
            product={product}
            open={open}
            setOpen={setOpen}
          />
        ) : null}
        {products ? (
          <div style={{ paddingTop: "80px" }}>
            <div className="categore-container">
              <div className="categore">
                <h1>Gender</h1>
                <div className="sep"></div>
                <p>Hoodies & Sweatshirts</p>
                <p>Jackets & vests</p>
                <p>Tops & T-Shirts</p>
                <p>Pants</p>
                <p>Shorts</p>
              </div>
            </div>
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {products.map((product) => (
                    <a
                      key={product.id}
                      href={product.href}
                      className="group"
                      onClick={() => {
                        setProduct(product);
                        setOpen(true);
                      }}
                    >
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-700">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        {product.price} TND
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loding />
        )}
      </div>
    </>
  );
}

export default Store;

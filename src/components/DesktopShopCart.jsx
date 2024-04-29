import { useEffect, useState } from "react";
import { getAllProducts } from "../pages/Store";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function DesktopShopCart(props) {
  const [totalPrice, setTotalPrice] = useState();
  const [products, setProducts] = useState(
    props.userData ? props.userData.cart : false
  );

  // State for quantity, initialized as an array with the same length as products, all values set to 1
  const [quantities, setQuantities] = useState(
    products ? Array(products.length).fill(1) : []
  );

  // Function to handle quantity change
  const handleQuantityChange = (event, index) => {
    const newQuantity = parseInt(event.target.value); // Parse input value to integer

    // Create a new array with the updated quantity at the specified index
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;

    setQuantities(newQuantities); // Update quantities state
  };
  const handleCheckout = async () => {
    const decodedToken = jwtDecode(localStorage.getItem("token"));
    const userId = decodedToken.user.id;
    const orderData = {
      orderProdcutsData: {
        products: products,
        quantities: quantities,
        totalPrice: totalPrice,
        totalQuantity: quantities.reduce((total, qty) => total + qty, 0),
      },
      userId: userId,
    };

    // Make a POST request to your backend endpoint using Axios
    const response = await axios
      .post("/checkout", orderData)
      .then((response) => {
        // Handle success response
        console.log("Checkout successful:", response.data);
        // Optionally, you can redirect the user to a confirmation page or show a success message
      })
      .catch((error) => {
        // Handle error
        console.error("Error during checkout:", error);
        // Optionally, you can show an error message to the user
      });
  };

  useEffect(() => {
    // Calculate total price when products or quantities change
    if (products) {
      let total = 0;
      products.forEach((product, index) => {
        total += product.price * quantities[index]; // Multiply price by corresponding quantity
      });
      setTotalPrice(total);
    }
  }, [products, quantities]);

  return (
    <div
      style={{
        // height: "100%",
        margin: "auto",
        paddingBottom: "20px",
      }}
    >
      <div class=" w-full pt-5 w-fit ">
        <h1 class="mb-10 text-center text-2xl font-bold text-white w-fit m-auto">
          Cart Items
        </h1>

        <div class="mx-auto max-w-5xl   justify-between px-6 md:flex md:justify-between md:space-x-6 xl:px-0 max-h-[fit-content]">
          <div class="mt-6 h-full mb-5 sticky rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 md:mb-0 sticky-Checkout">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">
                {totalPrice ? totalPrice + " TND" : ""}
              </p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">Free</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">
                  {totalPrice ? totalPrice + " TND" : ""}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleCheckout()}
              class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            >
              Check out
            </button>
          </div>
          <div
            class=" rounded-lg md:w-2/3 "
            style={{
              // overflow: "scroll",
              paddingBottom: "10px",
            }}
          >
            {products
              ? products.map((p, index) => (
                  <div
                    key={index}
                    class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  >
                    <img
                      src={p.imageSrc}
                      alt="product-image"
                      class="w-full rounded-lg sm:w-40"
                    />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div class="mt-5 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-900">
                          {p.name}
                        </h2>
                        <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                      </div>
                      <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                          <span
                            class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => {
                              const newQuantity = Math.max(
                                1,
                                quantities[index] - 1
                              );
                              const newQuantities = [...quantities];
                              newQuantities[index] = newQuantity;
                              setQuantities(newQuantities);
                            }}
                          >
                            {" "}
                            -{" "}
                          </span>
                          <input
                            class="h-8 w-8 border bg-white text-center text-xs outline-none quantity"
                            id={`quantity-${index}`} // Unique ID for each quantity input
                            type="number"
                            value={quantities[index]} // Set input value to corresponding quantity state
                            min="1"
                            onChange={(event) =>
                              handleQuantityChange(event, index)
                            } // Bind onChange event to handleQuantityChange function with index
                          />
                          <span
                            class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => {
                              const newQuantity = quantities[index] + 1;
                              const newQuantities = [...quantities];
                              newQuantities[index] = newQuantity;
                              setQuantities(newQuantities);
                            }}
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div class="flex items-center space-x-4">
                          <p class="text-sm">{p.price} TND</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

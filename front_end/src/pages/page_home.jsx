import { useState, useEffect } from "react";
import axios from "axios";
import Navbars from "../components/layouts/navbar";
import ListProduct from "../components/list_product";

export default function Home() {
  const [openPopover, setOpenPopover] = useState(false);
  const [triggers, setTriggers] = useState({});

  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: newQuantity
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/shopping-carts?populate[0]=users_permissions_user&populate[1]=products&populate[2]=products.product_images&populate[3]=products.product_images.image_url&filters[users_permissions_user]=1");
        setCart(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((item) => {
      item.attributes.products.data.forEach((pr) => {
        totalPrice += (pr.attributes.price) * (quantities[pr.id] || 1);
      });
    });
    setTotalPrice(totalPrice);
  }, [cart, quantities]);

  useEffect(() => {
    const triggers = {
      onMouseEnter: () => setOpenPopover(true),
      onMouseLeave: () => setOpenPopover(false),
    };
    setTriggers(triggers);
  }, []);

  return (
    <div>
     
      <Navbars
        setOpenPopover={setOpenPopover}
        openPopover={openPopover}
        triggers={triggers}
        cart={cart}
        handleQuantityChange={handleQuantityChange}
        quantities={quantities}
        totalPrice={totalPrice}
      />
      <ListProduct />
    </div>
  );
}

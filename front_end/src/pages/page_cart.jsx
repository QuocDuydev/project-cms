import { useState, useEffect } from "react";
import Navbars from '../components/layouts/navbar'
import ListCard from '../components/list_card'
import axios from "axios";
export default function PageCart() {
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
        const reponse = await axios.get("http://localhost:1337/api/shopping-carts?populate[0]=users_permissions_user&populate[1]=products&populate[2]=products.product_images&populate[3]=products.product_images.image_url&filters[users_permissions_user]=1")

        setCart(reponse.data.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Tính tổng tiền khi quantities hoặc cart thay đổi
    let totalPrice = 0;
    cart.forEach((item) => {
      item.attributes.products.data.forEach((pr) => {
        totalPrice += (pr.attributes.price) * (quantities[pr.id] || 1);
      });
    });
    setTotalPrice(totalPrice);
  }, [cart, quantities]);

  const [openPopover, setOpenPopover] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  return (
    <div>
       <Navbars setOpenPopover={setOpenPopover} openPopover={openPopover} triggers={triggers} cart={cart} handleQuantityChange={handleQuantityChange} quantities={quantities} totalPrice={totalPrice} />
       <ListCard cart={cart} handleQuantityChange={handleQuantityChange} quantities={quantities} totalPrice={totalPrice}/>
    </div>
  )
}

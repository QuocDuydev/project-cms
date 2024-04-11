import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';
import AuthContext from '../context/AuthContext';

export default function ListProduct() {
    const [product, setProduct] = useState([]);
    const { authTokens } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [cart, setCart] = useState({

    });

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:1337/api/products?populate[0]=brand&populate[1]=inventories&populate[2]=product_images&populate[3]=product_images.image_url"
                );
                setProduct(response.data.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        getProduct();
    }, []);
    
    const handleAddCart = async (productId) => {
        try {
          const response = await axios.post(
            "http://localhost:1337/api/shopping-carts",
            {
              users_permissions_user: authTokens.user.id,
              products: productId,
              total_price: 1,
              quanlity: 1
            }
          );
          console.log('Create successful:', response.data);
          setCart(response.data);
          // Optional: Add a delay or perform any other actions after adding to cart
        } catch (error) {
          console.error('Create failed:', error);
          // Handle errors here
        }
      };
    
      const handleOnChange = (productId) => {
        setData(productId);
      };
    
    return (
        <>
            <div className="mx-auto max-w-screen-2xl p-2 lg:rounded-none lg:pl-6">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                        {product.map((item) => (
                                <div className="w-full p-4 lg:w-1/4 md:w-1/2" key={item.id}>
                                    <input type='hidden' value={item.id} onChange={e => setData(e.target.value)}/>
                                    <a className="relative block h-48 overflow-hidden rounded">
                                        {item.attributes.product_images?.data?.map((pr) =>
                                            pr.attributes?.image_url?.data?.map(
                                                (image, index) =>
                                                    index === 0 &&
                                                    image.attributes?.formats?.thumbnail?.url && (
                                                        <img
                                                            key={image.id}
                                                            alt="ecommerce"
                                                            className="block object-cover object-center w-full h-full"
                                                            src={
                                                                "http://localhost:1337" +
                                                                image.attributes.formats.thumbnail.url
                                                            }
                                                        />
                                                    )
                                            )
                                        )}
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
                                            CATEGORY
                                        </h3>
                                        <h2 className="text-lg font-medium text-gray-900 title-font">
                                            {item.attributes.product_name}
                                        </h2>
                                        <p className="mt-1">$ {item.attributes.price}</p>
                                    </div>
                                    <Button onClick={() => handleAddCart(item.id)} className='flex mx-auto'>Add Cart</Button>
                                </div>
                            ))}
                          
                        </div>

                    </div>
                </section>
            </div>
        </>

    )
}

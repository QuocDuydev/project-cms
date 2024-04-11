import { Typography } from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import ProductItem from './layouts/product_item';
import { useState } from "react";

export default function ListCard({ cart, handleQuantityChange, quantities, totalPrice }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className='mx-auto max-w-screen-2xl p-2 lg:rounded-none mt-7'>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-5 mx-auto flex flex-wrap">
                        <div className="flex flex-col flex-wrap px-5 py-6 lg:w-2/3 mr-2 -ml-2 bg-gray-100">
                            <div className=" w-full mx-auto ">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Products</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center">Price</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center">Quanlity</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center">Totals</th>
                                            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            item.attributes.products.data.map((pr) => (
                                                <tr key={pr.id}>
                                                    <td className="px-4 py-3">
                                                        <div>
                                                            <div className="flex w-full mb-3">
                                                                {pr.attributes.product_images.data.map((prim) => (
                                                                    prim.attributes.image_url.data.map((prims, index) => (
                                                                        index === 0 && prims.attributes?.formats?.thumbnail?.url && (
                                                                            <img
                                                                                key={prims.id}
                                                                                alt="ecommerce"
                                                                                className="block object-cover object-center w-[30%] h-[30%]"
                                                                                src={"http://localhost:1337" + prims.attributes.formats.thumbnail.url}
                                                                            />
                                                                        )
                                                                    ))
                                                                ))}

                                                                <div className="p-2 w-full">
                                                                    <div className="flex">
                                                                        <Typography
                                                                            color="blue-gray"
                                                                            className="text-sm font-bold"
                                                                        >
                                                                            {pr.attributes.product_name}
                                                                        </Typography>
                                                                    </div>

                                                                    {pr.attributes.product_images.data.map((prm) => (
                                                                        <Typography
                                                                            color="blue-gray"
                                                                            className="text-sm mt-2"
                                                                        >
                                                                            {prm.attributes.color} / {prm.attributes.size}
                                                                        </Typography>
                                                                    ))}
                                                                   
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <Typography
                                                            color="blue-gray"
                                                            className="text-sm text-center font-bold"
                                                        >
                                                            ${pr.attributes.price}
                                                        </Typography>
                                                    </td>
                                                    <td className="px-4 py-3 text-center text-black">
                                                        <ProductItem
                                                            quantity={quantities[pr.id] || 1} 
                                                            onQuantityChange={(newQuantity) => handleQuantityChange(pr.id, newQuantity)} 
                                                        />
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <Typography
                                                            color="blue-gray"
                                                            className="text-sm font-bold ml-auto mt-1 text-black text-center"
                                                        >
                                                            ${(pr.attributes.price) * (quantities[pr.id] || 1)}
                                                        </Typography>
                                                    </td>
                                                    <td className='text-center'>
                                                        <TrashIcon className="text-sm mx-auto text-black h-6 w-6 cursor-pointer " />
                                                    </td>
                                                </tr>
                                            ))
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex flex-col flex-wrap px-5 py-6 lg:w-1/3 ml-2 -mr-2 bg-blue-100 ">
                            {/* Nội dung sidebar */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

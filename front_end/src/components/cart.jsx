
import {
  Typography, Badge,
  Popover, PopoverHandler, PopoverContent

} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { BanknotesIcon, ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/outline";
import ProductItem from "./layouts/product_item";

export default function Cart({setOpenPopover, openPopover, triggers, cart, handleQuantityChange, quantities, totalPrice}) {
  
  return (
    <>
      <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
          <div className="mr-5 -mb-2 cursor-pointer">
            <Link to="/cart">
              <Badge content={cart ? cart.length : 0} withBorder>
                <ShoppingCartIcon className="h-8 w-8" />
              </Badge>
            </Link>
          </div>
        </PopoverHandler>
        <PopoverContent {...triggers} className="z-50 max-w-[24rem] resize-none">
          {cart.map((item) => (
            item.attributes.products.data.map((pr) => (
              <div className="flex w-full mb-3" key={pr.id}>
                {pr.attributes.product_images.data.map((prim) => (
                  prim.attributes.image_url.data.map((prims, index) => (
                    index === 0 && prims.attributes?.formats?.thumbnail?.url && (
                      <img
                        key={prims.id} // Thêm key vào ở đây
                        alt="ecommerce"
                        className="block object-cover object-center w-[27%] h-[27%]"
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
                    <TrashIcon className="text-sm ml-auto text-black h-6 w-6 cursor-pointer" />
                  </div>
                  <Typography
                    color="blue-gray"
                    className="text-sm mt-2"
                  >
                    ${pr.attributes.price}
                  </Typography>
                  {/* Hiển thị màu sắc và kích thước */}
                  {pr.attributes.product_images.data.map((prm) => (
                    <Typography
                      color="blue-gray"
                      className="text-sm mt-2"
                    >
                      {prm.attributes.color} / {prm.attributes.size}
                    </Typography>
                  ))}
                  <div className="flex mt-2">
                    {/* Component để tăng/giảm số lượng sản phẩm */}
                    <ProductItem
                      quantity={quantities[pr.id] || 1} // Số lượng mặc định là 1 nếu chưa được đặt
                      onQuantityChange={(newQuantity) => handleQuantityChange(pr.id, newQuantity)} // Cập nhật số lượng
                    />
                    <Typography
                      color="blue-gray"
                      className="text-sm font-bold ml-auto mt-1 text-black"
                    >
                      Totals: ${(pr.attributes.price) * (quantities[pr.id] || 1)} {/* Tính tổng tiền */}
                    </Typography>
                  </div>
                </div>
              </div>
            ))
  
          ) ) }
          <div className="mt-6 flex justify-center gap-8 border-t border-blue-gray-50 pt-4">
              <Typography
                variant="small"
                color="gray"
                className="flex  gap-2 text-sm font-bold text-red-600 text-center"
              >
                <BanknotesIcon className="h-6 w-6" />
                Totals Price: ${totalPrice} 
              </Typography>
            </div>

      </PopoverContent>
    </Popover >
    </>
  );
}

import React, { useState } from "react";
import {
  Typography, Button,

} from "@material-tailwind/react";

export default function ProductItem({ quantity, onQuantityChange }) {

  const increaseQuantity = () => {
    onQuantityChange(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="sm"
        onClick={decreaseQuantity}
        className="px-4 py-1 h-7 rounded-none rounded-s-lg"
      >
        <Typography variant="h6" className=" -m-3">
          {" "}
          -{" "}
        </Typography>
      </Button>
      <Button variant="outlined" size="sm" className="px-4 py-1 h-7 rounded-none">
        <Typography variant="h6" className=" -m-3">
          {quantity}
        </Typography>
      </Button>
      <Button
        variant="outlined"
        size="sm"
        onClick={increaseQuantity}
        className="px-4 py-1 h-7 rounded-none rounded-e-lg"
      >
        <Typography variant="h6" className=" -m-3">
          {" "}
          +{" "}
        </Typography>
      </Button>
    </div>
  );
}

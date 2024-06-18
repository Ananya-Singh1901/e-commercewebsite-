import { useContext } from "react"
import React from 'react'
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Item from "../Components/Item/Item";

const Product = (prop) => {
  const {productId} = useParams();
  const { all_product } = useContext(ShopContext);
  let FilteredItem = all_product.filter(e => {
    return e.id === Number(productId)
  })
  console.log(FilteredItem);
  return (
    <div>
       {FilteredItem.map((item, i) => (
        <Item
          key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      ))}
    </div>
  )
}

export default Product

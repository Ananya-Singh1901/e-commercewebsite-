import React, { useContext } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'

const ShopCategory = ({ Banner, category }) => {
  const { all_product } = useContext(ShopContext);

  const filteredItems = all_product.filter(item => {
    return item.category === category;
  });

 return (
    <div className='shop-category'>
      {Banner && <Banner />}
      <div className="shopcategory-indexSort">
        <p><span>Showing 1 - 12</span> out of 54 Products</p>
        <div className="shopcategory-sort">Sort by  <img src={dropdown_icon} alt="" /></div>
      </div>
      {filteredItems.map((item, i) => (
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
  );
};

export default ShopCategory;

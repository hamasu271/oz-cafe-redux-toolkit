import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/redux';

function Menu() {
  const menu = useSelector((state) => state.menu.menu);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;

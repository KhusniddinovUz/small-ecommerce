import React from 'react';
import {useDispatch} from 'react-redux';
import {changeProduct} from "../redux/actions/product";
import {changeSearch} from "../redux/actions/search";

const Navbar = () => {
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    let elements = e.target.parentElement.children;
    for (let x = 0; x < elements.length; x++) {
      elements[x].className = "";
    }
    e.target.className = "active";
    let product = e.target.textContent.toLowerCase();
    dispatch(changeProduct(product))
  }

  const searchHandler = (e) => {
    dispatch(changeSearch(e.target.value))
  }
  return (<div id='navbar'>
    <input type="search" onChange={searchHandler}/>
    <ul>
      <li className='active' onClick={clickHandler}>All</li>
      <li onClick={clickHandler}>Smartphones</li>
      <li onClick={clickHandler}>Computers</li>
      <li onClick={clickHandler}>Tablets</li>
    </ul>
  </div>)
}

export default Navbar;
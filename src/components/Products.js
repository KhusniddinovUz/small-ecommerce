import React from 'react';
import Product from './Product';
import {data} from "./data/data";
import Grid from '@mui/material/Grid';
import {useSelector} from "react-redux";
import {titles} from "./data/titles";

const Products = () => {
  const state = useSelector(state => state.product);
  const searchValue = useSelector(state => state.search);
  const result = titles.filter(i => i.toLowerCase().search(searchValue.toLowerCase()) !== -1)
  console.log(result)
  return (<Grid container spacing={5} justifyContent="space-evenly">
    {data && data.map(el => {
      if (state === "all") {
        if (result.findIndex(x => x === el.title) !== -1 || searchValue === "") return (<Grid item key={el.title}>
          <Product product={el}/>
        </Grid>)
      } else {
        if (el.type === state) {
          if (result.findIndex(x => x === el.title) !== -1 || searchValue === "") return (<Grid item key={el.title}>
            <Product product={el}/>
          </Grid>)
        }
      }
      return "";
    })}
  </Grid>)
};

export default Products;
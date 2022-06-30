import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Product = ({product}) => {
  return (<Card sx={{width: 345, height: 400}}>
    <CardHeader
      title={product.title}
    />
    <CardMedia
      component="img"
      height="194"
      image={product.image}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
    </CardContent>
  </Card>);
};

export default Product;
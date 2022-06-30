export const changeProduct = (newProduct) => {
  return {
    type: 'change_product',
    payload: newProduct
  }
}
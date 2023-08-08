<script>
  import { onMount } from 'svelte';
  import ProductDetail from './ProductDetail.svelte';
  import axios from 'axios';
  let products = [];
  onMount(async () => {
    // let data = await axios
    //   .get('https://fakestoreapi.com/products')
    //   .then((response) => {
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     // console.log(error)
    //   })
    //   .finally(() => {
    //     console.log('Fetch Data');
    //   });
    // console.log(data);
    const response = await fetch('https://fakestoreapi.com/products');
    products = await response.json();
  });
</script>

<div>
  <h1>Product</h1>
  <ProductDetail {products} />
</div>

<form on:submit|preventDefault={addToCart}>
    <slot></slot>
  </form>
  
  <script>
    import { addCartItem, isCartOpen } from '../cartStore';
  
    // we'll hardcode the item info for simplicity!
    const hardcodedItemInfo = {
      id: 'astronaut-figurine',
      name: 'Astronaut Figurine',
      imageSrc: '/avatar.png',
    }
  
    function addToCart() {
      isCartOpen.set(true);
      addCartItem(hardcodedItemInfo);
    }
  </script>
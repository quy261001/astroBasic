<div>
    <h3 class="text-center text-6xl mb-40 mt-10">Latest Art Pieces</h3>
    <div class="grid grid-cols-1 gap-24 xl:mx-48 xl:grid-cols-2 items-center">
        {#each arrayImage as {image, alt}, i}
           <div class="group relative cursor-pointer">
                <img class="relative z-10 w-full rounded-lg transition-all group-hover:-translate-x-3" src={image} alt={alt}>
                <div class="absolute left-0 top-0 h-full w-full rounded-lg bg-black transition-all group-hover:translate-x-4 group-hover:translate-y-4"></div>
           </div>
        {/each}
    </div>
</div>

<script setup>
    const arrayImage = [ 
        {
            image: '/art1.jpg',
            alt: 'art1'
        },
        {
            image: '/art2.jpg',
            alt: 'art2'
        },
        {
            image: '/art3.jpg',
            alt: 'art3'
        },
        {
            image: '/art4.jpg',
            alt: 'art4'
        }
    ]
    console.log('123')
</script>
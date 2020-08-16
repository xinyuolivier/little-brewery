<template>
    <div class="banner">
        <img src="/banner.jpg" style="width:100%;" class="img-fluid">
        <div class="centered">
            <h3>Welcome to My Little Brewery</h3>
            <p>Buy your bieres directly form the brewer!</p>
        </div>
    </div> 
</template>

<style scoped>
    .banner {
        position: relative;
        text-align: center;
        color: white;
    }

    img {
        object-fit: none; /* Do not scale the image */
        object-position: center; /* Center the image within the element */
        width: 100%;
        max-height: 250px;
        margin-bottom: 1rem;
        background-color: #f8f8f8;
        filter: brightness(60%);
    }
    
    /* Centered text */
    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
    }
</style>
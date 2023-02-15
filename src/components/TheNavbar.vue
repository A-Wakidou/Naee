<script setup lang="js">

    const Hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".links")
        
    Hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile_menu')
    })
</script>


<template>
        <nav class="bar">
        <a href="#" class="logo">
           <img src="../assets/image/logo.png" alt="">
        </a> 
        <div class="links">
            <ul>
                <li><a href="">Notre Histoire</a></li>
                <li><a href="">L’éco-conception</a></li>
                <li><a href="">Nos Produits</a></li>
                <li><a href="">Où nous trouver?</a></li>
            </ul>
        </div>
        <img class="hamburger" src="/menu.svg" alt="">
    </nav>
</template>

<style scoped>
    
.bar
{
    position: fixed;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    z-index: 100;
}

.links
{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
}

.links ul
{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: wrap;
    gap: 10px; 
}

.links a
{
    margin: 0 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: transparent;
    color: #000;
    font-size: 1.5em;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.links a:hover
{
    background-color: #000;
    color: #fff;
}
.hamburger
{
    display: none;
    cursor: pointer;
    width: 35px;
    position: relative;
}


@media screen and (max-width: 1025px)
{

    .hamburger
    {
        display: block;
    }
    .links
    {
        top : 0;
        right: 0;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.20);
        backdrop-filter: blur(8px);
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
        margin: 0 100%;
    }
    .links.mobile_menu 
    {
    margin: 0 0;
    }
    .links ul
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .links ul li
    {
        margin: 25px 0; 
    }
}

@media screen and (max-width: 500px)
{
    .logo
    {
        margin-right: 0;
        font-size: 14px;
        margin-right: 10px;
        transition: all 0.3s ease;
    }
    .form
    {
        margin-right: 5px;
        font-size: 0.7em;
        transition: all 0.3s ease;
    }
    .fancy-bg 
    {
        width: 80%;
        height: 90%;
        margin: 0;
    }
}

</style>
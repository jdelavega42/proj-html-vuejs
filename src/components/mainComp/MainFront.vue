<script>
export default {
    name: "MainFront"
}
</script>

<template>
<div class="container-blue d-flex justify-content-between searchbar">
   <img src="../../assets/images/MasterStudy_logo.svg" alt="">
    <span class="align-self-center"><i class="fa-solid fa-bars"></i>CATEGORY</span>
    <div class="input-group">
        <input type="text" name="searchbar" id="search" placeholder="Search Courses">
        <button class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    <div class="cta-group d-flex align-items-center">
        <span class="mx-1"><i class="fa-solid fa-bullhorn"></i>Become an Instructor</span>
        <span class="mx-1"><i class="fa-sharp fa-solid fa-briefcase"></i>For Enterprise</span>
    </div>
    <div class="login-group">
        <span class="mx-1">Log in</span>
        <button class="btn btn-primary mx-1">SIGN UP</button>
        <i class="fa-sharp fa-regular fa-bookmark"></i>
    </div>

</div>
<div class="container-green d-flex row-cols-2">
    <div class="col">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatum ullam aliquam id eius repellat optio, consectetur, alias quam aspernatur ipsa quos, molestias deserunt possimus adipisci blanditiis iusto explicabo earum?</p>
        
    </div>
    <div class="col">
        <img src="../../assets/images/base.png" alt="">
    </div>
</div>
<div class="container-green d-flex row-cols-3">
    <div class="col card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex voluptatibus, harum ullam, excepturi ipsa eum non corrupti, expedita quaerat necessitatibus iusto velit culpa quis quas saepe eius odio amet minima!</div>
    <div class="col card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex voluptatibus, harum ullam, excepturi ipsa eum non corrupti, expedita quaerat necessitatibus iusto velit culpa quis quas saepe eius odio amet minima!</div>
    <div class="col card">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex voluptatibus, harum ullam, excepturi ipsa eum non corrupti, expedita quaerat necessitatibus iusto velit culpa quis quas saepe eius odio amet minima!</div>
</div>
<div class="container-green">
    <div class="top d-flex">
        <div class="big-pic col-8">
        <img src="../../assets/images/cat_1-1540x750.jpg" alt="">
            lorem
    </div>
        <div class="col-4">
            <div class="col">
                <img src="../../assets/images/cat_2-740x310.jpg" alt="">
                lorem
            </div>
            <div class="col">
                <img src="../../assets/images/cat_3-740x310.jpg" alt="">
                lorem
            </div>
        </div>

    </div>
    <div class="bottom d-flex row-cols-3">
        <div class="col">
            <img src="../../assets/images/cat_5-740x310.jpg" alt="">
            lorem
        </div>
        <div class="col">
            <img src="../../assets/images/cat_4-740x310.jpg" alt="">
            lorem
        </div>
        <div class="col">
            <img src="../../assets/images/cat_6-740x310.jpg" alt="">
            lorem
        </div>


    </div>
</div>
</template>

<style lang="scss" scoped>
.searchbar {

    .input-group {
        width: auto;
    }
}
</style>
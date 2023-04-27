<script>
export default {
    name: "MainSub"
}
</script>

<template>
    <div class="container-green d-flex">
        <div class="text">
            <p>Subscribe our newsletter</p>
            <p>There are many variation of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
        </div>
        <div class="subscription">
            <label for="">YOUR EMAIL ADDRESS</label>
            <div class="input-group">
                <input type="text" name="email" id="email" placeholder="Enter your e-mail">
                <button class="btn btn-primary">SUBSCRIBE</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.text {
    width: 60%;
}
.subscription{
    width: 40%;
}
</style>
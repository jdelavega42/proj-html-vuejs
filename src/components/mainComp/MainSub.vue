<script>
export default {
    name: "MainSub"
}
</script>

<template>
    <div class="ms_container">
        <div class="ms_container-sm">
            <div class="ms_text">
                <h4>Subscribe our newsletter</h4>
                <p>There are many variation of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
            </div>
            <div class="ms_subscription">
                <label for="">YOUR EMAIL ADDRESS</label>
                <div class="input-group">
                    <input type="text" name="email" id="email" placeholder="Enter your e-mail">
                    <button class="btn btn-primary">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_container {
    background-color: lightgreen;
    
    .ms_container-sm {
        display: flex;
        gap: 2rem;
        margin: 0 auto;
        padding: 2rem 0;
        color: white;
    }
    .ms_text {
        width: 60%;
    }
    .ms_subscription{
        width: 40%;
        label {
            margin-bottom: .5rem;
        }
    }
}
</style>
<template>
    <div class="d-none d-md-block">
        <input style="height: 30px;margin-top: 2px;background-color: #f0f0f0;" type="text"
            class="form-control rounded-pill" :placeholder="Text" aria-label="Recipient's username"
            aria-describedby="basic-addon2">
    </div>
</template>
<script>
export default {
    name: 'SearchBar',

    props: {
        Text: {
            type: String,
            default:()=>"Search Here",
        }
    }

}
</script>

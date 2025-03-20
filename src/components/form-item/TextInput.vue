<template>
    <div class="col-lg-6 col-md-6 mb-1">
        <input :v-model="ModelName" type="text" class="form-control" :placeholder="Text" @input="$emit(ModelName, $event.target.value)"/>
    </div>
</template>
<script>
export default {
    name: 'TextInput',

    props: {
        Text: {
            type: String,
            default: () => "Input Text",
        },
        
        ModelName:{
            type: String,
            default: () => "Input Text",
        },
    },

}
</script>

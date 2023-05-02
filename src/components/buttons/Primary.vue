<template lang="">
    <button class="bg-blue-700 hover:bg-blue-200 rounded">{{ label }}</button>
</template>
<script>
export default {
    props:{
        label : {
            type : String,
            default : 'Submit',
            
        }
    }
}
</script>
<style lang="">
    
</style>
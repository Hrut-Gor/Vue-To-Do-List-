<template lang="">
  <button class="bg-black hover:bg-white hover:bg-opacity-20 rounded !mt-[10px] !px-[10px]">
    <h4 class="text-white  hover:text-black">{{ label }}</h4>
  </button>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "Submit",
    },
  },
};
</script>
<style lang=""></style>

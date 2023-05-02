<template lang="">
  <button class="bg-green-500 hover:bg-blue-200 rounded mt-[10px] px-[10px]">
    {{ label }}
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

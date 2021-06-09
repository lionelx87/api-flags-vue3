<template>
  <h2>Card</h2>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore();
    onMounted( () => {
      store.dispatch('getCountries');
    });
  }

}
</script>

<style>

</style>
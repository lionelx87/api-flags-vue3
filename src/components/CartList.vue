<template>
  <div class="row">
    <div class="col-12">
      {{ countries }}
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {

    const store = useStore();
    
    const countries = computed( () => {
      return store.getters.topCountriesPopulation;
    });

    onMounted( () => {
      store.dispatch('getCountries');
    });

    return { countries }

  }

}
</script>

<style>

</style>
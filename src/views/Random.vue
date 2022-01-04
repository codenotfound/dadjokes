<template>
  <h1 class="text-2xl">Random joke</h1>
  <p>{{ joke }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Random',
  components: {
  },
  computed: {
    ...mapGetters({
      joke: 'RANDOM_DAD_JOKE',
    }),
  },
  created() {
    this.$store.dispatch('GET_RANDOM_DAD_JOKE');
  },
});
</script>

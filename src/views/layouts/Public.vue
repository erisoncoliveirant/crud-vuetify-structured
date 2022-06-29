<template>
  <v-main>
    <router-view/>
    <Footer />
  </v-main>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'LayoutPublic',
  data: () => ({}),
  components: {
    Footer
  }
}
</script>

<template>
  <div>
    <v-snackbar v-model="show" :timeout="3000" top-right>
      Selected user is logged out
      <v-btn icon @click="show = false"><v-icon>mdi-close</v-icon></v-btn>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    show: {
      get() {
        return this.$store.state.showSnackbar;
      },
      set() {
        this.$store.dispatch("setSnackbar", value);
      },
    },
  },
};
</script>

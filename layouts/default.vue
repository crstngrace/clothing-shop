<template>
  <v-app>
    <v-app-bar
      class="my-10 py-0"
      height="40"
      color="primaryBG"
      flat
      app
      absolute
    >
      <v-spacer />
      <div class="text-center">
        <MyCart />
      </div>
    </v-app-bar>

    <v-main class="main">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 80px;

  & * {
    color: var(--v-darkGrey-base);
  }
}
</style>

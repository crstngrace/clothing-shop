<template>
  <v-menu v-model="cart" :nudge-width="200" offset-y elevation="0">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        class="darkGrey--text font-weight-regular text-capitalize rounded-0"
        :class="{ active: cart }"
        v-bind="attrs"
        v-on="on"
      >
        <span class="cart-icon mr-1" v-if="isSmallScreen">
          <v-icon small>mdi-cart</v-icon>
        </span>
        <span class="text-caption" v-else>My Cart</span>
        <span class="text-caption">( {{ total }} )</span>
      </v-btn>
    </template>

    <v-card class="rounded-0">
      <v-list-item-group>
        <v-list-item v-if="total === 0">
          <v-list-item-title> No items found </v-list-item-title>
        </v-list-item>
        <v-list-item v-for="(item, i) in items" :key="i" v-else>
          <v-list-item-icon>
            <v-img :src="item.imageURL" contain width="100"></v-img>
          </v-list-item-icon>

          <v-list-item-content class="align-self-start">
            <v-list-item-title class="py-1">
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle class="darkGrey--text">
              <p class="py-1">
                {{ item.total }}x
                <strong>{{ formatPrice(item.price) }}</strong>
              </p>
              <p class="py-2">Size: {{ item.size }}</p>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-card>
  </v-menu>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Menu',
  data() {
    return {
      cart: false,
    };
  },
  computed: {
    ...mapGetters({
      items: 'cart/getCartItems',
      total: 'cart/getCartTotal',
    }),
  },
};
</script>

<style lang="scss" scoped>
.v-menu__content {
  box-shadow: none;
  border-radius: 0;
  border: 1px solid var(--v-lightGrey-base);
}

.active {
  background: white;
  border: 1px solid var(--v-lightGrey-base);

  &:hover::before {
    opacity: 0;
  }
}
</style>

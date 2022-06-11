<!-- Please remove this file from your project -->
<template>
  <v-row class="product-item">
    <v-col cols="12" sm="6">
      <v-img
        :src="product.imageURL"
        :lazy-src="product.imageURL"
        contain
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-2"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
    <v-col cols="12" sm="6">
      <h2 class="font-weight-regular mb-5">{{ product.title }}</h2>

      <v-divider v-show="!isSmallScreen"></v-divider>
      <h4 class="my-1">{{ formatPrice(product.price) }}</h4>
      <v-divider v-show="!isSmallScreen"></v-divider>

      <p class="grey--text text-caption mt-5 mb-10">
        {{ product.description }}
      </p>

      <div class="sizes">
        <p class="text-caption text-uppercase">
          Size
          <span class="required--text">*</span>
          <strong>{{ selectedSize }}</strong>
        </p>
        <div class="size-selection">
          <v-btn
            @click="setSize(size.label)"
            class="size-selection-btn text-caption rounded-0 py-5 px-3 mr-2"
            :class="{ active: selectedSize === size.label }"
            outlined
            color="grey"
            v-for="(size, i) in product.sizeOptions"
            :key="i"
          >
            {{ size.label }}
          </v-btn>
          <small
            class="font-italic d-block error--text py-2"
            v-if="error"
          >
            {{ error }}
          </small>
        </div>
      </div>

      <v-btn
        outlined
        class="add-to-cart my-5 rounded-0 font-weight-bold"
        @click="addToCart(product)"
      >
        Add to cart
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
  },
  data() {
    return {
      error: '',
      selectedSize: '',
    };
  },
  methods: {
    addToCart(product) {
      if (this.selectedSize) {
        product.total = 1;
        product.size = this.selectedSize;
        this.$store.commit('cart/ADD_CART_ITEMS', product);
      } else {
        this.error = 'Please select one from the choices';
      }
    },
    setSize(size) {
      this.selectedSize = size;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  min-width: 0 !important;
}

.add-to-cart {
  border-width: 2px;
  transition: all;

  &:hover {
    background: black;
    color: white;
    transition-delay: 0.2s;
  }
}

.size-selection-btn {
  border-color: var(--v-lightGrey-base);

  &.active {
    border: 2px solid black;
  }
}
</style>

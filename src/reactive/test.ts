import { reactive, ref, computed, readonly } from 'vue';

export interface Product {
  firstName: string;
  firstPrice: number;
  firstQuantity: number;
}

export const useCart = () => {
  const product = reactive<Product>({ firstName: 'First Product', firstPrice: 10, firstQuantity: 1 });
//   const secondName = ref<string>('Second Product');
//   const secondPrice = ref<number>(20);
//   const secondQuantity = ref<number>(2);
//   const total = computed<number>(() => (product.firstPrice * product.firstQuantity + secondPrice.value * secondQuantity.value) * (100 - coupon.value) / 100);
//   const coupon = ref<number>(10);
//   const setCoupon = (percent: number): void => {coupon.value = percent};

  return { product };
};

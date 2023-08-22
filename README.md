# thepeer-vue
Official Vue package for [Thepeer](https://thepeer.co).
<br>
<p align="center">
   <img src="https://github.com/idorenyinudoh/thepeer-vue/assets/44336070/9c4e019f-d5cb-482a-9c03-b9ff90a5f459" alt="screenshot of thepeer's direct charge sdk">
   <img src="https://github.com/idorenyinudoh/thepeer-vue/assets/44336070/ff838e9c-d368-4ea2-bd0f-ec558cfd684d" alt="screenshot of thepeer's send sdk">
</p>
<p align="center">
   <img src="https://github.com/idorenyinudoh/thepeer-vue/assets/44336070/a5e1b510-6048-4547-8f9e-34afe6acd1be" alt="screenshot of thepeer's checkout sdk">
</p>
<br>

## Installation
> This package only supports Vue 3.

### npm
```shell
npm install thepeer-vue
```

### yarn
```shell
yarn add thepeer-vue
```

## Usage

> Only use in `<script setup>` or `setup()`.
>
> Applies to Vue and Nuxt.

```html
<script setup lang="ts">
import { useCheckout } from 'thepeer-vue'

const checkoutWithThepeer = () => {
  console.log('initializing sdk')

  useCheckout({
    currency: 'NGN',
    amount: 10000,
    meta: {
      discount: 'black friday'
    },
    onSuccess: (response: any) => {
      console.log('🚀 onSuccess', response)
    },
    onError: (response: any) => {
      console.log('🚀 onError', response)
    },
    onClose: (response: any) => {
      console.log('🚀 onClose', response)
    },
    publicKey: 'YOUR_PUBLIC_KEY',
    email: 'CUSTOMER_EMAIL'
  })
}
</script>

<template>
   <button @click="checkoutWithThepeer">Pay with Thepeer</button>
</template>
```

Implementation is similar for `useSend` and `useDirectCharge`.

## Configuration Options
- [Direct Charge](https://docs.thepeer.co/sdk/direct-charge#parameters)
- [Checkout](https://docs.thepeer.co/sdk/checkout#parameters)

## License
[MIT](https://opensource.org/licenses/MIT)
&copy; Idorenyin Udoh

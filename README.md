# thepeer-vue
Vue package for [Thepeer](https://thepeer.co).
<br>
<p align="center">
   <img width="1024" alt="vue x thepeer" src="https://github.com/idorenyinudoh/thepeer-vue/assets/44336070/c4227da9-a383-4cc6-b63e-ee7a59b7da47">
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
[MIT](https://github.com/idorenyinudoh/thepeer-vue/blob/main/LICENSE)
&copy; Idorenyin Udoh

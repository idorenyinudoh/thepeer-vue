<script setup>
import { useCheckout, useDirectCharge, useSend } from './lib/index'

const config = {
  currency: 'NGN',
  amount: 10000,
  meta: {
    discount: 'black friday'
  },
  onSuccess: (response) => {
    console.log('🚀 onSuccess', response)
  },
  onError: (response) => {
    console.log('🚀 onError', response)
  },
  onClose: (response) => {
    console.log('🚀 onClose', response)
  }
}

const handleSendPayment = () => {
  useSend({
    ...config,
    publicKey: 'pspk_test_2aj8xasztf4domzd2nphinvzkvecpbuyxldkvr3pkuvko',
    userReference: '73f03de5-1043-4ad1-bc2e-aa4d94ebee4f'
  })
}

const handleDirectChargePayment = () => {
  useDirectCharge({
    ...config,
    publicKey: 'pspk_test_2aj8xasztf4domzd2nphinvzkvecpbuyxldkvr3pkuvko',
    userReference: '73f03de5-1043-4ad1-bc2e-aa4d94ebee4f'
  })
}

const handleCheckoutPayment = () => {
  useCheckout({
    ...config,
    publicKey: 'pspk_test_2aj8xasztf4domzd2nphinvzkvecpbuyxldkvr3pkuvko',
    email: 'john@doe.com'
  })
}
</script>

<template>
  <h1>Thepeer's SDKs</h1>
  <button @click="handleSendPayment">Send</button>
  <button @click="handleDirectChargePayment">Direct Charge</button>
  <button @click="handleCheckoutPayment">Checkout</button>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
button {
  display: block;
  float: left;
  font-size: 12px;
  text-align: center;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  outline: none;
  border: none;
  box-shadow: none;
  padding: 0.9375rem 0.875rem;
  background-color: rgb(0, 105, 255);
  color: rgb(255, 255, 255);
  margin: 0 24px 0;
  cursor: pointer;
}
</style>
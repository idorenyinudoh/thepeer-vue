import { watchEffect, toValue } from 'vue'
import useScript from './script.js'
import { CheckoutProps, ThepeerProps } from './types.js'

declare const window: Window & typeof globalThis & { Thepeer: ThepeerProps }

const useCheckout = (props: CheckoutProps) => {
  const errorMessage = 'Unable to load Thepeer\'s Checkout Modal'
  const state = useScript()

  watchEffect(() => {
    if (state.value.error) {
      throw new Error(errorMessage)
    }
    if (state.value.loaded) {
      const checkout = window.Thepeer && window.Thepeer.Checkout(toValue(props))
      checkout.setup()
      return checkout.open()
    }
  })
}

export default useCheckout
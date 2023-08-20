import { onMounted, watchEffect, toValue } from 'vue'
import useScript from './script'
import { CheckoutProps, ThepeerProps } from './types'

declare const window: Window & typeof globalThis & { Thepeer: ThepeerProps }

const useCheckout = (props: CheckoutProps) => {
  const errorMessage = 'Unable to load Thepeer\'s Checkout Modal'
  const [loaded, error] = useScript()

  onMounted(() => {
    watchEffect(() => {
      if (error) {
        throw new Error(errorMessage)
      }
      if (loaded) {
        const checkout = window.Thepeer && window.Thepeer.Checkout(toValue(props))
        checkout.setup()
        return checkout.open()
      }
    })
  })
}

export default useCheckout
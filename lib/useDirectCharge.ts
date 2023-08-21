import { watchEffect, toValue } from 'vue'
import useScript from './script'
import { GeneralProps, ThepeerProps } from './types'

declare const window: Window & typeof globalThis & { Thepeer: ThepeerProps }

const useDirectCharge = (props: GeneralProps) => {
  const errorMessage = 'Unable to load Thepeer\'s Direct Charge Modal'
  const state = useScript()

  watchEffect(() => {
    if (state.value.error) {
      throw new Error(errorMessage)
    }
    if (state.value.loaded) {
      const directCharge = window.Thepeer && window.Thepeer.DirectCharge(toValue(props))
      directCharge.setup()
      return directCharge.open()
    }
  })
}

export default useDirectCharge
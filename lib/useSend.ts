import { watchEffect, toValue } from 'vue'
import useScript from './script.js'
import { GeneralProps, ThepeerProps } from './types.js'

declare const window: Window & typeof globalThis & { Thepeer: ThepeerProps }

const useSend = (props: GeneralProps) => {
  const errorMessage = 'Unable to load Thepeer\'s Send Modal'
  const state = useScript()

  watchEffect(() => {
    if (state.value.error) {
      throw new Error(errorMessage)
    }
    if (state.value.loaded) {
      const send = window.Thepeer && window.Thepeer.Send(toValue(props))
      send.setup()
      return send.open()
    }
  })
}

export default useSend
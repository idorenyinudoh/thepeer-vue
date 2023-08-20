import { onMounted, watchEffect, toValue } from 'vue'
import useScript from './script'
import { GeneralProps, ThepeerProps } from './types'

declare const window: Window & typeof globalThis & { Thepeer: ThepeerProps }

const useSend = (props: GeneralProps) => {
  const errorMessage = 'Unable to load Thepeer\'s Send Modal'
  const [loaded, error] = useScript()

  onMounted(() => {
    watchEffect(() => {
      if (error) {
        throw new Error(errorMessage)
      }
      if (loaded) {
        const send = window.Thepeer && window.Thepeer.Send(toValue(props))
        send.setup()
        return send.open()
      }
    })
  })
}

export default useSend
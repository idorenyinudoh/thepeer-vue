import { ref, watchEffect } from 'vue'

type StateType = {
  loaded: boolean,
  error: boolean
}

const thepeerJS = 'https://cdn.thepeer.co/v1/chain.js'

export default function useScript() {
  const state = ref<StateType>({
    loaded: false,
    error: false
  })

  const onScriptLoad = () => {
    state.value = {
      loaded: true,
      error: false
    }
  }

  const onScriptError = () => {
    state.value = {
      loaded: true,
      error: true
    }
  }

  watchEffect(() => {
    const scriptElement = document.getElementById('thepeer_script')
    const scriptSrc = scriptElement && scriptElement.getAttribute('src')

    if (scriptSrc) {
      return onScriptLoad()
    }

    const script = document.createElement('script')
    script.id = 'thepeer_script'
    script.src = thepeerJS
    script.async = true

    script.addEventListener('load', onScriptLoad)
    script.addEventListener('complete', onScriptLoad)
    script.addEventListener('error', onScriptError)
    
    document.body.appendChild(script)
    
    return () => {
      script.removeEventListener('load', onScriptLoad)
      script.removeEventListener('complete', onScriptLoad)
      script.removeEventListener('error', onScriptError)
    }
  })

  return state
}
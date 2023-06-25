import {EffectCallback, useEffect} from "react";

export function useDelaySearch(block: EffectCallback, deps: string[]) {
    console.assert(deps.length == 1)
    useEffect(() => {
        let timeoutId = -1
        let doing = false

        const delayedTask = () => {
            doing = true
            block()
            doing = false
        }
        const handleChange = () => {
            if (doing) {
                setTimeout(handleChange, 100)
                return
            }

            if (timeoutId >= 0) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() => {
                delayedTask();
            }, 500)
        }
    }, deps)
}
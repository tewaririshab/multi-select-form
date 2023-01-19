import { ReactElement, useState } from "react"

export function useForm(form: ReactElement[]) {
    const [step, setStep] = useState(0)

    function next() {
        setStep(i => {
            if (i >= 2 - 1) return i
            return i + 1
        })
    }

    function back() {
        setStep(i => {
            if (i <= 0) return i
            return i - 1
        })
    }

    return {
        step,
        formComponent: form[step],
        disablePrevious: step === 0,
        enableSubmit: step === 2 - 1,
        next,
        back,
    }
}
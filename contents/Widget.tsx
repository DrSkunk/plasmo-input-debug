import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

export const config: PlasmoCSConfig = {
  exclude_matches: [
    "https://*.ads.dpgmedia.cloud/*",
    "https://*.datastudio.dpgmedia.cloud/*"
  ]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export default function QuickActionsWidget() {
  return (
    <div className="qa-tw-root">
      <div className="fixed bottom-5 left-5">
        <InputTest />
      </div>
    </div>
  )
}

const InputTest = () => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const stopEventPropagation = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.stopPropagation()
  }

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      onKeyDown={stopEventPropagation}
      onKeyUp={stopEventPropagation}
      className="border p-2"
    />
  )
}

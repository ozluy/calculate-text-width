# Calculate Text Width
Function that calculates width of typed text

[![npm version](https://badge.fury.io/js/calculate-text-width.svg)](https://badge.fury.io/js/calculate-text-width)
![npm download](https://img.shields.io/npm/dt/calculate-text-width.svg)


<a target="_blank" rel="noopener noreferrer" href="https://codesandbox.io/s/calculate-text-width-okr46"> Code Sandbox Demo </a>


How to use
===
 
```js
import calculateTextWidth from "calculate-text-width";

/*
 requires two props "value" and "font"
  - defaultFont: normal 500 14px sans-serif 
 */
const calculatedWidth = calculateTextWidth('calculate my width', 'normal 500 14px sans-serif')
console.log(calculatedWidth) // 114.37890625

```

How to use with React
===

```jsx
import React, { useState, useMemo } from "react"
import calculateTextWidth from "calculate-text-width"

export default () => {
  const [value, setValue] = useState("change me")

  return (
    <>
      <h1>Calcule Text Width</h1>
      <input
        style={{
          width: `${calculateTextWidth(value)}px`,
          font: "normal 500 14px sans-serif"
        }}
        value={value}
        type="text"
        onChange={evt => setValue(evt.target.value)}
      />
    </>
  )
}

```

<a href="https://paypal.me/ozluy"> <img src="https://raw.githubusercontent.com/ozluy/react-stripe-script-loader/master/buy-me-a-coffee-with-paypal.png" /></a>

Thank you

#### Yusuf Özlü





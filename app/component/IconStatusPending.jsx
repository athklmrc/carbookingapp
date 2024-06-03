import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function IconStatusPending(props) {
  return (
    <Svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Circle
        cx={8}
        cy={8}
        r={7.345}
        fill="none"
        stroke="#ff7c1e"
        strokeWidth={0.7}
      />
      <Path
        d="M11 8H8M14.166 4.003H11.44"
        fill="none"
        stroke="#ff7c1e"
        strokeWidth={0.7}
        strokeLinecap="round"
      />
      <Path
        d="M8 3.5V8"
        fill="none"
        stroke="#ff7c1e"
        strokeWidth={0.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default IconStatusPending

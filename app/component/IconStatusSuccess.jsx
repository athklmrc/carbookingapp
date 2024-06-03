import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IconStatusSuccess(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#fff" d="M5 4.5H21V20.5H5z" />
      <Path
        d="M12.5 0C5.588 0 0 5.588 0 12.5 0 19.413 5.588 25 12.5 25 19.413 25 25 19.413 25 12.5 25 5.588 19.413 0 12.5 0zm6.938 9.611l-8.532 8.239-4.685-4.687 1.612-1.582 3.311 3.194 6.832-6.686z"
        fill="#3abb15"
      />
    </Svg>
  )
}

export default IconStatusSuccess

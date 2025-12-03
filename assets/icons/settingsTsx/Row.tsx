import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";
const SvgRow = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path fill="#000" d="M0 0h16v16H0z" opacity={0.01} />
    <Path
      fill="#9393AA"
      fillRule="evenodd"
      d="M5.237 3.338a.767.767 0 0 1 0-1.108.827.827 0 0 1 1.144 0l5.382 5.216a.767.767 0 0 1 0 1.108L6.381 13.77a.827.827 0 0 1-1.144 0 .767.767 0 0 1 0-1.108L10.047 8z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRow;

import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";
const SvgMode = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      fill="#00A7A5"
      d="M15 0C6.728 0 0 6.728 0 15s6.728 15 15 15 15-6.727 15-15S23.273 0 15 0M1.167 15c0-7.466 5.955-13.557 13.362-13.807v27.619c-7.407-.25-13.362-6.342-13.362-13.808z"
    />
  </Svg>
);
export default SvgMode;

import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";
const SvgEditProfile = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#00A7A5"
      fillRule="evenodd"
      d="M7.2 0h9.6A7.2 7.2 0 0 1 24 7.2v9.6a7.2 7.2 0 0 1-7.2 7.2H7.2A7.2 7.2 0 0 1 0 16.8V7.2A7.2 7.2 0 0 1 7.2 0"
      clipRule="evenodd"
    />
    <Path fill="#000" d="M4 4h16v16H4z" opacity={0.01} />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M18.646 6.573 17.42 5.35c-.467-.467-1.197-.467-1.634 0l-.963.961a.28.28 0 0 0 0 .408l2.48 2.477a.28.28 0 0 0 .409 0l.963-.962a1.186 1.186 0 0 0-.029-1.66m-4.64.962a.28.28 0 0 0-.41 0L5.98 15.139l-.963 3.293c-.088.32.204.64.525.553l3.327-.932H8.84l7.618-7.605a.28.28 0 0 0 0-.407z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgEditProfile;

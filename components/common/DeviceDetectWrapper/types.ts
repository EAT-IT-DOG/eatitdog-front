import * as rdd from "react-device-detect";

export interface DeviceDetectWrapProps {
  children: (props: typeof rdd) => React.ReactNode;
}

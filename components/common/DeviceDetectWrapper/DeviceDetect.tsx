import { DeviceDetectWrapProps } from "./deviceDetectWrapper.type";
import * as rdd from "react-device-detect";

const DeviceDetect = ({ children }: DeviceDetectWrapProps) => {
  return <>{children(rdd)}</>;
};

export default DeviceDetect;

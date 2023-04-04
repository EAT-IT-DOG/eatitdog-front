import dynamic from "next/dynamic";

const DeviceDetectWrapper = dynamic(() => import("./DeviceDetect"), {
  ssr: false,
});

export default DeviceDetectWrapper;

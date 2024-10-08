import React, { CSSProperties } from "react";

type Props = {
  width?: CSSProperties["width"];
};
export const LineGradient = React.memo(({ width = "w-full" }: Props) => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
});

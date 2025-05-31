import React from "react";

const RadialBackground = ({
  colorFrom = "rgba(6, 52, 150, 1)",
  colorTo = "rgba(14, 61, 143, 1)",
  top = "10%",
  left = "10%",
  width = "100%",
  height = "100%",
  opacity = 1,
  zIndex = -1,
}) => {
  const backgroundStyle = {
    background: `radial-gradient(circle, ${colorFrom} 0%, ${colorTo} 100%)`,
    position: "absolute",
    width,
    height,
    top: top,
    left: left,
    zIndex,
    opacity,
    borderRadius: "50%",
    pointerEvents: "none",
    filter:"blur(100px)"
  };

  return <div style={backgroundStyle} />;
};

export default RadialBackground;

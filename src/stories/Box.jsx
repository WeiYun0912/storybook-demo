import React from "react";
import PropTypes from "prop-types";
import Center from "./Center";

const Box = ({ backgroundColor, label, size, show }) => {
  let scale = 1;
  if (size == "sm") scale = 0.5;
  if (size == "md") scale = 0.75;

  const style = {
    width: "200px",
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    backgroundColor,
  };

  return (
    <>
      {show && (
        <Center>
          <div style={style}>{label}</div>
        </Center>
      )}
    </>
  );
};

export default Box;

Box.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  show: PropTypes.bool,
};

Box.defaultProps = {
  backgroundColor: "cyan",
  show: true,
};

const getCurrProgressColor = (currProgressVal: number) => {
  // Variables
  const COLORS_MAP = {
    RED: "#ea5b71",
    ORANGE: "#f8b64c",
    GREEN: "#4c8811",
  };

  // Checking an exception
  if (Number.isNaN(currProgressVal)) {
    return COLORS_MAP.RED;
  }

  // Checking a "green" range
  if (currProgressVal >= 91) {
    return COLORS_MAP.GREEN;
  }

  // Checking an "orange" range
  if (currProgressVal >= 51) {
    return COLORS_MAP.ORANGE;
  }

  // Return a default state
  return COLORS_MAP.RED;
};

/**
 *  Exports
 */
export {
  getCurrProgressColor,
};

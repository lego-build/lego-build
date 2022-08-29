import React, { useState, useEffect } from "react";

function blockName() {
  const [state, setState] = useState();

  useEffect(() => {}, [state]);

  return [state];
}

export default blockName;

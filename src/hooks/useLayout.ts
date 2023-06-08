import React, { useState } from "react";

export default function UseLayout() {
  const [showMenu, setShowMenu] = useState(true);
  return { showMenu, setShowMenu };
}

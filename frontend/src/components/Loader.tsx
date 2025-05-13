import React from "react";

const Loader = () => {
  return (
    <span className="loader relative w-12 h-12 rounded-full animate-rotate block before:absolute before:inset-0 before:rounded-full before:border-[5px] before:border-blue-300 before:box-border before:animate-prixClipFix after:absolute after:inset-2 after:rounded-full after:border-[5px] after:border-blue-500 after:box-border after:animate-prixClipFix after:rotate-[180deg] after:[transform:rotate3d(90,90,0,180deg)]"></span>
  );
};

export default Loader;

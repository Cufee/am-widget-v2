import React from "react";

function Footer() {
  return (
    <div className="text-gray-500 flex gap-1 justify-center">
      <span>Powered By</span>
      <a
        rel="noreferrer"
        target={"_blank"}
        href="https://aftermath.link"
        className="text-red-500 hover:text-red-600 cursor-pointer"
      >
        Aftermath
      </a>
    </div>
  );
}

export default Footer;

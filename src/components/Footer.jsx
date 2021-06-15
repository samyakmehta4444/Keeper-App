import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} SAMYAK MEHTA.</p>
      <p> All Rights Reserved. </p>
    </footer>
  );
}

export default Footer;

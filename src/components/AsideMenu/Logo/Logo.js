import React from "react";

const Logo = () => {
  return (
    <a
      className="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">
        SB Admin <sup>2</sup>
      </div>
    </a>
  );
};

export default Logo;

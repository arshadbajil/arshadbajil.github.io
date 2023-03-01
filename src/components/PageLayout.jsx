import React from "react";

const PageLayout = ({ id, children, className, minus }) => {
  return (
    <section
      className={className}
      id={id}
      style={{ minHeight: minus ? `${100 - minus}vh` : "100vh" }}
    >
      {children}
    </section>
  );
};
export default PageLayout;

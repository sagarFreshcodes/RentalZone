import React, { useEffect } from "react";

const RedirectExternal = () => {
  useEffect(() => {
    // Redirect to google.com when the component mounts
    window.location.href = "https://rentalzone.in/admin";
  }, []);

  return <></>; // This component doesn't render anything
};

export default RedirectExternal;

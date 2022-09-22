import React, { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <div className="footer">
      <p>Copyright © 2018 - {date} All Rights Reserved by kawindunirmal.me</p>
    </div>
  );
};

export default Footer;

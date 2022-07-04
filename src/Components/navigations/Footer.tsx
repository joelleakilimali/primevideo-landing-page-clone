import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <img src="./assets/footer_logo.png" alt="" />
      <div className="footer-content">
        <p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Terms and Privacy NoticeSend us feedback Help
          </a>{" "}
          © 1996-2022, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;

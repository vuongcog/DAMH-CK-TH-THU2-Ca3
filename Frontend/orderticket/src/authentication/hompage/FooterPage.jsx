import React from "react";

const FooterPage = () => {
  const chiNhanh = [
    "CinerStar Đà Lạt",
    "CinerStar Đức trọng",
    "CinerStar Quốc Thanh",
    "CinerStar Hai Bà Trưng",
    "CinerStar Kiên Giang",
    "CinerStar Huế",
    "CinerStar Bình Dương",
  ];
  return (
    <div>
      <div>
        <h1>asdasd</h1>
        <ul>
          {chiNhanh.map((item) => {
            <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterPage;

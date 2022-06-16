import React from "react";

function Info() {
  return (
    <div style={{ display: "flex", height: "40px", marginBottom: "10px" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          backgroundImage: `url('https://www.amica.it/wp-content/uploads/2020/11/sottoculture-di-tiktok-1.jpg?v=1045721')`,
          backgroundSize: "cover",
          borderRadius: "50%",
          marginRight: "7px",
        }}
      ></div>

      <div>
        <p style={{ margin: "0", color: "white" }}>Jane Dow</p>
        <p style={{ margin: "0", color: "white" }}>minhthuc@gmail.com</p>
      </div>
    </div>
  );
}

export default Info;

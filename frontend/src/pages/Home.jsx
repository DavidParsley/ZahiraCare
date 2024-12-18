import React from "react";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "rgb(145,5,8)",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "rgb(248,240,240)" }}>Welcome To ZahiraCare</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="110x"
        width="110px"

        viewBox="0 -960 960 960"
        fill="#e8eaed"
      >
        <path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm0-80h640v-480H160v480Zm240-560h160v-80H400v80ZM160-160v-480 480Zm280-200v120h80v-120h120v-80H520v-120h-80v120H320v80h120Z" />
      </svg>
    </div>
  );
}

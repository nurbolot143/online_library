import React, { useEffect, useState } from "react";
import WishList from "../components/bookWishList/WishList";

const WishPage = () => {
  // const getBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //     reader.readAsDataURL(file);
  //   });
  // };

  // const imageUpload = (e) => {
  //   const file = e.target.files[0];
  //   getBase64(file).then((base64) => {
  //     localStorage["img"] = base64;
  //     console.debug("file stored", base64);
  //   });
  // };

  // const img = (new Image().src = localStorage.getItem("img"));

  return (
    <div>
      <WishList />
    </div>
  );
};

export default WishPage;

import React from "react";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading_container">
      <img
        className="rotating-image"
        src="https://firebasestorage.googleapis.com/v0/b/muji-app-8b909.appspot.com/o/images%2Fload-icon-png-8.png?alt=media&token=3686ad62-daff-4cc7-90f3-cade4aa45526"
      // src="https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg"
      />
    </div>
  );
}

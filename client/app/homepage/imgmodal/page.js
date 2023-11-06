import { Modal } from "@mui/material";
import React from "react";

function ImgModal({ imgprev, setImgprev, setImgData,imgData }) {
  return (
    <>
      <div>
        <Modal open={imgprev}>
          <img src={imgData.image} alt="images" className="w-28 h-24" />
        </Modal>
      </div>
    </>
  );
}

export default ImgModal;

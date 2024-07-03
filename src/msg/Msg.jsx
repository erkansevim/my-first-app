import React from "react";
import resim from "../assests/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg";

const Msg = () => {
  return (
    <div>
      <p style={{ color: "red" }}>Erkan Sevim</p>
      <h2>Burasi Msg alani</h2>
      <p>hosgeldin react</p>
      <img src={resim} alt="" />
    </div>
  );
};

export default Msg;

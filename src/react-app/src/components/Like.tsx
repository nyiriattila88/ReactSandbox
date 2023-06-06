import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

const Like = () => {
  const color = "#ff6b81";
  const size = 20;
  const onClick = () => {
    if (status) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  const [status, setStatus] = useState(false);

  if (status) {
    return <AiFillLike color={color} size={size} onClick={onClick} />;
  } else {
    return <AiOutlineLike color={color} size={size} onClick={onClick} />;
  }
};

export default Like;

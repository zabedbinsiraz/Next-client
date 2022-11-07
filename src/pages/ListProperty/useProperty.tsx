import { Form } from "antd";
import { useState } from "react";

const useProperty = () => {
  const [form] = Form.useForm();
  const [propertyType, setPropertyType] = useState("");
  const [isSelling, setIsSelling] = useState("");
  const [roomValue, setRoomValue] = useState("");
  const [bedRooms, setBedRooms] = useState("");
  const [bathRooms, setBathRooms] = useState("");
  const [halfRoomValue, setHalfRoomValue] = useState("");
  const [alsoRentIt, setAlsoRentIt] = useState(false);
  const [fromOwner, setFromOwner] = useState(false);

  const onFinish = (e) => {
    console.log(e);
    console.log(roomValue);
    console.log(halfRoomValue);
  };

  return {
    form,
    onFinish,
    setRoomValue,
    setHalfRoomValue,
    setBedRooms,
    setBathRooms,
  };
};

export default useProperty;

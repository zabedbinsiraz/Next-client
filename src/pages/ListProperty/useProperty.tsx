import { Form } from "antd";
import { useState } from "react";

const useProperty = () => {
  const [form] = Form.useForm();
  const [propertyType, setPropertyType] = useState("");
  const [isSelling, setIsSelling] = useState("");
  const [roomValue, setRoomValue] = useState("");
  const [homeType, setHomeType] = useState("");
  const [useDifferent, setUseDifferent] = useState(false);
  const [bedRooms, setBedRooms] = useState("");
  const [bathRooms, setBathRooms] = useState("");
  const [propertyExtras, setPropertyExtras] = useState("");
  const [halfRoomValue, setHalfRoomValue] = useState("");
  const [alsoRentIt, setAlsoRentIt] = useState(false);
  const [fromOwner, setFromOwner] = useState(false);

  const onFinish = (e) => {
    console.log(e);
    console.log(roomValue);
    console.log(homeType);
    console.log(halfRoomValue);
    console.log(alsoRentIt);
    console.log(fromOwner);
  };

  return {
    form,
    onFinish,
    setRoomValue,
    setHalfRoomValue,
    setBedRooms,
    setPropertyExtras,
    setBathRooms,
    setUseDifferent,
    useDifferent,
    setAlsoRentIt,
    alsoRentIt,
    isSelling,
    setIsSelling,
    fromOwner,
    setFromOwner,
    setHomeType,
  };
};

export default useProperty;

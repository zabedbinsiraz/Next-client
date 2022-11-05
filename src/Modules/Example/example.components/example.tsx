import { useDispatch, useSelector } from "react-redux";
import { setAllExamples } from "../exampleSlice";

function Example({ data, store }: any) {
  const dataFromStore = useSelector((state) => state);
  console.log("data from store", store);
  console.log(data);
  const dispatch = useDispatch();
  const handleDummyData = () => {
    dispatch(
      setAllExamples({ firstExample: "Project set up using next & adonis js" })
    );
  };
  return (
    <div>
      <button onClick={handleDummyData}>set dummy data</button>
      <h1>Hello next + adonis</h1>
    </div>
  );
}

export default Example;

import { useContext } from "react";
import { TextContext } from "../context/TextContextProvider";

export default function TextList() {
  const { texts } = useContext(TextContext);
  // console.log(texts);
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}

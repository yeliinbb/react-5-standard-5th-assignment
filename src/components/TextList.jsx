import { useContext } from "react";

export default function TextList() {
  const { texts } = useContext();
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}

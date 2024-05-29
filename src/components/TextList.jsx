import { useSelector } from "react-redux";

export default function TextList() {
  // 첫번째 state : rootstate
  // 화살표 뒤에 있는 것은 구독 대상
  // const texts = useSelector((state) => state.texts.data);
  const texts = useSelector((state) => state.texts);
  // console.log(texts);

  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}

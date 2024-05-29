import { createContext, useEffect, useState } from "react";

// ()안에 들어가는 값은 초기값
export const TextContext = createContext(null);

const TextContextProvider = ({ children }) => {
  // text랑 관련있는 로직은 모두 context API로 이동
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <TextContext.Provider value={{ texts, onAddText }}>
      {children}
    </TextContext.Provider>
  );
};

export default TextContextProvider;

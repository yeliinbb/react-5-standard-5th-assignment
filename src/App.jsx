import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import TextContextProvider from "./context/TextContextProvider";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.

  return (
    <TextContextProvider>
      <div>
        <h1>Text Input and Listing</h1>
        <TextInput />
        <TextList />
      </div>
    </TextContextProvider>
  );
}

export default App;

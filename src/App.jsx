import { useEffect, useState } from "react";
import Container from "./components/Container";
import Form from "./components/Form";
import Title from "./components/Title";
import ToDoList from "./components/List";
import { useTodoStore } from "./useTodoStore";
import Toggle from "./components/Toggle";
import Pagination from "./components/Pagination";
import { useQuery } from "react-query";
import { texts } from "./utils";
import ErrorSnackBar from "./components/errorSnackBar";

// const fetchItems = async () => {
//   const response = await fetch("https://apps.nicklima.com.br/todo/read");
//   console.log(response.data);
//   const data = await response.json();
//   return data;
// };

function App() {
  // const { data: items, isLoading, error } = useQuery("items", fetchItems);
  const [textInput, setTextInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [filteredArray, setFilteredArray] = useState([]);
  const [errorInput, setErrorInput] = useState(false);

  const { stringArray, setStringArray, language, setLanguage } = useTodoStore();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://apps.nicklima.com.br/todo/read");
      console.log(response.data);
      const data = await response.json();
      return data;
    };
    fetchItems();
  }, []);

  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (event) => {
    if (event.target.value.trim() !== "") {
      setErrorInput(false);
    }
    setTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textInput.trim() !== "") {
      const newArray = [...stringArray, { textInput, checked: false }];
      setStringArray(newArray);
      localStorage.setItem("todolist", JSON.stringify(newArray));
      setTextInput("");
      setErrorInput(false);
    } else {
      setErrorInput(true);
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === "PT" ? "EN" : "PT";
    setLanguage(newLanguage);
  };

  useEffect(() => {
    if (isChecked) {
      setFilteredArray(stringArray.filter((item) => !item.checked));
    } else {
      setFilteredArray(stringArray);
    }
  }, [isChecked, stringArray]);

  return (
    <>
      <ErrorSnackBar
        hasError={errorInput}
        errorMsg={texts[language].errorInput}
        show={errorInput}
        setShow={setErrorInput}
      />
      <Container>
        <Toggle
          isChecked={language !== "PT"}
          onChange={toggleLanguage}
          text="PT-BR"
          rightText="EN"
        />
        <form onSubmit={handleSubmit}>
          <Title text={texts[language].title} />
          <Form
            placeholder={texts[language].input}
            btnText={texts[language].button}
            value={textInput}
            onChange={handleInputChange}
          />
        </form>
        <Toggle
          isChecked={isChecked}
          onChange={handleToggleChange}
          text={texts[language].toggleComplete}
        />

        <ToDoList array={filteredArray} />
        <Pagination
          totalItems={stringArray.length}
          onPageChange={(page) => console.log(`Mudou para a página ${page}`)}
          currentPage={1}
        />
      </Container>
    </>
  );
}

export default App;

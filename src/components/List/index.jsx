import React, { useEffect, useRef, useState } from "react";
import { Check, Checked, Delete, Edit, Save } from "../../icons";
import { useTodoStore } from "../../useTodoStore";
import * as Styled from "./styled";

const ToDoList = ({ array }) => {
  const inputsRefs = useRef([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const { stringArray, setStringArray } = useTodoStore();

  const handleInputChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleEditItem = (index) => {
    inputsRefs?.current[index]?.focus();

    setEditIndex(index);
    setEditValue(stringArray[index].textInput);
  };

  const handleSaveItem = (index) => {
    const newArray = stringArray.map((item, i) => {
      if (i === index) {
        return { ...item, textInput: editValue };
      }
      return item;
    });

    setStringArray(newArray);
    setEditIndex(null);
  };

  const deleteItem = (item) => {
    const arrEdited = stringArray.filter((todo) => todo !== item);
    const newArray = [...arrEdited];
    setStringArray(newArray);
  };

  const handleCheckItem = (index) => {
    const newArray = stringArray.map((item, i) => {
      if (i === index) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setStringArray(newArray);
  };

  useEffect(() => {
    if (editIndex !== null) {
      const inputRef = inputsRefs.current[editIndex];

      inputRef.value = editValue;
      inputRef.selectionStart = inputRef.value.length;
      inputRef.selectionEnd = inputRef.value.length;

      inputRef.focus();
    }
  }, [editIndex]);

  return (
    <Styled.List>
      {array?.map((item, i) => (
        <Styled.ListItem key={`item-list-${i}`} isChecked={item?.checked}>
          {editIndex === i ? (
            <>
              <Styled.EditInput
                ref={(inputRef) => (inputsRefs.current[i] = inputRef)}
                focus={editIndex === i}
                value={editValue}
                type="text"
                onChange={handleInputChange}
              />
              <Styled.Button onClick={() => handleSaveItem(i)}>
                <Save />
              </Styled.Button>
            </>
          ) : (
            <>
              <Styled.Text>{item.textInput}</Styled.Text>
              <Styled.IconsWrapper>
                <Styled.Button
                  onClick={() => handleEditItem(i)}
                  disabled={item.checked}
                >
                  <Edit />
                </Styled.Button>
                <Styled.Button onClick={() => deleteItem(item)}>
                  <Delete />
                </Styled.Button>
                <Styled.Button onClick={() => handleCheckItem(i)}>
                  {item.checked ? <Checked /> : <Check />}
                </Styled.Button>
              </Styled.IconsWrapper>
            </>
          )}
        </Styled.ListItem>
      ))}
    </Styled.List>
  );
};

export default ToDoList;

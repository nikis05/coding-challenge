import { useState, useEffect } from "react";

// Components
import SelectedItem from "../components/SelectedItem/SelectedItem";
import Input from "./../components/Input/Input";
import SelectedBox from "./../components/SelectedBox/SelectedBox";

// Styles
import { GlobalStyles } from "./../styles/GlobalStyles";
import {
  Background,
  InputWrapper,
  Wrapper,
  SelectedItemsEl,
  TimesWrapper,
} from "./appStyles";

// Icons
import { FaRegTimesCircle } from "react-icons/fa";

import { optionsData } from "../data/index";
export interface OptionType {
  id: number;
  text: string;
  isSelected: boolean;
  isHover: boolean;
}

// data

const App = () => {
  const [optionIndex, setOptionIndex] = useState<number>(0);

  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);

  const [showSelectedBox, setShowSelectedBox] = useState<boolean>(false);

  const [selectedItems, setSelectedItems] = useState<OptionType[]>([]);

  const [options, setOptions] = useState<OptionType[]>(optionsData);
  const handleSearchInOption = (e: any) => {
    const searchOptions = optionsData.filter((item) =>
      item.text.includes(e.target.value)
    );

    setOptions(searchOptions);
  };

  const handleSelectedOption = (option: OptionType) => {
    setOptions((prev) =>
      prev.map((item) =>
        item.id === option.id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleAddSelectedItem = () => {
    const filterSelectedItems = options.filter((item) => {
      return item.isSelected;
    });

    if (filterSelectedItems.length !== 0) {
      setShowPlaceholder(false);
    } else {
      setShowPlaceholder(true);
    }
    setSelectedItems(filterSelectedItems);
  };

  const handleRemoveSelectedItem = (id: number) => {
    const filterSelectedItem = selectedItems.filter((item) => item.id !== id);

    setOptions((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isSelected: false } : item
      )
    );
    setSelectedItems(filterSelectedItem);
  };

  const handleClosedSelectBox = () => {
    setShowSelectedBox(false);
  };

  const handleShowSelectBox = () => {
    setShowSelectedBox(!showSelectedBox);
  };

  const removeAllSelectedItem = () => {
    setSelectedItems([]);

    const inactiveOptions = options.map((item) => {
      return { ...item, isSelected: false };
    });

    setOptions(inactiveOptions);
  };

  useEffect(() => {
    handleAddSelectedItem();
  }, [options]);

  const selectedOptionByKeyboard = (event: any) => {
    if (showSelectedBox) {
      if (event.keyCode === 40) {
        setOptionIndex(optionIndex + 1);
        if (optionIndex >= options.length) {
          setOptionIndex(0);
        }
      }
      if (event.keyCode === 38) {
        setOptionIndex(optionIndex - 1);
        if (optionIndex <= 0) {
          setOptionIndex(options.length);
        }
      }
      if (event.keyCode === 13) {
        const activeOption = options.map((item) =>
          item.id === optionIndex
            ? { ...item, isSelected: !item.isSelected, isHover: true }
            : { ...item, isHover: false }
        );

        setOptions(activeOption);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", selectedOptionByKeyboard);

    return () => {
      document.removeEventListener("keyup", selectedOptionByKeyboard);
    };
  }, [optionIndex]);

  useEffect(() => {
    const hoverOptions = options.map((item) =>
      item.id === optionIndex
        ? { ...item, isHover: true }
        : { ...item, isHover: false }
    );

    setOptions(hoverOptions);
  }, [optionIndex]);

  return (
    <>
      <Background onClick={handleClosedSelectBox} />
      <Wrapper>
        <GlobalStyles />
        <InputWrapper onClick={handleShowSelectBox}>
          <SelectedItemsEl>
            {selectedItems.map((selectedItem) => (
              <SelectedItem
                key={selectedItem.id}
                handleRemoveSelectedItem={handleRemoveSelectedItem}
                selectedItem={selectedItem}
              />
            ))}
            <Input
              placeholder="Please select"
              handleSearchInOption={handleSearchInOption}
              showPlaceholder={showPlaceholder}
            />
          </SelectedItemsEl>

          <TimesWrapper onClick={removeAllSelectedItem}>
            <FaRegTimesCircle />
          </TimesWrapper>
        </InputWrapper>

        {options.length !== 0 ? (
          <SelectedBox
            options={options}
            handleSelectedOption={handleSelectedOption}
            showSelectedBox={showSelectedBox}
            setShowSelectedBox={setShowSelectedBox}
          />
        ) : (
          <p>No Data...</p>
        )}
      </Wrapper>
    </>
  );
};

export default App;

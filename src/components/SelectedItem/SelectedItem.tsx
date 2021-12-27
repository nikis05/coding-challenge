import React, { FC } from "react";
import { OptionType } from "../../container/App";
import { Wrapper } from "./selectedItemStyles";
import { FaTimes } from "react-icons/fa";

interface Props {
  selectedItem: OptionType;
  handleRemoveSelectedItem: (id: number) => void;
}

const SelectedItem: FC<Props> = ({
  selectedItem,
  handleRemoveSelectedItem,
}) => {
  const { text, isSelected, id } = selectedItem;
  return (
    <Wrapper>
      <span>{text}</span>
      <button type="button" onClick={() => handleRemoveSelectedItem(id)}>
        <FaTimes />
      </button>
    </Wrapper>
  );
};

export default SelectedItem;

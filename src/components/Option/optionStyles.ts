import styled from "styled-components";

interface Props {
  isSelected: boolean;
  isHover: boolean;
}

export const OptionEl = styled.div<Props>`
  cursor: pointer;
  padding: 7px 10px;
  font-size:14px;
  background-color: ${({ isSelected }) => (isSelected ? "lightblue !important" : "#fff")};
  transition: 0.5s ease;
  &:hover {
    background-color: #ddd;
  }

  ${({isHover}) => isHover ? "background-color: #ddd" : null}
`;

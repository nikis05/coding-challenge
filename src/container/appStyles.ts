import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  top: 0;
  left: 0;
`;

export const Wrapper = styled.div`
  width: 476px;
  position: relative;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  border: 1px solid #d9d9d9;
  padding: 5px;
  background-color: #fff;
  
  & > div:first-child {
    display: flex;
    align-items: center;
  }

  &:hover > div:last-child {
    opacity: 1;
    visibility: visible;
  }
`;

export const SelectedItemsEl = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const TimesWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s ease;
`;

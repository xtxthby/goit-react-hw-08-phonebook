import styled from '@emotion/styled';
import { FaUserPlus } from 'react-icons/fa';

export const AddUserIcon = styled(FaUserPlus)`
  width: 20px;
  height: 20px;

  fill: #fff;
`;
export const ContentPageContainer = styled.div`
  padding: 38px 48px;
  height: 100vh;

  border-radius: 32px 32px 0 0;
  background-color: #f9f9f9;
`;
export const ContactNavWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 34px;
  color:  #7ca78c;
  
  margin: 0;
`;

export const FilterWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 250px;
  padding: 22px 36px;

  color: #000000;
  background: #efefef;
  border-radius: 8px;
  border-style: none;

  :placeholder {
    color: #757575;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;

  display: flex;
  align-items: center;
  gap: 14px;
  width: fit-content;

  padding: 1.063em 1.5em;
  margin-left: 28px;

  color: #fff;
  background-color: #7ca78c;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border: none;
  border-radius: 14px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #000000;
    background-color:  #fabb18;
    border: none;
    > svg {
      fill: #000000;
    }
  }
`;
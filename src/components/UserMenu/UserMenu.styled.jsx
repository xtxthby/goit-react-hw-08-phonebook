import styled from '@emotion/styled';

export const UserNavigarion = styled.div`
  display: flex;
  margin-left: auto;
`;
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
  margin-right: 32px;

  > div {
    display: grid;
    align-items: center;
    gap: 6px;
  }
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  text-align: right;

  color: #000000;
`;
export const UserEmail = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  text-align: right;

  color: #8f8f8f;
`;

export const UserAvatar = styled.div`
  width: 58px;
  height: 58px;

  background-color: #efefef;
  border-radius: 8px;
`;
export const LogOutBtn = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  padding: 22px 28px;

  color: #ffffff;
  background-color: #7ca78c;


  border-radius: 8px;
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    color: #000000;
    background: #fabb18;
  }
`;
import styled from 'styled-components';

export const Field = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 24px;
  input[type='text'],
  input[type='email'],
  input[type='number'] {
    background: #f0f0f5;
    border: 0;
    border-radius: 8px;
    color: #6c6c80;
    flex: 1;
    font-size: 16px;
    padding: 16px 24px;
    &::placeholder {
      color: #a0a0b2;
    }
  }
  input + span,
  select + span {
    color: red;
    display: block;
    margin-top: 6px;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #f0f0f5;
    border: 0;
    border-radius: 8px;
    color: #6c6c80;
    flex: 1;
    font-size: 16px;
    padding: 16px 24px;
  }
  label {
    font-size: 14px;
    margin-bottom: 8px;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex: 1;
  ${Field} + ${Field} {
    margin-left: 24px;
  }
`;

export const MapContainer = styled.div`
  > div {
    border-radius: 8px;
    height: 350px;
    margin-bottom: 5px;
    width: 100%;
  }
  & + span {
    color: red;
    display: block;
    margin-bottom: 24px;
  }
  & + ${FieldGroup} {
    margin-top: 24px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

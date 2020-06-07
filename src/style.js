import styled from 'styled-components'


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
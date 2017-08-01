import styled from 'styled-components';
const Pessoa = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    height: 200px;
`;

const Person = (props) => (
  <Pessoa>
    {props.children}
  </Pessoa>
)

export default Person;
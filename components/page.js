import styled from 'styled-components';
const Body = styled.div`
    margin: 0;
    padding: 0;
`;

const Page = (props) => (
  <Body>
    {props.children}
  </Body>
)

export default Page;
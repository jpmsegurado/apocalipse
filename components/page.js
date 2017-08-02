import styled from 'styled-components';
const Body = styled.div`
    margin: 0;
    padding: 0;
`;

const Page = (props) => (
  <Body className="container">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
    {props.children}
  </Body>
)

export default Page;
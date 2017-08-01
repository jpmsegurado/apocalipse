import styled from 'styled-components';
const Body = styled.body`
    margin: 0;
    padding: 0;
`;

const Page = (props) => (
  <Body className="container">
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
    </head>
    {props.children}
  </Body>
)

export default Page;
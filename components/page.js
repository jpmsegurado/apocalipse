import styled from 'styled-components';
const Body = styled.div`
    margin: 0;
    padding: 0;
`;

const Page = (props) => (
  <Body className={props.withoutContainer ? '' : 'container'}>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAD3yTq68bvCM8xkUSaByG3LETyCQaRzmU" />
    {props.children}
  </Body>
)

export default Page;
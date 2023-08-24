// import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";


 const Container = styled.div`
    width: 100%;
    height: 100vh;
    text-decoration: none;
 `
//  <>//flugment
const App = () => {
    return (
        <>
        <Container>
            <Navbar />
            </Container>
        </>
    );
}

export default App;

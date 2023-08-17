import { Container } from "@material-ui/core";
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Home = () =>{
    const [page, setPage] = useState('login');
    const handleClick = location => {
        setPage(location);
    };
    
    let Content;
    if (page === 'login') {
        Content = <Login handleClick={handleClick} />;
    } else {
        Content = <Register handleClick={handleClick} />;
    }
    return (
        <Container component="main" maxWidth="xs">
            {Content}
        </Container>
    )
}
export default Home;
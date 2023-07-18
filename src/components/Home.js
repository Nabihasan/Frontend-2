import React from "react";
import {Container,Button} from "reactstrap";

function Home(){
    return(
        <div align="center" >
            <h1>HelpDesk Management System</h1>
            <hr/>
            <p >
                <b>Welcome,Admin. You have extra privileges.</b>
            </p>
            <Container>
                <Button >View Tickets</Button>
            </Container>
        </div>
    );
}

export default Home;
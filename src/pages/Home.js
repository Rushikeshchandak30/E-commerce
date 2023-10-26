import React from "react";
import Navbar from "../features/navbar/navbar";
import Productlist from "../features/product-list/Components/Productlist";

function Home() {
    return (        
        <Navbar>
            <Productlist> </Productlist>
        </Navbar>
    );
}
export default Home;

import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Home from "./routes/Home";
import Update from "./routes/Update";
import Details from "./routes/Details";
import { RestaurantContextProvider } from './context/RestaurantContext';

function App(){
    return (
        <RestaurantContextProvider>
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/restaurants/:id/update" element={<Update />} />
                        <Route exact path="/restaurants/:id" element={<Details />} />
                    </Routes>
                </BrowserRouter>
            </div>

        </RestaurantContextProvider>);

}

export default App;

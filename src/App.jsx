import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Update from "./routes/Update";
import Details from "./routes/Details";
import AddReview from "./components/AddReview"; // Import AddReview component
import NotFound from "./components/NotFound"; // Import NotFound component
import { RestaurantContextProvider } from './context/RestaurantContext';

function App() {
    return (
        <RestaurantContextProvider>
            <div className="container">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/restaurants/:id/update" element={<Update />} />
                        <Route exact path="/restaurants/:id" element={<Details />} />
                        <Route exact path="/restaurants/:id/addReview" element={<AddReview />} />
                        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
                    </Routes>
                </BrowserRouter>
            </div>
        </RestaurantContextProvider>
    );
}

export default App;

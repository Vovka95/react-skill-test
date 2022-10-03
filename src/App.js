import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import BeersPage from "./pages/BeersPage";

function App() {
    return (
        <Provider store={store}>
            <div className="App h-screen">
                <BrowserRouter>
                    <header className="flex items-center top-0 h-1/6 w-full box-border px-4">
                        <Navigation />
                    </header>

                    <main className="h-5/6">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/beers" element={<BeersPage />} />
                        </Routes>
                    </main>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;

import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import "./App.css";
import { store } from "./reducers";
import createHistory from "history/createBrowserHistory";
import { CLayout } from "./components/Layout";
import { CUpdateCurrencyWithRouter } from "./components/UpdateCurrency";

export const history = createHistory();

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/*">
                        <CUpdateCurrencyWithRouter>
                            <CLayout />
                        </CUpdateCurrencyWithRouter>
                    </Route>
                </Router>
            </Provider>
        </div>
    );
}

export default App;

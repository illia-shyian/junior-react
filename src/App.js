import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import "./App.css";
import { store } from "./reducers";
import createHistory from "history/createBrowserHistory";
import { CLayoutPage } from "./components/pages/LayoutPage";

export const history = createHistory();

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router history={history}>
                    <CLayoutPage />
                </Router>
            </Provider>
        </div>
    );
}

store.subscribe(() => console.log(store.getState()));

export default App;

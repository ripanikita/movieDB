import * as React from "react";
import "./App.less";

import List from "./List";

class App extends React.Component {
    render() {
        return(
            <div className="wrap">
                <List/>
            </div>
        );
    }
}


export default App;
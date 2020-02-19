import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Counter from "./components/counter/counter";
import script from "./js/script";
import scrollMenu from "./js/scrollMenu";
import Footer from "./components/footer/footer";


class App extends React.Component {
    componentDidMount() {
        script ()
        scrollMenu()
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Counter/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <Footer />
            </div>
        )
    }

}

export default App;

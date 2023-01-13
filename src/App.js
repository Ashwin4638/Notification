import Parent from "./components/Counter/Parent"
import Form from "./components/Form/Form"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <div className="App">
        <BrowserRouter>
        <Link to="/">HOME</Link>
        <br/>
        <Link to="/form">GO To FORM PAGE</Link>
        <br/>
        <Routes>
          <Route path="/"  element={ <Parent/>}/>
        </Routes>
        <Routes>
          <Route path="/form"  element={ <Form/>}/>
        </Routes>
      </BrowserRouter>
        </div>
    )
}
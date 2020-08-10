import React from 'react';
import Home from './components/home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuizInstruction from './components/quiz-instruction';
import Play from './components/quiz/play';
import QuizSummary from './components/quiz/quizsummary'
function App() {
  return (

    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/play/instructions" exact component={QuizInstruction}></Route>
      <Route path="/play" exact exact component={Play}></Route>
      <Route path="/summary" exact exact component={QuizSummary}></Route>

    </Router>
    // <div className="App">
    //   <h1>Paranjothi</h1>
    // </div>
  );
}

export default App;

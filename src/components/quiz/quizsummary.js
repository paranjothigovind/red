import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class QuizSummary extends Component {
   
   constructor(props){
       super(props);
       this.state = {
           score: 0,
           numberofQuestions: 0,
           numberofAnsweredQuestions: 0,
           correctAnswers: 0,
           wrongAnswers: 0,

       };
   }
    
   componentDidMount () {
       const { state } = this.props.location;
        if (state){
            this.setState({
                score: (state.score / state.numberofQuestions) * 100,
                numberofQuestions: state.numberofQuestions,
                numberofAnsweredQuestions: state.numberofAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
    
            });
        }        
   }
   
   
         render(){
            const { state, score } = this.props.location;
            let stats, remark;
            const userScore = this.state.score;

            if(userScore <=30){
                remark = 'You need more practice';
            }else if(userScore > 30 && score <=50){
                remark = 'Better luck next time';
            }else if(userScore <=70 && score > 50){
                remark = 'You can do better';
            }else if(userScore >=71 && score <=84){
                remark = 'You did great';
            }else {
                remark = 'You\'re an absolute genius';
            }

            if( state !== undefined){
                stats = (
                    <Fragment>
                         <div>
                            <div className="quizend" style={{textAlign:"center"}}>
                                <span className="mdi mdi-check-circle-outline success-icon mdi-48px"></span>
                                <h3>Quiz has Ended</h3>
                            </div>     
                            <div className="container">
                                <h4>{remark}</h4>
                                <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                                <span className="stat left"> Total Number of questions: </span> 
                                <span className="right">{this.state.numberofQuestions}</span> <br />

                                <span className="stat left"> Total of Attempted Question: </span> 
                                <span className="right">{this.state.numberofAnsweredQuestions}</span><br />

                                <span className="stat left">Number Correct of questions: </span> 
                                <span className="right">{this.state.correctAnswers}</span><br />

                                <span className="stat left">Number of wrong questions: </span> 
                                <span className="right">{this.state.wrongAnswers}</span><br />

                            </div>
                            <section className="back">
                                <ul>
                                    <li>
                                        <Link to="/home ">Back to Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/play ">Play Again</Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </Fragment>                 
                );
            }else{
                stats = (
                
                <section>
                    <h1 className="no-stats">Not available</h1> 
                                <ul>
                                    <li>
                                        <Link to="/ ">Back to Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/play ">Play Again</Link>
                                    </li>
                                </ul>
                            </section>
                );
            }
            return(
                <Fragment>
                    <Helmet>
                        <title>Quiz Summary</title>
                    </Helmet>
                    {stats}
                </Fragment>
            );
        }
}

export default QuizSummary;
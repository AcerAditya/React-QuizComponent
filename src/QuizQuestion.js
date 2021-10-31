import { isBindingIdentifier } from 'babel-types';
import React, { Component } from 'react';

let quizData = require('./quiz_data.json');

class QuizQuestion extends Component {
    constructor (props) {
        super(props); 
        this.state = {
            quiz_position: 1,
        };
    }

    render() {
        return (
            <main>
            <section>
            <div>
                <div className='QuizQuestion'>
                    { quizData.quiz_questions[0].instruction_text }
                </div>
            </div>
            </section>
            <section className="buttons">
              <ul>
                //quiz question button logic goes here
              </ul>
            </section>
          </main>
        );
    }
}

export default QuizQuestion;
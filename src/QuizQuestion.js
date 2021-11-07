import React, { Component } from 'react';

class QuizQuestion extends Component {

    render() {
        return (
            <main>
                <section>
                    <p>
                        {this.props.qwer.instruction_text}
                    </p>
                </section>
                <section className="buttons">
                    <ul>
                        <li>{this.props.qwer.answer_options[0]}</li>
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;
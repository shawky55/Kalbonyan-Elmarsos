const poll = {
  question: 'what is your favourite programming language?',
  options: ['0:javaScript', '1:python', '2:Rust', '3:CPP'],
  answers: new Array(4).fill(0),

  //   print(options) {
  //     let answerStatemnts = '';
  //     for (let i = 0; i < this.options.length; i++) {
  //       answerStatemnts = answerStatemnts + this.options[i] + '/n';
  //     }
  //     return answerStatemnts;
  //   },
  registerNewAnswer() {
    const userAnswer = Number(
      prompt(`${this.question}\n${this.options.join(
        '\n'
      )}\n answer number of you choice
        `)
    );
    // typeof answer === 'number' &&
    //   userAnswer < this.answers.length &&
    //   this.answers[userAnswer]++;
    // console.log(this.answers);
    this.displayResult();
  },
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log('results', this.answers.join(', '));
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

  poll.displayResult.call({answers:[5,2,5]});
  
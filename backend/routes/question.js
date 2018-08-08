const Question = require('../models/Question');
module.exports = function(router) {

  router.route('/').get((req, res) => {
    res.send('Hello World!');
  });

  router.route('/questions').get((req, res) => {
    Question.find((err, questions) => {
      err ? console.log(err) : res.json(questions);
    });
  });

/*   router.route('/questions/:id').get((req, res) => {
    Question.findById(req.params.id, (err, question) => {
      err ? console.log(err) : res.json(question);
    });
  }); */

  router.route('/questions/add').post((req, res) => {
    let question = new Question(req.body);
    question
      .save()
      .then(question => res.status(200).json({ message: 'Add successfully.' }))
      .catch(err => res.status(400).send('Failed to create a new Question.'))
  });
}
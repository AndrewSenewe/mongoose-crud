const express      = require('express'),
      bodyParser   = require('body-parser'),
      mongoose     = require('mongoose')

      // index        = require('./routes/index'),
      books        = require('./routes/books'),
      transactions = require('./routes/transactions'),
      costumers    = require('./routes/costumers')

      app          = express();
mongoose.connect('mongodb://localhost/bookstore')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// app.use('/', index)
app.use('/books', books)
app.use('/transactions', transactions)
app.use('/costumers', costumers)

app.listen(3000, () => {
  console.log('server listens');
})
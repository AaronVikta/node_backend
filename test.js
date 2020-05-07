// test database connection
const dotenv = require('dotenv');
const assert = require('assert');
const mongoose = require('mongoose')

describe('Test Database Connection', function(){
  it('Connects to DB',function(){
    mongoose.connect(
      'mongodb+srv://Aryan:aryan123@cluster0-sky2g.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true,useUnifiedTopology: true  })
  })
})

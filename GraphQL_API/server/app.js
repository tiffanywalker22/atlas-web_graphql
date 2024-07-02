const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://tiffanywalker:bwdunR4rg4bUqIj4@newcluster.zl8fpnr.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
// Import Dependencies
const url = require('url')
const { json, send } = require("micro");
const MongoClient = require('mongodb').MongoClient

// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single paramater of the connection string
async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1))

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  const data = await json(req);

  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await connectToDatabase(process.env.MONGO)

  // Select the "users" collection from the database
  const songCollection = await db.collection('songs')
  .updateOne({artist: data.artist, song: data.song},{ $set:{
    artist: data.artist, 
    song: data.song,
    firstName: data.firstName, 
    city: data.city, 
    email: data.email, 
    handle:data.handle
  }},(err, resp)=>{
    if (err) throw err
    console.log(resp.result.n + " record(s) updated");  
    console.log(resp)
    return res.end(JSON.stringify(resp))

  })
}
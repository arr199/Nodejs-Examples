const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = 'mongodb+srv://abieledelso95:sea12345@cluster0.e2yqgaj.mongodb.net/?retryWrites=true&w=majority'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

async function run () {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect()
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log('Pinged your deployment. You successfully connected to MongoDB!')
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
run().catch(console.dir)

async function run () {
    const data = await client.db('Cluster0').collection('lola').findOne({ item: 'LOLETING' })
    console.log(data)
    client.db("Cluster0").collection("lola").deleteOne({ item : "peter" })
}
run()

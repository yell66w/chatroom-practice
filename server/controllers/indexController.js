const bodyParser = require('body-parser')
let urlencodedParser = bodyParser.urlencoded({ extended: false })


module.exports = function(app, jwt , mongoose ,secretkey) {
//sever connection
const uri = 'mongodb+srv://chihuahua:ray-66100@cluster0.97qep.mongodb.net/chihuahua?retryWrites=true&w=majority'
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
//Create schema - like a blueprint
let login_user_schema = new mongoose.Schema({
	username: String,
	password:String
});
// no protection
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/register', (req, res) => {
  login_user.find({username:req.query.username}, function(err, data){
    if (err) throw err
    if (data.length > 0 ) {
      res.json({
        message: 'usersname  existing'
      })
    } else {
      let login_User = new login_user({username: req.query.username , password: req.query.password }).save(function(err,data) {
        if (err) throw err
        res.json({
          message: 'registrarion successfull'
        })
      }) 
    }
  })
  
})
//with protection
let login_user = mongoose.model('users',login_user_schema)
app.post('/posts', verifyToken, (req, res) => {  
  jwt.verify(req.token, secretkey, (err, authData) => {
      if(err) {
          res.sendStatus(403)
      } else {
          res.json({
          message: 'Post created...',
          authData
          })
      }
  })
})
//login and getting api token 
app.post('/login', urlencodedParser , (req, res) => {
  //verify auth
  login_user.find({username:req.body.username, password:req.body.password}, function(err, data){
      if (err) throw err
      if (data.length > 0 ) {
          //login true
          const user = {
              username: req.body.username,
              password : req.body.username.password
          }
          //create token 
          jwt.sign({user}, secretkey, { expiresIn: '1d' }, (err, token) => {
              res.json({
                  token
              })
          })
      } else {
          //login false
          res.json({
              message: 'username / password dont match'
          })
      }
  })
})
// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization']
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
  } else {
      // Forbidden
      res.sendStatus(403);
  }

}








}
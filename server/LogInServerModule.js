const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
// const config = require('./config.js');

// passport's sole purpose is to authenticate requests
const passport = require('passport');
var expressSession = require('express-session');
const FacebookStrategy = require('passport-facebook');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;





// configure Facebook Strategy for use by passport
passport.use(new FacebookStrategy({
  clientID: process.env.FB_ID,
  clientSecret: process.env.FB_SECRET,
  callbackURL: "http://localhost:3000/login/facebook/callback",
  enableProof: true
},
  function (accessToken, refreshToken, profile, done) {
    console.log('profile', profile);
    done();
  }
));


// passport provided methods to serialize and deserialize user info
// this means every subsequent request will not contain user credentials
passport.serializeUser(function (user, done) {
  console.log('getting to serialize user')
  done(null, user);
});

passport.deserializeUser(function (user, done) {
    console.log('getting to deserialize user')
    done(null, user);
});

// setting up express server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));

// passport middleware use in our express server
app.use(expressSession({ secret: 'mySecretKey' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/../client/dist'));



//routes here

app.get('/login/facebook',

  // function (req, res) {
  //   console.log('request', req.body.params)
  //   res.json(req.body.params);
  // });
  passport.authenticate('facebook'), function (req, res) {
    console.log('connected');
    console.log('request', req);
    // Successful authentication, redirect home.
    res.send('Logged in with Facebook!');
  }); 
app.get('/login/facebook/callback',
  // function(req, res, next) {
  //   console.log('url', req.url);
  //   passport.authenticate('facebook', function (err, user, info) {
  //     console.log("authenticate");
  //     console.log(err);
  //     console.log(user);
  //   })(req, res, next);
  // });
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function (req, res) {
    // Successful authentication, redirect home. 
    res.redirect('/');
  });
// app.get('/login/facebook/callback',
//   passport.authenticate('facebook'),
//   function (req, res) {
//     console.log('connected to callback');
//     console.log('request', req);
//     // console.log('profile', profile);
//     // Successful authentication, redirect home.
//     res.redirect('/profile');
//   });

app.get('/logout', function (req, res) {
  req.logout();
  console.log('logging out at route level');
  res.redirect('/'); // let's redirect to home page
});

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(), // failing here

  function (req, res) {
    console.log('here is request', req);
    res.render('profile', { username: req.user });
  });

// app.get('/', (req, res) => res.sendStatus(200));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on ${port}!`));



// /* <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       appId: '{your-app-id}',
//       cookie: true,
//       xfbml: true,
//       version: '{latest-api-version}'
//     });

//   FB.AppEvents.logPageView();

//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return ;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
// </script>

// app.get('/login/facebook/callback', 
// 	passport.authenticate('facebook', {
// 		successRedirect: '/home',
// 		failureRedirect : '/'
// 	}))

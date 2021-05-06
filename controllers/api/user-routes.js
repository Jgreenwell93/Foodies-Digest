const router = require('express').Router();
const { Users, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
});

// tie to route on front end
// route to POST log-in page

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
          where: { 
            username: req.body.username,
          },
        });

        if(!userData) {
            res
            .status(400)
            .json({message: 'incorrect username'});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({message: 'incorrect password'});
            return;
        }
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.loggedIn = true;
    res.json({user: userData, message: 'You are logged in!'});
    }); 
 }   
 catch (err) {
    
  console.log(err);
  res.status(400).json(err);
 }
});

// tie to POST route on front end
// route to CREATE new user in db
router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.loggedIn = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
    }
});



// POST route for login (findOne) & error handling for incorrect user/pw
// start session



// POST route for logout (session destroy)

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
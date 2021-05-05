const router = require('express').Router();
const { Users, User } = require('../../models');
const withAuth = require('../../utils/auth');

// tie to FETCH route on front end
// route to GET sign-in page

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
});
// tie to route on front end
// route to POST log-in page

router.post('/login', async (req,res)=> {
    try {
        const userData = await User.findOne({where: {username: req.body.username}});
        if(!userData) {
            res.status(400).json({message: 'incorrect username'});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.Password);

        if(!validPassword) {
            res.status(400).json({message: 'incorrect password'});
            return;
        }
    res.json({user: userData, message: 'You are logged in!'})
    } catch (err)
{
    res.status(400).json(err);
}
});

// tie to POST route on front end
// route to CREATE new user in db

// POST route for login (findOne) & error handling for incorrect user/pw
// start session



// POST route for logout (session destroy)

module.exports = router;
var router = require('express').Router();
import user from './user';
router.use('/user', user);

router.get('*', (req, res) => {
  res.send('instance API');
});

export default router;

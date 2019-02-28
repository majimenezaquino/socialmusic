const express=require('express')
const router =express.Router();
//routes global
router.use(require('../controller/upload-images')) //upload music
router.use(require('../controller/upload-musics')) //upload music
router.use(require('../controller/upload-image-music')) //upload music
router.use(require('./routes_static')) //all routes
router.use(require('./address')) //address
router.use(require('./user'))
router.use(require('./login'))
router.use(require('./genres'))
router.use(require('./musics'))
router.use(require('./albumes.js'))
router.use(require('./playlist'))
router.use(require('./reactions'))
router.use(require('./qualification'))
router.use(require('./song_dedicate'))
router.use(require('./song_comment'))
router.use(require('./musician'))
router.use(require('./user_musician'))
router.use(require('./follower'));
router.use(require('./type-accounts'));
router.use(require('./privacies.js'));
router.use(require('./notification.js'));

module.exports=router;

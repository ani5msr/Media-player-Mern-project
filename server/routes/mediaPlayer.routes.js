import express from 'express'


const router = express.Router()
router.route('/api/media/new/:userId').post(authCtrl.requireSignin, mediaCtrl.create)
router.route('/api/media/video/:mediaId').get(mediaCtrl.video)
router.param('userId', userCtrl.userByID)
router.param('mediaId', mediaCtrl.mediaByID)
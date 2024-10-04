import { Router } from "express";
import * as request from './requestHandler.js'

const router=Router()

router.route('/add').post(request.addPort)
router.route('/get').get(request.getPort)

router.route('/getforedit/:id').get(request.getforPort)


router.route('/update/:id').patch(request.updatePort)
router.route('/delete/:id').delete(request.deletePort);

export default router;
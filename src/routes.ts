import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController} from './controllers/user/DetailUserController'
import { TransferControllers } from './controllers/user/TransferControllers'
import { ListTransferiController } from './controllers/user/ListTransferiController'


import  {isAuthenticated } from './middlewares/isAuthenticated'


const router = Router();

router.post('/accounts', new CreateUserController().handle)

router.post('/users', new AuthUserController().handle)

router.get('/userifo',  isAuthenticated, new DetailuserController ().handle)

router.post('/transfer', isAuthenticated, new TransferControllers ().handle)

router.get('/list/transfer', isAuthenticated, new  ListTransferiController ().handle)

export { router };
import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import {create} from './controller'
import { schema } from './model'
export User, { schema } from './model'
const uuid = require('uuid');
const router = new Router();
const { email, password,picture, role,firstname,lastname} = schema.tree
router.post('/',
  body({email, password,picture, role,firstname,lastname}),
  create)

export default router

import { User } from '.'
import { success, notFound } from '../../services/success/'
export const create = ({ bodymen: { body } }, res, next) =>
  User.findOne({email:body.email})
   .then((user)=>(!user)?User.create(body).then((user)=>res.status(200).json({data:user,message:"successfull"})):res.status(200).json({msg:"user already exist"}))
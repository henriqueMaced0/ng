import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
  name: string;
  password: string;
  value: number;
}

class CreateUserService{
  async execute({ name, password,value }: UserRequest){

    if(!name || !password){
      throw new Error("name or password incorrect")
    }


    const userExists = await prismaClient.user.findFirst({
      where:{
        name: name
      }
    })

    if(userExists){
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data:{
        name: name,
        password: passwordHash,
      },
      select:{
        id: true,
        name: true,
      }
    })

 await prismaClient.account.create({
  data :{
    balance: 1,
    value: 100,
    name: name,
    password:password,
  }
 })


    return user;
  }
}

export { CreateUserService }
#this prisma file converts code to mysql code 
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async ()=>{
    const User = await prisma.User.create({
        data:{
            name:"souju",
            email:"souju@gmail.com",
        }
    })
    console.log(User)
}
main()
.catch((e) => console.error(e))
.finally(async ()=>{
    await prisma.$disconnect();
})

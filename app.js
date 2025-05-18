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
      /* const User = await prisma.User.createMany({
       data:[{
        name:"alice" , email:"alice@gmail.com"
       },
       {
         name:"bob", email:"bob@gmail.com"
       },
    ],
})
    console.log(User);*/
    //only unique fields are used mentioned in the schema.prisma
    const User = await prisma.User.findMany()
    const user = await prisma.User.findUnique({
        where:{id:3},
    })
    console.log(User)
    console.log(user)

    //updating
    const upuse = await prisma.User.update({
        where:{id: 3},
        data:{name: "tony stark"},
    })
    console.log(user)
    //when using updateMany dont use unique attributes
    //deleting
    const del = await prisma.User.delete({
        where:{id:2},
    })
    console.log(user)
    
}
main()
.catch((e) => console.error(e))
.finally(async ()=>{
    await prisma.$disconnect();
})

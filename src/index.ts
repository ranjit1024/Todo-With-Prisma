import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string, email: string) {
    const response = await prisma.user.create({
        data: {
            username: username,
            password: password,
            fistname: firstname,
            lastname: lastname,
            email: email
        }
    })
    console.log(response)
}

insertUser("ranjikjht", "fasdfa", "ranjit", "dasfdsf", "aranjitdkjfh@gmail.com");
import { PrismaClient } from "@prisma/client";
import { todo } from "node:test";


const prisma = new PrismaClient();

async function getTodos(userId: number) {
    const response = await prisma.todos.findMany({
        where: {
            user_id: userId,
        },
        select: {
            id: true,
            title: true,
            descripition: true,
            user: true
        }
    })
    console.log(response)
}
getTodos(1);
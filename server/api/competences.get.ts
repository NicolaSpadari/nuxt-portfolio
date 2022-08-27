import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
    const data = await prisma.competences.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            image: true
        }
    });

    return data;
});

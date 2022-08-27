import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
    const data = await prisma.projects.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            image: true,
            link: true
        }
    });

    return data;
});

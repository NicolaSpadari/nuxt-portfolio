import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
    const data = await prisma.experiences.findMany({
        select: {
            id: true,
            name: true,
            details: true,
            date: true,
            current: true
        }
    });

    return data;
});

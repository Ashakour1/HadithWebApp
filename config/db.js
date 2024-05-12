import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
try {
    await prisma.$connect();
    console.log('Database connected');
    // Your code here
} catch (error) {
    console.error('Failed to connect to database:', error);
    // Handle the error
}

export default prisma;

const { PrismaClient } = require('@prisma/client');

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: 'Languages' },
        { name: 'Product Management' },
        { name: 'Software Engineering' },
        { name: 'Photography' },
        { name: 'Data Analytics' },
        { name: 'Graphics Designing' },
        { name: 'Fashion Designing' },
      ],
    });
  } catch (error) {
  } finally {
    await database.$disconnect();
  }
}

main();

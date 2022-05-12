const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: 'Woopa' },
            update: {},
            create: {
                name: 'Woopa',
                username: 'Ajolonauta',
                mission: 'Node'
            }
        })

        const woopa1 = await prisma.explorer.upsert({
            where: { name: 'Woopa1' },
            update: {},
            create: {
                name: 'Woopa1',
                username: 'ajolonauta1',
                mission: 'Node'
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: 'Woopa 2' },
            update: {},
            create: {
                name: 'Woopa 2',
                username: 'ajolonauta2',
                mission: 'Java'
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: 'Woopa 3' },
            update: {},
            create: {
                name: 'Woopa 3',
                username: 'ajolonauta3',
                mission: 'Node'
            },
        });
        
    console.log('Create 3 explorers');
        const rzs1 = await prisma.mission.upsert({
            where: { name: 'rzs 1' },
            update: {},
            create: {
                name: 'rzs 1',
                lang: 'backend',
                missioncommander: 'Carlo',
                enrollments: 76786,
                hasCertification: true
            },
        });
        const rzs2 = await prisma.mission.upsert({
            where: { name: 'rzs 2' },
            update: {},
            create: {
                name: 'rzs 2',
                lang: 'frontend',
                missioncommander: 'roma',
                enrollments: 23453,
                hasCertification: true
            },
        });

        const rzs3 = await prisma.mission.upsert({
            where: { name: 'rzs 3' },
            update: {},
            create: {
                name: 'rzs 3',
                lang: 'phyton',
                missioncommander: 'fer',
                enrollments: 58453,
                hasCertification: true
            },
        });


    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();




    }
})();
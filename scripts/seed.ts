const { PrismaClient } = require('@prisma/client');

const database = new PrismaClient();

async function main() {
    const categoriesToUpsert = [
        "Programming",
        "Graphic Design",
        "Marketing",
        "Copywriting",
        "Content Creator",
        "Video Editing",
        "Trading",
    ];

    try {
        for (const name of categoriesToUpsert) {
            await database.category.upsert({
                where: { name }, // მოძებნის კატეგორიას სახელით
                update: { name }, // თუ არსებობს, სახელს განაახლებს
                create: { name }, // თუ არ არსებობს, შექმნის ახალს
            });
        }


        // const deletedCategories = await database.category.deleteMany({});
        // console.log(`Success: Deleted ${deletedCategories.count} categories.`);


        console.log("Success: Categories upserted.");
    } catch (error) {
        console.log("Error seeding the database categories", error);
    } finally {
        await database.$disconnect();
    }
}

main();

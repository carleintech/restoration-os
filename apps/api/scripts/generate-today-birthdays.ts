import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const event = await prisma.birthdayEvent.upsert({
    where: { date: today },
    update: {},
    create: { date: today },
  });

  const celebrants = await prisma.profiles.findMany({
    where: {
      birthday: {
        not: null,
      },
    },
  });

  for (const user of celebrants) {
    const bday = new Date(user.birthday!);
    if (
      bday.getMonth() === today.getMonth() &&
      bday.getDate() === today.getDate()
    ) {
      await prisma.birthdayCelebrant.upsert({
        where: {
          eventId_userId: {
            eventId: event.id,
            userId: user.id,
          },
        },
        update: {},
        create: {
          eventId: event.id,
          userId: user.id,
        },
      });
      console.log(`✅ Registered birthday for: ${user.full_name || user.email}`);
    }
  }

  console.log('🎉 Birthday event generated for today');
}

main()
  .catch((e) => {
    console.error('Error generating birthday events:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

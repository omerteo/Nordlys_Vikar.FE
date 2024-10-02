import prisma from "./prisma"
import { faker } from '@faker-js/faker';

async function main() {
  const doctors = [];

  for (let i = 0; i < 50; i++) {
    const doctor = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      hpr: faker.string.uuid(),
      citizenId: faker.string.uuid(),
      dateOfBirth: faker.date.anytime(), // Generates a date in the past, ensuring the doctor is at least 30 years old
      gender: faker.helpers.arrayElement(['male', 'female', 'non-binary']),
      mobile: faker.phone.number(),
      email: faker.internet.email(),
      speciality: faker.helpers.arrayElement(['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Dermatology']),
      sessions: faker.helpers.arrayElement([null, faker.lorem.sentence()]),
      education: faker.helpers.arrayElement([null, faker.lorem.sentence()]),
      status: faker.helpers.arrayElement(['active', 'inactive']), // Set status as boolean
      address: faker.location.street(),
      city: faker.location.city(),
      country: faker.location.country(),
      postcode: faker.location.zipCode(),
      relativeName: faker.helpers.arrayElement([null, faker.person.fullName()]),
      relativeNumber: faker.helpers.arrayElement([null, faker.phone.number()]),
      description: faker.helpers.arrayElement([null, faker.lorem.paragraph()]),
    };

    doctors.push(doctor);
  }

  await prisma.doctor.createMany({ data: doctors });
  console.log('50 doctors created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
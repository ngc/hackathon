import type { Payload, PayloadRequest } from 'payload'
import { faker } from '@faker-js/faker'

// const collections: CollectionSlug[] = [
//   'forms',
//   'challenge',
//   'challenge-prize',
//   'criteria',
//   'base-event',
//   'hackathon',
//   'general-event',
//   'user-to-organization',
//   'host-to-event',
//   'sponsor-to-event',
//   'hackathon-event',
//   'organization-sponsor',
//   'sponsor',
//   'media',
//   'user',
// ]

const dietaryRestrictions = [
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Halal', value: 'halal' },
  { label: 'Vegan', value: 'vegan' },
  { label: 'Gluten-Free', value: 'gluten_free' },
  { label: 'Dairy-Free', value: 'dairy_free' },
  { label: 'Nut-Free', value: 'nut_free' },
  { label: 'Kosher', value: 'kosher' },
  { label: 'Pescatarian', value: 'pescatarian' },
  { label: 'Keto', value: 'keto' },
  { label: 'Paleo', value: 'paleo' },
  { label: 'No Pork', value: 'no_pork' },
]

// const globals: GlobalSlug[] = ['social-link']

function generateUser() {
  return { firstName: faker.person.firstName(), middleName: faker.person.middleName(), lastName: faker.person.lastName(), email: faker.internet.email(), phoneNumber: faker.phone.number(), roles: faker.helpers.arrayElements(
    ['organizer', 'generalMember', 'superAdmin', 'volunteer', 'mentor', 'judge', 'sponsorRepresentative'],
    faker.number.int({ min: 1, max: 3 }),
  ), tShirtSize: faker.helpers.arrayElement(['xs', 's', 'm', 'l', 'xl', 'xxl']), dietaryRestrictions: faker.helpers.arrayElements(dietaryRestrictions.map(d => d.value), faker.number.int({ min: 0, max: 2 })), allergies: faker.lorem.words(2), socialLinks: {
    linkedin: faker.internet.url(),
    website: faker.internet.url(),
    instagram: faker.internet.url(),
  }, emergencyContact: {
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    relationship: faker.helpers.arrayElement(['Parent', 'Sibling', 'Friend', 'Spouse', 'Relative']),
  }, visibilitySettings: {
    visibleToOrganizers: faker.datatype.boolean(),
    visibleToVolunteers: faker.datatype.boolean(),
    visibleToMentors: faker.datatype.boolean(),
    visibleToJudges: faker.datatype.boolean(),
    visibleToSponsorReps: faker.datatype.boolean(),
  } }
}
export async function seedData({
  payload,
  // req,
}: {
  payload: Payload
  _req: PayloadRequest
}): Promise<void> {
  // await Promise.all(
  //   collections.map(collection => payload.db.deleteMany({ collection, req, where: {} })),
  // )

  const users = Array.from({ length: 10 }, generateUser)

  for (const user of users) {
    await payload.create({
      collection: 'user',
      data: user,
    })
  }
  // await Promise.all(
  //   collections
  //     .filter(collection => Boolean(payload.collections[collection].config.versions))
  //     .map(collection => payload.db.delete({ collection, req, where: {} })),
  // )

  // await Promise.all(
  //   collections
  //     .filter(collection => Boolean(payload.collections[collection].config.versions))
  //     .map(collection => payload.db.deleteVersions({ collection, req, where: {} })),
  // )
}

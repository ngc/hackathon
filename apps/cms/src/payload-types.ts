/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    hackathons: Hackathon;
    users: User;
    media: Media;
    'social-links': SocialLink;
    sponsors: Sponsor;
    events: Event;
    challenges: Challenge;
    schedule: Schedule;
    organizations: Organization;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    hackathons: HackathonsSelect<false> | HackathonsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'social-links': SocialLinksSelect<false> | SocialLinksSelect<true>;
    sponsors: SponsorsSelect<false> | SponsorsSelect<true>;
    events: EventsSelect<false> | EventsSelect<true>;
    challenges: ChallengesSelect<false> | ChallengesSelect<true>;
    schedule: ScheduleSelect<false> | ScheduleSelect<true>;
    organizations: OrganizationsSelect<false> | OrganizationsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hackathons".
 */
export interface Hackathon {
  id: number;
  year: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  phoneNumber: string;
  role: 'organizer' | 'volunteer' | 'mentor' | 'judge' | 'sponsor-representative';
  tShirtSize: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  dietaryRestrictions?: string | null;
  allergies?: string | null;
  socialLinks?: {
    linkedin?: string | null;
    website?: string | null;
    instagram?: string | null;
  };
  academicInfo?: {
    school?: ('Carleton' | 'uOttawa' | 'Other') | null;
    levelOfStudy?: ('Undergraduate' | 'Graduate' | 'PhD') | null;
    major?: string | null;
    yearStanding?: ('First Year' | 'Second Year' | 'Third Year' | 'Fourth Year' | 'Fifth Year' | 'Graduate') | null;
    resume?: string | null;
  };
  organization?: (number | null) | Organization;
  visibilitySettings?: {
    visibleToOrganizers?: boolean | null;
    visibleToVolunteers?: boolean | null;
    visibleToMentors?: boolean | null;
    visibleToJudges?: boolean | null;
    visibleToSponsorReps?: boolean | null;
  };
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organizations".
 */
export interface Organization {
  id: number;
  name: string;
  type: 'Company' | 'Student Club';
  members?: (number | User)[] | null;
  university?: ('Carleton' | 'uOttawa') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "social-links".
 */
export interface SocialLink {
  id: number;
  platform:
    | 'website'
    | 'portal'
    | 'design'
    | 'architecture'
    | 'ESLint'
    | 'discord'
    | 'instagram'
    | 'linkedin'
    | 'linktree'
    | 'figma'
    | 'github-project'
    | 'github-repo';
  url: string;
  /**
   * Green coloured icon
   */
  primaryIcon?: (number | null) | Media;
  /**
   * White coloured icon
   */
  secondaryIcon?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsors".
 */
export interface Sponsor {
  id: number;
  name: string;
  logo?: (number | null) | Media;
  link: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events".
 */
export interface Event {
  id: number;
  title: string;
  description?: string | null;
  room?: string | null;
  type?: ('workshop' | 'networking' | 'social' | 'food' | 'other') | null;
  hackathon?: (number | null) | Hackathon;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challenges".
 */
export interface Challenge {
  id: number;
  title: string;
  description?: string | null;
  prizes?: string | null;
  judgingRubric?: string | null;
  sponsor?: (number | null) | Sponsor;
  hackathon?: (number | null) | Hackathon;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "schedule".
 */
export interface Schedule {
  id: number;
  event: number | Event;
  time: string;
  day: 'Friday' | 'Saturday' | 'Sunday';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'hackathons';
        value: number | Hackathon;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'social-links';
        value: number | SocialLink;
      } | null)
    | ({
        relationTo: 'sponsors';
        value: number | Sponsor;
      } | null)
    | ({
        relationTo: 'events';
        value: number | Event;
      } | null)
    | ({
        relationTo: 'challenges';
        value: number | Challenge;
      } | null)
    | ({
        relationTo: 'schedule';
        value: number | Schedule;
      } | null)
    | ({
        relationTo: 'organizations';
        value: number | Organization;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hackathons_select".
 */
export interface HackathonsSelect<T extends boolean = true> {
  year?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  firstName?: T;
  middleName?: T;
  lastName?: T;
  phoneNumber?: T;
  role?: T;
  tShirtSize?: T;
  dietaryRestrictions?: T;
  allergies?: T;
  socialLinks?:
    | T
    | {
        linkedin?: T;
        website?: T;
        instagram?: T;
      };
  academicInfo?:
    | T
    | {
        school?: T;
        levelOfStudy?: T;
        major?: T;
        yearStanding?: T;
        resume?: T;
      };
  organization?: T;
  visibilitySettings?:
    | T
    | {
        visibleToOrganizers?: T;
        visibleToVolunteers?: T;
        visibleToMentors?: T;
        visibleToJudges?: T;
        visibleToSponsorReps?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "social-links_select".
 */
export interface SocialLinksSelect<T extends boolean = true> {
  platform?: T;
  url?: T;
  primaryIcon?: T;
  secondaryIcon?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsors_select".
 */
export interface SponsorsSelect<T extends boolean = true> {
  name?: T;
  logo?: T;
  link?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events_select".
 */
export interface EventsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  room?: T;
  type?: T;
  hackathon?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challenges_select".
 */
export interface ChallengesSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  prizes?: T;
  judgingRubric?: T;
  sponsor?: T;
  hackathon?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "schedule_select".
 */
export interface ScheduleSelect<T extends boolean = true> {
  event?: T;
  time?: T;
  day?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organizations_select".
 */
export interface OrganizationsSelect<T extends boolean = true> {
  name?: T;
  type?: T;
  members?: T;
  university?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
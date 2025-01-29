/* tslint:disable */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    user: UserAuthOperations;
  };
  collections: {
    hackathon: Hackathon;
    'hackathon-event': HackathonEvent;
    user: User;
    student: Student;
    media: Media;
    'base-event': BaseEvent;
    'general-event': GeneralEvent;
    'event-role': EventRole;
    'user-to-event': UserToEvent;
    challenge: Challenge;
    challengePrize: ChallengePrize;
    'application-form': ApplicationForm;
    'application-response': ApplicationResponse;
    'application-question-response': ApplicationQuestionResponse;
    'application-question': ApplicationQuestion;
    organization: Organization;
    'user-to-organization': UserToOrganization;
    sponsor: Sponsor;
    'sponsor-to-event': SponsorToEvent;
    'organization-sponsor': OrganizationSponsor;
    'host-to-event': HostToEvent;
    criteria: Criterion;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {
    hackathon: {
      hackathonEvents: 'hackathon-event';
      challenges: 'challenge';
    };
    user: {
      organizations: 'user-to-organization';
    };
    'general-event': {
      'eventMembers.participants': 'user-to-event';
      'eventMembers.mentors': 'user-to-event';
      'eventMembers.sponsorRepresentatives': 'user-to-event';
      'eventMembers.judges': 'user-to-event';
      'eventMembers.volunteer': 'user-to-event';
      'organizations.sponsor': 'sponsor-to-event';
      'organizations.host': 'host-to-event';
      eventChallenges: 'challenge';
    };
    'application-form': {
      applicationQuestions: 'application-question';
    };
    'application-response': {
      responses: 'application-question-response';
    };
    organization: {
      members: 'user-to-organization';
    };
  };
  collectionsSelect: {
    hackathon: HackathonSelect<false> | HackathonSelect<true>;
    'hackathon-event': HackathonEventSelect<false> | HackathonEventSelect<true>;
    user: UserSelect<false> | UserSelect<true>;
    student: StudentSelect<false> | StudentSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'base-event': BaseEventSelect<false> | BaseEventSelect<true>;
    'general-event': GeneralEventSelect<false> | GeneralEventSelect<true>;
    'event-role': EventRoleSelect<false> | EventRoleSelect<true>;
    'user-to-event': UserToEventSelect<false> | UserToEventSelect<true>;
    challenge: ChallengeSelect<false> | ChallengeSelect<true>;
    challengePrize: ChallengePrizeSelect<false> | ChallengePrizeSelect<true>;
    'application-form': ApplicationFormSelect<false> | ApplicationFormSelect<true>;
    'application-response': ApplicationResponseSelect<false> | ApplicationResponseSelect<true>;
    'application-question-response': ApplicationQuestionResponseSelect<false> | ApplicationQuestionResponseSelect<true>;
    'application-question': ApplicationQuestionSelect<false> | ApplicationQuestionSelect<true>;
    organization: OrganizationSelect<false> | OrganizationSelect<true>;
    'user-to-organization': UserToOrganizationSelect<false> | UserToOrganizationSelect<true>;
    sponsor: SponsorSelect<false> | SponsorSelect<true>;
    'sponsor-to-event': SponsorToEventSelect<false> | SponsorToEventSelect<true>;
    'organization-sponsor': OrganizationSponsorSelect<false> | OrganizationSponsorSelect<true>;
    'host-to-event': HostToEventSelect<false> | HostToEventSelect<true>;
    criteria: CriteriaSelect<false> | CriteriaSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    'social-link': SocialLink;
  };
  globalsSelect: {
    'social-link': SocialLinkSelect<false> | SocialLinkSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'user';
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
 * via the `definition` "hackathon".
 */
export interface Hackathon {
  id: number;
  year: number;
  baseEvent?: (number | null) | BaseEvent;
  hackathonEvents?: {
    docs?: (number | HackathonEvent)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  challenges?: {
    docs?: (number | Challenge)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "base-event".
 */
export interface BaseEvent {
  id: number;
  title: string;
  description?: string | null;
  building?: ('rb' | 'pa' | 'nn') | null;
  room?: string | null;
  start?: string | null;
  end?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hackathon-event".
 */
export interface HackathonEvent {
  id: number;
  event?: (number | null) | GeneralEvent;
  hackathon?: (number | null) | Hackathon;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "general-event".
 */
export interface GeneralEvent {
  id: number;
  formattedTitle?: string | null;
  /**
   * Create a base event to store general information of the event
   */
  event?: (number | null) | BaseEvent;
  type?: ('workshop' | 'networking' | 'social' | 'food' | 'other') | null;
  /**
   * Do not modify or create unless necessary.
   */
  registrationLink?: string | null;
  /**
   * Leave blank if no attendee limit
   */
  attendeeLimit?: number | null;
  hasJudging?: boolean | null;
  /**
   * Only edit for walk-ins and members not registered.
   */
  eventMembers?: {
    participants?: {
      docs?: (number | UserToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    mentors?: {
      docs?: (number | UserToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    sponsorRepresentatives?: {
      docs?: (number | UserToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    judges?: {
      docs?: (number | UserToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    volunteer?: {
      docs?: (number | UserToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
  };
  organizations?: {
    sponsor?: {
      docs?: (number | SponsorToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    host?: {
      docs?: (number | HostToEvent)[] | null;
      hasNextPage?: boolean | null;
    } | null;
  };
  /**
   * Should be automated in the future. Create GCal event and then add link.
   */
  calendarLinks?: {
    participant?: string | null;
    mentor?: string | null;
    sponsor?: string | null;
    judge?: string | null;
    volunteer?: string | null;
  };
  /**
   * What should each each group bring to the event
   */
  prerequisites?: {
    /**
     * What should a participant bring to the event
     */
    participant?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    /**
     * What should a mentor bring to the event
     */
    mentor?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    /**
     * What should a mentor bring to the event
     */
    sponsor?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    /**
     * What should a judge bring to the event
     */
    judge?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    /**
     * What should a volunteer bring to the event
     */
    volunteer?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
  };
  schedule?: (number | BaseEvent)[] | null;
  eventChallenges?: {
    docs?: (number | Challenge)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user-to-event".
 */
export interface UserToEvent {
  id: number;
  user: number | User;
  event: number | GeneralEvent;
  role: number | EventRole;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user".
 */
export interface User {
  id: number;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  phoneNumber: string;
  roles: ('organizer' | 'generalMember' | 'superAdmin' | 'volunteer' | 'mentor' | 'judge' | 'sponsorRepresentative')[];
  tShirtSize: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  dietaryRestrictions?: string | null;
  allergies?: string | null;
  socialLinks?: {
    linkedin?: string | null;
    website?: string | null;
    instagram?: string | null;
  };
  emergencyContact: {
    firstName: string;
    middleName?: string | null;
    lastName: string;
    email: string;
    phoneNumber: string;
    relationship: string;
  };
  organizations?: {
    docs?: (number | UserToOrganization)[] | null;
    hasNextPage?: boolean | null;
  } | null;
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
 * via the `definition` "user-to-organization".
 */
export interface UserToOrganization {
  id: number;
  formattedTitle?: string | null;
  user?: (number | null) | User;
  /**
   * Use terminology specific to the organization
   */
  role: string;
  organization?: (number | null) | Organization;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organization".
 */
export interface Organization {
  id: number;
  name: string;
  type: 'sponsor' | 'cusaClub' | 'university';
  description: string;
  members?: {
    docs?: (number | UserToOrganization)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "event-role".
 */
export interface EventRole {
  id: number;
  label?: string | null;
  value?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsor-to-event".
 */
export interface SponsorToEvent {
  id: number;
  formattedTitle?: string | null;
  event?: (number | null) | BaseEvent;
  sponsor?: (number | null) | Sponsor;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsor".
 */
export interface Sponsor {
  id: number;
  baseOrganization?: (number | null) | Organization;
  formattedTitle: string;
  logo?: (number | null) | Media;
  markettingWebsite: string;
  hiringPortal: string;
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
  prefix?: string | null;
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
 * via the `definition` "host-to-event".
 */
export interface HostToEvent {
  id: number;
  formattedTitle?: string | null;
  event: number | GeneralEvent;
  host: number | Organization;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challenge".
 */
export interface Challenge {
  id: number;
  title: string;
  description?: string | null;
  judging: number | Criterion;
  event: number | BaseEvent;
  /**
   * Who is hosting this challenge? Leave blank if event only has one host.
   */
  challengeHost?: (number | Organization)[] | null;
  prize: number | ChallengePrize;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "criteria".
 */
export interface Criterion {
  id: number;
  /**
   * What is this the criteria for?
   */
  title: string;
  /**
   * Individual criteria for a rubric
   */
  rubric?:
    | {
        name?: string | null;
        generalDescription?: string | null;
        /**
         * Should outline the grading schema
         */
        grades?:
          | {
              level?: number | null;
              /**
               * What do you need to achieve to accomplish this. Use clear bulelt points.
               */
              description?: {
                root: {
                  type: string;
                  children: {
                    type: string;
                    version: number;
                    [k: string]: unknown;
                  }[];
                  direction: ('ltr' | 'rtl') | null;
                  format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                  indent: number;
                  version: number;
                };
                [k: string]: unknown;
              } | null;
              id?: string | null;
            }[]
          | null;
        weight?: number | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challengePrize".
 */
export interface ChallengePrize {
  id: number;
  formattedTitle?: string | null;
  prizeForPosition?:
    | {
        position?: number | null;
        /**
         * In CAD, if prize is not money, estimate the cost the prize
         */
        prizeMoney?: number | null;
        /**
         * Typically use this for physical prizes (ex. MetaQuest for 1st place)
         */
        otherPrize?: string | null;
        /**
         * If extra detail is necessary
         */
        description?: string | null;
        id?: string | null;
      }[]
    | null;
  /**
   * Prizes that are not part of the central challenge (ex. A raffle prize)
   */
  miscellaneousPrizes?:
    | {
        name?: string | null;
        description?: string | null;
        /**
         * In CAD, if prize is not money, estimate the cost the prize
         */
        prizeMoney?: number | null;
        /**
         * Typically use this for physical prizes (ex. MetaQuest for 1st place)
         */
        otherPrize?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "student".
 */
export interface Student {
  id: number;
  formattedTitle?: string | null;
  user?: (number | null) | User;
  school?: ('carleton' | 'uOttawa' | 'other') | null;
  levelOfStudy?: ('undergraduate' | 'graduate' | 'phd') | null;
  major?: string | null;
  yearStanding?: ('firstYear' | 'secondYear' | 'thirdYear' | 'fourthYear' | 'fifthYear' | 'graduate') | null;
  resume?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "application-form".
 */
export interface ApplicationForm {
  id: number;
  name: string;
  event: number | BaseEvent;
  role: number | EventRole;
  applicationQuestions: {
    docs?: (number | ApplicationQuestion)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  acceptanceCriteria: number | Criterion;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "application-question".
 */
export interface ApplicationQuestion {
  id: number;
  /**
   * Question
   */
  label: string;
  /**
   * Placeholder on input line
   */
  placeholder: string;
  type?:
    | (
        | 'linkedIn'
        | 'github'
        | 'instagram'
        | 'link'
        | 'longAnswer'
        | 'shortAnswer'
        | 'select'
        | 'number'
        | 'multiSelect'
        | 'fileUpload'
      )
    | null;
  options?:
    | {
        option?: string | null;
        id?: string | null;
      }[]
    | null;
  isRequired?: boolean | null;
  relatedApplication: number | ApplicationForm;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "application-response".
 */
export interface ApplicationResponse {
  id: number;
  title?: string | null;
  applicant: number | User;
  status?: ('pending' | 'invitationSent' | 'rejected' | 'rsvpConfirmed' | 'rsvpRejected' | 'rsvpUnanswered') | null;
  relatedApplication: number | ApplicationForm;
  responses?: {
    docs?: (number | ApplicationQuestionResponse)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "application-question-response".
 */
export interface ApplicationQuestionResponse {
  id: number;
  relatedQuestion?: (number | null) | ApplicationQuestion;
  relatedResponse?: (number | null) | ApplicationResponse;
  response?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organization-sponsor".
 */
export interface OrganizationSponsor {
  id: number;
  /**
   * The organization recieving the sponsorship
   */
  organization: number | Organization;
  /**
   * The organization giving the sponsorship
   */
  sponsor: number | Sponsor;
  sponsorshipType?: ('inKind' | 'monetary') | null;
  /**
   * Brief Description of what the organization will recieve from the in-kind sponsor
   */
  inKindOffer?: string | null;
  /**
   * How much money do we recieve
   */
  moneyRecieved?: number | null;
  /**
   * When did this sponsorship commence.
   */
  start?: string | null;
  /**
   * Anticipated end date of sponsorship.
   */
  end?: string | null;
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
        relationTo: 'hackathon';
        value: number | Hackathon;
      } | null)
    | ({
        relationTo: 'hackathon-event';
        value: number | HackathonEvent;
      } | null)
    | ({
        relationTo: 'user';
        value: number | User;
      } | null)
    | ({
        relationTo: 'student';
        value: number | Student;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'base-event';
        value: number | BaseEvent;
      } | null)
    | ({
        relationTo: 'general-event';
        value: number | GeneralEvent;
      } | null)
    | ({
        relationTo: 'event-role';
        value: number | EventRole;
      } | null)
    | ({
        relationTo: 'user-to-event';
        value: number | UserToEvent;
      } | null)
    | ({
        relationTo: 'challenge';
        value: number | Challenge;
      } | null)
    | ({
        relationTo: 'challengePrize';
        value: number | ChallengePrize;
      } | null)
    | ({
        relationTo: 'application-form';
        value: number | ApplicationForm;
      } | null)
    | ({
        relationTo: 'application-response';
        value: number | ApplicationResponse;
      } | null)
    | ({
        relationTo: 'application-question-response';
        value: number | ApplicationQuestionResponse;
      } | null)
    | ({
        relationTo: 'application-question';
        value: number | ApplicationQuestion;
      } | null)
    | ({
        relationTo: 'organization';
        value: number | Organization;
      } | null)
    | ({
        relationTo: 'user-to-organization';
        value: number | UserToOrganization;
      } | null)
    | ({
        relationTo: 'sponsor';
        value: number | Sponsor;
      } | null)
    | ({
        relationTo: 'sponsor-to-event';
        value: number | SponsorToEvent;
      } | null)
    | ({
        relationTo: 'organization-sponsor';
        value: number | OrganizationSponsor;
      } | null)
    | ({
        relationTo: 'host-to-event';
        value: number | HostToEvent;
      } | null)
    | ({
        relationTo: 'criteria';
        value: number | Criterion;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'user';
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
    relationTo: 'user';
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
 * via the `definition` "hackathon_select".
 */
export interface HackathonSelect<T extends boolean = true> {
  year?: T;
  baseEvent?: T;
  hackathonEvents?: T;
  challenges?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hackathon-event_select".
 */
export interface HackathonEventSelect<T extends boolean = true> {
  event?: T;
  hackathon?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user_select".
 */
export interface UserSelect<T extends boolean = true> {
  firstName?: T;
  middleName?: T;
  lastName?: T;
  phoneNumber?: T;
  roles?: T;
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
  emergencyContact?:
    | T
    | {
        firstName?: T;
        middleName?: T;
        lastName?: T;
        email?: T;
        phoneNumber?: T;
        relationship?: T;
      };
  organizations?: T;
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
 * via the `definition` "student_select".
 */
export interface StudentSelect<T extends boolean = true> {
  formattedTitle?: T;
  user?: T;
  school?: T;
  levelOfStudy?: T;
  major?: T;
  yearStanding?: T;
  resume?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  prefix?: T;
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
 * via the `definition` "base-event_select".
 */
export interface BaseEventSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  building?: T;
  room?: T;
  start?: T;
  end?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "general-event_select".
 */
export interface GeneralEventSelect<T extends boolean = true> {
  formattedTitle?: T;
  event?: T;
  type?: T;
  registrationLink?: T;
  attendeeLimit?: T;
  hasJudging?: T;
  eventMembers?:
    | T
    | {
        participants?: T;
        mentors?: T;
        sponsorRepresentatives?: T;
        judges?: T;
        volunteer?: T;
      };
  organizations?:
    | T
    | {
        sponsor?: T;
        host?: T;
      };
  calendarLinks?:
    | T
    | {
        participant?: T;
        mentor?: T;
        sponsor?: T;
        judge?: T;
        volunteer?: T;
      };
  prerequisites?:
    | T
    | {
        participant?: T;
        mentor?: T;
        sponsor?: T;
        judge?: T;
        volunteer?: T;
      };
  schedule?: T;
  eventChallenges?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "event-role_select".
 */
export interface EventRoleSelect<T extends boolean = true> {
  label?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user-to-event_select".
 */
export interface UserToEventSelect<T extends boolean = true> {
  user?: T;
  event?: T;
  role?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challenge_select".
 */
export interface ChallengeSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  judging?: T;
  event?: T;
  challengeHost?: T;
  prize?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "challengePrize_select".
 */
export interface ChallengePrizeSelect<T extends boolean = true> {
  formattedTitle?: T;
  prizeForPosition?:
    | T
    | {
        position?: T;
        prizeMoney?: T;
        otherPrize?: T;
        description?: T;
        id?: T;
      };
  miscellaneousPrizes?:
    | T
    | {
        name?: T;
        description?: T;
        prizeMoney?: T;
        otherPrize?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "application-form_select".
 */
export interface ApplicationFormSelect<T extends boolean = true> {
  name?: T;
  event?: T;
  role?: T;
  applicationQuestions?: T;
  acceptanceCriteria?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "application-response_select".
 */
export interface ApplicationResponseSelect<T extends boolean = true> {
  title?: T;
  applicant?: T;
  status?: T;
  relatedApplication?: T;
  responses?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "application-question-response_select".
 */
export interface ApplicationQuestionResponseSelect<T extends boolean = true> {
  relatedQuestion?: T;
  relatedResponse?: T;
  response?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "application-question_select".
 */
export interface ApplicationQuestionSelect<T extends boolean = true> {
  label?: T;
  placeholder?: T;
  type?: T;
  options?:
    | T
    | {
        option?: T;
        id?: T;
      };
  isRequired?: T;
  relatedApplication?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organization_select".
 */
export interface OrganizationSelect<T extends boolean = true> {
  name?: T;
  type?: T;
  description?: T;
  members?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user-to-organization_select".
 */
export interface UserToOrganizationSelect<T extends boolean = true> {
  formattedTitle?: T;
  user?: T;
  role?: T;
  organization?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsor_select".
 */
export interface SponsorSelect<T extends boolean = true> {
  baseOrganization?: T;
  formattedTitle?: T;
  logo?: T;
  markettingWebsite?: T;
  hiringPortal?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sponsor-to-event_select".
 */
export interface SponsorToEventSelect<T extends boolean = true> {
  formattedTitle?: T;
  event?: T;
  sponsor?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "organization-sponsor_select".
 */
export interface OrganizationSponsorSelect<T extends boolean = true> {
  organization?: T;
  sponsor?: T;
  sponsorshipType?: T;
  inKindOffer?: T;
  moneyRecieved?: T;
  start?: T;
  end?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "host-to-event_select".
 */
export interface HostToEventSelect<T extends boolean = true> {
  formattedTitle?: T;
  event?: T;
  host?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "criteria_select".
 */
export interface CriteriaSelect<T extends boolean = true> {
  title?: T;
  rubric?:
    | T
    | {
        name?: T;
        generalDescription?: T;
        grades?:
          | T
          | {
              level?: T;
              description?: T;
              id?: T;
            };
        weight?: T;
        id?: T;
      };
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
 * via the `definition` "social-link".
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
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "social-link_select".
 */
export interface SocialLinkSelect<T extends boolean = true> {
  platform?: T;
  url?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
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
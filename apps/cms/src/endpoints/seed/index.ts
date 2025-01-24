import type { Payload, PayloadRequest } from 'payload';
// import { links } from './social-links'

export const seed = async ({
  payload,
  req,
}: {
  payload: Payload;
  req: PayloadRequest;
}): Promise<void> => {
  payload.logger.info('Seeding social media links...');
  console.log(req)
};

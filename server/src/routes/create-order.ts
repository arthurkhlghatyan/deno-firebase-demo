import type { Request, Response } from '../deps.ts';
import {
  validate,
  required,
  isNumber,
  validateObject,
  flattenMessages
} from '../deps.ts';
import fcl from '../fcl.ts';

const orderSchemaSpecs = {
  title: required,
  bookingDate: [required, isNumber],
  address: validateObject(true, {
    country: required,
    city: required,
    street: required
  }),
  customer: validateObject(true, {
    name: required,
    email: required,
    phone: required,
  })
};

export default async (req: Request, res: Response) => {
  // Validate order schema
  const [passes, errors] = await validate(req.body, orderSchemaSpecs);

  if (!passes) {
    return res.setStatus(400).send(flattenMessages(errors));
  }

  const response = await fcl.baseReq('/orders', 'POST', req.body);

  res.set('Content-Type', 'application/json');
  res.send(response);
};
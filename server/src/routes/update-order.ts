import type { Request, Response } from '../deps.ts';
import {
  validate,
  required,
  isNumber,
  flattenMessages
} from '../deps.ts';
import fcl from '../fcl.ts';

const orderUpdateSchemaSpecs = {
  title: required,
  bookingDate: [required, isNumber],
};

export default async (req: Request, res: Response) => {
  // Validate order schema
  const [passes, errors] = await validate(req.body, orderUpdateSchemaSpecs);

  if (!passes) {
    return res.setStatus(400).send(flattenMessages(errors));
  }

  const response = await fcl.baseReq(`/orders/${req.params.id}`, 'PATCH', req.body);

  res.set('Content-Type', 'application/json');
  res.send(response);
};
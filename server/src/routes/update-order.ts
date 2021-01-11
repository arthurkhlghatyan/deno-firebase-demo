import type { Request, Response } from '../deps.ts';

export default (req: Request, res: Response) => {
  res.send(`Updated order ${req.params.id}`);
};
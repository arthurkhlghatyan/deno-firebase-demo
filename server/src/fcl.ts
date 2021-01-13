// Configure and cache firebase client
// instance here. Seems for now, there's no way 
// to manipulate opine req object using a middleware.
import { getConfiguredClient } from './firebase.ts';

const projectId = 'construyo-coding-challenge';
const client = await getConfiguredClient(projectId);

export default client;
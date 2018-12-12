import { Client } from './Client';

const client = new Client(process.env['REACT_APP_GITHUB_API_URL'] || '', process.env['REACT_APP_GITHUB_ACCESS_TOKEN'] || '');
export default client;
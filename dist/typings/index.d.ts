import 'fast-text-encoding';
import Auth0Client from './Auth0Client';
import './global';
export default function createAuth0Client(
  options: Auth0ClientOptions
): Promise<Auth0Client>;

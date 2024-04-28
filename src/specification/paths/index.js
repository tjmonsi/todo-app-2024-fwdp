import { home } from './home/index.js';
import { user } from './user/index.js';
import { todo } from './todo/index.js';

export const paths = {
  ...home,
  ...user,
  ...todo
};
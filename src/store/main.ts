import { atom } from 'jotai';

const accessFromDesktop = atom(false);
const limit = 10;

export { accessFromDesktop, limit };


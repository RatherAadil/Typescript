// type Endpoints = 'user' | 'posts' | 'comments';
type Endpoints = `/api/${'user' | 'posts' | 'comments'}`;

type DiceNumber = 1 | 2 | 3 | 4 | 5 | 6;

// let api: `/api/${string}` = '/api/user';
let api: Endpoints = '/api/comments';

let dice: `My dice number is ${DiceNumber}` = 'My dice number is 5';

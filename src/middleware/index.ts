import { sequence } from 'astro/middleware';

async function validation(_, next) {
  // console.log('validation request');
  const response = await next();
  // console.log('validation response');
  return response;
}

async function auth(_, next) {
  // console.log('auth request');
  const response = await next();
  // console.log('auth response');
  return response;
}

async function greeting(_, next) {
  // console.log('greeting request');
  const response = await next();
  // console.log('greeting response');
  return response;
}

export const onRequest = sequence(validation, auth, greeting);

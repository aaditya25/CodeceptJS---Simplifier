/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type login = typeof import('./Pages/loginpage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, login: login }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}

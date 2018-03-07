export const ADMIN = 'ADMIN';
export const USER = 'USER';
export function Admin(text) {
  return { type: ADMIN,text:'管理员' }
}
export function User(text) {
  return { type: USER,text:'游客' }
}
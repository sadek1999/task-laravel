import { User } from ".";

export function  can(user:User ,permission:string):boolean{
  return user.permission.includes(permission);
};

export function hasRole(user:User,permission:string):boolean{
  return user.roles.includes(permission);
}

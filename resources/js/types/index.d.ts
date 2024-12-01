import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    permission:string[];
    roles:string[];
}

export type TPaginatedData<T>={
  data:T[],
  link:Record<string,string>
}

export type TComment={
  id:number,
  comment:string,
  created_at:string,
  user:User
}

export type TFeature={
  id:number,
  name:string,
  description:string,
  user:User,
  created_at:string,
  featureCount:number,
  upvote_count:number,
  user_has_upvote:boolean,
  user_has_downvote:boolean,
  comment:TComment[]
}
export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

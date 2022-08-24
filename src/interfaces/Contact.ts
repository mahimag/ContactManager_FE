export interface Contact {
  id: string;
  firstname: string;
  lastname: string;
  number: string;
  email: string;
  address: string;
  photo: string | string[];
  isFav: boolean | boolean[];
  userId: string;
}

export type ContactToUpdate = Omit<Contact, "id" | "userId">;

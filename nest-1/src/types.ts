export interface Identifiable {
  id: number;
}

export class User implements Identifiable {
  id!: number;
  name!: string;
}

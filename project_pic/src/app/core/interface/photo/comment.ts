export interface Comment {
  text: string,
  date: Date,
  userName: string
}

export type Comments = Array<Comment>;

export interface Photo {
  id: number,
  url: string,
  description: string,
  postDate: Date,
  allowComments: Boolean,
  likes: number,
  comments: number,
  userId: 1
}

export type Photos = Array<Photo>;

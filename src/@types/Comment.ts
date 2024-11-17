export interface Comment {
  id: number;
  body: string;
  author: string;
}

export interface CommentResponse {
  id: number;
  body: string;
  user: {
    fullName: string;
  };
}

export interface Response {
  comments: CommentResponse[];
}

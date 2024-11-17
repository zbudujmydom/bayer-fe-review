import { CommentResponse, Comment } from "../@types/Comment";

export const mapComment = (data: CommentResponse): Comment => {
  return {
    id: data.id,
    body: data.body,
    author: data.user.fullName,
  };
};

import { Comment } from "../../@types/Comment";
import { Item } from "./CommentsListing.theme";

interface Props {
  comments: Comment[];
}

export const CommentsListing = ({ comments }: Props) => {
  return (
    <ul>
      {comments.map((comment) => (
        <Item key={comment.id}>
          <div>{comment.body}</div>
          <div> (author: {comment.author})</div>
        </Item>
      ))}
    </ul>
  );
};

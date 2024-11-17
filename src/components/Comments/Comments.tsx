import { useEffect, useState } from "react";
import styles from "./Comments.module.css";
import { mapComment } from "../../helpers/mapComment";
import { Comment, Response } from "../../@types/Comment";
import { CommentsListing } from "./CommentsListing";
import axios from "axios";

interface Props {
  title: string;
}

export const Comments = ({ title }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsFetching(true);
    axios
      .get<Response>("https://dummyjson.com/comments")
      .then((reposponse) => {
        if (!reposponse.data?.comments) {
          return Promise.reject();
        }

        const parsedComments = reposponse.data.comments.map(mapComment);
        setComments(parsedComments);
      })
      .catch((error) => {
        setError(error.message || "default error message");
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  const showEmptyListing = !isFetching && comments.length === 0 && !error;
  const showListing = !isFetching && comments.length > 0 && !error;

  return (
    <section>
      <h3>{title}</h3>
      {isFetching ? <p>fetching data...</p> : null}
      {error ? <div>{error}</div> : null}
      {showEmptyListing ? <p className={styles.emptyList}>No comments</p> : null}
      {showListing ? <CommentsListing comments={comments} /> : null}
    </section>
  );

  //   return (
  //     <section>
  //       <h3>{title}</h3>
  //       {isFetching ? (
  //         <p>fetching data...</p>
  //       ) : (
  //         <>
  //           {comments.length === 0 ? (
  //             <p className={styles.emptyList}>No comments</p>
  //           ) : (
  //             <CommentsListing comments={comments} />
  //           )}
  //         </>
  //       )}
  //     </section>
  //   );
};

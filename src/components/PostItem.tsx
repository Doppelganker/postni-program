import { parseISO } from "date-fns";
import Link from "next/link";
import { PostContent } from "../lib/posts";
import Date from "./Date";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <Date date={parseISO(post.date)} />
      <h2>{post.title}</h2>
      <style jsx>
        {`
          a {
            color: #222;
            display: inline-block;
          }
          h2 {
            margin: 0;
            font-weight: 500;
          }
        `}
      </style>
    </Link>
  );
}

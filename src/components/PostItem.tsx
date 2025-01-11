import { parseISO } from "date-fns";
import Link from "next/link";
import { PostContent } from "../lib/post";
import Date from "./Date";

type Props = {
  post: PostContent;
  address: string;
};
export default function PostItem({ post, address }: Props) {
  return (
    <Link href={address + "/" + post.slug}>
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

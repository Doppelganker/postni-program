import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
  address: string;
};
export default function TagButton({ tag, address }: Props) {
  return (
    <>
      <Link
        href={address + "/tags/[[...slug]]"}
        as={address + `/tags/${tag.slug}`}
      >
        {tag.name}
      </Link>
      <style jsx>{`
        a {
          display: inline-block;
          border-radius: 3px;
          background-color: rgba(21, 132, 125, 0.2);
          color: #15847d;
          transition: background-color 0.3s ease;
          padding: 0.25em 0.5em;
        }
        a:active,
        a:hover {
          background-color: rgba(21, 132, 125, 0.4);
        }
      `}</style>
    </>
  );
}

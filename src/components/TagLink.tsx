import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
  address: string;
};
export default function Tag({ tag, address }: Props) {
  return (
    <Link
      href={address + "/tags/[[...slug]]"}
      as={address + `/tags/${tag.slug}`}
    >
      {"#" + tag.name}
    </Link>
  );
}

import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import PostList from "../../components/PostList";
import config from "../../lib/config";
import { countExodusPosts, listExodusPostContent } from "../../lib/exodus";
import { PostContent } from "../../lib/post";
import { listTags, TagContent } from "../../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, tags, pagination }: Props) {
  const url = "/exodus";
  const title = "All posts";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <PostList
        posts={posts}
        tags={tags}
        pagination={pagination}
        address="/exodus"
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listExodusPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countExodusPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};

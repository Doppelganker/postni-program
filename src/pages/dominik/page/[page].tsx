import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../components/Layout";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import PostList from "../../../components/PostList";
import config from "../../../lib/config";
import {
  countDominikPosts,
  listDominikPostContent,
} from "../../../lib/dominik";
import { PostContent } from "../../../lib/post";
import { listTags, TagContent } from "../../../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page({ posts, tags, pagination, page }: Props) {
  const url = `/dominik/page/${page}`;
  const title = "All posts";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <PostList
        posts={posts}
        tags={tags}
        pagination={pagination}
        address="/dominik"
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params.page as string);
  const posts = listDominikPostContent(page, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: page,
    pages: Math.ceil(countDominikPosts() / config.posts_per_page),
  };
  return {
    props: {
      page,
      posts,
      tags,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countDominikPosts() / config.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

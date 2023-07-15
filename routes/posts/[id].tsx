import { PageProps } from "$fresh/server.ts";
import Blog from "~/components/Blog.tsx";
import blogs from "~/components/state/blog.ts";

export default function BlogPage(props: PageProps) {
  return (
    <Blog
      page={
        parseInt(props.params.id) > blogs.length - 1 ||
        parseInt(props.params.id) <= 0 ||
        typeof parseInt(props.params.id) !== "number"
          ? 0
          : parseInt(props.params.id)
      }
    />
  );
} //記事が存在しない場合は0 ブログの数を超えている。　文字列

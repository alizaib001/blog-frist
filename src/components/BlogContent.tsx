import Link from "next/link";
import { Post } from "../../types";
import Container from "./Container";
import Image from "next/image";
import { urlFor } from "@/lib/createClient";

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  return (

        <Container className="flex flex-col px-10 py-4">
          <h1 className="flex justify-center uppercase font-bold px-10 py-10 text-lg">TopNews</h1>
          <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6">
            {posts.map((post) => (
              <Link
                href={{
                  pathname: `/post/${post?.slug?.current}`,
                  query: { slug: post?.slug?.current },
                }}
                key={post?._id}
              >
                <div className="border-[1px] border-cyan-400 border-opacity-40 h-[250px] group">
                  <div className="h-3/5 w-full overflow-hidden">
                    <Image
                      src={urlFor(post?.mainImage).url()}
                      width={380}
                      height={350}
                      alt="blog post image"
                      className="h-full w-full object-cover brightness-75 group-hover:scale-110 group-hover:brightness-100 
                 duration-300"
                    />
                  </div>
                  <div className="h-2/5 w-full flex justify-center">
                    <div className="flex justify-between items-center font-semibold px-4 py-1 border-b-[1px] border-b-gray-500">
                      <p>{post.title}</p>
                    </div>
                    <div className="p-5 gap-2">
                      {post?.categories.map((item) => (
                        <p
                          key={item?._id}
                          className="text-xs uppercase text-blue-600 font-semibold"
                        >
                          {item?.title}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
     
   
  );
};

export default BlogContent;

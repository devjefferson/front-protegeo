import { Post, servicesPost } from "@/services/post";
import ContentPost from "./_features/Content";


export default async function Page({params}:{params:{slug:string}}) {
  const [data] = await Promise.all([servicesPost(params.slug)]);
   return (
    <div>
       <ContentPost  data={data.data as Post}/>
    </div>
  );
}

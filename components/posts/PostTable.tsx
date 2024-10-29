import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Post } from "@/types/posts"
 import Link from "next/link"
 import posts from "@/data/posts"
 
 interface PostsTableProps{
    limit?:number;
    title?:string
 }


function PostTable({limit,title}:PostsTableProps) {

//sort post in decsending order based on date 
  const sortedPosts: Post[] = [...posts].sort((a,b)=>
  new Date(b.date).getTime() - new Date(a.date).getTime())
  //filter posts to limit
  const filteredPosts = limit ? sortedPosts.slice(0,limit):
  sortedPosts
  
    return (
<>
        <div className="mt-10">
            <h3 className="text-2xl mb-4 font-semibold">
                {title?title:'Post '}
            </h3> 
        </div>
    <Table>
    <TableCaption>A list of your recent Posts.</TableCaption>
    <TableHeader>
      <TableRow >
        <TableHead  >Title</TableHead>
        <TableHead className="hidden md:table-cell text-left" >Author</TableHead>
        <TableHead className="hidden md:table-cell text-center">date</TableHead>
        <TableHead className="hidden md:table-cell text-center">view</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {filteredPosts.map((post)=> (
            <TableRow key={post.id}>
 <TableCell className="font-medium  ">
    {post.title}
     </TableCell>
     <TableCell className="hidden md:table-cell font-medium text-left">
    {post.author}
     </TableCell>
     <TableCell className=" hidden md:table-cell text-center font-medium">
    {post.date}
     </TableCell>
     <TableCell className=" hidden md:table-cell text-center font-medium">
 <Link href={`/posts/edit/${post.id}`}>

 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">Edit</button>
 </Link>

    
     </TableCell>
 </TableRow>
        ))}
      
       
         
      
    </TableBody>
  </Table>
  </>
   )
 }
 
 export default PostTable
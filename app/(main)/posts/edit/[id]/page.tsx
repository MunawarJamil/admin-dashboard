
'use client'
 
import BackButton from "@/components/BackButton";
 import * as z from 'zod'
 import { useForm } from "react-hook-form";
 import * as React from 'react'
 import { zodResolver } from "@hookform/resolvers/zod";
 import { Form ,
  FormControl,
  FormItem, 
  FormField,
  FormLabel,
  FormMessage, 
   
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";
  import { Button } from "@/components/ui/button";
  import posts from "@/data/posts"; 
import { useToast } from "@/hooks/use-toast"

  
const formSchema = z.object({
title:z.string().min(1,{
  message: 'Title is required'
}),
author:z.string().min(1,{
  message: 'author is required'
}),
body:z.string().min(1,{
  message: 'Title is required'
}),
date:z.string().min(1,{
  message: 'date is required'
})

  })

interface PosteditPageProps {
  params:{
    id:string;
  }
}

 function  page({params}:PosteditPageProps) {
//form schema 
const { toast } = useToast()
const post =   posts.find((post)=>post.id===params.id)
console.log(post);
const form = useForm<z.infer< typeof formSchema>> ({
  resolver:zodResolver(formSchema),
  defaultValues:{
    title:post?.title || '',
    author:post?.author || '',
    body:post?.body || '',
    date:post?.date || ''
  }
})

const handleSubmit = (data: z.infer<typeof formSchema>)=>{
  console.log(data);
  
}

// const { id } = params;
  return (
    < >
    <BackButton link='/posts'  text='back to post'/>
     <h3 className="text-2xl mb-4">Edit Post</h3>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title  

              </FormLabel>
               
              <FormControl>
                <Input placeholder="Enter title" {...field} />
              </FormControl>
               
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body  

              </FormLabel>
               
              <FormControl>
                <Textarea placeholder="Enter Body " {...field} />
              </FormControl>
               
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Author  

              </FormLabel>
               
              <FormControl>
                  <Input placeholder="Enter Author " {...field} />
              </FormControl>
               
              <FormMessage />
            </FormItem>
          )}
        />
<FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Date  

              </FormLabel>
               
              <FormControl>
                  <Input placeholder="Enter date " {...field} />
              </FormControl>
               
              <FormMessage />
            </FormItem>
          )}
        />


        <Button
        onClick={() => {
          toast({
            title: "Your post has been updated successfully",
            
          })
        }}
        
        
        className="w-full"  >Update Post</Button>
      
      </form>
    </Form>
    </>
  )
}

export default page
import DashboarCard from "@/components/dashboard/DashboarCard";
import { Folder, ThumbsUp   , MessageCircle, Newspaper, User } from "lucide-react";
import PostTable from "@/components/posts/PostTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
// import AnalyticsChart from './../components/dashboard/AnalyticsChart';
export default function Home() {
  return (
    <>
  <div className="flex flex-col md:flex-row justify-between gap-5 mb-5"> 
    <DashboarCard title='Posts'
    count={100}
    icon={<Newspaper  className="text-slate-500" size={72}/>}/>


<DashboarCard title='Category'
    count={12}
    icon={<Folder  className="text-slate-500" size={72}/>}/>


<DashboarCard title='Users'
    count={1200}
    icon={<User  className="text-slate-500" size={72}/>}/>
  

  <DashboarCard 
    title='Comments'
    count={1550}
    icon={<MessageCircle  className="text-slate-500" size={72}/>}
    />
  
  <DashboarCard
    title='Likes'
    count=  {17699}
    icon={<ThumbsUp    className="text-slate-500" size={72}/>}/>
  

  </div>
 
  
    <AnalyticsChart    />
    
    
     
<PostTable title="this is post" limit={5}/>

 
    </>
  );
}
   
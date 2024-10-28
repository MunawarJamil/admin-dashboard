import DashboarCard from "@/components/dashboard/DashboarCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
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
  

  <DashboarCard title='Comments'
    count={1550}
    icon={<MessageCircle  className="text-slate-500" size={72}/>}/>
  
  </div>
 
    </>
  );
}

 import React from 'react'
 import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
 import Link from 'next/link'
 import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
 function Navbar() {
   return (<>
     <div className=' bg-primary px-10 py-2 text-white flex justify-between   '>
        <div className=' flex  mt-2'>Logo</div>
        
        
<DropdownMenu>
  <DropdownMenuTrigger className=' outline-none'>
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
  </Avatar>

  </DropdownMenuTrigger>

  
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>

    <DropdownMenuSeparator />

    <DropdownMenuItem>
        <Link href='/profile'>Profile
        </Link>
    </DropdownMenuItem>
    <DropdownMenuItem > 
    <Link href='/auth'>Logout
    </Link>
    </DropdownMenuItem>
     
  </DropdownMenuContent>
</DropdownMenu>
 
        </div>
     
</>
   )
 }
 
 export default Navbar

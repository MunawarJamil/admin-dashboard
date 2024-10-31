import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import {
  LayoutDashboard,
  Newspaper,
  CreditCard,
  Folder,
  Settings,
  User,
} from "lucide-react";
function Sidebar() {
  return (
    <Command className="bg-secondary rounded-none ">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard className="mr-1 h-4 w-4" />
            <Link href="/dashoard">Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="mr-1 h-4 w-4" />
            <Link href="/posts">Posts</Link>
          </CommandItem>

          <CommandItem>
            <Folder className="mr-1 h-4 w-4" />
            <Link href="#">Category</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />

            <span>Profile </span>
            <CommandShortcut>P⌘</CommandShortcut>
          </CommandItem>
          
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing </span>
            <CommandShortcut>B⌘</CommandShortcut>{" "}
          </CommandItem>

          <CommandItem>
            
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings </span>
            <CommandShortcut>S⌘</CommandShortcut>
          </CommandItem>

        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default Sidebar;

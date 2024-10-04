
import Link from "next/link"
export default function Header(){
    return(
       <div>
        <ul className="flex gap-10 bg-red-900 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/jobs">Jobs</Link></li>
        </ul>
   
       </div>
        
    )
}
import { redirect } from "next/navigation"

export default function Investment(){
     if(true){
        redirect("/dashboard")
      }
    return (
        <div>Investment</div>
    )
}
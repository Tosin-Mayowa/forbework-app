import { redirect } from "next/navigation"


export default function Savings(){
     if(true){
        redirect("/dashboard")
      }
    return (
        <div>Savings</div>
    )
}
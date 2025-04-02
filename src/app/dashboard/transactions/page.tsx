import { redirect } from "next/navigation"



export default function Transactions(){
     if(true){
        redirect("/dashboard")
      }
    return (
        <div>Transactions</div>
    )
}
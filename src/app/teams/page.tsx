'use client'

import { ITeams } from "@/type";
import axios from "axios";
import { useEffect , useState} from "react";
import { Card } from "flowbite-react";


export default function TeamPage() {
   const [team, setTeam] = useState<ITeams[]>([])
   const getData = async () => {
      try {
         const res = await axios.get("https://randomuser.me/api/?results=12&inc=name,location,picture")
         console.log(res.data.results);
         setTeam(res.data.results)
         
      } catch (err) {
         console.log(err);
      }
      
   }

   useEffect(() => {
      getData()
   },[])

      return (
         <div className="bg-lime-600 flex justify-center flex-wrap h-auto items-center gap-8 pt-32 pb-8">
            <h1 className="text-4xl text-gray-900 font-extrabold">Meet Our Amzing Team</h1>
            <div className="flex justify-center flex-wrap items-center gap-8 py-8">
               {team.map((val) => {
                  return (
                     <div key={val.name.first}>
                        <Card className="md:w-64 md:h-32" imgSrc={val.picture.large} horizontal>
                           <div className="flex flex-col">
                           <h5 className="text-xl font-bold tracking-tight text-lime-600">{val.name.first}</h5>
                           <p className="font-normal text-sm text-gray-900">{val.location.country}</p>
                           </div>
                        </Card>
                     </div>
                  )
               })}
            </div>
           
         </div>
      ) 
}
import { createRouter } from "./context";
import { z } from "zod";

import {prisma} from "../../server/db/client"



export const add=createRouter()
 .query("add",{
    input:z
        .object({
            name :z.string().nullish(),  
            phone :z.number().nullish()
        }).nullish(),
        async resolve ({input}){
           return 
        }
 })
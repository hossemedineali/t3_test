import { createRouter } from "./context";
import { z } from "zod";

import {prisma} from "../../server/db/client"



export const exampleRouter = createRouter()
.query("add",{
  input:z
      .object({
          name :z.string().nullish(),  
          phone :z.number().nullish()
      }).nullish(),
      async resolve ({input,ctx}){
        
         return await prisma
      }
})
 /*  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
      
    },
  }); */

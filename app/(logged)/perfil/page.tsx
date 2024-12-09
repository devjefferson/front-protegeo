import { TCustomer } from "@/models/customer";
import Perfil from "./Perfil";
import getCurrentUser from "@/services/auth/customer/getCurrentUser";
import { createClient } from "@vercel/postgres";

import { redirect } from "next/navigation";
import { servicesOccorrrenceGetAll, servicesOccorrrenceGetAllUser } from "@/services/Occorrence";
import { servicesGetAllLogs } from "@/services/log";

export default async function Page() {
  const user  = await getCurrentUser() as TCustomer

  if (!user) {
    redirect("/login");
    return;
  }

  const rows = Number(user.id) === 13 ? (await servicesOccorrrenceGetAll()).rows : await servicesOccorrrenceGetAllUser(Number(user.id))
  
  return <Perfil data={user} rows={rows.rows} />;
}
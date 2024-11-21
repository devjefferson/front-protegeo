
import "mapbox-gl/dist/mapbox-gl.css";
import { FormOccurrence } from "./_feature/form";
import { redirect } from "next/navigation";
import { getMe } from "@/services/me";


export default async function Page() {
  const [user] = await Promise.all([await getMe()]);

  if (!user) {
    redirect("/login");
    return;
  }

  return (

     <FormOccurrence user={user || {}}  />
  
  );
}
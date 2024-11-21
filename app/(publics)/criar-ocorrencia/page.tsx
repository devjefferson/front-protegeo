
import "mapbox-gl/dist/mapbox-gl.css";
import { FormOccurrence } from "./_feature/form";
import getCurrentUser from "@/services/auth/customer/getCurrentUser";
import { redirect } from "next/navigation";
import { getMe } from "@/services/me";

const accessToken = "pk.eyJ1IjoibmRpZXN1cGVyIiwiYSI6ImNsbDN1bnpxZzAwMmQzcm53YjA5dW1xM24ifQ.R5njF3uIvhR9L7a-FtTVMg";

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
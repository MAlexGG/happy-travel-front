'use client';

import { useAuthContext } from "@/context/authContext";
import { AuthService } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Page() {

    const { logout } = useAuthContext();
    const router = useRouter();
    const api = AuthService();

    useEffect(() => {
      api.postLogout().then(res => {
        alert(res.data.msg)
        logout();
        router.push("/login");
      }).catch(error => {
        logout();
        router.push("/login");
      })        
    })

  return null;
}

export default Page
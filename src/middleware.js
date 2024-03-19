import { NextResponse } from "next/server";


export function middleware(request){
    const authTokens = request.cookies.get("authTokens")?.value;

    if(request.nextUrl.pathname.startsWith("/auth") && !authTokens){
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("authTokens");
        return response;
    }

    if(authTokens && request.nextUrl.pathname.startsWith("/login") || authTokens && request.nextUrl.pathname.startsWith("/signin")){
        const response = NextResponse.redirect(new URL("/auth", request.url));
        return response;
    }
}

export const config = {
    matcher: ["/auth(.*)", "/login", "/signin"]
};
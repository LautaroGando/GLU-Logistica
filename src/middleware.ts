import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
//   const searchUser = req.cookies.get("user-storage")?.value;
//   const user = searchUser && JSON.parse(searchUser);

//   const { pathname } = req.nextUrl;

//   const isPath = (paths: RegExp[]) => paths.some((path) => path.test(pathname));

//   const authPaths = ["/sign-in"];

//   const pathByRole = {
//     user: [/^\/user(\/.*)?$/],
//     admin: [/^\/admin(\/.*)?$/],
//   };

//   const allRestrictedPaths = [...pathByRole.user, ...pathByRole.admin];

//   const isRestricted = isPath(allRestrictedPaths);

//   if (!user && isRestricted) {
//     return NextResponse.redirect(new URL("/sign-in", req.url));
//   }

//   if (user && user.token && authPaths.includes(pathname)) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (user) {
//     const roles = {
//       user: user.user.role === "CLIENTE",
//       admin: user.user.role === "ADMIN",
//     };

//     const hasAccess = Object.entries(roles).some(
//       ([role, hasRole]) =>
//         hasRole && isPath(pathByRole[role as keyof typeof pathByRole])
//     );

//     if (!hasAccess && isRestricted) {
//       return NextResponse.redirect(new URL("/", req.url));
//     }
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matchers: ["/sign-in", "/user/:path", "/admin/:path"],
};

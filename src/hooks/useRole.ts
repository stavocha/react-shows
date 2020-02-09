import { useAuth0 } from "../react-auth0-spa";

export const useRole = (allowedRoles) => {
    const { user } = useAuth0();
    const userRoles = user['https://shows.tikalk.com/roles'];
    return userRoles.some(r=> allowedRoles.includes(r))
}
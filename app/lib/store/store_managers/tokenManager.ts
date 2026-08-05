import { useAtom } from "jotai";
import { TokenDetails, UserAtom, tokenAtom , userAtom} from "../atoms/token";

/**
 * Custom hook to manage token state in the application.
 * Provides access to the current token and a method to update it.
 */
export const useTokenManager = () => {
    const [token, setToken] = useAtom(tokenAtom);
    const setTokenManager = (newToken: TokenDetails, persist: boolean) => {

        setToken(newToken);
        if(persist && newToken){
            // Logic to persist the token, e.g., localStorage or sessionStorage
            localStorage.setItem('atom_token', JSON.stringify(newToken));
        }
    
    }

    return {token, setTokenManager}
}

 // these were gotten from the back end. Shou;d be synced often 
export  enum rolesEnum {
            admin = "admin",
            "sales rep" = "sales rep",
            "content manager" =  "content manager",
            "contestant manager" = "contestant manager",
            "manage user" = "manage user"
        } 

export const useUserManager = () => {
    const [userStore, setUserStore] = useAtom(userAtom);


    
    const setUserStoreManager = (newUser: UserAtom | null, persist: boolean) => {
        setUserStore(newUser);
        
        if(persist && newUser){
            // Logic to persist the user, e.g., localStorage or sessionStorage
            localStorage.setItem('atom_user', JSON.stringify(newUser));
            console.log("persisted", newUser)
        }
        return newUser;
    }

    const getUserStoreManager = (): UserAtom | null => {
        try{
            if(!userStore){
            const storedUser = localStorage.getItem('atom_user');
            if(storedUser){
                const newUser: UserAtom = JSON.parse(storedUser);
                newUser.is_partner_account = newUser.business_id ? true : false || newUser.is_partner_account;
                setUserStore(newUser);
                return newUser;
            }
        }
        return userStore;
        }catch(e){
            return null;
        }
    }

    const deleteUserStoreManager = () => {
        setUserStore(null);
        localStorage.removeItem('atom_user');
        console.log("User removed from store and localStorage")
    }

    const hasAcceptedRole = (user: UserAtom | null, acceptedRoles: [] = []): boolean => {
        const userRoles = getUserStoreManager()?.roles.map(r => r.toLowerCase()) ?? []
        const userRolesSet = new Set(userRoles)
        console.log(userRolesSet)
        console.log(acceptedRoles)
        if(!user){
            return false;
        }
        if(acceptedRoles.length === 0){
            return true;
        }
        if(user.is_superuser){
            console.log("Na super user be this o")
            return true;
        }

        for(const role of acceptedRoles){
            if (userRolesSet.has((role as unknown as string).toLowerCase())){
                return true;
            }
            }
        return false;
        }

        

       
    

    return {setUserStoreManager, getUserStoreManager, deleteUserStoreManager, hasAcceptedRole, rolesEnum}
}
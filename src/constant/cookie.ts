import { Cookies } from "react-cookie";

/**
 * this pattern is used to create a singleton instance of the cookies class
 * for prevent the warning the sameSite and secure options
 */
export const cookie = new Cookies();

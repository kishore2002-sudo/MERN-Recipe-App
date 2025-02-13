import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthToken from "../hooks/useAuthToken";

const Navbar = () => {
  console.log("Navbar Component Rendering"); // Debugging line
  // const [cookies, setCookies] = useCookies(["access_token"]);
  const {removeToken} = useAuthToken()
  const navigate = useNavigate();

  const logout = () => {
    
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("userID")
    navigate("/auth");
  };
  const token = sessionStorage.getItem("token")

  
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {!token?(<>
        <Link to="/auth">Login/Register</Link>
      </>):(<>
        <Link to="/create-recipe">Create Recipe</Link>
        <Link to="/saved-recipes">Saved Recipes</Link>
        <button onClick={logout}> Logout </button>
      </>)}     
        
    </div>
  );
};
export default Navbar

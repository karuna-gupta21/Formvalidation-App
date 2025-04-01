



export const loginUser = async ({ email, password }: { email: string; password: string }) => {
  const response = await fetch(`https://formvalidation-app.onrender.com/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed!");
  }

  return response.json();
};


export const signUpUser = async({email,password} : {email :string,password : string})=>{
  const response= await fetch(`https://formvalidation-app.onrender.com/api/auth/signup`,{
    method:"POST",
    headers:{"Content-Type":"Application/json"},
    body:JSON.stringify({email,password})
  })
  if(!response.ok){
    throw new Error("SignUp failed")
    
  }
  return response.json()
}
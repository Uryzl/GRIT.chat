import axios from "axios";
import { useState } from "react";

const AuthPage = (props) => {
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    
    // Check if the email ends with '@umbc.edu'
    if (!value.endsWith("@umbc.edu")) {
      setError("Please enter a valid UMBC email.");
      return;
    }

    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome to GRIT.chat</div>

        <div className="form-subtitle">Enter your UMBC email</div>

        <div className="auth">
          <div className="auth-label">Email</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>

        {error && <div className="error-message" color="red">{error}</div>}
      </form>
    </div>
  );
};

export default AuthPage;


// import axios from "axios";

// const AuthPage = (props) => {
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { value } = e.target[0];
//     axios
//       .post("http://localhost:3001/authenticate", { username: value })
//       .then((r) => props.onAuth({ ...r.data, secret: value }))
//       .catch((e) => console.log("Auth Error", e));
//   };

//   return (
//     <div className="background">
//       <form onSubmit={onSubmit} className="form-card">
//         <div className="form-title">Welcome</div>

//         <div className="form-subtitle">Enter your UMBC email</div>

//         <div className="auth">
//           <div className="auth-label">Email</div>
//           <input className="auth-input" name="username" />
//           <button className="auth-button" type="submit">
//             Enter
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AuthPage;
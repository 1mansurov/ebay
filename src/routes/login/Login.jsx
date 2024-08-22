import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "../../api/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", form);
      console.log(res);
      navigate("/");
      form.reset();
      toast.success("Login Successful");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || "Login Failed");
    }
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex items-center flex-col gap-4 justify-center w-full max-w-[300px]"
        action="#"
        onSubmit={handleSubmitForm}
      >
        <label htmlFor="username" className="w-full">
          <input
            type="text"
            className="border-2 w-full rounded-lg py-1 px-2 border-black "
            placeholder="Username"
            id="username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </label>
        <label
          htmlFor="password"
          className="w-full flex gap-2 border-2 rounded-lg py-1 px-2 border-black items-center"
        >
          <input
            type={show ? "text" : "password"}
            className="flex-1 outline-none"
            id="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {show ? (
            <FaEye onClick={handleShow} />
          ) : (
            <FaEyeSlash onClick={handleShow} />
          )}
        </label>
        <button
          type="submit"
          className="border-2 text-white italic rounded-lg py-1 px-2 bg-blue-500 border-blue-500 w-full"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Login;

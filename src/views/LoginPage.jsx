import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "providers/AuthProvider";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleUserLogin = async (e) => {
    e.preventDefault();

    const errors = await login(formValues.email, formValues.password); // TODO AUTHCONTEXT
    if (errors !== null) setFormErrors(errors);
    else navigate("/");
  };

  return (
    <div className="flex h-[80vh] items-center justify-center">
      <form onSubmit={handleUserLogin} className="flex flex-col gap-5">
        <Input
          type="email"
          label="E-mail"
          id="email"
          name="email"
          placeholder="jan.kowalski@email.com"
          value={formValues.email}
          onChange={handleInputChange}
          error={formErrors.email}
        />
        <Input
          type="password"
          label="Hasło"
          id="password"
          name="password"
          placeholder="qweRTY123!@#"
          value={formValues.password}
          onChange={handleInputChange}
          error={formErrors.password}
        />
        <Button type="submit" text="Zaloguj się" />
      </form>
    </div>
  );
};

export default LoginPage;

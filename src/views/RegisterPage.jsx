import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import { AuthContext } from "providers/AuthProvider";

const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleUserRegister = async (e) => {
    e.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      setFormErrors({
        ...formErrors,
        confirmPassword: "Wpisane hasła są różne",
      });
      return;
    }

    const errors = await register(formValues);
    if (errors !== null) setFormErrors(errors);
    else navigate("/");
  };

  return (
    <div className="flex min-h-[calc(100vh-200px)] w-full flex-col items-center justify-center gap-2">
      <form onSubmit={handleUserRegister} className="flex flex-col gap-5">
        <Input
          type="name"
          label="Imię"
          id="name"
          name="name"
          placeholder="Jan"
          value={formValues.name}
          onChange={handleInputChange}
          error={formErrors.name}
        />
        <Input
          type="lastname"
          label="Nazwisko"
          id="lastname"
          name="lastname"
          placeholder="Kowalski"
          value={formValues.lastname}
          onChange={handleInputChange}
          error={formErrors.lastname}
        />
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
        <Input
          type="password"
          label="Powtórz hasło"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="qweRTY123!@#"
          value={formValues.confirmPassword}
          onChange={handleInputChange}
          error={formErrors.confirmPassword}
        />
        <Button type="submit" text="Zarejestruj się" />
      </form>
    </div>
  );
};

export default RegisterPage;

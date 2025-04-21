"use client";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";


type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PasswordField = ({ onChange }: Props) => {
  const [passwordField, setPasswordField] = useState(true);
  return (
    <div className="cover__grp inputPassword">
      <label
        htmlFor="password"
        className="mb-16 fs-18 d-block fw-500 white bodyfont "
      >
        Contraseña <span className="base2">*</span>
      </label>
      <input
        className="inputPassword"
        type={passwordField ? "password" : "text"}
        id="password"
        placeholder="Escribe tu Contraseña"
        name="password"
        onChange={onChange}
        suppressHydrationWarning 
      />
      <div className="toggle-icon">
        {passwordField ? (
          <IconEyeOff onClick={() => setPasswordField(!passwordField)} />
        ) : (
          <IconEye onClick={() => setPasswordField(!passwordField)} />
        )}
      </div>
    </div>
  );
};

export default PasswordField;

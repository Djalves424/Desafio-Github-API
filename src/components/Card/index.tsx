import "./styles.css";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { ProfileDTO } from "../../models/profile";
import ProfileDetailsCard from "../ProfileDetailsCard";
import * as profileService from "../../services/profile-service";

type FormData = {
  username: string;
};

export default function Card() {
  const [error, setError] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    username: "",
  });

  const [profile, setProfile] = useState<ProfileDTO>();

  useEffect(() => {}, [profile]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    profileService
      .findByProfile(formData.username)
      .then((response) => {
        console.log(response.data);
        setProfile(response.data);
        setError(false);
      })
      .catch(() => {
        setProfile(undefined);
        setError(true);
      });
  }

  return (
    <>
      <div className="card">
        <h2>Encontre um perfil Github</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            name="username"
            type="text"
            placeholder="Usuário Github"
            value={formData.username}
            onChange={handleInputChange}
          />
          <div className="mb30 mt30 dflex">
            <Button text="Encontrar" />
          </div>
        </form>
      </div>
      <section>
        {error && (
          <div className="mt30 text-nothing">
            <p>Erro ao buscar usuário</p>
          </div>
        )}
        {profile && <ProfileDetailsCard profile={profile} />}
      </section>
    </>
  );
}

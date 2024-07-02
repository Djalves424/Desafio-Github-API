import "./styles.css";
import { ProfileDTO } from "../../models/profile";

type Props = {
  profile: ProfileDTO;
};

export default function ProfileDetailsCard({ profile }: Props) {
  return (
    <div className="profile-details-container">
      <div className="profile-details">
        <img src={profile.avatar_url} alt={`Foto de ${profile.name}`} />
      </div>
      <div className="second-card">
        <div className="information-text-card">
          <h2>Informações</h2>
        </div>
        <div className="profile-text">
          <p>Perfil: {profile.url}</p>
        </div>
        <div className="profile-followers">
          <p>Seguidores: {profile.followers}</p>
        </div>
        <div className="profile-location">
          <p>Localidade: {profile.location}</p>
        </div>
        <div className="profile-name">
          <p>Nome: {profile.name}</p>
        </div>
      </div>
    </div>
  );
}

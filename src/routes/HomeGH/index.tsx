import "./styles.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function HomeGH() {
  return (
    <main>
      <section>
        <div className="mt30 mb30 text-home">
          <h1> Github API</h1>
          <p>Encontre aqui seu perfil no Github</p>
          <div className="mb30 mt30 dflex">
            <Link to={"/findProfile"}>
              <Button text="Começar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

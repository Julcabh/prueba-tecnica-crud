import { deleteMonitoria } from "../firebase/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function MonitoriaCard({ link }) {
  const navigate = useNavigate();

  const onDeleteMonitoria = async (id) => {
    if (window.confirm("are you sure you want to delete this link?")) {
      await deleteMonitoria(id);
      toast("Se borro monitoria", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  return (
    <div
      className="card mb-3 card-website"
      key={link.id}
      onClick={() => navigate(`/edit/${link.id}`)}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>{link.name}</h4>
          <button
            className="btn btn-danger btn-sm d-flex align-items-center"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteMonitoria(link.id);
            }}
          >
            <i className="material-icons">close</i>
          </button>
        </div>
        <p>Materia: {link.materia}</p>
        <p>Monitor: {link.monitor}</p>
        <p>fecha: {link.fecha}</p>
        <p>Salon: {link.salon}</p>
      </div>
    </div>
  );
}

import { deleteMonitor } from "../firebase/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function MonitorCard({ link }) {
  const navigate = useNavigate();

  const onDeleteLink = async (id) => {
    if (window.confirm("are you sure you want to delete this link?")) {
      await deleteMonitor(id);
      toast("Se borro monitor", {
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
              onDeleteLink(link.id);
            }}
          >
            <i className="material-icons">close</i>
          </button>
        </div>
        <p>{link.nombre}</p>
        <a href={link.apellido} target="_blank" rel="noopener noreferrer">
          Go to Website
        </a>
      </div>
    </div>
  );
}

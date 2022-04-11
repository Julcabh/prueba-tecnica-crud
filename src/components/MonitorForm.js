import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { saveMonitor, getMonitor, updateMonitor } from "../firebase/api";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  nombres: "",
  apellidos: "",
  programa: "",
  semestre: "",
  cedula: "",
  contacto: ""
};
export const MonitorForm = (props) => {
  const [monitor, setMonitor] = useState(initialState);
  const params = useParams();
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) =>
    setMonitor({ ...monitor, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!params.id) {
      await saveMonitor(monitor);
      toast("Se registro monitor", {
        type: "success",
      });
    } else {
      await updateMonitor(params.id, monitor);
      toast("Updated", {
        type: "success",
      });
    }

    // Limpiar
    setMonitor(initialState);
    navigate("/");
  };

  const getLinkById = async (id) => {
    try {
      const doc = await getMonitor(id);
      setMonitor({ ...doc.data() });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getLinkById(params.id);
    }
  }, [params.id]);

  return (
    <div className="col-md-4 offset-md-4">
      <form onSubmit={handleSubmit} className="card card-body bg-secondary">
        <label htmlFor="nombres">Nombres:</label>
        <div className="input-group mb-3">
          <div className="input-group-text bg-dark">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            className="form-control"
            value={monitor.nombres}
            name="nombres"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="apellidos">Apellidos:</label>
        <div className="input-group">
          <div className="input-group-text bg-dark">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            value={monitor.apellidos}
            name="apellidos"
            className="form-control mb-3"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="programa">Programa academico:</label>
        <div className="input-group">
          <div className="input-group-text bg-dark">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            value={monitor.programa}
            name="programa"
            className="form-control mb-3"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="semestre">Semestre:</label>
        <div className="input-group">
          <div className="input-group-text bg-dark">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            value={monitor.semestre}
            name="semestre"
            className="form-control mb-3"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="cedula">Cedula:</label>
        <div className="input-group">
          <div className="input-group-text bg-dark">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            value={monitor.cedula}
            name="cedula"
            className="form-control mb-3"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="contacto">Contacto:</label>
        <div className="input-group">
          <div className="input-group-text bg-dark">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            value={monitor.contacto}
            name="contacto"
            className="form-control mb-3"
            onChange={handleInputChange}
          />
        </div>

        <button
          className="btn btn-primary btn-block"
          //disabled={!monitor.nombre || !monitor.apellido}
        >
          {props.currentId === "" ? "Save" : "Update"}
        </button>
      </form>
    </div>
  );
};

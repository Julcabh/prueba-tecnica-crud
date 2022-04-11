import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { saveMonitoria, getMonitoria, updateMonitoria } from "../firebase/api";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  materia: "",
  monitor: "",
  fecha: "",
  salon: ""
};
export const MonitoriaForm = (props) => {
  const [monitoria, setMonitoria] = useState(initialState);
  const params = useParams();
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) =>
    setMonitoria({ ...monitoria, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!params.id) {
      await saveMonitoria(monitoria);
      toast("Se agrego nueva monitoria", {
        type: "success",
      });
    } else {
      await updateMonitoria(params.id, monitoria);
      toast("Se actualizo monitoria", {
        type: "success",
      });
    }

    // Clean Form
    setMonitoria(initialState);
    navigate("/");
  };

  const getLinkById = async (id) => {
    try {
      const doc = await getMonitoria(id);
      setMonitoria({ ...doc.data() });
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
        <label htmlFor="materia">Materia:</label>
        <div className="input-group mb-3">
          <div className="input-group-text bg-dark">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            className="form-control"
            value={monitoria.materia}
            name="materia"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="monitor">Monitor asignado:</label>
        <div className="input-group">
          <div className="input-group-text bg-dark">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            value={monitoria.monitor}
            name="monitor"
            className="form-control mb-3"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="fecha">Fecha:</label>
        <div className="input-group">
          <div className="input-group-text bg-dark">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            value={monitoria.fecha}
            name="fecha"
            className="form-control mb-3"
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="salon">Salon:</label>
        <div className="input-group">
          <div className="input-group-text bg-dark">
            <i className="material-icons">create</i>
          </div>
          <input
            type="text"
            value={monitoria.salon}
            name="salon"
            className="form-control mb-3"
            onChange={handleInputChange}
          />
        </div>

        <button
          className="btn btn-primary btn-block"
          //disabled={!monitoria.materia || !monitoria.monitor}
        >
          {props.currentId === "" ? "Save" : "Update"}
        </button>
      </form>
    </div>
  );
};

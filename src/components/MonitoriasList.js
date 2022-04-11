import { useEffect, useState } from "react";
import { getMonitorias } from "../firebase/api";
import { MonitoriaCard } from "./MonitoriaCard";

export const MonitoriaList = () => {
  const [monitorias, setMonitorias] = useState([]);

  const getLinks = async () => {
    const querySnapshot = await getMonitorias();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setMonitorias(docs);
    // });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      {monitorias.map((link) => (
        <div className="col-md-4" key={link.id}>
          <MonitoriaCard link={link} />
        </div>
      ))}
    </>
  );
};

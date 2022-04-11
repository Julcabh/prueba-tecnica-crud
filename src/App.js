import { MonitoriaList } from "./components/MonitoriasList";
import { MonitorForm } from "./components/MonitorForm";
import { MonitoriaForm } from "./components/MonitoriaForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MonitoriaList />} />
          <Route path="add" element={<MonitorForm />} />
          <Route path="monitorias" element={<MonitoriaForm />} />
          <Route path="edit/:id" element={<MonitorForm />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

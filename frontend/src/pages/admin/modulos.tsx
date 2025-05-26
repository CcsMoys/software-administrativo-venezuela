import { Button, Heading } from "@chakra-ui/react";

export default function ModulosAdmin() {
  const [modulos, setModulos] = useState([]);

  const agregarModulo = async () => {
    const res = await fetch("/api/modulos", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ nombre: "Inventario" })
    });
    if (res.ok) alert("¡Módulo agregado!");
  };

  return (
    <div>
      <Heading>Panel de Administración</Heading>
      <Button onClick={agregarModulo}>+ Agregar Módulo</Button>
    </div>
  );
}
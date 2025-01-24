import React, { useEffect, useState } from "react";
import productos from "../../data/productos.json";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { Filtros } from "../filtro/filtro";

interface Productos {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
}

interface ListadoProductosProps {
  filtroCategoria: string;
}



export const ListadoProductos:React.FC<ListadoProductosProps>  = () => {
  const [products, setProducts] = useState<Productos[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [filtroCategoria, setFiltroCategoria] = useState<string>("");
  const [filtroPrecio, setFiltroPrecio] = useState<string>("");

  const fetchProductos = async () => {
    try {
      const data: Productos[] = productos;
      setProducts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  if (loading) return <Typography>Cargando Productos...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

const filtroJson = products.filter((product) => {

  const categoria = filtroCategoria ? product.category.toLowerCase() === filtroCategoria : true;
  
  const precioMatch = filtroPrecio ? (() => {
    const [min,max] = filtroPrecio.split("-").map(Number)
    return product.price >= min && product.price <= max
  }) () : true

  return categoria && precioMatch
})

const limpiarFiltros = () => {
  setFiltroCategoria("")
  setFiltroPrecio("")
}

  return (
    <Container sx={{ mt: 4 }}>
      <h2>Importación de JSON Local</h2>
      <Filtros
        limpiarFiltro={limpiarFiltros}
        filtroCategoria={filtroCategoria}
        setFiltroCategoria={setFiltroCategoria}
        filtroPrecio={filtroPrecio}
        setFiltroPrecio={setFiltroPrecio}
        
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsVisible(!isVisible)}
        sx={{ mb: 2 }}
      >
        {isVisible ? "Ocultar Productos" : "Mostrar Productos"}
      </Button>

      {isVisible && (
        <Grid container spacing={3}>
          {filtroJson.map((producto) => (
            <Grid item xs={12} sm={6} md={4} key={producto.id}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {producto.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mt: 1 }}
                  >
                    Categoría: {producto.category}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    Precio: ${producto.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

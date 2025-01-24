interface FiltrosProps {
    filtroCategoria: string;
    setFiltroCategoria: (category: string) => void;
    filtroPrecio: string;
    setFiltroPrecio: (price: string) => void;
    limpiarFiltro: () => void
}



  
  export const Filtros: React.FC<FiltrosProps> = ({
    filtroCategoria,
    setFiltroCategoria,
    filtroPrecio,
    setFiltroPrecio,
    limpiarFiltro
  }) => {
    return (
      <div>
        <label>
          Filtro por categoría:
          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="natacion">Natación</option>
            <option value="futbol">Fútbol</option>
            <option value="basket">Básquet</option>
            <option value="tenis">Tenis</option>
          </select>
        </label>
  
        <label>
          Filtro por precio:
          <select
            value={filtroPrecio}
            onChange={(e) => setFiltroPrecio(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="0-20">0 - 20</option>
            <option value="21-40">21 - 40</option>
            <option value="41-60">41 - 60</option>
            <option value="61-80">61 - 80</option>
            <option value="81-100">81 - 100</option>
          </select>
        </label>

        
        <button onClick={limpiarFiltro}>Limpiar Filtros</button>

      </div>
    );
  };
  
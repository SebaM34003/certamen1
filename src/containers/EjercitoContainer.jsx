
import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

import FormularioGuerrero from "../components/FormularioGuerrero";
import TablaGuerreros from "../components/TablaGuerreros";

export default function EjercitoContainer() {
  const [guerreros, setGuerreros] = useState([]);

  // Agregar un guerrero
  const agregarGuerrero = (nuevo) => {
    setGuerreros((anterior) => [
      ...anterior,
      nuevo,
    ]);
  };

  // Eliminar un guerrero por su ID
  const eliminarGuerrero = (id) => {
    setGuerreros((anterior) =>
      anterior.filter(
        (guerrero) => guerrero.id !== id
      )
    );
  };

  return (
    <>
      {/* Barra superior */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "#110E0D",
          color: "primary.main",
          borderBottom: "2px solid",
          borderColor: "secondary.main",
          backgroundImage:
            "linear-gradient(90deg, #100D0C, #291A15, #100D0C)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            gap: 2,
            flexWrap: "wrap",
            py: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            ◉ ANILLO ÚNICO
          </Typography>

          <Typography
            sx={{
              ml: "auto",
              fontStyle: "italic",
              color: "text.primary",
            }}
          >
            Uno para dominarlos a todos
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Encabezado principal */}
      <header className="mordor-hero container">
        <div className="mordor-kicker">
          MORDOR / TIERRAS DE SOMBRA
        </div>

        <Typography
          variant="h3"
          component="h1"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            letterSpacing: { xs: 1, sm: 3 },
            mt: 2,
            mb: 1,
          }}
        >
          El Ejército de Sauron
        </Typography>

        <Typography
          className="mordor-subtitle"
          variant="body1"
        >
          Forjando las huestes de la Tierra Oscura
        </Typography>

        <div className="mordor-divider" />
      </header>

      {/* Contenido principal */}
      <main className="container pb-5">

        {/* Primera sección: formulario centrado */}
        <div className="row mb-5 justify-content-center">
          <section className="col-12 col-lg-7">

            <div
              style={{
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  color: "#C5A15A",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "0.85rem",
                }}
              >
                01 / CUARTEL DE RECLUTAMIENTO
              </div>

              <div
                className="mordor-divider"
                style={{
                  width: "160px",
                  marginTop: "12px",
                }}
              />
            </div>

            <FormularioGuerrero
              onAgregar={agregarGuerrero}
            />

          </section>
        </div>

        {/* Segunda sección: tabla debajo */}
        <div className="row">
          <section className="col-12">

            <div className="section-heading">
              02 / ARCHIVO DE CAMPAÑA
            </div>

            <TablaGuerreros
              guerreros={guerreros}
              onEliminar={eliminarGuerrero}
            />

          </section>
        </div>

      </main>
    </>
  );
}


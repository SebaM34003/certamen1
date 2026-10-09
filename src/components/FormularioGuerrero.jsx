
import { useState } from "react";

import {
  Box,
  Card,
  CardContent,
  Divider,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Rating,
  Button,
  Typography,
} from "@mui/material";

export default function FormularioGuerrero({ onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("Orco");
  const [nivel, setNivel] = useState(1);
  const [categoria, setCategoria] = useState("Capitán");
  const [amenaza, setAmenaza] = useState(1);

  // Estilo de los campos
  const campoSx = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#191513",

      "& fieldset": {
        borderColor: "#51402E",
      },

      "&:hover fieldset": {
        borderColor: "#8F2630",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#C5A15A",
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#C5A15A",
    },
  };

  // Crear y registrar el guerrero
  const registrar = () => {
    const guerrero = {
      id: Date.now(),
      nombre,
      tipo,
      nivel,
      categoria,
      amenaza,
    };

    onAgregar(guerrero);

    // Limpiar el formulario
    setNombre("");
    setTipo("Orco");
    setNivel(1);
    setCategoria("Capitán");
    setAmenaza(1);
  };

  return (
    <Card
      sx={{
        height: "100%",
        overflow: "hidden",
        border: "1px solid #51402E",
        borderTop: "4px solid #C5A15A",
        background:
          "linear-gradient(145deg, #28211C, #191411)",
      }}
    >
      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
        {/* Encabezado del cuartel */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <Box
            sx={{
              minWidth: 48,
              height: 48,
              border: "1px solid #C5A15A",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C5A15A",
              fontSize: "1.3rem",
              fontWeight: "bold",
            }}
          >
            I
          </Box>

          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "#A63740",
                letterSpacing: 2,
                fontWeight: "bold",
              }}
            >
              CUARTEL DE MORDOR
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
              }}
            >
              Nuevo combatiente
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 2,
          }}
        >
          Incorpora un guerrero a las fuerzas del Señor
          Oscuro.
        </Typography>

        <Divider
          sx={{
            borderColor: "#51402E",
            mb: 2,
          }}
        />

        {/* Nombre del guerrero */}
        <TextField
          fullWidth
          label="Nombre del Guerrero"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          margin="normal"
          sx={campoSx}
        />

        {/* Tipo de unidad */}
        <Typography
          sx={{
            mt: 2,
            color: "#C5A15A",
            fontWeight: "bold",
          }}
        >
          Tipo de unidad
        </Typography>

        <RadioGroup
          row
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <FormControlLabel
            value="Orco"
            control={<Radio />}
            label="Orco"
          />

          <FormControlLabel
            value="Uruk"
            control={<Radio />}
            label="Uruk"
          />
        </RadioGroup>

        {/* Nivel de combate */}
        <Box sx={{ mt: 2 }}>
          <Typography
            sx={{
              color: "#C5A15A",
              fontWeight: "bold",
            }}
          >
            Fuerza de combate: {nivel}/100
          </Typography>

          <Slider
            value={nivel}
            min={1}
            max={100}
            step={1}
            valueLabelDisplay="auto"
            onChange={(e, nuevoNivel) =>
              setNivel(nuevoNivel)
            }
          />
        </Box>

        {/* Rango militar */}
        <FormControl
          fullWidth
          margin="normal"
          sx={campoSx}
        >
          <InputLabel id="categoria-label">
            Rango militar
          </InputLabel>

          <Select
            labelId="categoria-label"
            label="Rango militar"
            value={categoria}
            onChange={(e) =>
              setCategoria(e.target.value)
            }
          >
            <MenuItem value="Capitán">
              Capitán
            </MenuItem>

            <MenuItem value="Berserker">
              Berserker
            </MenuItem>

            <MenuItem value="Explorador">
              Explorador
            </MenuItem>

            <MenuItem value="Asediador">
              Asediador
            </MenuItem>
          </Select>
        </FormControl>

        {/* Nivel de amenaza */}
        <Box sx={{ mt: 2, mb: 1 }}>
          <Typography
            sx={{
              color: "#C5A15A",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Nivel de amenaza
          </Typography>

          <Rating
            max={5}
            value={amenaza}
            onChange={(e, nuevoValor) =>
              setAmenaza(nuevoValor || 1)
            }
          />

          <Typography
            variant="caption"
            display="block"
            sx={{
              color: "text.secondary",
              mt: 0.5,
            }}
          >
            Furia y letalidad del guerrero
          </Typography>
        </Box>

        <Divider
          sx={{
            borderColor: "#51402E",
            my: 2,
          }}
        />

        {/* Botón principal */}
        <Button
          fullWidth
          variant="contained"
          onClick={registrar}
          sx={{
            py: 1.4,
            fontWeight: "bold",
            letterSpacing: 0.5,
            background:
              "linear-gradient(90deg, #C5A15A, #D9BD80)",
            color: "#191512",

            "&:hover": {
              background: "#E0C98F",
            },
          }}
        >
          Incorporar al ejército
        </Button>

        <Typography
          variant="caption"
          display="block"
          sx={{
            textAlign: "center",
            color: "text.secondary",
            mt: 1.5,
          }}
        >
          LAS FUERZAS DE MORDOR TE ESPERAN
        </Typography>
      </CardContent>
    </Card>
  );
}

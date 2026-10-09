
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Chip,
  Button,
  Divider,
} from "@mui/material";

export default function TablaGuerreros({
  guerreros,
  onEliminar,
}) {
  return (
    <Card
      sx={{
        overflow: "hidden",
        border: "1px solid #51402E",
        borderTop: "4px solid #8F2630",
        background:
          "linear-gradient(145deg, #28211C, #191411)",
      }}
    >
      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
        {/* Encabezado del registro */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "#A63740",
                letterSpacing: 2,
                fontWeight: "bold",
              }}
            >
              ARCHIVO DE GUERRA
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
              }}
            >
              Despliegue del Ejército
            </Typography>
          </Box>

          <Chip
            label={`${guerreros.length} ${
              guerreros.length === 1
                ? "GUERRERO"
                : "GUERREROS"
            }`}
            variant="outlined"
            color="primary"
            sx={{
              fontWeight: "bold",
              letterSpacing: 0.5,
            }}
          />
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 2,
          }}
        >
          Registro de las unidades bajo el mando de Sauron.
        </Typography>

        <Divider
          sx={{
            borderColor: "#51402E",
            mb: 2,
          }}
        />

        {/* Tabla de tropas */}
        <TableContainer
          component={Paper}
          className="tabla-mordor-scroll"
          sx={{
            bgcolor: "#191411",
            border: "1px solid #51402E",
            borderRadius: 2,
          }}
        >
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Categoría</TableCell>
                <TableCell>Nivel</TableCell>
                <TableCell>Clasificación</TableCell>
                <TableCell>Acción</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {guerreros.map((guerrero) => (
                <TableRow
                  key={guerrero.id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#30231C",
                    },
                    transition: "background-color 0.2s",
                  }}
                >
                  <TableCell>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#F0E6D3",
                      }}
                    >
                      {guerrero.nombre}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    {guerrero.tipo}
                  </TableCell>

                  <TableCell>
                    {guerrero.categoria}
                  </TableCell>

                  <TableCell>
                    {guerrero.nivel}
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={guerrero.tipo}
                      color={
                        guerrero.tipo === "Orco"
                          ? "success"
                          : "secondary"
                      }
                      sx={{
                        fontWeight: "bold",
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Button
                      color="error"
                      variant="contained"
                      size="small"
                      onClick={() =>
                        onEliminar(guerrero.id)
                      }
                      sx={{
                        whiteSpace: "nowrap",
                        fontSize: "0.7rem",
                      }}
                    >
                      Asesinado por la aparición
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              {/* Mensaje cuando la tabla está vacía */}
              {guerreros.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    align="center"
                    sx={{
                      py: 0,
                      borderBottom: 0,
                    }}
                  >
                    <Box
                      sx={{
                        py: 5,
                        px: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          color: "#8F2630",
                        }}
                      >
                        ⚔
                      </Typography>

                      <Typography
                        sx={{
                          color: "#C5A15A",
                          fontWeight: "bold",
                        }}
                      >
                        El registro está vacío
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          maxWidth: 260,
                        }}
                      >
                        Todavía no hay tropas desplegadas.
                        Incorpora el primer guerrero para
                        comenzar el registro.
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pie de la tabla */}
        <Typography
          variant="caption"
          display="block"
          sx={{
            color: "text.secondary",
            mt: 2,
            textAlign: "right",
            letterSpacing: 1,
          }}
        >
          MORDOR / REGISTRO DE CAMPAÑA
        </Typography>
      </CardContent>
    </Card>
  );
}


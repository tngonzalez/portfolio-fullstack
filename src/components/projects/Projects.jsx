import { useState } from "react";
import "./Projects.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import projects from "/public/projects.json";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";

export function Projects() {
  const [open, setOpen] = useState(false); // Modal principal
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageModalOpen, setImageModalOpen] = useState(false); // Modal para imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Índice de imagen actual

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setImageModalOpen(true);
  };

  const handleImageModalClose = () => {
    setImageModalOpen(false);
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedProject.images.length
      );
    }
  };

  const handlePreviousImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  return (
    <section id="projects">
      <h1 className="title">Projects</h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 300,
              margin: "1rem",
              padding: "10px",
              background: "#1a1e24",
              border: "1px solid #B200B2",
              color: "white",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={project.images[0]}
              alt={project.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h8"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginTop: "2rem", border: "2px", textAlign: "center" }}
              >
                {project.technologies.join(" - ")}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                className="btn-images"
                sx={{ background: "#b429b4", color: "#ffffff" }}
                onClick={() => handleOpen(project)}
              >
                More Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      {/* Modal principal */}
      {selectedProject && (
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={handleClose}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: "78%",
              borderRadius: "md",
              p: 3,
              m: 5,
              boxShadow: "lg",
              background: "#1a1e24",
              color: "white",
              border: "1px solid #B200B2",
            }}
          >
            <ModalClose variant="solid" sx={{ m: 1 }} onClick={handleClose} />
            <Typography
              component="h1"
              id="modal-title"
              level="h1"
              textColor="inherit"
              sx={{
                fontWeight: "bolder",
                mb: 5,
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              {selectedProject.title}
            </Typography>
            <Typography
              id="modal-desc"
              textColor="text.tertiary"
              sx={{ mb: 5, textAlign: "justify" }}
            >
              {selectedProject.description}
            </Typography>
            
            <Typography sx={{ mb: 2}}>
              {selectedProject.technologies.join(" - ")}
            </Typography>

            {/* Enlace a GitHub si está disponible */}
            {selectedProject.github && (
              <Button
                className="btn-images"
                variant="solid"
                sx={{
                  textTransform: "none",
                  mb: 3,
                  mt: 2,
                  fontWeight: "bold",
                  background: "#b429b4",
                  color: "#ffffff",
                }}
                href={selectedProject.github}
              >
                View on GitHub
              </Button>
            )}

            <div
              className="modal-images"
              style={{ display: "flex", gap: "1rem", overflowX: "auto" }}
            >
              {selectedProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project ${selectedProject.title} - Image ${index + 1}`}
                  style={{
                    width: "150px",
                    height: "auto",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </Sheet>
        </Modal>
      )}

      {/* Modal de imagen ampliada */}
      {selectedProject && imageModalOpen && (
        <Modal
          open={imageModalOpen}
          onClose={handleImageModalClose}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              width: "auto",
              maxHeight: "auto",
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#1a1e24",
              border: "1px solid #B200B2",
            }}
          >
            <ModalClose
              variant="solid"
              sx={{ color: "white" }}
              onClick={handleImageModalClose}
            />

            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`Project Image ${currentImageIndex + 1}`}
              style={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
              <Button
                className="btn-images"
                sx={{ background: "#b429b4", color: "#ffffff" }}
                onClick={handlePreviousImage}
              >
                Previous
              </Button>
              <Button
                className="btn-images"
                sx={{ background: "#b429b4", color: "#ffffff" }}
                onClick={handleNextImage}
              >
                Next
              </Button>
            </div>
          </Sheet>
        </Modal>
      )}
    </section>
  );
}

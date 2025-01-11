import "./Projects.css"; 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import projects from "/public/projects.json"; 

export function Projects() {
  return (
    <section id="projects">
      <h1 className="title">Projects</h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <Card key={index} 
          sx={{ maxWidth: 300, margin: "1rem", paddingTop: "10px", background: "#1a1e24",   border: "1px solid #B200B2", color: "white"  }}>
            <CardMedia
              component="img"
              height="140"
              image={project.images[0]}
              alt={project.title}
            />
            <CardContent >
              <Typography gutterBottom variant="h6" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: "3rem" }}>
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium">
                More Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
  );
}

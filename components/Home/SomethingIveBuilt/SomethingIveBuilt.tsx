import Link from "next/link";
import React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  IconButton,
  Stack,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { 
  ArrowForward as ArrowIcon, 
  Launch as ExternalLinkIcon 
} from "@mui/icons-material";

interface ProjectData {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  isReversed?: boolean;
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "GuickCart: E-commerce Platform",
    subtitle: "Recent Project",
    description: "GuickCart is an ecommerce platform dedicated to providing high-quality products to customers seeking solutions",
    technologies: ["Node js", "React js", "Express js", "MongoDB", "Github"],
    imageUrl: "/project1.png",
    projectUrl: "https://e-coomerce-tx34-p13oc9xzk-islamazmy1995s-projects.vercel.app/",
    isReversed: false
  },
  {
    id: 2,
    title: "GuickCart",
    description: "Store App is a modern authentication system built using Next.js and styled with Tailwind CSS. It leverages Node.js, Express.js, and React.js to provide a seamless login experience, secure API integration, and a scalable structure for full-stack applications.",
    technologies: ["Node js", "React js", "Express js"],
    imageUrl: "/project2.png",
    projectUrl: "https://store-2-yn9a.vercel.app/",
    isReversed: true
  },
  {
    id: 3,
    title: "GuickCart | E-commerce Platform",
    description: "Shoes Store is a full-stack E-commerce application developed to provide a fast, smooth, and modern shopping experience. Built using Next.js, Tailwind CSS, React.js, Node.js, and Express.js, it includes features like product display, size filtering, cart management, and a seamless checkout flow. The project also uses localStorage and integrates WhatsApp ordering for real-time communication with customers.",
    technologies: ["Cookies", "Google APi", "Data collecting", "IP Address", "Location"],
    imageUrl: "/project3.png",
    projectUrl: "https://islam56.web.app/home",
    isReversed: false
  },
  {
    id: 4,
    title: "Travel UI",
    description: "Putuk Truno Camp Area is a visually captivating travel web application built with Next.js and Tailwind CSS. It provides users with an inspiring interface to explore nature-based destinations. Designed to enhance the travel planning experience, the app allows users to discover beautiful locations and plan their adventures all from one platform. The project showcases a clean layout, smooth animations, and responsive design, making it ideal for modern travelers.",
    technologies: ["Next.js 13"],
    imageUrl: "/project4.png",
    projectUrl: "https://travel-ui.vercel.app/",
    isReversed: true
  }
];

const ProjectCard: React.FC<{ project: ProjectData }> = ({ project }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : project.isReversed ? 'row-reverse' : 'row',
        mb: 4,
        backgroundColor: 'rgba(10, 25, 47, 0.85)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(100, 255, 218, 0.1)',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 30px rgba(100, 255, 218, 0.1)',
        }
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: isMobile ? '100%' : 400,
          height: isMobile ? 250 : 300,
          objectFit: 'cover',
        }}
        image={project.imageUrl}
        alt={project.title}
      />
      
      <CardContent
        sx={{
          flex: 1,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: project.isReversed && !isMobile ? 'right' : 'left'
        }}
      >
        {project.subtitle && (
          <Typography
            variant="body2"
            sx={{
              color: '#64ffda',
              fontFamily: 'monospace',
              mb: 1
            }}
          >
            {project.subtitle}
          </Typography>
        )}
        
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: '#ccd6f6',
            fontWeight: 'bold',
            mb: 2,
            '&:hover': {
              color: '#64ffda',
              cursor: 'pointer'
            }
          }}
        >
          <Link href={project.projectUrl} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
            {project.title}
          </Link>
        </Typography>
        
        <Box
          sx={{
            backgroundColor: 'rgba(17, 34, 64, 0.8)',
            p: 2,
            borderRadius: 1,
            mb: 2
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#8892b0',
              lineHeight: 1.6
            }}
          >
            {project.description}
          </Typography>
        </Box>
        
        <Stack
          direction="row"
          spacing={1}
          sx={{
            flexWrap: 'wrap',
            gap: 1,
            mb: 2,
            justifyContent: project.isReversed && !isMobile ? 'flex-end' : 'flex-start'
          }}
        >
          {project.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: 'transparent',
                color: '#8892b0',
                border: '1px solid rgba(100, 255, 218, 0.3)',
                fontSize: '0.75rem',
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                }
              }}
            />
          ))}
        </Stack>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: project.isReversed && !isMobile ? 'flex-end' : 'flex-start'
          }}
        >
          <IconButton
            component="a"
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#64ffda',
              '&:hover': {
                color: '#ffffff',
                transform: 'scale(1.1)'
              }
            }}
          >
            <ExternalLinkIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

const SomethingIveBuilt: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      id="SomethingIveBuiltSection"
      sx={{
        backgroundColor: '#0a192f',
        minHeight: '100vh',
        py: 8,
        px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 20 }
      }}
    >
      <Container maxWidth="xl">
        {/* Section Title */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 6,
            width: '100%'
          }}
        >
          <ArrowIcon
            sx={{
              color: '#64ffda',
              mr: 2,
              fontSize: { xs: 20, md: 24 }
            }}
          />
          <Typography
            variant="h6"
            component="span"
            sx={{
              color: '#64ffda',
              fontFamily: 'monospace',
              mr: 1
            }}
          >
            03.
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: '#ccd6f6',
              fontWeight: 'bold',
              mr: 4,
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Some Things I've Built
          </Typography>
          <Box
            sx={{
              flex: 1,
              height: '1px',
              backgroundColor: 'rgba(136, 146, 176, 0.4)',
              maxWidth: { xs: '100px', md: '300px' }
            }}
          />
        </Box>

        {/* Projects Grid */}
        <Box sx={{ mt: 4 }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SomethingIveBuilt;
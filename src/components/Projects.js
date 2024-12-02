import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  CssBaseline,
} from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Fuse from 'fuse.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import projectData from './assets/ProjectsData';


const fuseOptions = {
  includeScore: true,
  threshold: 0.3, // Balance between strict and lenient matching
  keys: ['title', 'Startdate', 'faculties.name', 'faculties.link'],
};
// eslint-disable-next-line
const fuse = new Fuse(projectData, fuseOptions);

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#F0E68C',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: '#F0E68C',
          },
          '& .MuiInputLabel-root': {
            color: '#b0b0b0',
          },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#b0b0b0',
          },
          '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: '#eadc5f',
          },
        },
      },
    },
  },
});

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectData);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); // Keep track of last scroll position
  const searchBarRef = useRef(null);

  const fuseOptions = {
    includeScore: true,
    threshold: 0.3,
    keys: ['title', 'Startdate', 'faculties.name', 'faculties.link'],
  };
  const fuse = new Fuse(projectData, fuseOptions);

  useEffect(() => {
    const filterProjects = () => {
      if (!searchTerm) {
        setFilteredProjects(projectData);
      } else {
        const results = fuse.search(searchTerm);
        const filtered = results.map((result) => result.item);
        setFilteredProjects(filtered);
      }
    };
    // eslint-disable-next-line
    filterProjects();
    // eslint-disable-next-line
  }, [searchTerm]);


  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowSearchBar(false);
    } else {
      setShowSearchBar(true);
    }

    setLastScrollY(currentScrollY);
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [lastScrollY]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });

    if (searchBarRef.current) {
      searchBarRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  const handleSearchChange = (event, value) => {
    setSearchTerm(value);
  };

  const handleMicClick = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setSearchTerm(speechResult);
    };

    recognition.onspeechend = () => {
      recognition.stop();
    };

    recognition.onerror = (event) => {
      console.error('Error occurred in recognition: ' + event.error);
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <section id="projects" className="projects-section">
        <Container>
          <Typography variant="h5" component="h2"  color="black" align="center" gutterBottom>
            Ongoing Projects in Department
          </Typography>

          <Autocomplete
            freeSolo
            options={projectData.map((project) => project.title)}
            onInputChange={handleSearchChange}
            sx={{
              position: 'fixed',
              top: showSearchBar ? '-80px' : '10px',
              transition: 'top 0.7s ease-in-out',
              width: '60%',
              backgroundColor: '0px 4px 12px rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(10px)',
              borderRadius: '10px',
              zIndex: 1000,
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '15px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
              '@media (max-width: 600px)': {
                width: '80%',
              
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                inputRef={searchBarRef}
                label="Search projects, dates, faculties..."
                variant="outlined"
                fullWidth
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleMicClick} aria-label="search by voice">
                        <MicIcon style={{ color: '#ffffff' }} />
                      </IconButton>
                      <IconButton aria-label="search">
                        <SearchIcon style={{ color: '#ffffff' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <Grid container spacing={4} style={{ marginTop: '100px' }}>
            {filteredProjects.map((project) => (
              <Grid item key={project.id} xs={12} sm={6} md={4} className="project-grid-item">
                <Card className="project-card" data-aos="fade-up" backgroundColor="0px 4px 12px rgba(0, 0, 0, 0.4)">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <strong>Date Start:</strong> {project.Startdate}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <strong>Faculties:</strong>
                      {project.faculties.map((faculty, i) => (
                        <span key={i}>
                          <a href={faculty.link} target="_blank" rel="noopener noreferrer" style={{ color: '#dbda74' }}>
                            {faculty.name}
                          </a>
                          {i < project.faculties.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </ThemeProvider>
  );
};

export default Projects;

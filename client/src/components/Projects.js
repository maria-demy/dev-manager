import React, { useState } from 'react';
import { Container, Paper, Button, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Dialog, DialogActions, DialogContent, TextField, DialogTitle } from '@material-ui/core';
import { AddBox as AddBoxIcon, Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project Alpha', description: 'This is a sample project.', status: 'Active', keyDates: '2024-01-01 to 2024-12-31' },
    { id: 2, name: 'Project Beta', description: 'Another example project.', status: 'Planning', keyDates: '2024-02-01 to 2024-08-31' }
  ]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleOpenDialog = (project) => {
    setCurrentProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddOrUpdateProject = () => {
    if (currentProject) {
      // Update existing project
      setProjects(projects.map(p => p.id === currentProject.id ? currentProject : p));
    } else {
      // Add new project
      const newProject = { id: projects.length + 1, name: 'New Project', description: 'Description', status: 'New', keyDates: 'Date Range' };
      setProjects([...projects, newProject]);
    }
    setOpenDialog(false);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <Container maxWidth="md">
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h4" gutterBottom>Projects</Typography>
        <Button
          startIcon={<AddBoxIcon />}
          color="primary"
          onClick={() => handleOpenDialog(null)}
        >
          Add Project
        </Button>
        <List>
          {projects.map(project => (
            <ListItem key={project.id}>
              <ListItemText
                primary={project.name}
                secondary={`Status: ${project.status} - ${project.keyDates}`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => handleOpenDialog(project)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteProject(project.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{currentProject ? 'Edit Project' : 'Add Project'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            fullWidth
            value={currentProject ? currentProject.name : ''}
            onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={currentProject ? currentProject.description : ''}
            onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddOrUpdateProject} color="primary">
            {currentProject ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Projects;


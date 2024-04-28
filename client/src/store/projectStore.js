import { makeAutoObservable } from 'mobx';

class ProjectStore {
  projects = [];

  constructor() {
    makeAutoObservable(this);
  }

  addProject(project) {
    this.projects.push(project);
  }
}

export default new ProjectStore();

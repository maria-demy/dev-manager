# Project Overview

## Name: DevManager

Objective: A web application that allows developers to manage their personal projects, tasks, timelines, and resources.

Key Features:

- User Authentication: Utilize AWS Cognito for managing user authentication.
- Project Dashboard: Create a dashboard where users can add and manage projects with features like start and end dates, associated technologies, and current status.
- Task Management: Allow users to add tasks to projects, mark them as completed, and categorize them (e.g., frontend, backend, database, etc.).
- Resource Allocation: Users can allocate resources like time and budget for each project and track expenditures.
- Notifications: Implement AWS SES for sending email notifications for task deadlines and project milestones.
- Data Visualization: Integrate charts for project timelines, budget utilization, and more.

Technologies:

- Frontend: React with Material-UI for the UI components and MobX for state management.
- Backend: Node.js with Express for RESTful API services; alternatively, you can use Spring Boot if you prefer Java.
- Database: MongoDB for flexible data storage, and PostgreSQL for structured data like user accounts and project details.
- Cloud: AWS EC2 for hosting the application, S3 for storing any uploaded documents or images, and Lambda for any serverless computing needs.
- Tools & Platforms: Docker for containerizing the application, Jenkins for continuous integration and deployment, and Git for version control.

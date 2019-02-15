Vacation Planner
================
This simple example shows how a multi-step wizard can be configured and controlled by the back-end.

The Vacation Planner allows the user to find their dream vacation. Three types of vacations are supported:

1. Active
2. Laid Back
3. Sophisticated

The back-end has a different planner for each of the above vacation types. Each planner is able to ask multiple questions in order to suggest a vacation idea. The questions are grouped in one or more steps of a wizard. You can find these planners under `vacation-planner-server/src/planners`.

The client is relatively dumb. It does whatever the back-end asks it to do. It consists of 3 pages:

1. Home page: Allows user to select a vacation type.
2. Questions page: Presents questions sent by the back-end and returns the user's answers.
3. Result page: Presents the vacation suggestion made by the back-end.

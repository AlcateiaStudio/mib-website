# Team Management Guide

## How to Add/Remove Team Members

The team members are managed through the `src/data/team.json` file. This file contains all team member information and can be easily edited by non-technical team members.

### File Location
```
src/data/team.json
```

### Adding a New Team Member

1. Open `src/data/team.json`
2. Add a new object to the `teamMembers` array:

```json
{
  "id": 6,
  "name": "New Member Name",
  "title": {
    "en": "English Title",
    "pt-BR": "Portuguese Title"
  },
  "image": "/assets/team/member-photo.jpg"
}
```

### Removing a Team Member

1. Open `src/data/team.json`
2. Find the team member object you want to remove
3. Delete the entire object (including the curly braces)
4. Make sure to remove any trailing commas

### Adding Team Member Photos

1. Save the photo as a `.jpg` or `.png` file
2. Place it in the `public/assets/team/` folder
3. Update the `image` field in the JSON file with the path: `/assets/team/filename.jpg`
4. If no image is provided (empty string), a colored avatar with the person's initial will be shown

### Features

- **Responsive Design**: Works on all screen sizes
- **Auto-scrolling**: If more than 6 team members, navigation arrows appear
- **Hover Effects**: Shows name and title when hovering over photos
- **Bilingual Support**: Supports both English and Portuguese titles
- **Fallback Avatars**: Shows initials if photo is missing

### Examples

**With Photo:**
```json
{
  "id": 1,
  "name": "Andress",
  "title": {
    "en": "Technical Director",
    "pt-BR": "Diretor Técnico"
  },
  "image": "/assets/team/andress.jpg"
}
```

**Without Photo (shows initial avatar):**
```json
{
  "id": 2,
  "name": "Maria",
  "title": {
    "en": "Creative Director",
    "pt-BR": "Diretora Criativa"
  },
  "image": ""
}
```

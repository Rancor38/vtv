#!/bin/bash

# Initialize git repository
git init

# Add the remote origin
git remote add origin git@github.com:Rancor38/vtv.git

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ShardTech celebration page with corporate styling

- Professional corporate design with Playfair Display + Inter fonts
- Blue gradient background with glassmorphism effects
- Responsive container layout
- Project Unity celebration page"

# Create main branch and push
git branch -M main
git push -u origin main

echo "✅ Repository initialized and pushed successfully!"

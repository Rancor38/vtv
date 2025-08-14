#!/bin/bash

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Update ShardTech page with corporate professional styling

- Added professional typography (Playfair Display + Inter fonts)
- Implemented corporate blue gradient background
- Added glassmorphism container design
- Refined color scheme for business presentation
- Improved layout with proper spacing and hierarchy"

# Push to the remote repository
git push origin main

echo "✅ Changes successfully pushed to repository!"

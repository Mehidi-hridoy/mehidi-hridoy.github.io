
# This file can contain Python scripts to generate portfolio data
# For now, it's a placeholder for any backend logic you might need

import json
from datetime import datetime

# Generate project statistics
project_stats = {
    "total_projects": 25,
    "completed_projects": 22,
    "active_projects": 3,
    "technologies": {
        "python": 20,
        "django": 18,
        "javascript": 12,
        "sql": 15,
        "powerbi": 8
    },
    "categories": {
        "crm": 5,
        "ecommerce": 4,
        "web_apps": 8,
        "analytics": 6,
        "job_portals": 2
    }
}

# Generate skill levels
skills_data = {
    "python": 95,
    "django": 92,
    "sql": 88,
    "powerbi": 85,
    "javascript": 80,
    "html_css": 85,
    "git": 90,
    "postgresql": 88,
    "redis": 75,
    "excel": 82
}

# Save to JSON for potential API use
with open('portfolio_data.json', 'w') as f:
    json.dump({
        "stats": project_stats,
        "skills": skills_data,
        "last_updated": datetime.now().isoformat()
    }, f, indent=2)

print("Portfolio data generated successfully!")


"""
git add .
git commit -m "Update portfolio"
git push origin main

"""
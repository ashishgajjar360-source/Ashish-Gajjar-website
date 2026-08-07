# How to publish posts from Obsidian

You can add, edit, or remove posts on your website directly by managing Markdown (`.md`) files in this folder (`src/content/posts/`) or syncing your Obsidian vault here.

---

## Post Template for Obsidian

Create a `.md` file (e.g. `my-new-project.md`) with frontmatter at the top:

```markdown
---
title: "My Creative Project"
category: "Typography" # "Graphic" | "Typography" | "Photography" | "Edits" or any custom category
image: "/Images/my-image.png" # Optional: Path to image in /Images or /public folder. Leave empty "" for styled placeholder
aspectRatio: "3/4" # Optional aspect ratio: "3/4", "4/3", "4/5", "1/1"
col: 1 # Optional column position (1, 2, or 3)
date: "2026-08-07"
description: "A short summary of the project."
---

Write your full project description or note here in Obsidian Markdown.
You can include multiple paragraphs, lists, and formatted text.
```

---

## How Images Work

1. **With Image**: Set `image: "/Images/your-file.png"` (place your image in the `Images/` or `public/` directory). The card will display your full uploaded image.
2. **Without Image (Placeholder)**: Leave `image: ""` empty. The card will automatically display a clean, unique placeholder card displaying your post title, category badge, and an "+ Upload Image" label.

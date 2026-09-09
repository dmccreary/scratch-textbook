# Scratch Programming for Kids

[![MkDocs](https://img.shields.io/badge/Made%20with-MkDocs-526CFE?logo=materialformkdocs)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/Material%20for%20MkDocs-526CFE?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/View%20on-GitHub%20Pages-blue?logo=github)](https://arunbatchu.github.io/scratch-textbook/)
[![Claude Code](https://img.shields.io/badge/Built%20with-Claude%20Code-DA7857?logo=anthropic)](https://claude.ai/code)
[![p5.js](https://img.shields.io/badge/p5.js-ED225D?logo=p5.js&logoColor=white)](https://p5js.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## View the Live Site

Visit the interactive textbook at: [arunbatchu.github.io/scratch-textbook](https://arunbatchu.github.io/scratch-textbook/)

## Overview

**Scratch Programming for Kids** is an interactive, AI-generated intelligent textbook that teaches visual programming to young learners ages 8–12 (grades 3–6) through games, stories, and creative projects. No prior coding experience is assumed — just curiosity, basic computer literacy, and a willingness to experiment.

The book follows the **Creative Computing framework** (*Imagine → Create → Play → Share → Reflect*) and spirals through core computational thinking concepts — sequencing, events, loops, conditionals, variables, and broadcasting — building toward a capstone game project. Built with MkDocs Material, it's organized around a 226-concept learning graph that sequences topics in proper prerequisite order, and features 14 interactive p5.js MicroSims that let readers explore ideas like the stage coordinate system, block shapes, and script flow hands-on rather than just reading about them.

A friendly mascot, **Scratch the Cat**, appears throughout the book to guide, encourage, and celebrate with readers as they learn. The content is aligned with CSTA K–12 Computer Science Standards, making it usable by parents, classroom teachers, and after-school coding clubs alike.

## Site Status and Metrics

| Metric | Count |
|--------|-------|
| Concepts in Learning Graph | 226 |
| Chapters | 11 |
| Markdown Files | 44 |
| Total Words | 61,207 |
| MicroSims | 14 |
| Glossary Terms | 226 |
| Equations | 4 |
| Images | 9 |

**Completion Status:** Core content, learning graph, glossary, and MicroSims are complete across all 11 chapters. Quizzes, FAQ, and chapter references are not yet generated.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/arunbatchu/scratch-textbook.git
cd scratch-textbook
```

### Install Dependencies

This project uses MkDocs with the Material theme:

```bash
pip install mkdocs mkdocs-material
```

### Build and Serve Locally

```bash
mkdocs serve
```

Then open your browser to `http://localhost:8000`.

### Deploy to GitHub Pages

```bash
mkdocs gh-deploy
```

This builds the site and pushes it to the `gh-pages` branch.

### Using the Book

**Navigation:**

- Use the left sidebar to browse chapters, the learning graph, and MicroSims
- Use the search icon to search all content
- Visit the [Glossary](./docs/glossary.md) for definitions of every concept

**Interactive MicroSims:**

- Found throughout chapters and listed under [MicroSims](./docs/sims/index.md)
- Each simulation runs standalone in the browser and is embeddable via iframe
- Adjust parameters with sliders and controls to explore concepts hands-on

## Repository Structure

```
scratch-textbook/
├── docs/                              # MkDocs documentation source
│   ├── chapters/                      # 11 chapters, each with its own folder
│   │   └── 01-welcome-to-scratch/
│   │       └── index.md              # Chapter content
│   ├── sims/                          # 14 interactive p5.js MicroSims
│   │   └── coordinate-explorer/
│   │       ├── main.html             # Standalone simulation
│   │       └── index.md              # Documentation
│   ├── learning-graph/                # Learning graph data and analysis
│   │   ├── learning-graph.csv        # Concept dependencies
│   │   ├── learning-graph.json       # vis-network format
│   │   ├── concept-list.md           # 226 enumerated concepts
│   │   └── quality-metrics.md        # Graph quality analysis
│   ├── img/mascot/                    # Scratch the Cat mascot (7 poses)
│   ├── glossary.md                    # 226 ISO 11179-compliant definitions
│   ├── about.md                       # Audience, prerequisites, learning style
│   ├── course-description.md          # Bloom's Taxonomy course description
│   └── license.md
├── plugins/                            # MkDocs hooks (social preview tags)
├── mkdocs.yml                          # MkDocs configuration
└── README.md                           # This file
```

## Reporting Issues

Found a bug, typo, or have a suggestion for improvement? Please report it:

[GitHub Issues](https://github.com/arunbatchu/scratch-textbook/issues)

When reporting issues, please include:

- Description of the problem or suggestion
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/environment details (for MicroSims)

## License

This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

**You are free to:**

- Share — copy and redistribute the material
- Adapt — remix, transform, and build upon the material

**Under the following terms:**

- **Attribution** — Give appropriate credit with a link to the original
- **NonCommercial** — No commercial use without permission
- **ShareAlike** — Distribute contributions under the same license

See [docs/license.md](./docs/license.md) for full details.

## Acknowledgements

This project is built on the shoulders of giants in the open source community:

- **[MkDocs](https://www.mkdocs.org/)** — Static site generator optimized for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** — Beautiful, responsive theme
- **[p5.js](https://p5js.org/)** — Creative coding library powering the interactive MicroSims
- **[Scratch](https://scratch.mit.edu/)** by the MIT Media Lab — the visual programming environment this book teaches
- **[Claude AI](https://claude.ai)** by Anthropic — AI-assisted content generation
- **[GitHub Pages](https://pages.github.com/)** — Free hosting for open source projects

## Contact

**Arun Batchu**

- LinkedIn: [linkedin.com/in/arunbatchu](https://www.linkedin.com/in/arunbatchu/)

Questions, suggestions, or collaboration opportunities? Feel free to connect on LinkedIn or open an issue on GitHub.

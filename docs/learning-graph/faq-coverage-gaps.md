---
title: FAQ Coverage Gaps
description: Learning-graph concepts not yet referenced by a FAQ answer, prioritized by centrality.
---

# FAQ Coverage Gaps

Concepts from the [learning graph](learning-graph.csv) not referenced by any answer in [the FAQ](../faq.md). "Centrality" is the number of other concepts in the graph that list this concept as a dependency — a rough measure of how foundational it is.

83 of 226 concepts (36.7%) are not currently tagged in the FAQ. Most are narrow, low-centrality details that are folded into a broader answer's prose without being pulled out as their own question.

## Critical Gaps (High Priority)

High-centrality concepts (5+ dependents) without dedicated FAQ coverage:

1. **Variable Creation**
   - Centrality: High (11 dependents)
   - Category: Core Concepts
   - Suggested Question: "What is Variable Creation and how do I make my first variable?"

2. **Forever Loop**
   - Centrality: High (8 dependents)
   - Category: Core Concepts
   - Suggested Question: "Why is the Forever Loop different from the Repeat Loop?"

3. **Sound Blocks**
   - Centrality: Medium-High (5 dependents)
   - Category: Technical Details
   - Suggested Question: "What can I do with the Sound Blocks besides playing a sound?"

4. **Storyboarding**
   - Centrality: Medium-High (5 dependents)
   - Category: Best Practices
   - Suggested Question: "How does Storyboarding help me plan a story-based project?"

## Medium Priority Gaps

Moderate-centrality concepts (2-4 dependents) without FAQ coverage:

| Concept | Centrality | Suggested Category |
|---|---|---|
| Algorithmic Thinking | 4 | Core Concepts |
| Plan Phase | 4 | Best Practices |
| Random Number | 4 | Technical Details |
| Boolean Logic | 3 | Core Concepts |
| Costumes Tab | 3 | Getting Started |
| Custom Block Definition | 3 | Best Practices |
| Imagine Phase | 3 | Best Practices |
| List Item Access | 3 | Technical Details |
| Project Page | 3 | Getting Started |
| Create Phase | 2 | Best Practices |
| Enemy Movement | 2 | Advanced Topics |
| List Length | 2 | Technical Details |
| Pick Random | 2 | Technical Details |
| Score Variable | 2 | Advanced Topics |

## Low Priority Gaps

Leaf nodes and narrow sub-concepts (0-1 dependents) without FAQ coverage — 65 concepts, mostly individual Pen sub-blocks, individual comparison/Boolean operators, individual backpack/list actions, and single extensions already summarized under a broader question:

Add To List, Asset List, Beat Synchronization, Change Tempo, Clear Graphics, Code Tab, Commenting, Community Feedback, Community Guidelines, Condition Controlled Loop, Conditional Branching, Credit Attribution, Debugging Strategies, Decision Making, Delete From List, Dice Roll, Drag And Drop, Drawing Trails, Equal Operator, Erase All, Error Detection, File Menu, Flowchart, Geometric Patterns, Greater Than Operator, Hide Variable, Infinite Loop Detection, Lip Sync Animation, List Block Category, List Contains, Lives Variable, Loop Termination, Makey Makey Extension, Micro Bit Extension, Motion Detection, My Blocks Category, Negative X, Negative Y, Pair Programming, Paste From Backpack, Pen Color, Pen Down, Pen Size, Pen Up, Physical Computing, Positive X, Positive Y, Project Description, Project Tags, Pseudocode, Rainbow Lines, Remix Tree, Remixing, Scene Planning, Show Variable, Snap Together, Sounds Tab, Step By Step Thinking, Storyboard, Talking Sprites, Timer Variable, Variables Block Category, Zoom Controls.

## Recommendations

1. Add questions for all 4 critical gaps above — each is genuinely foundational (Variable Creation and Forever Loop especially — 11 and 8 dependents respectively — are among the highest-centrality concepts in the entire 226-concept graph).
2. Consider adding questions for the 14 medium-priority gaps in a future FAQ revision, or fold them as secondary `concepts` tags into existing answers where they're already mentioned in passing (e.g. "Random Number" and "Pick Random" are closely related and could share one Technical Details answer).
3. The 65 low-priority gaps can be addressed in a future update; forcing a dedicated question for each would fragment the FAQ without adding much value, since most already appear inside a broader answer's explanatory text.

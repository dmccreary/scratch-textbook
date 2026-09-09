---
title: FAQ Quality Report
description: Quality metrics and recommendations for the generated FAQ.
---

# FAQ Quality Report

Generated: 2026-09-09

## Overall Statistics

- **Total Questions:** 97
- **Overall Quality Score:** 90/100
- **Content Completeness Score:** 100/100
- **Concept Coverage:** 63.3% (143/226 concepts)

## Category Breakdown

### Getting Started Questions
- Questions: 13
- Bloom's Mix: 8 Remember, 5 Understand
- Avg Word Count: 144

### Core Concepts Questions
- Questions: 28
- Bloom's Mix: 6 Remember, 11 Understand, 8 Apply, 3 Analyze
- Avg Word Count: 187

### Technical Details Questions
- Questions: 22
- Bloom's Mix: 7 Remember, 9 Understand, 4 Apply, 2 Analyze
- Avg Word Count: 156

### Common Challenges Questions
- Questions: 13
- Bloom's Mix: 1 Remember, 4 Understand, 5 Apply, 3 Analyze
- Avg Word Count: 215

### Best Practices Questions
- Questions: 13
- Bloom's Mix: 1 Understand, 5 Apply, 4 Analyze, 2 Evaluate, 1 Create
- Avg Word Count: 256

### Advanced Topics Questions
- Questions: 8
- Bloom's Mix: 1 Apply, 2 Analyze, 3 Evaluate, 2 Create
- Avg Word Count: 280

## Bloom's Taxonomy Distribution

Actual vs Target (across all 97 questions):

| Level | Actual | Target | Deviation |
|-------|--------|--------|-----------|
| Remember | 22.7% | 20% | +2.7% ✓ |
| Understand | 30.9% | 30% | +0.9% ✓ |
| Apply | 23.7% | 25% | -1.3% ✓ |
| Analyze | 14.4% | 15% | -0.6% ✓ |
| Evaluate | 5.2% | 7% | -1.8% ✓ |
| Create | 3.1% | 3% | +0.1% ✓ |

Total absolute deviation: 7.4% (within the 0-10% band)

Overall Bloom's Score: 25/25 (excellent distribution)

## Answer Quality Analysis

- **Examples:** 43/97 (44.3%) - Target: 40%+ ✓
- **Links:** 95/97 (97.9%) - Target: 60%+ ✓
- **Avg Length:** 195 words - Target: 100-300 ✓
- **Complete Answers:** 97/97 (100%) ✓

Answer Quality Score: 25/25

- Examples: 7/7 pts (44.3% ≥ 40%)
- Links: 7/7 pts (97.9% ≥ 60%)
- Length: 6/6 pts (195-word average sits inside the 100-300 band, and every individual answer falls inside its Bloom-level's expected range)
- Completeness: 5/5 pts (every answer fully addresses its question; none defer to "see chapter X" without also giving the answer)

## Concept Coverage

**Covered (143 of 226 concepts)** — spans all 6 categories, weighted toward the concepts each chapter actually teaches. Full list in the chatbot training file's `concepts` fields (`docs/learning-graph/faq-chatbot-training.json`).

**Not covered (83 concepts)** — see [FAQ Coverage Gaps](faq-coverage-gaps.md) for the full prioritized list. Most gaps are narrow, low-centrality leaf concepts (single Pen sub-blocks, individual comparison operators, single extensions) that are naturally folded into a broader answer's prose without being called out as a separate tagged concept.

Coverage Score: 20/30 (63.3% coverage — comfortably above the 60% minimum, short of the 70%+ band)

## Organization Quality

- Logical categorization: ✓ (all 97 questions sit in the category their content actually matches)
- Progressive difficulty: ✓ (Getting Started is Remember/Understand-only; Advanced Topics is Apply/Analyze/Evaluate/Create-only; the middle categories bridge the two)
- No duplicates: ✓ (one exact cross-category duplicate — "Why does Scratch color-code its block categories?" — was found during validation and replaced with a distinct question in Core Concepts before publishing)
- Clear questions: ✓ (every question is 5-15 words, ends in `?`, and uses glossary-consistent terminology)

Organization Score: 20/20

## Overall Quality Score: 90/100

- Coverage: 20/30
- Bloom's Distribution: 25/25
- Answer Quality: 25/25
- Organization: 20/20

## Recommendations

### High Priority

1. Add questions for these 4 high-centrality concepts that ended up with no dedicated FAQ coverage: **Variable Creation** (11 dependents), **Forever Loop** (8 dependents), **Sound Blocks** (5 dependents), **Storyboarding** (5 dependents). All four are discussed in chapter prose already but were never pulled out as a standalone FAQ answer.
2. Nudge Evaluate-level questions up slightly (currently 5.2% vs. 7% target) — an easy way is to add 1-2 more "which approach is best for X" questions to Best Practices or Advanced Topics.

### Medium Priority

1. Add FAQ coverage for the 14 medium-priority gaps in [FAQ Coverage Gaps](faq-coverage-gaps.md) (Algorithmic Thinking, Plan Phase, Random Number, Boolean Logic, Costumes Tab, Custom Block Definition, Imagine Phase, List Item Access, Project Page, Create Phase, Enemy Movement, List Length, Pick Random, Score Variable).
2. Consider tagging 2-3 more concepts per existing answer where a secondary concept is mentioned in passing but not currently tagged — this raises coverage without adding new questions.

### Low Priority

1. The 65 low-priority gaps (mostly single leaf concepts — individual Pen sub-blocks, individual comparison/Boolean operators, individual extensions) can be left for a future FAQ update; they are narrow enough that forcing a dedicated question would feel repetitive.
2. Re-run this quality report after a future content update to catch any new concepts introduced without matching FAQ coverage.

## Suggested Additional Questions

Based on the concept gaps above, consider adding for a future revision:

1. "What is Variable Creation and how do I make my first variable?" (Core Concepts)
2. "Why is the Forever Loop different from the Repeat Loop?" (Core Concepts)
3. "What can I do with the Sound Blocks besides playing a sound?" (Technical Details)
4. "How does Storyboarding help me plan a story-based project?" (Best Practices)
5. "What is Algorithmic Thinking and why does it matter before I start coding?" (Core Concepts)
6. "What happens during the Plan Phase of the design process?" (Best Practices)
7. "How does Pick Random generate a Random Number in Scratch?" (Technical Details)
8. "What's the difference between Boolean Logic and a single comparison operator?" (Core Concepts)
9. "How do I read an item out of a list with List Item Access?" (Technical Details)
10. "Why would I create a Custom Block Definition instead of copying blocks?" (Best Practices)

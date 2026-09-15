DESIGN.md
=========

Frontend Design & Engineering Constitution
==========================================

This document is the source of truth for frontend design, UX, implementation quality, and product polish.

The frontend must adapt to the actual product, users, business logic, backend, and existing codebase.

Do not blindly apply a predetermined visual style.

The goal is to produce a frontend that feels intentionally designed for the product—not generic AI-generated UI.

1\. CORE PRINCIPLE
==================

Build the simplest interface that makes the user's intended task obvious, fast, and pleasant.

Priorities, in order:

1.  Correct functionality
    
2.  User clarity
    
3.  Information hierarchy
    
4.  Consistency
    
5.  Accessibility
    
6.  Responsiveness
    
7.  Performance
    
8.  Visual polish
    
9.  Animation and delight
    

Never sacrifice usability for visual novelty.

Never add UI merely because it "looks cool."

Every visual or interactive element should have a purpose.

2\. FIRST RULE: UNDERSTAND THE CODEBASE
=======================================

Before making significant frontend changes, inspect the existing project.

Understand:

*   product purpose
    
*   target users
    
*   primary workflows
    
*   frontend framework
    
*   backend framework
    
*   routing
    
*   APIs
    
*   authentication
    
*   authorization
    
*   database/data models relevant to UI
    
*   existing components
    
*   existing design system
    
*   styling approach
    
*   state management
    
*   data fetching
    
*   forms and validation
    
*   dependencies
    
*   project conventions
    
*   existing responsive behavior
    

Trace important flows where useful:

UI → API → backend → database

Do not invent functionality that already exists.

Do not replace working architecture simply because another approach is more fashionable.

Preserve good existing patterns.

Improve bad patterns only when there is a meaningful benefit.

3\. PRODUCT-FIRST DESIGN
========================

The UI must be derived from what the product actually does.

For every important screen ask:

*   Who is using this?
    
*   What are they trying to accomplish?
    
*   What information do they need?
    
*   What action should they take?
    
*   What is the primary action?
    
*   What can be secondary?
    
*   What can be removed?
    
*   What happens if something goes wrong?
    

The interface should make the most important user decision obvious.

Do not optimize screenshots.

Optimize the actual user journey.

4\. INFORMATION HIERARCHY
=========================

Every page should have a clear hierarchy.

Generally:

1.  Context
    
2.  Primary objective
    
3.  Primary information
    
4.  Primary action
    
5.  Supporting information
    
6.  Secondary actions
    
7.  Advanced/rare functionality
    

Do not give every element equal visual weight.

Use:

*   size
    
*   typography
    
*   spacing
    
*   position
    
*   contrast
    
*   grouping
    

to communicate importance.

A user should understand the page structure within seconds.

5\. VISUAL DESIGN PHILOSOPHY
============================

Default toward:

*   clean
    
*   intentional
    
*   modern
    
*   restrained
    
*   highly readable
    
*   visually balanced
    
*   product-specific
    
*   professional
    

However, adapt the aesthetic to the product.

A developer tool may be dense and technical.

A consumer application may be expressive.

A financial product may emphasize trust and clarity.

A creative application may be more visually experimental.

Do not force every product into the same aesthetic.

6\. AVOID GENERIC AI UI
=======================

Do NOT automatically use:

*   purple/blue AI gradients
    
*   excessive glassmorphism
    
*   glowing borders
    
*   huge hero sections
    
*   excessive rounded cards
    
*   excessive shadows
    
*   card grids for everything
    
*   unnecessary badges
    
*   excessive icons
    
*   decorative blobs
    
*   random illustrations
    
*   excessive animation
    
*   oversized typography
    
*   gradients without functional purpose
    
*   "AI-looking" visual effects
    

These patterns are not forbidden.

They simply require a genuine product/design reason.

Use restraint.

7\. DESIGN SYSTEM
=================

Create a coherent design language.

The exact values must adapt to the project.

Define and consistently use:

Typography
----------

Establish:

*   display hierarchy
    
*   page titles
    
*   section titles
    
*   body text
    
*   labels
    
*   captions
    
*   metadata
    
*   code/monospace text where appropriate
    

Prioritize readability over novelty.

Avoid using too many font sizes or weights.

Spacing
-------

Use a consistent spacing scale.

Do not manually choose arbitrary margins and padding throughout the application.

Related elements should be visually grouped.

Unrelated elements should have enough separation.

Spacing should communicate hierarchy.

Color
-----

Use a deliberate semantic color system.

Colors should communicate meaning where appropriate:

*   primary
    
*   secondary
    
*   success
    
*   warning
    
*   error
    
*   informational
    
*   neutral
    
*   disabled
    

Do not introduce arbitrary colors per component.

Ensure sufficient contrast.

Do not rely on color alone to communicate important information.

Borders and Radius
------------------

Use a consistent radius language.

Do not make every element heavily rounded.

Use borders when they improve grouping, separation, or affordance.

Do not add borders everywhere by default.

Shadows
-------

Use shadows primarily to communicate elevation or separation.

Avoid excessive shadow usage.

Flat interfaces are often preferable to layers of floating cards.

8\. COMPONENTS
==============

Build reusable components when reuse is real.

Examples:

*   buttons
    
*   inputs
    
*   selects
    
*   dialogs
    
*   dropdowns
    
*   navigation
    
*   tabs
    
*   tables
    
*   cards
    
*   alerts
    
*   tooltips
    
*   badges
    
*   pagination
    
*   forms
    
*   loading states
    
*   empty states
    

Components should have:

*   predictable behavior
    
*   consistent visual treatment
    
*   accessible semantics
    
*   sensible variants
    
*   clear states
    

Do not create abstractions simply to reduce the number of lines in a file.

Prefer meaningful reuse over theoretical reuse.

9\. PAGE DESIGN
===============

Every page should answer:

### Where am I?

Provide sufficient context.

### What can I do?

Make actions obvious.

### What matters?

Prioritize information.

### What happened?

Provide appropriate feedback.

### What should I do next?

Avoid dead ends.

10\. NAVIGATION
===============

Navigation should be:

*   predictable
    
*   consistent
    
*   discoverable
    
*   responsive
    
*   accessible
    

Use familiar patterns unless the product genuinely requires something different.

Do not hide important functionality behind clever interactions.

Avoid unnecessary navigation depth.

On mobile, navigation should be redesigned appropriately rather than simply compressed.

11\. FORMS
==========

Forms should minimize cognitive load.

Prefer:

*   clear labels
    
*   sensible defaults
    
*   logical grouping
    
*   inline validation where useful
    
*   understandable error messages
    
*   appropriate input types
    
*   clear required/optional indicators
    
*   disabled states during submission
    
*   success feedback
    

Do not make users remember information unnecessarily.

Do not clear user-entered data after recoverable errors.

Validate both client-side and server-side where appropriate.

12\. UI STATES
==============

Never design only the happy path.

Important interfaces must consider:

*   initial state
    
*   loading
    
*   skeleton/loading placeholders where useful
    
*   success
    
*   empty
    
*   error
    
*   validation error
    
*   disabled
    
*   submitting
    
*   unauthorized
    
*   forbidden
    
*   expired session
    
*   network failure
    
*   partial data
    
*   unexpected data
    
*   destructive confirmation
    

Every state should tell the user what is happening and, when possible, what to do next.

13\. EMPTY STATES
=================

Empty states should not merely say:

"No data."

Explain:

1.  What is empty?
    
2.  Why might it be empty?
    
3.  What can the user do next?
    

Where appropriate provide a clear CTA.

14\. ERROR HANDLING
===================

Errors must be useful.

Avoid technical messages such as:

"Something went wrong."

when more useful information can safely be provided.

A good error should communicate:

*   what happened
    
*   whether the user's action succeeded
    
*   whether data was affected
    
*   what the user can do next
    

Do not expose sensitive backend details.

Do not blame the user.

15\. LOADING
============

Loading states should communicate progress without making the interface feel broken.

Use:

*   skeletons
    
*   spinners
    
*   progress indicators
    
*   optimistic updates
    

when appropriate.

Do not use spinners for every tiny interaction.

Avoid unnecessary layout shifts.

Preserve already-visible content when possible.

16\. FEEDBACK
=============

Every meaningful user action should produce appropriate feedback.

Examples:

*   button state changes
    
*   inline confirmation
    
*   toast
    
*   status indicator
    
*   optimistic update
    
*   progress indicator
    

Do not overuse notifications.

Avoid interrupting the user unnecessarily.

17\. RESPONSIVE DESIGN
======================

Responsive design is not:

"Make desktop smaller."

Design intentionally for:

*   mobile
    
*   tablet
    
*   laptop
    
*   desktop
    
*   large displays
    

Consider:

*   navigation
    
*   content density
    
*   tables
    
*   forms
    
*   dialogs
    
*   menus
    
*   typography
    
*   touch targets
    
*   horizontal scrolling
    
*   keyboard interaction
    

On small screens, prioritize content instead of attempting to preserve every desktop element.

18\. ACCESSIBILITY
==================

Accessibility is a requirement, not an optional enhancement.

Use:

*   semantic HTML
    
*   proper labels
    
*   keyboard navigation
    
*   visible focus states
    
*   logical tab order
    
*   accessible dialogs
    
*   appropriate ARIA only when necessary
    
*   sufficient contrast
    
*   meaningful button labels
    
*   descriptive form errors
    
*   reduced-motion support where appropriate
    

Do not make interactive elements inaccessible merely for visual design.

19\. ANIMATION
==============

Animation should communicate something.

Good uses:

*   transitions
    
*   state changes
    
*   navigation
    
*   feedback
    
*   spatial relationships
    
*   progressive disclosure
    

Avoid:

*   animation everywhere
    
*   slow transitions
    
*   distracting effects
    
*   animations that delay interaction
    
*   purely decorative motion
    

Respect reduced-motion preferences.

Default toward subtle, fast interactions.

20\. PERFORMANCE
================

Frontend performance is part of UX.

Prioritize:

*   fast initial rendering
    
*   appropriate code splitting
    
*   efficient data fetching
    
*   caching where appropriate
    
*   avoiding unnecessary rerenders
    
*   optimized images/assets
    
*   avoiding unnecessary dependencies
    
*   minimizing client-side JavaScript when appropriate
    

Do not prematurely optimize.

Measure or identify actual bottlenecks when possible.

21\. BACKEND INTEGRATION
========================

The frontend must respect the real backend.

Use:

*   existing API contracts
    
*   existing authentication
    
*   existing authorization
    
*   existing validation rules
    
*   existing error semantics
    

Do not duplicate backend business logic unnecessarily.

Do not trust client-side authorization as a security boundary.

Handle:

*   authentication failures
    
*   authorization failures
    
*   expired sessions
    
*   network failures
    
*   malformed responses
    
*   slow requests
    
*   partial failures
    

22\. SECURITY
=============

Never expose sensitive information unnecessarily.

Never place secrets in client-side code.

Never assume hidden UI equals authorization.

The backend remains the source of truth for permissions.

Avoid leaking:

*   internal errors
    
*   stack traces
    
*   secrets
    
*   tokens
    
*   sensitive identifiers
    
*   unnecessary backend implementation details
    

23\. DATA-DENSE INTERFACES
==========================

For dashboards, admin panels, developer tools, analytics, finance, operations, etc.:

Prioritize information density without sacrificing readability.

Use:

*   strong column hierarchy
    
*   sensible alignment
    
*   sorting
    
*   filtering
    
*   search
    
*   pagination/virtualization where appropriate
    
*   sticky headers where useful
    
*   responsive strategies
    

Do not turn every data point into a card.

Tables are often better than card grids for structured data.

24\. MOBILE DATA-DENSE INTERFACES
=================================

Do not blindly squeeze desktop tables onto mobile.

Consider:

*   priority columns
    
*   expandable rows
    
*   horizontal scrolling
    
*   alternate mobile layouts
    
*   progressive disclosure
    

Choose the strategy that best preserves the user's task.

25\. MICROCOPY
==============

Text is part of the interface.

Prefer:

*   concise
    
*   clear
    
*   specific
    
*   human language
    

Avoid unnecessary jargon.

Button labels should describe the action.

Prefer:

"Create project"

over:

"Continue"

when the action is known.

26\. ICONS
==========

Icons should support comprehension, not decorate every empty space.

Use recognizable icons.

Do not use icons when text would be clearer.

Icon-only buttons require accessible labels and should be used when the meaning is genuinely obvious.

27\. MODALS AND DIALOGS
=======================

Use dialogs for focused decisions or actions.

Do not use dialogs for everything.

Avoid placing long workflows inside modals when a dedicated page would provide better usability.

Destructive actions should be clear and appropriately confirmed.

28\. SEARCH, FILTERS, AND SORTING
=================================

When users work with significant amounts of data, provide appropriate discovery tools.

Consider:

*   search
    
*   filters
    
*   sorting
    
*   saved filters
    
*   pagination
    
*   recent items
    

Do not add filtering complexity unless the dataset/workflow warrants it.

29\. AI FEATURES
================

If the product itself contains AI functionality:

Make AI behavior understandable.

Clearly communicate:

*   what the AI is doing
    
*   what input it is using where relevant
    
*   whether output is generated or deterministic
    
*   loading/generation state
    
*   failure state
    
*   uncertainty when relevant
    
*   ability to retry
    
*   ability to edit/correct output
    

Do not create fake intelligence through unnecessary animations.

30\. UX PRINCIPLE: PROGRESSIVE DISCLOSURE
=========================================

Show users what they need now.

Reveal advanced functionality when necessary.

Avoid overwhelming users with every available option.

But do not hide important functionality merely to make the interface look minimal.

Minimalism should reduce cognitive load—not functionality.

31\. ENGINEERING PRINCIPLES
===========================

Prefer:

*   simple architecture
    
*   readable code
    
*   predictable data flow
    
*   explicit behavior
    
*   small meaningful components
    
*   strong typing where supported
    
*   existing project conventions
    

Avoid:

*   premature abstraction
    
*   unnecessary design patterns
    
*   unnecessary dependencies
    
*   massive components
    
*   deeply coupled UI
    
*   duplicated business logic
    
*   magic behavior
    
*   clever code that is difficult to maintain
    

32\. DON'T REBUILD FOR THE SAKE OF REBUILDING
=============================================

If the existing frontend is functional:

Improve it incrementally unless there is a compelling reason for a rewrite.

If an existing component is good:

Reuse it.

If an existing library solves the problem:

Use it.

If a new library provides only cosmetic benefit:

Do not add it.

33\. VISUAL CONSISTENCY
=======================

A user should feel like every screen belongs to the same product.

Maintain consistency in:

*   typography
    
*   spacing
    
*   colors
    
*   component behavior
    
*   interaction patterns
    
*   navigation
    
*   terminology
    
*   feedback
    

Do not optimize individual screens independently.

Optimize the whole product.

34\. DESIGN FOR REAL USERS
==========================

Before finalizing a feature, ask:

*   Can a first-time user understand it?
    
*   Can an experienced user use it quickly?
    
*   What happens when there is no data?
    
*   What happens when data is wrong?
    
*   What happens when the network fails?
    
*   What happens on mobile?
    
*   What happens with long text?
    
*   What happens with many items?
    
*   What happens with zero items?
    
*   What happens with permissions?
    
*   What happens when the user makes a mistake?
    

If the answer is unclear, the feature is not finished.

35\. VISUAL QUALITY BAR
=======================

Before considering the UI finished, inspect:

*   alignment
    
*   spacing
    
*   typography
    
*   hierarchy
    
*   contrast
    
*   consistency
    
*   component states
    
*   responsiveness
    
*   empty states
    
*   loading states
    
*   errors
    
*   accessibility
    

Fix obvious rough edges.

Do not stop when the page merely "works."

36\. IMPLEMENTATION WORKFLOW
============================

For significant frontend work, follow this sequence:

STEP 1 — UNDERSTAND
-------------------

Inspect the codebase and understand the product.

Do not immediately start coding.

STEP 2 — DESIGN
---------------

Determine:

*   user workflow
    
*   information architecture
    
*   screen structure
    
*   component requirements
    
*   visual direction
    
*   edge states
    

STEP 3 — IMPLEMENT
------------------

Build incrementally using the existing architecture.

STEP 4 — CRITIQUE
-----------------

Critically review the result.

Look for:

*   UX problems
    
*   visual problems
    
*   accessibility problems
    
*   responsive problems
    
*   engineering problems
    

STEP 5 — POLISH
---------------

Fix the highest-impact problems.

STEP 6 — VERIFY
---------------

Verify:

*   build
    
*   functionality
    
*   API integration
    
*   responsiveness
    
*   accessibility
    
*   error handling
    
*   important workflows
    

Do not declare the frontend finished merely because compilation succeeds.

37\. PRIORITIZATION
===================

When deciding what to fix, prioritize:

### P0

Broken functionality, security problems, severe usability problems.

### P1

Major workflow, accessibility, responsive, or UX problems.

### P2

Meaningful usability or visual improvements.

### P3

Minor polish and cosmetic improvements.

Always fix P0/P1 before spending time on P3 polish.

38\. AI AGENT BEHAVIOR
======================

When an AI coding agent works on this repository:

1.  Read this file first.
    
2.  Inspect the actual codebase.
    
3.  Adapt these principles to the project.
    
4.  Do not blindly follow assumptions.
    
5.  Preserve existing good architecture.
    
6.  Do not invent APIs.
    
7.  Do not modify backend behavior unnecessarily.
    
8.  Do not introduce dependencies without justification.
    
9.  Do not over-engineer.
    
10.  Consider edge states.
    
11.  Consider accessibility.
    
12.  Consider responsive behavior.
    
13.  Review the result critically.
    
14.  Fix obvious problems before stopping.
    

If this document conflicts with the actual product requirements, product requirements win.

If this document conflicts with an existing technical constraint, respect the technical constraint and choose the best practical solution.

39\. FINAL QUALITY CHECK
========================

Before declaring frontend work complete, ask:

### Product

*   Does this solve the intended user problem?
    

### UX

*   Is the workflow obvious?
    
*   Is the primary action clear?
    
*   Are there unnecessary steps?
    

### UI

*   Is hierarchy clear?
    
*   Is spacing consistent?
    
*   Is the visual language coherent?
    

### States

*   Loading?
    
*   Empty?
    
*   Error?
    
*   Success?
    
*   Disabled?
    
*   Unauthorized?
    
*   Network failure?
    

### Responsive

*   Mobile?
    
*   Tablet?
    
*   Desktop?
    

### Accessibility

*   Keyboard?
    
*   Focus?
    
*   Labels?
    
*   Contrast?
    
*   Semantic structure?
    

### Engineering

*   Maintainable?
    
*   Reusable where appropriate?
    
*   No unnecessary dependencies?
    
*   Correct API integration?
    
*   No duplicated business logic?
    

### Performance

*   Any obvious unnecessary work?
    
*   Any avoidable layout shifts?
    
*   Any unnecessarily heavy assets?
    

### Final question

Would a strong product team be comfortable shipping this?

If not, identify why and fix it.

40\. THE NORTH STAR
===================

The best frontend is not the one with the most features, animations, components, or visual effects.

It is the one where users instinctively understand:

**Where am I?What matters?What can I do?What just happened?What should I do next?**

Build toward that.
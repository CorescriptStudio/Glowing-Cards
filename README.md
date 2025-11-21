## ✨ Interactive Glowing Card UI

A lightweight 🪶, responsive showcase of advanced frontend motion & lighting effects without external dependencies ⚡.

## 📖 Overview

This project is a high-fidelity implementation of a modern user interface concept featuring glowing glassmorphism cards. Built entirely with vanilla HTML, CSS, and JavaScript, it demonstrates high-performance rendering techniques including HTML5 Canvas particle systems and complex 3D CSS transformations.

The standout feature is the Split-Screen Tilt Mechanic: a unique interaction model where the user's cursor position dictates which card becomes "active" and responsive to 3D movement, creating a tactile, immersive experience.

## 🚀 Key Features

### 🎨 Visuals & Design

Glassmorphism Aesthetics: Utilizes semi-transparent backgrounds, subtle borders, and blurred backdrops to create depth.

Dynamic Lighting: Implements CSS variable-based glowing shadows that intensify on interaction.

Dual Themes: Comes with two distinct color variants (Red 🔴 and Green 🟢) with matching ambient light gradients.

### 🌌 Motion & Animation

Canvas Particle System: A custom-written JavaScript engine renders floating "dust" or "star" particles in the card headers. Each particle has randomized opacity, speed, and trajectory.

Smooth Transitions: All hover states and transformations are interpolated for 60FPS performance.

### 🖱️ Advanced Interaction

Custom Cursor: A custom-rendered ring cursor with a trailing effect and mix-blend-mode for visibility against dark backgrounds.

Split-Screen 3D Tilt:

Left Zone: Moving the mouse on the left half of the viewport activates the Red Card, applying a 3D tilt perspective based on cursor coordinates.

Right Zone: Moving the mouse on the right half activates the Green Card.

Auto-Reset: Inactive cards smoothly return to their resting isometric position.

## 🛠️ Technical Stack

HTML5: Semantic markup structure.

CSS3: Flexbox layout, CSS Variables (:root), 3D Transforms (perspective, rotateX, rotateY).

JavaScript (ES6+): Object-Oriented Programming (Classes) for the particle system and event-driven logic for the cursor interactions.

No external frameworks or libraries (jQuery, React, Bootstrap) were used.

## 📦 Installation & Usage

Since this project is a Single-File Solution, installation is instant.

Download the index.html, style.css and script.js files.

Open the file in any modern web browser (Chrome, Firefox, Safari, Edge).

Enjoy the animation!

# HackerGO

HackerGO aims to turn the real world into an ongoing hackathon. Inspired by location-based games like Pokémon GO, the idea is for players to discover hacking challenges out in the physical world. Each task represents a mini penetration-test scenario and can appear at businesses or at community placed hacking caches. 

The goal of the project is to give new and experienced hackers alike constant, hands-on practice while also helping organisations understand the security of their real infrastructure.

## Vision

- **Turn the world into a hackathon** – challenges appear as you explore different areas.
- **Gain experience with real scenarios** – tasks mimic real vulnerabilities or devices.
- **Provide constant penetration testing** – local businesses can partner with HackerGO to host tasks and get feedback.
- **Lower the entry barrier to cybersecurity** – anyone can pick up tasks in their area to learn and improve.

The `ArtBoards` folder contains early mock ups of the mobile application.

## Current MVP

This repository includes a basic web demo. It does not yet implement any geo-location or challenge tracking but provides the foundation for a future location-based game. The MVP simply serves the static pages in `Web-app demo` so designs can be viewed in a browser.

### Running the MVP

1. Install Node.js (version 20 or later).
2. From the repository root, run:

   ```bash
   node server.js
   ```

3. Open `http://localhost:3000` in your browser to view the prototype pages.

The server is intentionally lightweight. It serves the static web mock ups so the design can be explored. Future work will add GPS lookups, challenge presentation and a backend for tracking user progress.


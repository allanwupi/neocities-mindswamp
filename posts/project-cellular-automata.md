---
pageTitle: Cellular Automata
tags: projects
date: git Last Modified
---

I think [cellular automata](https://en.wikipedia.org/wiki/Cellular_automaton) (CAs) are neat. From simple rules you can get really complex behaviour, Turing-completeness, and somewhat realistic models of physical phenomena.

Other than [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), some notable CAs are:
- [Langton's ant](https://en.wikipedia.org/wiki/Langton's_ant)
- [Rule 30 (pseudorandom number generation)](https://en.wikipedia.org/wiki/Rule_30)
- [Rule 110 (Turing-complete)](https://en.wikipedia.org/wiki/Rule_110)
- [Wireworld (used to simulate logic circuits)](https://mathworld.wolfram.com/WireWorld.html)

## [*Think Complexity*](https://allendowney.github.io/ThinkComplexity/index.html)
This book has a lot of interesting simulations for complex systems, with Python programs using *numpy* and cross-correlation kernels. I am interested in implementing these 2D discrete models, mostly related to CAs.
- [Percolation cellular automaton](https://en.wikipedia.org/wiki/Percolation_theory)
- [Drossel-Schwabl forest-fire model](https://en.wikipedia.org/wiki/Forest-fire_model)
- [Abelian sand pile model](https://en.wikipedia.org/wiki/Abelian_sandpile_model)
- [Sugarscape (agent-based model)](https://en.wikipedia.org/wiki/Sugarscape)
    - This last one isn't actually a cellular automaton, but it looks cool.

### Lattice Gas Automata
Recently I read about [lattice-gas cellular automata](https://en.wikipedia.org/wiki/Lattice_gas_automaton), an early model for simulating fluid flows. I have spent the past couple days making a visualiser in Python: [https://github.com/allanwupi/lattice-gas-automata](https://github.com/allanwupi/lattice-gas-automata). The results are very pretty!

Example of HPP lattice gas model with reflective walls:

<div class="yt-container">
<iframe src="https://www.youtube.com/embed/wII1XyQXPU8?si=8vL3teig2m7yoHCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Forest Fire Simulation
Source code for T-Display S3: [https://github.com/allanwupi/ttgo-cellular](https://github.com/allanwupi/ttgo-cellular)

Note that the video has been sped up 32 times (the simulation is quite intensive due to many random calls). 

<div class="yt-container">
<iframe src="https://www.youtube.com/embed/_hVeG83Q72k?si=8-k9L6qwAuRaDhFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

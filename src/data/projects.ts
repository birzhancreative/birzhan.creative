export interface Project {
  slug: string;
  title: string;
  category: string;
  cover: string;
  fallbackCover?: string;
  description?: string;
  challenge?: string;
  solution?: string;
  tools?: string;
  year?: string;
}

export const projects: Project[] = [
  {
    slug: 'domino',
    title: 'Domino',
    category: 'Visual Identity',
    cover: '/domino/preview.jpg',
    fallbackCover: '/domino/1.jpg',
    description: 'Modernize the visual identity for Domino Outlet, a real-world business located in Warsaw. The goal was to refresh the brand\'s image to feel more contemporary and professional while maintaining its established market presence.',
    challenge: 'Modernize the visual identity for Domino Outlet, a real-world business located in Warsaw. The goal was to refresh the brand\'s image to feel more contemporary and professional while maintaining its established market presence.',
    solution: 'I executed a comprehensive rebranding that included a new, streamlined logo and a consistent stationery system. To drive customer engagement, I designed a promotional flyer featuring a creative scratch-off sticker. This "lottery" element was designed to create a sense of excitement and gamification, encouraging customers to interact with the physical print material to reveal discounts.',
    tools: 'Adobe Illustrator, Adobe Photoshop',
    year: '2026'
  },
  {
    slug: 'idesign',
    title: 'iDesign',
    category: 'Web Design',
    cover: '/idesign/preview.jpg',
    fallbackCover: '/idesign/1.jpg',
    challenge: 'To create a cohesive visual identity for a design event that resonates with creative professionals and students. The branding needed to feel modern and interactive.',
    solution: 'I developed a concept-driven logo where the letter "I" is replaced by a stylized Pen Tool icon, symbolizing the precision and craft of graphic design. This visual anchor connects the brand to the software and skills used by the attendees. To support the event experience, I designed a streamlined ticketing system and a clear, functional venue map, ensuring a seamless user journey from registration to navigation.',
    tools: 'Adobe Illustrator, Adobe Photoshop',
  },
  {
    slug: 'bs',
    title: 'Birzhan Shaimardan (bs)',
    category: 'Branding',
    cover: '/bs/preview.jpg',
    fallbackCover: '/bs/10.jpg',
    challenge: 'To create a personal brand identity that encapsulates my specific design philosophy and professional aesthetic.',
    solution: 'To represent my design philosophy of "less is more," I created a minimalist identity centered around my name and a custom-designed "S" monogram on the "b" letter. By stripping away unnecessary elements, the focus remains on clean lines and balanced proportions, reflecting my approach to functional and elegant design.',
    tools: 'Adobe Illustrator',
  },
  {
    slug: 'watchmaker',
    title: 'Watchmaker',
    category: 'Product Presentation',
    cover: '/watchmaker/preview.jpg',
    fallbackCover: '/watchmaker/1.jpg',
    challenge: 'To design a sophisticated and timeless brand identity for a watchmaking professional. The goal was to create a logo that communicates precision, reliability, and the meticulous nature of the craft.',
    solution: 'I developed a clean, balanced typographic logo that emphasizes legibility and professional authority. By focusing on a structured layout, the identity mirrors the internal mechanics of a timepiece—organized and exact. The design extends into a minimalist business card system, utilizing white space to create a "premium" feel.',
    tools: 'Adobe Illustrator, Adobe Photoshop',
  },
  {
    slug: 'pictogram',
    title: 'Pictogram Series',
    category: 'Iconography',
    cover: '/pictogram/preview.jpg',
    fallbackCover: '/pictogram/1.jpg',
    challenge: 'To design a universal warning symbol that communicates the danger of heat exhaustion and sun exposure without the need for text. The icon had to be instantly recognizable across different cultures and languages.',
    solution: 'I created a high-contrast vector icon within a classic triangular warning frame. By simplifying the human figure, the sun, and the heat waves into bold, flat shapes, I ensured the symbol remains legible even at small scales or from a distance. The design prioritizes immediate "readability," making it a functional tool for safety signage in industrial or outdoor environments.',
    tools: 'Adobe Illustrator',
  },
  {
    slug: 'fence mockup',
    title: 'Plastic Pollution Fence Design',
    category: 'Mockup Design',
    cover: '/fence mockup/preview.jpg',
    fallbackCover: '/fence mockup/1.jpg',
    challenge: 'To design an impactful educational brochure that raises awareness about the devastating effects of plastic pollution in our oceans. The goal was to take complex environmental data and present it in a visually engaging way that motivates the reader to take action.',
    solution: 'I utilized a clean, grid-based layout to organize dense information into digestible sections, ensuring a high level of readability. The design uses a powerful color palette and compelling imagery to create an emotional connection with the subject matter. By balancing bold typography, I created a professional and urgent tone that aligns with the global importance of the issue.',
    tools: 'Adobe Illustrator, Adobe Photoshop',
  },
  {
    slug: 'air astana',
    title: 'Air Astana',
    category: 'Branding & Design',
    cover: '/air astana/preview.jpg',
    fallbackCover: '/air astana/1.jpg',
    description: 'To ensure the layout does not look like a typical travel agency poster, a strict modular grid in the style of premium airlines was applied.',
    challenge: 'To ensure the layout does not look like a typical travel agency poster, a strict modular grid in the style of premium airlines was applied.',
    solution: 'I moved away from standard stock solutions toward premium corporate minimalism. The visual is based on a single, continuous line mimicking an airplane’s contrail. This line flawlessly traces the traditional Kazakh ornament "Oyu Kyzgaldak" (tulip) before transitioning into the silhouette of a taking-off aircraft. This serves as a metaphor for how the airline carefully carries the country\'s cultural code on its wings. The design utilizes negative space and the brand\'s signature colors.',
    tools: 'Adobe Illustrator, Adobe Photoshop, Figma',
    year: '2026'
  },
  {
    slug: 'campaign',
    title: 'Social Campaign',
    category: 'Branding',
    cover: '/campaign/preview.jpg',
    fallbackCover: '/campaign/1.jpg',
    challenge: 'To create a visually compelling social campaign that quickly captures attention and communicates a strong core message to a wide digital audience.',
    solution: 'Developed a series of high-impact visuals optimized for various social media platforms. The design relies on bold typography and vibrant color contrasts to instantly engage viewers, ensuring the campaign\'s message is memorable and easily shareable.',
    tools: 'Adobe Photoshop, Figma',
  },
  {
    slug: 'arial',
    title: 'Arial Typography',
    category: 'Typography',
    cover: '/arial/preview.jpg',
    fallbackCover: '/arial/1.jpg',
    challenge: 'To explore and elevate the classic Arial typeface through experimental layouts and modern typographic composition.',
    solution: 'Created a series of posters that push the boundaries of traditional grid systems. By manipulating scale, weight, and negative space, the project transforms a ubiquitous font into a striking visual centerpiece.',
    tools: 'Adobe InDesign, Adobe Illustrator',
  },
  {
    slug: 'glorious model o',
    title: 'Glorious Model O',
    category: 'Product Rendering',
    cover: '/glorious model o/preview.jpg',
    fallbackCover: '/glorious model o/1.jpg',
    description: 'It’s super light – my hand doesn’t get tired. RGB lights are really cool. It moves smoothly on the mousepad. Good grip and fast reaction time.',
    challenge: 'It’s super light – my hand doesn’t get tired. RGB lights are really cool. It moves smoothly on the mousepad. Good grip and fast reaction time.',
    solution: 'Utilized advanced 3D lighting techniques to accentuate the matte texture and RGB elements of the product. The final compositions focus on sleek, dynamic angles that appeal directly to the enthusiast gaming market.',
    tools: 'Blender, Adobe Photoshop',
    year: '2025'
  },
  {
    slug: 'nomad',
    title: 'Nomad',
    category: 'Editorial Design',
    cover: '/nomad/preview.jpg',
    fallbackCover: '/nomad/1.jpg',
    challenge: 'To design a disruptive identity for a new generation of budget-conscious, high-energy travelers. The goal was to move away from traditional "luxury travel" aesthetics and create something that resonates with those who prioritize "feeling alive" and cultural immersion over comfort.',
    solution: 'I developed a high-impact visual system that balances spontaneity with reliability. The centerpiece of the identity is the custom-designed "X" in the wordmark, which doubles as a minimalist silhouette of a plane. This subtle visual metaphor symbolizes the brand\'s core mission: constant movement and the crossing of borders.',
    tools: 'Adobe Illustrator, Adobe Photoshop',
  },
  {
    slug: 'passport',
    title: 'Passport',
    category: 'Concept Design',
    cover: '/passport/preview.jpg',
    fallbackCover: '/passport/1.jpg',
    challenge: 'To conceptualize a modern redesign of a national passport, integrating advanced security features with elegant cultural motifs.',
    solution: 'Designed a minimalist, highly structured layout that improves legibility for border control while incorporating beautiful, intricate watermarks reflecting national heritage. The result is a secure yet aesthetically pleasing travel document.',
    tools: 'Adobe Illustrator, Adobe InDesign',
  },
  {
    slug: 'book',
    title: 'Children Book',
    category: 'Print Design',
    cover: '/book/preview.jpg',
    fallbackCover: '/book/1.jpg',
    challenge: 'To design and illustrate a children\'s book that captures the imagination of young readers while maintaining a clear, readable typographic structure for parents.',
    solution: 'Combined vibrant, playful illustrations with a clean, highly legible serif typeface. The page layouts were carefully balanced to ensure the artwork and text complement each other without overwhelming the reader.',
    tools: 'Adobe Illustrator, Adobe InDesign',
  },
  {
    slug: 'water cycle',
    title: 'Water Cycle',
    category: 'Motion Graphics',
    cover: '/water cycle/preview.jpg',
    fallbackCover: '/water cycle/1.jpg',
    description: 'Educational motion design for social medias',
    challenge: 'Educational motion design for social medias',
    solution: 'Developed a smooth, continuous animation using flat vector graphics and fluid transitions. Color coding and clear iconography were used to guide the viewer\'s eye naturally through the stages of evaporation, condensation, and precipitation.',
    tools: 'Adobe After Effects, Adobe Illustrator',
    year: '2025'
  },
  {
    slug: 'plane animation',
    title: 'Plane Animation',
    category: '3D Animation',
    cover: '/plane animation/preview.png',
    fallbackCover: '/plane animation/1.jpg',
    challenge: 'To create a smooth, stylized 3D animation demonstrating mechanical motion and environmental interaction.',
    solution: 'Modeled and rigged a low-poly airplane, focusing on fluid camera movements and vibrant, stylized lighting to create a playful yet professional motion piece.',
    tools: 'Cinema 4D, Adobe Premiere Pro',
  }
];

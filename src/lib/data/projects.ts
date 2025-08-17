const placeholderImg =
    'https://placehold.co/600x200/3f3f46/fff/png/?text=Not+Found';

export const projects = [
  {
    name: "Portfolio",
    img: placeholderImg,
    desc: "Simple portfolio website built with SvelteKit framework and Flowbite-Svelte UI library.",
    tools: ["SvelteKit", "TailwindCSS", "Flowbite-Svelte", "Vercel"],
    links: [
      { 
        label: "Website",
        url: "https://shemm-dev.vercel.app",
      },
      {
        label: "Source",
        url: "https://github.com/sheeemboi/portfolio"
      }
    ]
  },
  {
    name: "TYMN",
    img: placeholderImg,
    desc: "A collaborative project, TYMN is a facial recognition-based student attendance checker. Contributed mainly in the frontend development role.",
    tools: ["Python", "CTKinter", "Pillow", "SQLite"],
    links: [
      {
        label: "Source",
        url: "https://github.com/cjlangreo/tymn-attendance-checker"
      }
    ]
  }
]
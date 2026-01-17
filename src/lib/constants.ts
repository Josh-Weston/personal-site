export const siteConfig = {
    name: "Josh Weston",
    title: "Josh Weston",
    description: "Personal website of Josh Weston - Builder, Developer, Creator",

    social: {
        linkedin: {
            url: "https://linkedin.com/in/joshweston/",
            label: "LinkedIn",
        },
        github: {
            url: "https://github.com/josh-weston",
            label: "GitHub",
        },
    },

    projects: [
        {
            name: "Noodlr.ai",
            description: "A no-install web application for building and running AI models directly in your browser",
            url: "https://noodlr.ai/",
            highlight: true,
            lineHeight: "tight",
            underlineOffset: "-2px", // Custom underline position
        },
        {
            name: "Trigger.js",
            description: "A data-oriented state management library developed for React and TypeScript",
            url: "https://trigger.joshweston.ca/",
            highlight: false,
            lineHeight: "normal",
            underlineOffset: "-8px", // Default position
        },
        {
            name: "HookScript",
            description: "A domain-specific programming language designed to make data more accessible and easier to share",
            url: "https://www.hookscript.datahook.ca/tour/welcome/",
            highlight: false,
            lineHeight: "normal",
            underlineOffset: "-8px", // Default position
        },
    ],
};

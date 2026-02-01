import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowState, }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => `════════════════════════════════════════════════════════════════════════════════
                       Motivated full-stack developer with hands-on experience building scalable web applications 
                       Strong problem-solver with a solid understanding of system design, clean architecture, 
                       and user-centric development. Passionate about delivering reliable digital solutions 
                       and continuously improving technical skills.
                       ════════════════════════════════════════════════════════════════════════════════`
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `════════════════════════════════════════════════════════════════════════════════
                       Frontend: React, Bootstrap, Tailwindcss, Scss, HTML/CSS
                       Backend: Node.js, Express, Python, Java, Django, PHP
                       Databases: MongoDB, MySQL
                       Tools: Git, Docker, Vite
                       Cloud: AWS
                       ════════════════════════════════════════════════════════════════════════════════`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `════════════════════════════════════════════════════════════════════════════════
                       1. Portfolio Website - React + Vite
                       2. Udhyog Unity - MERN Stack
                       3. PokeDex Fun - ReactJS
                       4. Smart To-Do-List app - PHP
                       5. Real Estate App - MERN
                       ════════════════════════════════════════════════════════════════════════════════`
        },
        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `════════════════════════════════════════════════════════════════════════════════
                       Full Stack Developer Intern @ Rishabh Software (2026 - Present)
                       - Built scalable APIs with Node.js
                       - Designed responsive UIs with React
                       ════════════════════════════════════════════════════════════════════════════════`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `════════════════════════════════════════════════════════════════════════════════
                       Email: meetsc04@gmail.com
                       Phone: +91 9173481350
                       Location: Vadodara, Gujarat, India
                       ════════════════════════════════════════════════════════════════════════════════`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/Meet-1010', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `════════════════════════════════════════════════════════════════════════════════
                       LinkedIn: https://www.linkedin.com/in/meet-chauhan-5574a4264/
                       Portfolio: meetchauhan.dev
                       ════════════════════════════════════════════════════════════════════════════════`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to Meet Portfolio CLI!     ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'MeetChauhan:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli
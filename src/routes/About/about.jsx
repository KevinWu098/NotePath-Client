const About = () => {
    return (
        <div>
            <h1 style={{ marginBottom: "1rem" }}>About</h1>
            <p>
                NotePath aims to help users keep track of their{" "}
                <span style={{ color: "#E7A41E", fontWeight: "450" }}>
                    notes,
                </span>{" "}
                ideas, and more!
            </p>
            <p>
                This site is a Vite + React web app built with NodeJS, Express,
                & MongoDB as a backend. The source code can be found here on my
                Github:{" "}
                <a
                    href="https://github.com/kevinwu098"
                    target="_blank"
                    rel="noreferrer"
                >
                    Source Code
                </a>
            </p>
        </div>
    );
};

export default About;

import Link from "next/link";

const Project = () => {
  return (
    <section>
      <div className="">
        <h2>Projects</h2>
        <div className="project-item">
          <div className="project-content">
            <div>
              <h3
                style={{
                  fontFamily: "monospace",
                  fontSize: "1rem",
                  color: "#1e90ff",
                }}
              >
                Featured Project
              </h3>
              <p
                style={{
                  fontFamily: "helvetica",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: "#75b1ec",
                }}
              >
                Loopfoods
              </p>
            </div>

            <div className="project-desc">
              <p
                style={{
                  fontFamily: "SourceSansProLight",
                  fontSize: "1rem",
                  color: "#d6d8da",
                }}
              >
                A cloud kitchen SaaS that incorporate inventory management,
                sales management, online ordering and delivery management
                .dsdsdsdasda sdasdasdasdasda sdasdasda sdasdasdasdasdasd
              </p>
            </div>
            <p>React NestJS Prisma PostgreSQL</p>
            <div style={{ display: "block", position: "static" }}>
              <Link href="https://loopfoods.app/" target="_blank">
                <img className="icon" src="./external-link.svg"></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

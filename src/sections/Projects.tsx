import Card, { CardContent, CardImage, CardTitle } from "../components/Card";
import Container from "../components/Container";
import PixelDecor from "../components/PixelDecor.module.css";
import PixelCode from "../components/PixelCode";
import Section from "../components/Section";
import TextLink from "../components/TextLink";
import WriteIn from "../components/WriteIn";
import styles from "./Projects.module.css";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  color: string;
  initial: string;
  rotate: "left" | "right";
};

const PROJECTS: Project[] = [
  {
    title: "KANCA",
    description:
      "AI learning platform delivering personalized interactive stories for children, generating curriculum aligned content with LLM plus RAG based on each learner’s preferences.",
    tags: ["Flutter", "FastAPI", "LangChain"],
    live: "https://kanca.id",
    color: "var(--bavarian-blue-400)",
    initial: "KC",
    rotate: "left",
  },
  {
    title: "GoVision",
    description:
      "Assistive AI system for visually impaired users, combining scene understanding, obstacle detection, and voice assistance to improve navigation, awareness, and independent mobility.",
    tags: ["Python", "gRPC", "GCP"],
    live: "https://govision.framer.website",
    color: "var(--bavarian-gold-400)",
    initial: "GV",
    rotate: "right",
  },
  {
    title: "Garuda Hacks",
    description:
      "Cross platform hackathon management platform streamlining attendance, check in, and event operations through automated QR systems and real time synchronization.",
    tags: ["Flutter", "Redis", "Express"],
    live: "https://apps.apple.com/id/app/garuda-hacks-6-0/id6504819018",
    color: "var(--bavarian-red-400)",
    initial: "GH",
    rotate: "left",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <div className={[PixelDecor.decor, PixelDecor.projectsDecor].join(" ")}>
        <PixelCode />
      </div>
      <Container>
        <div className={styles.header}>
          <h2 className={[styles.kicker, "t-headline-20"].join(" ")}>
            Projects
          </h2>
          <WriteIn className={[styles.title, "t-headline-48"].join(" ")}>
            Selected <strong>work</strong>.
          </WriteIn>
        </div>
        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <Card key={p.title}>
              <CardImage rotate={p.rotate} color={p.color} label={p.initial} />
              <CardContent>
                <CardTitle>{p.title}</CardTitle>
                <p className={[styles.description, "t-body-20"].join(" ")}>
                  {p.description}
                </p>
                <ul className={styles.tags}>
                  {p.tags.map((t) => (
                    <li key={t} className={styles.tag}>
                      {t}
                    </li>
                  ))}
                </ul>
                {(p.github || p.live) && (
                  <div className={styles.links}>
                    {p.github && (
                      <TextLink href={p.github} target="_blank" rel="noreferrer">
                        GitHub
                      </TextLink>
                    )}
                    {p.live && (
                      <TextLink href={p.live} target="_blank" rel="noreferrer">
                        Live
                      </TextLink>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

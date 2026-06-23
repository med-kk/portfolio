import { Code2, Wrench, Award } from "lucide-react"

const skillCards = [
  {
    icon: Code2,
    title: "Technologies",
    items: ["C / C++", "C#", "Python", "Next.js", "React","TypeScript", "JavaScript", "HTML / CSS"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["VS Code", "Git / GitHub", "Unity", "OpenCV", "LateX", "Figma"],
  },
  {
    icon: Award,
    title: "Certification",
    items: [
      "TOEIC L&R Test 835点",
      "実用英語技能検定2級",
      "基本情報技術者試験",
      "色彩検定2級",
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24"
      style={{ backgroundColor: "var(--section-alt-bg)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-1">Skills</h2>
          <p className="text-sm text-muted-foreground">私のスキルについて</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {skillCards.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="bg-card rounded-2xl border border-border p-7 flex flex-col gap-5 hover:shadow-md transition-shadow"
            >
              {/* Icon circle */}
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="size-7 text-primary" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-3">
                  {title}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="size-1.5 rounded-full bg-primary/50 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

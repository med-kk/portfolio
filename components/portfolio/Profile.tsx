import { 
  Music, 
  Guitar, 
  Piano, 
  Gamepad2, 
  Film, 
  Trophy, 
  Volleyball,
  Terminal,
  Glasses,
  Layers,
  Cpu,
  Heart
} from "lucide-react"

//(Interests)
const academicInterests = [
  { label: "Information Engineering", icon: Terminal },
  { label: "Virtual Reality (VR)", icon: Glasses },
  { label: "UI/UX Design", icon: Layers },
  { label: "Human-Computer Interaction (HCI)", icon: Cpu },
  { label: "Kansei Engineering / Affective Computing", icon: Heart },
]

// (Hobbies)
const hobbies = [
  { label: "Music Listening & Creation", icon: Music },
  { label: "Guitar", icon: Guitar },
  { label: "Keyboard", icon: Piano },
  { label: "Games", icon: Gamepad2 },
  { label: "Anime / Manga", icon: Film },
  { label: "Baseball", icon: Trophy },
  { label: "Volleyball", icon: Volleyball },
]

export default function Profile() {
  return (
    <section id="profile" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-1">Profile</h2>
          <p className="text-sm text-muted-foreground">私について</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: avatar + name */}
          <div className="flex flex-col items-center gap-6">
          {/* Avatar Image */}
          <img
          src="/profile.jpeg"
          alt="Maeda Koki"
          className="size-44 rounded-2xl object-cover border border-border bg-secondary"
          />
            <div className="text-center">
              <p className="text-xl font-semibold text-foreground">Maeda Koki</p>
              <p className="text-sm text-muted-foreground mt-0.5">前田 航輝</p>
            </div>

            {/* Bio */}
            <p className="text-sm text-muted-foreground leading-relaxed text-center md:text-left">
              山口大学知能情報工学科3年．本校には大分工業高等専門学校情報工学科から編入した．高専ではバレーボール部で部長を務め，ボーカルとしてバンド活動も行っていた．情報工学分野では，VRやUI/UXデザイン，人とコンピュータの関わりに興味を持っている．現在は語学学習に加え，Next.jsやTypeScriptを用いたフロントエンド開発や、Git・GitHubを用いた開発フローの学習に取り組んでいる．
            </p>
          </div>

          {/* Right: Interests & Hobbies (上下2段構造) */}
          <div className="flex flex-col gap-8">
            {/* 上段: Interests */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {academicInterests.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-border"
                  >
                    <Icon className="size-3.5 text-primary" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* 下段: Hobbies */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-border"
                  >
                    <Icon className="size-3.5 text-primary" aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
import { Mail, Link } from "lucide-react"

const socialLinks = [
  { icon: Link, label: "GitHub", href: "https://github.com/your-username" }, 
  { icon: Mail, label: "Email", href: "mailto:your@email.com" },             
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-8 scroll-mt-10"
    style={{ backgroundColor: "var(--hero-bg)" }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <span className="text-sm font-medium text-foreground">Contact</span>
          
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={label === "GitHub" ? "_blank" : undefined}
                rel={label === "GitHub" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-accent transition-all"
              >
                <Icon className="size-3.5" aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground md:text-right">
          © {new Date().getFullYear()} Maeda Koki. 
        </p>

      </div>
    </footer>
  )
}
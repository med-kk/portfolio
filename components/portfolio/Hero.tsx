export default function Hero() {
  return (
    <section
      className="pt-14 min-h-[52vh] flex items-center justify-center"
      style={{ backgroundColor: "var(--hero-bg)" }}
    >
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold text-foreground mb-5 text-balance tracking-tight">
          Portfolio
        </h1>
        <p className="text-muted-foreground leading-relaxed text-base max-w-md mx-auto text-pretty">
          ここは前田航輝のポートフォリオです．<br className="hidden md:inline" />私がどんな人物なのか知ってもらうために，<br className="hidden md:inline" />プロフィール，スキル，制作物をまとめました．
        </p>
      </div>
    </section>
  )
}

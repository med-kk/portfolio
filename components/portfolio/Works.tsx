import { Monitor, Globe, Gamepad2, Camera } from "lucide-react"

const works = [
  {
    icon: Monitor,
    technologies: ["Unity", "C#", "VR",],
    title: "VRを用いた自然空間における幻想的要素の影響と心理的効果の検証",
    description:
      "高専での卒業研究として，Unityを用いて複数のVR自然空間を設計し，幻想的な演出が利用者の心理状態に与える影響を調査した．発光する植物や光粒子，浮遊する岩などの要素を段階的に導入した空間を制作し，VR体験前後の主観評価を通してリラックス度や感情状態の変化を分析した．",
    iconColor: "text-indigo-400",
    imageSrc: "low-fantasy.png",
  },
  {
    icon: Globe,
    technologies: ["HTML/CSS",],  
    title: 'チンアナゴまとめサイト「チンアナゴ～！」',
    description:
      "高専2年次の授業で初めて制作したWebサイト．自身の熱意ある関心をテーマに，チンアナゴの生態や飼育方法，メディアでの活躍といった多彩なコンテンツをまとめたサイトを構築した．CSS Gridを用いたレイアウト設計や、丸ゴシックフォントの選定など，テーマの可愛らしさに合わせたUXデザインを意識して制作した．",
    iconColor: "text-teal-400",
    imageSrc: "/chin-web-site.png",
  },
  {
    icon: Gamepad2,
    technologies: ["Unity", "C#","2D Game"],
    title: "2Dアクションゲーム「チンアナゴ叩き」",
    description:
      "高専2年次にUnityとC#で制作した2Dゲーム．頭部のみの当たり判定や被弾後の無敵時間など，シンプルながらも集中力を要するゲームシステムを設計した．自作イラストのはみ出し防止処理（スプライトマスク）や，Animatorによるハンマーの挙動制御など，Unityの基本機能を活用して実装した．",
    iconColor: "text-violet-400",
    imageSrc: "/chin-game.png",
  },
  {
    icon: Camera,
    technologies: ["C++", "OpenCV", "Visual SLAM"],
    title: "複数カメラを用いたVisual SLAMによる3Dマッピングシステム",
    description:
      "高専4年次に2台のカメラ映像から自己位置推定と3次元環境地図を同時生成するVisual SLAMシステムを開発した．カメラキャリブレーションによる画像補正や，環境の照明変化に耐えるための画像前処理（ガウシアンブラー等によるノイズ低減）の設計をチームで分担し，リアルタイムなマッピングの安定化に向けた検証を行った．",
    iconColor: "text-cyan-400",
    imageSrc: "", 
  },
]

export default function Works() {
  return (
    <section id="works" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-1">Works</h2>
          <p className="text-sm text-muted-foreground">私の制作物について</p>
        </div>

        <div className="flex flex-col gap-10">
          {works.map(({ icon: Icon, technologies, title, description, iconColor, imageSrc }) => (
            <article
              key={title}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image Section：imageSrc がある場合のみ表示 */}
              {imageSrc && (
                <img
                src={imageSrc}
                alt={title}
                className="w-full aspect-video
                object-cover"
                />
                )}

              {/* Content */}
              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-3">
                    {technologies.map((tech) => (<span key={tech}      className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{tech}
                    </span>
                    ))}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-3 leading-snug text-pretty">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

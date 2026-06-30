import type { ReactNode } from "react";

const services = [
  {
    icon: "洗",
    title: "基础洗护",
    text: "温水冲洗、低敏香波、吹干梳顺、耳道外侧清洁和脚底毛整理。",
    tone: "bg-sky",
  },
  {
    icon: "剪",
    title: "造型修剪",
    text: "按品种、季节和主人习惯设计造型，保留舒适活动空间。",
    tone: "bg-[#ffe3da]",
  },
  {
    icon: "养",
    title: "皮毛养护",
    text: "针对干燥、打结、换毛期进行深层滋养、开结和护毛处理。",
    tone: "bg-[#fff0c9]",
  },
  {
    icon: "爪",
    title: "爪爪护理",
    text: "修甲、磨甲、脚底清洁、肉垫护理，减少打滑和抓挠风险。",
    tone: "bg-sky",
  },
  {
    icon: "猫",
    title: "猫咪专护",
    text: "低刺激流程、安静包间、短时段预约，优先降低应激反应。",
    tone: "bg-[#ffe3da]",
  },
  {
    icon: "牙",
    title: "口腔清洁",
    text: "基础洁牙、口腔观察和护理建议，帮助建立日常洁牙习惯。",
    tone: "bg-[#fff0c9]",
  },
  {
    icon: "净",
    title: "除味净护",
    text: "适合外出玩耍后快速清洁，重点处理脚掌、腹部和尾部异味。",
    tone: "bg-sky",
  },
  {
    icon: "记",
    title: "护理记录",
    text: "记录毛结、皮肤、耳朵和指甲情况，便于主人持续观察。",
    tone: "bg-[#ffe3da]",
  },
];

const features = [
  ["进店先做状态检查", "确认皮肤、毛结、耳朵、指甲和情绪状态，护理前先沟通。"],
  ["用品独立清洁", "浴巾、梳子、剪刀、吹水台按宠物更换清洁，减少交叉污染。"],
  ["低应激护理节奏", "不强制赶时间，敏感宠物可拆分护理步骤，必要时建议改约。"],
  ["完成后给主人反馈", "说明本次护理发现、下次建议时间和居家梳毛重点。"],
];

const prices = [
  {
    tag: "日常清洁",
    title: "基础洗护",
    text: "适合每月固定清洁和轻度换毛期护理。",
    price: "￥88",
    featured: false,
    items: ["温和香波清洁", "吹干梳顺", "修甲与耳周清洁", "脚底毛基础整理"],
    action: "预约基础洗护",
  },
  {
    tag: "推荐套餐",
    title: "精致洗护造型",
    text: "适合需要修剪、造型和更细致皮毛护理的宠物。",
    price: "￥168",
    featured: true,
    items: ["基础洗护全套", "局部或全身造型", "护毛素护理", "护理记录反馈"],
    action: "预约精致套餐",
  },
  {
    tag: "猫咪友好",
    title: "猫咪低应激护理",
    text: "安静时段预约，适合猫咪清洁、梳毛和轻修。",
    price: "￥128",
    featured: false,
    items: ["独立猫咪护理间", "短流程低刺激操作", "浮毛梳理", "基础健康观察"],
    action: "预约猫咪护理",
  },
];

const steps = [
  ["预约时段", "填写宠物类型、体型、毛量和护理需求，预留合适时间。"],
  ["入店检查", "护理师查看皮肤、耳朵、毛结和情绪，确认当天方案。"],
  ["洗护造型", "按方案完成清洁、吹干、梳理、修剪和专项护理。"],
  ["交付反馈", "说明护理结果、注意事项和下次建议护理周期。"],
];

const gallery = [
  {
    src: "/assets/environment-reception.jpg",
    title: "前台接待区",
    text: "明亮前台、自然木色和清爽动线，进店第一眼更干净安心。",
    alt: "宠物洗护门店前台接待区实景参考",
  },
  {
    src: "/assets/environment-care.jpg",
    title: "等候休息区",
    text: "舒适座位、柔和照明和安静分区，让等待也更放松。",
    alt: "宠物洗护门店等候休息区实景参考",
  },
  {
    src: "/assets/environment-wash.jpg",
    title: "产品陈列区",
    text: "用品陈列清晰、空间通透，方便主人挑选护理所需。",
    alt: "宠物洗护门店产品陈列与护理动线实景参考",
  },
];

const navItems = [
  ["#services", "服务"],
  ["#care", "护理标准"],
  ["#prices", "套餐"],
  ["#gallery", "环境"],
  ["#booking", "预约"],
];

const cardClass =
  "rounded-lg border border-line bg-white shadow-card";

const buttonClass =
  "inline-flex min-h-11 items-center justify-center rounded-lg bg-mint px-5 font-bold text-white shadow-[0_12px_24px_rgba(60,165,139,.22)] transition hover:bg-mint-dark";

const secondaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-line bg-white px-5 font-bold text-ink transition hover:border-mint hover:text-mint-dark";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper font-sans text-ink">
      <header className="sticky top-0 z-20 flex items-center justify-between gap-6 border-b border-line/90 bg-paper/90 px-4 py-3 backdrop-blur md:px-14">
        <a className="flex items-center gap-2.5 whitespace-nowrap font-extrabold" href="#">
          <span className="grid size-9 place-items-center rounded-full bg-mint text-lg text-white shadow-[0_10px_22px_rgba(60,165,139,.25)]">
            爪
          </span>
          <span className="max-w-40 truncate sm:max-w-none">泡泡爪宠物洗护店</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-[#40505e] lg:flex" aria-label="主导航">
          {navItems.map(([href, label]) => (
            <a className="py-2 transition hover:text-mint-dark" href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className={`${buttonClass} px-3 text-sm sm:px-5 sm:text-base`} href="#booking">
          立即预约
        </a>
      </header>

      <section
        className="relative grid min-h-[690px] items-end overflow-hidden bg-cover bg-[58%_center] md:min-h-[calc(100vh-68px)] md:bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(22,35,44,.78) 0%, rgba(22,35,44,.52) 42%, rgba(22,35,44,.18) 100%), url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="mx-auto w-[min(1180px,calc(100%-32px))] pb-7 pt-20 text-white md:pb-11">
          <div className="max-w-[680px]">
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-[#ffe2a3]">
              社区宠物洗护 / 猫犬分区 / 透明可视
            </p>
            <h1 className="mb-5 text-[clamp(42px,7vw,86px)] font-black leading-[1.02]">
              泡泡爪宠物洗护店
            </h1>
            <p className="mb-7 max-w-[610px] text-[clamp(17px,2.1vw,22px)] text-white/90">
              为猫咪和狗狗提供温和洗护、造型修剪、皮毛养护与基础健康观察。每一位小客人都有专属浴巾、独立消毒工具和可追踪护理记录。
            </p>
            <div className="mb-10 flex flex-wrap gap-3">
              <a className={buttonClass} href="#prices">
                查看套餐
              </a>
              <a className={secondaryButtonClass} href="#care">
                了解护理标准
              </a>
            </div>
          </div>

          <div className="grid max-w-[830px] overflow-hidden rounded-lg border border-white/25 bg-white/20 sm:grid-cols-3">
            {[
              ["45-120 分钟", "按体型与毛量安排护理时长"],
              ["一宠一消毒", "梳剪工具、浴巾、台面独立清洁"],
              ["猫犬分区", "减少等待焦虑，降低交叉干扰"],
            ].map(([value, label]) => (
              <div className="bg-white/10 p-4 backdrop-blur" key={value}>
                <strong className="block text-2xl leading-tight">{value}</strong>
                <span className="text-sm text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-16 md:px-14 md:py-20">
        <div className="mx-auto w-[min(1180px,100%)]">
          <SectionHead
            title="常用洗护服务"
            text="从日常清洁到换季护理，项目按宠物状态组合，不强推不必要服务。"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article className={`${cardClass} min-h-56 p-5`} key={service.title}>
                <div className={`mb-5 grid size-12 place-items-center rounded-lg ${service.tone} text-lg font-black text-ink`}>
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-extrabold">{service.title}</h3>
                <p className="text-muted">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="care" className="px-4 py-16 md:px-14 md:py-20">
        <div className="mx-auto grid w-[min(1180px,100%)] items-center gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <div className="grid gap-3 sm:grid-cols-2" aria-label="洗护场景照片">
            <div className="min-h-64 overflow-hidden rounded-lg shadow-soft sm:row-span-2 sm:min-h-[520px]">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85"
                alt="两只干净的狗狗在户外"
              />
            </div>
            <div className="min-h-64 overflow-hidden rounded-lg shadow-soft">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=85"
                alt="洗护后的狗狗"
              />
            </div>
            <div className="min-h-64 overflow-hidden rounded-lg shadow-soft">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=85"
                alt="安静的猫咪"
              />
            </div>
          </div>

          <div>
            <SectionHead title="洗得干净，也要洗得安心" />
            <div className="grid gap-3">
              {features.map(([title, text], index) => (
                <div className="grid grid-cols-[34px_1fr] items-start gap-3 border-b border-line pb-3" key={title}>
                  <b className="grid size-[34px] place-items-center rounded-full bg-[#dff4ec] text-mint-dark">
                    {index + 1}
                  </b>
                  <div>
                    <h3 className="mb-1 text-lg font-extrabold">{title}</h3>
                    <p className="text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="bg-[#e9f4ef] px-4 py-16 md:px-14 md:py-20">
        <div className="mx-auto w-[min(1180px,100%)]">
          <SectionHead
            title="套餐价格"
            text="价格会受体型、毛量、打结程度影响。以下为常规参考，到店检查后确认。"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {prices.map((plan) => (
              <article
                className={`${cardClass} flex min-h-[410px] flex-col p-6 ${
                  plan.featured ? "border-coral/50 shadow-[0_20px_44px_rgba(240,120,97,.18)]" : ""
                }`}
                key={plan.title}
              >
                <span className="mb-5 self-start rounded-full bg-[#ddf4eb] px-3 py-1 text-sm font-bold text-mint-dark">
                  {plan.tag}
                </span>
                <h3 className="mb-2 text-xl font-extrabold">{plan.title}</h3>
                <p className="text-muted">{plan.text}</p>
                <div className="my-5 text-4xl font-black leading-none">
                  {plan.price} <small className="text-base font-medium text-muted">起</small>
                </div>
                <ul className="mb-6 grid gap-2 text-[#4d5d69]">
                  {plan.items.map((item) => (
                    <li className="flex gap-2" key={item}>
                      <span className="font-black text-mint">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a className={`${buttonClass} mt-auto w-full`} href="#booking">
                  {plan.action}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-14 md:py-20">
        <div className="mx-auto w-[min(1180px,100%)]">
          <SectionHead title="到店流程" text="流程清晰，主人心里有数，宠物也少一点陌生感。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, text], index) => (
              <article className="min-h-48 border-t-[3px] border-mint bg-white/60 p-6" key={title}>
                <span className="mb-5 block text-3xl font-black leading-none text-coral">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 text-xl font-extrabold">{title}</h3>
                <p className="text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white px-4 py-16 md:px-14 md:py-20">
        <div className="mx-auto w-[min(1180px,100%)]">
          <SectionHead
            title="门店环境"
            text="明亮洗护区、独立等待位和猫犬分区，让护理过程更稳定。"
          />
          <div
            className="grid auto-cols-[88%] grid-flow-col gap-4 overflow-x-auto pb-3 [scrollbar-color:#3ca58b_#e4eeeb] [scroll-snap-type:x_mandatory] md:auto-cols-[72%]"
            aria-label="店内环境轮播图"
          >
            {gallery.map((item) => (
              <figure
                className="relative m-0 min-h-[330px] overflow-hidden rounded-lg bg-[#e8eeee] shadow-[0_16px_36px_rgba(35,49,63,.12)] [scroll-snap-align:start] md:min-h-[470px]"
                key={item.title}
              >
                <img className="h-full w-full object-cover" src={item.src} alt={item.alt} />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/0 from-50% to-ink/60" />
                <figcaption className="absolute bottom-5 left-5 right-5 z-10 text-white drop-shadow">
                  <strong className="mb-1 block text-xl leading-tight md:text-2xl">{item.title}</strong>
                  <span className="text-sm text-white/85">{item.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="bg-gradient-to-b from-paper to-sky px-4 py-16 md:px-14 md:py-20">
        <div className="mx-auto grid w-[min(1180px,100%)] items-stretch gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <aside className={`${cardClass} bg-ink p-7 text-white`}>
            <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-black leading-tight">
              预约前请告诉我们这些信息
            </h2>
            <p className="text-white/75">这样可以提前安排护理师、时长和合适的洗护用品。</p>
            <ul className="my-6 grid gap-2 text-white/75">
              {[
                "宠物品种、年龄、体重和是否绝育",
                "近期是否有皮肤问题、耳道问题或伤口",
                "是否怕吹风、怕水、咬人或容易紧张",
                "期望造型照片可到店展示给护理师",
              ].map((item) => (
                <li className="flex gap-2" key={item}>
                  <span className="font-black text-sun">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-white/15 pt-5">
              <p className="mb-4 text-white/80">
                营业时间：周一至周日 10:00-20:00
                <br />
                地址：上海市普陀区宜川路街道陕西北路 1620 号
              </p>
              <div className="overflow-hidden rounded-lg border border-white/20 bg-[#f6fbf8] shadow-[0_14px_28px_rgba(10,25,32,.18)]" aria-label="泡泡爪宠物洗护店门店位置示意图">
                <img
                  className="aspect-video h-auto w-full object-cover"
                  src="/assets/store-map-final.png"
                  alt="泡泡爪宠物洗护店位于上海市普陀区宜川路街道陕西北路 1620 号的可爱风格地图"
                />
              </div>
            </div>
          </aside>

          <div className={`${cardClass} p-6`}>
            <SectionHead
              title="在线预约"
              text="提交后我们会在营业时间内电话确认。此表单为静态展示，不会真实发送数据。"
            />
            <form>
              <div className="grid gap-3 sm:grid-cols-2">
                <FormLabel label="主人姓名">
                  <input className={fieldClass} type="text" placeholder="请输入姓名" />
                </FormLabel>
                <FormLabel label="联系电话">
                  <input className={fieldClass} type="tel" placeholder="请输入手机号" />
                </FormLabel>
                <FormLabel label="宠物类型">
                  <select className={fieldClass} defaultValue="狗狗">
                    <option>狗狗</option>
                    <option>猫咪</option>
                    <option>其他小宠</option>
                  </select>
                </FormLabel>
                <FormLabel label="预约项目">
                  <select className={fieldClass} defaultValue="基础洗护">
                    <option>基础洗护</option>
                    <option>精致洗护造型</option>
                    <option>猫咪低应激护理</option>
                    <option>皮毛专项护理</option>
                  </select>
                </FormLabel>
                <FormLabel label="期望日期">
                  <input className={fieldClass} type="date" />
                </FormLabel>
                <FormLabel label="期望时段">
                  <select className={fieldClass} defaultValue="10:00-12:00">
                    <option>10:00-12:00</option>
                    <option>12:00-15:00</option>
                    <option>15:00-18:00</option>
                    <option>18:00-20:00</option>
                  </select>
                </FormLabel>
                <FormLabel label="宠物情况与护理备注" className="sm:col-span-2">
                  <textarea
                    className={`${fieldClass} min-h-28 resize-y`}
                    placeholder="例如：泰迪 5kg，轻微打结，希望保留圆头造型"
                  />
                </FormLabel>
                <div className="sm:col-span-2">
                  <button className={buttonClass} type="button">
                    提交预约
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#1f2a35] px-4 py-7 text-white/70 md:px-14">
        <div className="mx-auto flex w-[min(1180px,100%)] flex-wrap justify-between gap-4 text-sm">
          <span>泡泡爪宠物洗护店</span>
          <span>温和护理，透明沟通，安心到店。</span>
        </div>
      </footer>
    </main>
  );
}

function SectionHead({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
      <h2 className="m-0 text-[clamp(28px,4vw,46px)] font-black leading-tight">{title}</h2>
      {text ? <p className="m-0 max-w-[520px] text-muted">{text}</p> : null}
    </div>
  );
}

const fieldClass =
  "min-h-12 w-full rounded-lg border border-line bg-white px-3 py-2 text-ink outline-none transition placeholder:text-muted/70 focus:border-mint focus:ring-2 focus:ring-mint/20";

function FormLabel({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-[#40505e] ${className}`}>
      {label}
      {children}
    </label>
  );
}

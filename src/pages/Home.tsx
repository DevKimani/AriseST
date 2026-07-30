import { Shield, MessageCircle, Heart, BookOpen, Users, Coins } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, SectionHead } from "@/components/blocks/Section";
import { ProgramCard, Stat } from "@/components/blocks/Cards";
import { CtaBand } from "@/components/blocks/CtaBand";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-[1180px] px-7 grid lg:grid-cols-[1.05fr_.95fr] gap-14 items-center pt-[70px] pb-[78px] max-lg:pb-14">
          <div className="reveal in">
            <Eyebrow>Supporting survivors of gender-based violence</Eyebrow>
            <h1 className="text-[clamp(40px,5.4vw,64px)] tracking-[-.015em] mt-5">
              From Surviving to{" "}
              <span className="relative text-forest whitespace-nowrap">
                Thriving
                <svg className="absolute left-0 -right-1 -bottom-3.5 h-[22px] w-full" viewBox="0 0 300 24" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M4 20 C 80 20, 150 20, 296 8" stroke="#C98A3B" strokeWidth="3" strokeLinecap="round" />
                  <path d="M255 12 C 258 4, 266 2, 273 3 C 272 10, 264 13, 257 12" fill="#C98A3B" />
                </svg>
              </span>
            </h1>
            <p className="text-[19px] text-muted max-w-[33ch] mt-6">
              Arise Strong Together stands with survivors — from crisis to confidence, and from isolation to community.
            </p>
            <div className="flex gap-3.5 mt-[34px] flex-wrap">
              <Button to="/get-help" size="lg" variant="plum">I need help</Button>
              <Button to="/get-involved" size="lg" variant="ghost">Support our work</Button>
            </div>
            <div className="mt-6 text-[14.5px] text-muted flex items-center gap-2.5">
              <Shield size={18} className="flex-none text-forest" /> Confidential · Free · At your own pace
            </div>
          </div>

          <div className="reveal in relative aspect-[4/4.4] max-lg:max-w-[440px] rounded-[24px] overflow-hidden shadow-[0_30px_60px_-30px_rgba(26,59,50,.55)]"
            style={{ background: "radial-gradient(120% 90% at 75% 15%, #F4E4C6 0%, rgba(244,228,198,0) 55%), linear-gradient(155deg,#2E5E4E,#234E42 45%,#1A3B32)" }}>
            <div className="absolute -top-[12%] -right-[8%] w-[52%] h-[52%] rounded-full blur-[6px]" style={{ background: "radial-gradient(circle,rgba(201,138,59,.9),rgba(201,138,59,0) 70%)" }} />
            <div className="absolute left-[26px] right-[26px] top-[34px] text-white">
              <div className="font-display text-[24px] leading-[1.28]">“Given the right support, survivors rise — and lift others with them.”</div>
              <div className="text-[13px] text-white/70 mt-3.5 tracking-[.04em]">— OUR BELIEF</div>
            </div>
            <div className="absolute left-[18px] bottom-4 text-xs text-white/70 bg-forest-deep/50 px-[11px] py-1.5 rounded-lg">[ Hero image: a dignified, hopeful photograph ]</div>
          </div>
        </div>
      </section>

      {/* HELP STRIP */}
      <div className="bg-plum text-white">
        <div className="mx-auto max-w-[1180px] px-7 flex items-center justify-between gap-6 py-[22px] flex-wrap max-[600px]:flex-col max-[600px]:items-start">
          <div className="flex items-center gap-4">
            <MessageCircle size={30} strokeWidth={1.8} className="flex-none" />
            <div>
              <h3 className="text-[22px]">You are not alone.</h3>
              <p className="text-[14.5px] text-white/85 mt-0.5">If you’re experiencing gender-based violence, confidential support is one message away.</p>
            </div>
          </div>
          <Button to="/get-help" variant="white">Get help now</Button>
        </div>
      </div>

      {/* MISSION */}
      <Section>
        <Reveal className="max-w-[840px] mx-auto text-center">
          <Eyebrow center>Who we are</Eyebrow>
          <h2 className="text-[clamp(26px,3.2vw,38px)] mt-3.5 tracking-[-.01em]">We help survivors heal and reclaim their lives, and work with communities to prevent violence.</h2>
          <p className="text-lg text-muted mt-5">Arise Strong Together is a Kenyan community-based organisation, registered in June 2025 and founded by a survivor of gender-based violence. We combine professional counselling with lived experience — walking with survivors through healing while working alongside women, youth, and the wider community to prevent violence and challenge the norms that allow it.</p>
        </Reveal>
      </Section>

      {/* STATS */}
      <Section variant="sage">
        <SectionHead eyebrow="Our impact" title="Change we can measure" />
        <div className="grid gap-[22px] grid-cols-1 sm:grid-cols-3">
          <Reveal><Stat n="200" label="young women given free psychosocial support" /></Reveal>
          <Reveal><Stat n="100" label="girls given free psychosocial support" /></Reveal>
          <Reveal><Stat n="2025" label="registered as a community-based organisation" /></Reveal>
        </div>
        <p className="text-center mt-6 text-[15px] text-muted max-w-[70ch] mx-auto">Beyond the numbers: the community is challenging harmful cultural norms, GBV cases are increasingly reported and handled in a survivor-centred way, and referral pathways are widely understood — with perpetrators more often held to account.</p>
      </Section>

      {/* PROGRAMS */}
      <Section>
        <Reveal className="flex justify-between items-end gap-5 mb-[42px] flex-wrap">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="text-[clamp(26px,3.2vw,38px)] mt-3.5 max-w-[16ch]">Support across the whole journey</h2>
          </div>
          <Button to="/programs" variant="ghost">All programs</Button>
        </Reveal>
        <div className="grid gap-[22px] md:grid-cols-2">
          <Reveal><ProgramCard to="/programs/gbv" icon={<Heart size={24} strokeWidth={1.8} />} title="Gender-Based Violence Response">Confidential support, safety planning, and accompaniment for survivors seeking safety and healing.</ProgramCard></Reveal>
          <Reveal><ProgramCard to="/programs/capacity-building" icon={<BookOpen size={24} strokeWidth={1.8} />} title="Capacity Building">Training that equips survivors, communities, and frontline responders with knowledge and skills.</ProgramCard></Reveal>
          <Reveal><ProgramCard to="/programs/community-advocacy" icon={<Users size={24} strokeWidth={1.8} />} title="Community Advocacy">Working with communities to challenge the norms and systems that allow violence to continue.</ProgramCard></Reveal>
          <Reveal><ProgramCard to="/programs/economic-empowerment" icon={<Coins size={24} strokeWidth={1.8} />} title="Economic Empowerment">Livelihoods, skills, and business support so survivors can build independent, secure futures.</ProgramCard></Reveal>
        </div>
      </Section>

      {/* STORY */}
      <Section variant="green">
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-center">
          <Reveal>
            <Eyebrow className="text-[#bfe0d3]">Turning pain into purpose</Eyebrow>
            <blockquote className="font-display text-[clamp(24px,2.8vw,32px)] leading-[1.32] mt-[18px]">“My survival was never meant to be a private victory — it was a blueprint for helping others.”</blockquote>
            <div className="mt-[22px] text-[14.5px] text-[#bfe0d3]">— [Founder’s name], Founder of Arise Strong Together · survivor and counsellor</div>
            <p className="mt-2.5 text-[12.5px] text-[#9dc4b6] italic max-w-[52ch]">Our founder’s own story. Add their name and photo when ready.</p>
          </Reveal>
          <Reveal className="aspect-[5/4] rounded-[20px] border border-white/[.14] relative" >
            <div className="absolute inset-0 rounded-[20px]" style={{ background: "radial-gradient(90% 80% at 30% 20%,rgba(201,138,59,.4),rgba(201,138,59,0) 60%), linear-gradient(135deg,#2E5E4E,#1A3B32)" }} />
            <span className="absolute left-4 bottom-3.5 text-xs text-white/70">[ Story image — with consent, or symbolic imagery ]</span>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

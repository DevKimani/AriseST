import { Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Banner, Crumb } from "@/components/blocks/Banner";
import { Section, SectionHead } from "@/components/blocks/Section";
import { CtaBand } from "@/components/blocks/CtaBand";

const values = [
  ["Dignity", "We treat every person we serve with respect, never judgment."],
  ["Survivor-centred", "Survivors lead their own journeys; we follow their pace and choices."],
  ["Safety & Confidentiality", "We protect the privacy and wellbeing of everyone who trusts us."],
  ["Community & Solidarity", "Lasting change happens with communities, not to them."],
  ["Integrity & Accountability", "We are transparent with the people we serve and those who support us."],
];
const milestones = [
  ["[YEAR]", "Arise Strong Together is founded."],
  ["[YEAR]", "[First programme launched]."],
  ["[YEAR]", "[Major partnership / expansion]."],
  ["[YEAR]", "[Reach milestone]."],
];

export default function About() {
  return (
    <>
      <Banner crumb={<Crumb label="About Us" />} eyebrow="Who we are" title="About Arise Strong Together"
        text="Survivor-led, community-rooted, and unwilling to accept violence as normal." />

      <Section>
        <div className="grid lg:grid-cols-[1fr_340px] gap-14 items-start">
          <Reveal className="prose">
            <h2>Our Story</h2>
            <p>Arise Strong Together was founded in [YEAR] by [FOUNDER / FOUNDING STORY]. What started as [modest beginning] grew as more survivors came forward and more community members chose to stand with them.</p>
            <p>We saw that survivors often had somewhere to turn in a crisis, but far less support for what came after — the long work of healing, rebuilding confidence, and regaining independence. Arise Strong Together was created to fill that gap: to walk the whole journey, not just the first step.</p>
            <p>Since then, we have grown into [current scale / reach], but our commitment has stayed the same.</p>
            <h2>Mission</h2>
            <p>To support survivors of gender-based violence to heal and reclaim their lives, while working alongside communities to prevent violence and advance gender equality.</p>
            <h2>Vision</h2>
            <p>A society free from gender-based violence — where every person lives with dignity, safety, and equal opportunity.</p>
          </Reveal>
          <Reveal className="bg-white border border-sage-line rounded-[14px] p-[26px] lg:sticky lg:top-[100px]">
            <h3 className="text-xl mb-2">At a glance</h3>
            {[["[YEAR]", "Founded"], ["[LOCATION]", "Based in"], ["[X]", "Survivors supported"]].map(([a, b]) => (
              <p key={b} className="mb-2"><span className="font-display text-2xl text-ochre">{a}</span><br /><span className="text-[13px] text-muted">{b}</span></p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section variant="sage">
        <SectionHead eyebrow="What guides us" title="Our Core Values" />
        <div className="grid gap-[22px] md:grid-cols-2">
          {values.map(([t, d]) => (
            <Reveal key={t} className="border-l-[3px] border-ochre pl-5 py-1.5">
              <h3 className="text-[19px] text-forest mb-1">{t}</h3>
              <p className="text-muted text-[15px]">{d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Our people" title="Leadership Team" />
        <div className="grid gap-[22px] grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <Reveal key={i} className="text-center">
              <div className="aspect-square rounded-[14px] bg-gradient-to-br from-sage to-[#d7e4dc] flex items-center justify-center text-forest mb-3.5 border border-sage-line"><Users size={40} strokeWidth={1.5} /></div>
              <h3 className="text-lg text-forest">[Name]</h3>
              <div className="text-[13.5px] text-plum font-semibold">[Role]</div>
              <p className="text-[13px] text-muted mt-1.5">[Short bio]</p>
            </Reveal>
          ))}
        </div>
        <p className="text-center mt-5 text-[13px] text-muted italic">Add leadership headshots and bios.</p>
      </Section>

      <Section variant="sage">
        <SectionHead eyebrow="Our journey" title="Milestones" />
        <Reveal className="max-w-[640px] mx-auto border-l-2 border-sage-line ml-2 pl-[26px] flex flex-col gap-[26px]">
          {milestones.map(([y, d], i) => (
            <div key={i} className="relative before:content-[''] before:absolute before:-left-[33px] before:top-1 before:w-3 before:h-3 before:rounded-full before:bg-ochre before:border-[3px] before:border-paper">
              <div className="font-display text-xl text-ochre">{y}</div>
              <p className="text-muted text-[15px]">{d}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}

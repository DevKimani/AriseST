import { useParams, Navigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Banner, Crumb } from "@/components/blocks/Banner";
import { Section } from "@/components/blocks/Section";
import { Callout } from "@/components/blocks/Callout";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/blocks/CtaBand";
import { getProgram } from "@/data/programs";

export default function ProgramDetail() {
  const { slug } = useParams();
  const p = getProgram(slug);
  if (!p) return <Navigate to="/programs" replace />;

  return (
    <>
      <Banner green crumb={<Crumb label={p.name} mid={{ to: "/programs", label: "Programs" }} />} eyebrow="Programme" title={p.name} text={p.intro} />
      <Section>
        <div className="grid lg:grid-cols-[1fr_340px] gap-14 items-start">
          <Reveal className="prose">
            <h2>{p.heading1}</h2>
            <ul>{p.list1.map((x, i) => <li key={i}>{x}</li>)}</ul>
            <h2>{p.heading2}</h2>
            <ul>{p.list2.map((x, i) => <li key={i}>{x}</li>)}</ul>
            <h2>Who we support</h2>
            <p>{p.who}</p>
            <div className="mt-5">
              <Callout variant="calm" icon={<Heart size={22} strokeWidth={1.8} />} title="A story of change">
                <span className="italic">“[Template only — a real, consented survivor story goes here, using a pseudonym or full anonymity at the survivor’s choice.]”</span>
              </Callout>
            </div>
          </Reveal>
          <Reveal className="bg-white border border-sage-line rounded-[14px] p-[26px] lg:sticky lg:top-[100px]">
            <h3 className="text-xl mb-3">Outcomes</h3>
            {p.outcomes.map((o, i) => (
              <p key={i} className="mb-3.5"><span className="font-display text-2xl text-ochre">{o.n}</span><br /><span className="text-[13px] text-muted">{o.l}</span></p>
            ))}
            <p className="text-[13px] text-muted italic mb-3">Placeholder figures — verify before launch.</p>
            <Button to="/get-help" variant="plum" className="w-full justify-center">Get support</Button>
          </Reveal>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

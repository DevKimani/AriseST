import { Shield, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { Banner, Crumb } from "@/components/blocks/Banner";
import { Section } from "@/components/blocks/Section";
import { Callout } from "@/components/blocks/Callout";
import { Button } from "@/components/ui/button";

const input = "font-sans text-[15px] px-3.5 py-3 border-[1.5px] border-sage-line rounded-[10px] bg-white text-ink focus:border-forest focus:outline-none";
const label = "text-sm font-semibold text-ink";

export default function Contact() {
  return (
    <>
      <Banner crumb={<Crumb label="Contact" />} eyebrow="Get in touch" title="Contact Us"
        text="Whether you need support, want to partner, or simply have a question, we’d love to hear from you." />
      <Section>
        <div className="grid lg:grid-cols-[1fr_340px] gap-14 items-start">
          <div>
            <Reveal className="mb-6">
              <Callout variant="warn" icon={<Shield size={18} strokeWidth={1.8} />} title="Seeking support?">
                If you’re in danger or need help, please see our <Link to="/get-help" className="text-plum-deep font-semibold underline">Get Help</Link> page for confidential support. In an emergency, call [EMERGENCY NO.].
              </Callout>
            </Reveal>
            <Reveal>
              <form className="grid gap-[18px]" onSubmit={(e) => { e.preventDefault(); alert("This is a design build — connect this form to your backend or a form service."); }}>
                <div className="grid sm:grid-cols-2 gap-[18px]">
                  <div className="flex flex-col gap-[7px]"><label className={label}>Name</label><input className={input} placeholder="Your name" /></div>
                  <div className="flex flex-col gap-[7px]"><label className={label}>Email</label><input type="email" className={input} placeholder="you@example.com" /></div>
                </div>
                <div className="flex flex-col gap-[7px]"><label className={label}>Phone (optional)</label><input className={input} /></div>
                <div className="flex flex-col gap-[7px]"><label className={label}>Reason for contact</label>
                  <select className={input}><option>General enquiry</option><option>Get help</option><option>Volunteering</option><option>Partnership</option><option>Donation</option><option>Media</option></select>
                </div>
                <div className="flex flex-col gap-[7px]"><label className={label}>Message</label><textarea className={`${input} min-h-[130px] resize-y`} placeholder="How can we help?" /></div>
                <label className="flex gap-2.5 items-start text-sm text-muted"><input type="checkbox" className="mt-1" /> I agree to be contacted about my enquiry.</label>
                <Button size="lg" type="submit">Send message</Button>
              </form>
            </Reveal>
          </div>
          <Reveal>
            <div className="bg-white border border-sage-line rounded-[14px] p-[26px] mb-5">
              <h3 className="text-xl mb-3">Our details</h3>
              {[[<Mail size={20} strokeWidth={1.8} />, "[email address]"], [<Phone size={20} strokeWidth={1.8} />, "[phone number]"], [<MapPin size={20} strokeWidth={1.8} />, "[physical address]"], [<Clock size={20} strokeWidth={1.8} />, "[office hours]"]].map(([ic, t], i) => (
                <p key={i} className="flex gap-2.5 items-start text-ink mb-2.5">{ic}<span>{t}</span></p>
              ))}
              <h4 className="font-sans text-[13px] tracking-[.1em] uppercase text-muted mb-2.5 mt-4">Follow us</h4>
              <div className="flex gap-3">
                {["f", "◎", "✕", "in"].map((s) => (
                  <a key={s} href="#" className="w-[42px] h-[42px] rounded-[11px] bg-sage flex items-center justify-center text-forest hover:bg-forest hover:text-white transition-colors">{s}</a>
                ))}
              </div>
            </div>
            <div className="aspect-video rounded-[14px] bg-gradient-to-br from-sage to-[#d3e2d9] border border-sage-line flex items-center justify-center text-forest text-sm gap-2"><MapPin size={20} strokeWidth={1.8} /> [ Google Maps embed ]</div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

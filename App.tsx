import React from 'react';
import Presentation from './components/Presentation';
import { SlideContent } from './types';
import { 
  ShieldCheckIcon, MalwareIcon, PhishingIcon, InsiderThreatIcon, APTIcon, 
  CheckCircleIcon, XCircleIcon, LayersIcon, SearchIcon, SIEMIcon, 
  EndpointIcon, HashIcon,
  PyramidIcon,
  ChevronRightIcon, PlaybookIcon, RunbookIcon, GavelIcon,
  IDSIcon, ForensicsIcon, ToolsIcon, CaseStudyIcon, MitreIcon,
  ClockIcon, EyeIcon, ClipboardDocumentCheckIcon, ArchiveBoxIcon, TrendingUpIcon,
  CloudIcon, TrapIcon
} from './components/icons';

const slides: SlideContent[] = [
  // SLIDE 1: Title
  {
    title: 'Threat Detection & Incident Response',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
        <p className="text-3xl text-gray-400 mb-8">A Deep Dive into Modern Cyber Defense</p>
        <EyeIcon className="w-32 h-32 text-cyan-400 mb-6" />
        <p className="mt-8 text-2xl text-gray-300">HINF5502 - Week 8</p>
      </div>
    ),
  },
  // SLIDE 2: Agenda
  {
    title: 'Presentation Agenda',
    content: (
      <div className="h-full flex flex-col justify-center">
        <ul className="list-none space-y-4 text-2xl">
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '100ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Part 1: The Battlefield</strong> - The "Why" & "Who" of Cyber Defense</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '200ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Part 2: The Arsenal</strong> - Core Detection Methods & The Security Toolkit</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '300ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Part 3: The Plan</strong> - Building a Resilient Incident Response Program</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '400ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Part 4: Learning from the Field</strong> - Case Studies & Frameworks</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '500ms' }}><ChevronRightIcon className="w-8 h-8 text-cyan-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Conclusion</strong> - Key Takeaways, Future Trends & Discussion</div></li>
        </ul>
      </div>
    ),
  },
   // PART 1: THE BATTLEFIELD
  {
    title: 'Part 1: The Battlefield',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-4xl font-bold mb-4">Understanding the "Why" and "Who"</p>
            <p className="text-xl text-gray-300">Before we can defend, we must understand the landscape, the stakes, and the adversaries we face.</p>
        </div>
    ),
  },
  {
    title: 'Why Threat Detection Matters: A Shift in Mindset',
    content: (
      <div className="space-y-6">
        <p>In cybersecurity, the strategy has evolved. The old "castle & moat" approach of only defending the perimeter is no longer enough.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="p-6 bg-red-900/30 rounded-lg border border-red-500">
                <h3 className="font-bold text-2xl text-red-400 mb-2">Old Thinking: "Prevent Breach"</h3>
                <p>Focuses all security on the perimeter, assuming that if no one breaks in, the kingdom is safe. This fails the moment a single attacker gets inside.</p>
            </div>
            <div className="p-6 bg-green-900/30 rounded-lg border border-green-500">
                <h3 className="font-bold text-2xl text-green-400 mb-2">Modern Thinking: "Assume Breach"</h3>
                <p>Accepts the reality that determined attackers <span className="font-bold">will</span> get in. The goal is to find them as quickly as possible before they can cause significant damage.</p>
            </div>
        </div>
        <p className="text-xl pt-4">This mindset is the foundation of all modern security operations.</p>
      </div>
    ),
  },
  {
    title: 'The Cost of a Breach',
    content: (
        <div className="space-y-6">
            <p>A data breach is not just a technical problem; it's a business catastrophe with far-reaching consequences.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-800/50 rounded-lg"><h3 className="text-xl font-bold text-cyan-400">Financial Loss</h3><p>Fines, recovery costs, legal fees.</p></div>
                <div className="p-4 bg-gray-800/50 rounded-lg"><h3 className="text-xl font-bold text-cyan-400">Reputational Damage</h3><p>Loss of customer trust and brand value.</p></div>
                <div className="p-4 bg-gray-800/50 rounded-lg"><h3 className="text-xl font-bold text-cyan-400">Operational Disruption</h3><p>Downtime and business interruption.</p></div>
                <div className="p-4 bg-gray-800/50 rounded-lg"><h3 className="text-xl font-bold text-cyan-400">Intellectual Property Theft</h3><p>Loss of trade secrets and competitive advantage.</p></div>
            </div>
            <p className="text-center pt-4 text-2xl">Effective detection and response directly minimizes these costs by stopping attackers early.</p>
        </div>
    ),
  },
  {
    title: 'Key Terminology: The Building Blocks of Risk',
    content: (
      <div className="space-y-6">
        <div className="p-4 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-2xl">Vulnerability:</strong> A weakness in a system that can be exploited. (e.g., an unpatched software flaw).</p></div>
        <div className="p-4 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-2xl">Threat:</strong> A potential danger that can exploit a vulnerability. (e.g., a malware program designed to attack that flaw).</p></div>
        <div className="p-4 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-2xl">Exploit:</strong> The specific code or technique used to take advantage of a vulnerability.</p></div>
        <div className="p-4 bg-gray-800/40 rounded-lg"><p><strong className="text-red-400 text-2xl">Risk:</strong> The potential for loss when a threat exploits a vulnerability. (Risk = Threat x Vulnerability x Impact).</p></div>
      </div>
    ),
  },
  {
    title: 'Defining Dwell Time: The Attacker\'s Advantage',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <ClockIcon className="w-32 h-32 text-cyan-400 mb-6" />
        <p className="text-3xl font-bold mb-4">Dwell Time</p>
        <p className="text-xl mb-6">The time from initial compromise to final detection.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">The primary goal of threat detection is to <span className="text-red-500 font-bold">crush</span> this number. A shorter dwell time means less time for an attacker to steal data, escalate privileges, and cause damage.</p>
      </div>
    ),
  },
  {
    title: 'The Threat Landscape: A High-Level Overview',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-3xl mb-6">We face a diverse set of adversaries, each with unique motivations and capabilities.</p>
            <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
                <div className="p-6 bg-gray-800/50 rounded-lg"><h3 className="text-2xl font-bold text-cyan-400">Cybercriminals</h3><p>Financially motivated.</p></div>
                <div className="p-6 bg-gray-800/50 rounded-lg"><h3 className="text-2xl font-bold text-cyan-400">Nation-States (APTs)</h3><p>Espionage and disruption.</p></div>
                <div className="p-6 bg-gray-800/50 rounded-lg"><h3 className="text-2xl font-bold text-cyan-400">Hacktivists</h3><p>Political or social agenda.</p></div>
                <div className="p-6 bg-gray-800/50 rounded-lg"><h3 className="text-2xl font-bold text-cyan-400">Insider Threats</h3><p>Malicious or accidental abuse of access.</p></div>
            </div>
            <p className="mt-8 text-xl">Understanding your enemy is the first step to defeating them.</p>
        </div>
    ),
  },
  {
    title: 'Another View: The Cyber Kill Chain',
    content: (
      <div className="text-center">
        <p className="text-3xl font-bold mb-4">A Framework for Intrusion</p>
        <p className="text-xl mb-6 max-w-3xl mx-auto">Developed by Lockheed Martin, the Cyber Kill Chain models the stages an adversary must complete to achieve their objective. It provides a linear, high-level view of an attack from start to finish.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">The core principle: By disrupting the chain at any stage, the entire attack can be stopped.</p>
      </div>
    ),
  },
  {
    title: 'The 7 Stages of the Cyber Kill Chain',
    content: (
      <div className="space-y-2">
          <div className="p-2 bg-gray-800/40 rounded-lg flex items-center"><span className="text-cyan-400 font-bold text-xl w-8">1.</span><p><strong className="text-cyan-400 text-xl">Reconnaissance:</strong> Harvesting information about the target.</p></div>
          <div className="p-2 bg-gray-800/40 rounded-lg flex items-center"><span className="text-cyan-400 font-bold text-xl w-8">2.</span><p><strong className="text-cyan-400 text-xl">Weaponization:</strong> Coupling an exploit with a backdoor into a deliverable payload.</p></div>
          <div className="p-2 bg-gray-800/40 rounded-lg flex items-center"><span className="text-cyan-400 font-bold text-xl w-8">3.</span><p><strong className="text-cyan-400 text-xl">Delivery:</strong> Transmitting the weapon to the target (e.g., via email, web).</p></div>
          <div className="p-2 bg-gray-800/40 rounded-lg flex items-center"><span className="text-cyan-400 font-bold text-xl w-8">4.</span><p><strong className="text-cyan-400 text-xl">Exploitation:</strong> Triggering the weapon to exploit a vulnerability.</p></div>
          <div className="p-2 bg-gray-800/40 rounded-lg flex items-center"><span className="text-cyan-400 font-bold text-xl w-8">5.</span><p><strong className="text-cyan-400 text-xl">Installation:</strong> Installing malware on the asset.</p></div>
          <div className="p-2 bg-gray-800/40 rounded-lg flex items-center"><span className="text-cyan-400 font-bold text-xl w-8">6.</span><p><strong className="text-cyan-400 text-xl">Command & Control (C2):</strong> Establishing a "beachhead" for remote manipulation.</p></div>
          <div className="p-2 bg-gray-800/40 rounded-lg flex items-center"><span className="text-cyan-400 font-bold text-xl w-8">7.</span><p><strong className="text-red-400 text-xl">Actions on Objectives:</strong> The attacker achieves their goal (data theft, destruction, etc.).</p></div>
      </div>
    ),
  },
  {
    title: 'Mapping Defenses to the Kill Chain',
    content: (
        <div className="space-y-4">
            <p>We can map our security controls to disrupt each stage of the attack.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p><strong className="text-cyan-400">Reconnaissance:</strong> Web filtering, Threat Intel.</p>
                <p><strong className="text-cyan-400">Delivery:</strong> Email security gateways, Proxies.</p>
                <p><strong className="text-cyan-400">Exploitation:</strong> EDR, Patch management.</p>
                <p><strong className="text-cyan-400">Installation:</strong> Application whitelisting, EDR.</p>
                <p><strong className="text-cyan-400">Command & Control:</strong> NTA, Firewalls, DNS monitoring.</p>
                <p><strong className="text-cyan-400">Actions on Objectives:</strong> Data Loss Prevention (DLP), IAM.</p>
            </div>
        </div>
    ),
  },
  {
    title: 'Threat Actor Deep Dive: Cybercriminals',
    content: (
      <div className="text-center">
        <p className="text-3xl font-bold mb-4">Motivation: <span className="text-green-400">Money</span></p>
        <p className="text-xl mb-6">This is the largest and most common group of attackers. They operate like businesses, with a focus on maximizing profit.</p>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl space-y-2">
          <li><strong>Tactics:</strong> Ransomware, data theft for sale on the dark web, business email compromise (BEC), credit card skimming.</li>
          <li><strong>Sophistication:</strong> Varies from low-skill "script kiddies" to highly organized criminal enterprises.</li>
          <li><strong>Goal:</strong> Direct financial extortion or monetization of stolen data.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Threat Actor Deep Dive: Nation-States (APTs)',
    content: (
      <div className="text-center">
        <APTIcon className="w-24 h-24 text-red-500 mx-auto mb-4"/>
        <p className="text-3xl font-bold mb-4">Motivation: <span className="text-red-500">Espionage & Sabotage</span></p>
        <p className="text-xl mb-6">Advanced Persistent Threats (APTs) are the special forces of the cyber world, typically backed by a government.</p>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl space-y-2">
          <li><strong>Tactics:</strong> Custom malware, zero-day exploits, long-term stealth operations, supply chain attacks.</li>
          <li><strong>Sophistication:</strong> Extremely high. Well-funded, patient, and highly skilled.</li>
          <li><strong>Goal:</strong> Steal state secrets, disrupt critical infrastructure, or gain a strategic advantage.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Threat Actor Deep Dive: Hacktivists',
    content: (
      <div className="text-center">
        <p className="text-3xl font-bold mb-4">Motivation: <span className="text-yellow-400">Ideology</span></p>
        <p className="text-xl mb-6">Hacktivists use cyber attacks to promote a political or social agenda.</p>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl space-y-2">
          <li><strong>Tactics:</strong> Website defacement, Distributed Denial-of-Service (DDoS) attacks, leaking sensitive information ("doxing").</li>
          <li><strong>Sophistication:</strong> Generally low to moderate, often using publicly available tools.</li>
          <li><strong>Goal:</strong> Raise awareness for their cause, embarrass their target, or disrupt their target's operations.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Threat Actor Deep Dive: Insider Threats',
    content: (
      <div className="text-center">
        <InsiderThreatIcon className="w-24 h-24 text-purple-400 mx-auto mb-4"/>
        <p className="text-3xl font-bold mb-4">Motivation: <span className="text-purple-400">Varies (Greed, Revenge, Ignorance)</span></p>
        <p className="text-xl mb-6">A threat that comes from within the organization.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><h3 className="text-2xl font-bold text-cyan-400">Malicious Insider</h3><p>Intentionally misuses their access for personal gain or to harm the company.</p></div>
            <div><h3 className="text-2xl font-bold text-cyan-400">Accidental Insider</h3><p>Unknowingly makes a mistake that leads to a security breach, like falling for a phishing email.</p></div>
        </div>
        <p className="mt-4">Insider threats are difficult to detect because the activity often looks legitimate.</p>
      </div>
    ),
  },
  {
    title: 'Common Threat Vector: Malware',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <MalwareIcon className="w-32 h-32 text-red-400 mb-6" />
            <p className="text-4xl font-bold mb-4">Malicious Software</p>
            <p className="text-xl text-gray-300">The primary tool used by attackers to achieve their objectives. Let's explore the common types.</p>
        </div>
    ),
  },
  {
    title: 'Malware Deep Dive: Ransomware',
    content: (
        <div className="text-center">
            <p className="text-3xl font-bold mb-4">The Digital Hostage-Taker</p>
            <p className="text-xl mb-6">Encrypts a victim's files and demands a ransom payment (usually in cryptocurrency) in exchange for the decryption key.</p>
            <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">Modern ransomware often includes <span className="text-red-500 font-bold">"double extortion,"</span> where attackers also steal the data before encrypting it and threaten to leak it publicly if the ransom isn't paid.</p>
        </div>
    ),
  },
  {
    title: 'Malware Deep Dive: Spyware & Adware',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Spyware</h3>
          <p className="text-center text-gray-300 text-lg">Secretly monitors a user's activity, collecting information like keystrokes (keyloggers), browsing habits, and credentials.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Adware</h3>
          <p className="text-center text-gray-300 text-lg">Automatically delivers unwanted advertisements to a user, often by hijacking their browser. It can also be a vector for more malicious spyware.</p>
        </div>
      </div>
    )
  },
  {
    title: 'Malware Deep Dive: Trojans & Backdoors',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Trojan Horse</h3>
          <p className="text-center text-gray-300 text-lg">Disguises itself as legitimate software to trick a user into installing it. Once executed, it carries out its malicious function.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Backdoor</h3>
          <p className="text-center text-gray-300 text-lg">A method of bypassing normal authentication to gain remote access to a system. Often installed by a trojan.</p>
        </div>
      </div>
    )
  },
  {
    title: 'Malware Deep Dive: Viruses & Worms',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Virus</h3>
          <p className="text-center text-gray-300 text-lg">Attaches itself to a legitimate program or file. It requires human action (like opening the file) to spread.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Worm</h3>
          <p className="text-center text-gray-300 text-lg">A self-replicating program that spreads across networks without any human interaction, often exploiting vulnerabilities to move from system to system.</p>
        </div>
      </div>
    )
  },
  {
    title: 'Common Threat Vector: Social Engineering',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <PhishingIcon className="w-32 h-32 text-yellow-400 mb-6" />
            <p className="text-4xl font-bold mb-4">Hacking the Human</p>
            <p className="text-xl text-gray-300">Why break down the door when you can trick someone into opening it for you? Social engineering exploits human psychology.</p>
        </div>
    ),
  },
  {
    title: 'Social Engineering: Phishing, Spear Phishing, Whaling',
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Phishing:</strong> A wide-net attack, sending generic, deceptive emails to a large number of people.</p></div>
        <div className="p-4 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Spear Phishing:</strong> A targeted attack, using information specific to the victim (name, job title) to make the email more convincing.</p></div>
        <div className="p-4 bg-gray-800/40 rounded-lg"><p><strong className="text-red-400 text-xl">Whaling:</strong> A highly targeted spear phishing attack aimed at senior executives or other high-profile individuals.</p></div>
      </div>
    ),
  },
  {
    title: 'Social Engineering: Vishing & Smishing',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Vishing (Voice Phishing)</h3>
          <p className="text-center text-gray-300 text-lg">Using phone calls to trick victims into giving up information. Often involves impersonating a bank, the government, or tech support.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Smishing (SMS Phishing)</h3>
          <p className="text-center text-gray-300 text-lg">Using text messages to lure victims. Usually contains a link that installs malware or directs to a fake login page.</p>
        </div>
      </div>
    )
  },
  {
    title: 'Other Common Attacks',
    content: (
      <div className="space-y-6">
        <div className="p-4 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Denial-of-Service (DoS/DDoS):</strong> Overwhelming a service with traffic to make it unavailable for legitimate users.</p></div>
        <div className="p-4 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Man-in-the-Middle (MitM):</strong> Intercepting communication between two parties to eavesdrop or alter the conversation.</p></div>
        <div className="p-4 bg-gray-800/40 rounded-lg"><p><strong className="text-red-400 text-xl">Zero-Day Exploit:</strong> An attack that targets a previously unknown vulnerability, meaning no patch exists when the attack first occurs.</p></div>
      </div>
    ),
  },
  // PART 2: THE ARSENAL
  {
    title: 'Part 2: The Arsenal',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <ShieldCheckIcon className="w-32 h-32 text-cyan-400 mb-6" />
            <p className="text-4xl font-bold mb-4">Core Detection Methods & The Security Toolkit</p>
            <p className="text-xl text-gray-300">Now that we know the enemy, let's explore the weapons and strategies we use to find them.</p>
        </div>
    ),
  },
  {
    title: 'Core Detection Methods: How We Find Them',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center h-full">
        <div className="p-6 bg-gray-800/40 rounded-lg flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">Signature-Based</h3>
          <p className="font-serif text-xl italic mb-3">"The Wanted Poster"</p>
          <p>Looks for known, specific indicators (signatures) of malicious activity.</p>
        </div>
        <div className="p-6 bg-gray-800/40 rounded-lg flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">Anomaly-Based</h3>
          <p className="font-serif text-xl italic mb-3">"Spotting Strange Behavior"</p>
          <p>Learns what's "normal" (a baseline) and then flags any significant deviation.</p>
        </div>
        <div className="p-6 bg-gray-800/40 rounded-lg flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">Behavioral (Heuristic)</h3>
           <p className="font-serif text-xl italic mb-3">"Judging by Actions"</p>
          <p>Focuses on the intent behind a sequence of actions, regardless of what a file looks like.</p>
        </div>
      </div>
    )
  },
  {
    title: 'Detection Methods: Pros and Cons',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-800/40 rounded-lg">
          <h3 className="text-xl font-bold text-cyan-400">Signature</h3>
          <p><strong className="text-green-400">Pro:</strong> Fast, very low false positives.</p>
          <p><strong className="text-red-400">Con:</strong> Blind to new, unknown (zero-day) attacks.</p>
        </div>
        <div className="p-4 bg-gray-800/40 rounded-lg">
          <h3 className="text-xl font-bold text-cyan-400">Anomaly</h3>
          <p><strong className="text-green-400">Pro:</strong> Can detect new attacks.</p>
          <p><strong className="text-red-400">Con:</strong> Can have high false positives; "normal" can change.</p>
        </div>
        <div className="p-4 bg-gray-800/40 rounded-lg">
          <h3 className="text-xl font-bold text-cyan-400">Behavioral</h3>
          <p><strong className="text-green-400">Pro:</strong> Effective against fileless and obfuscated malware.</p>
          <p><strong className="text-red-400">Con:</strong> Can be computationally intensive.</p>
        </div>
      </div>
    )
  },
  {
    title: 'The Accuracy Challenge: A Balancing Act',
    content: (
        <div className="space-y-4 text-center">
            <p>No detection system is perfect. The goal is to tune our systems to maximize correct detections while minimizing incorrect ones.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="p-4 bg-yellow-900/40 rounded-lg border border-yellow-500">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">False Positive</h3>
                    <p>The alarm goes off, but there is no fire. (e.g., flagging a legitimate admin script as malicious). This leads to <span className="font-bold">alert fatigue</span>.</p>
                </div>
                <div className="p-4 bg-red-900/40 rounded-lg border border-red-500">
                    <h3 className="text-2xl font-bold text-red-400 mb-2">False Negative</h3>
                    <p>There is a real fire, but the alarm is silent. This is a catastrophic failure that leads to a breach.</p>
                </div>
            </div>
        </div>
    ),
  },
  {
    title: 'The Security Toolkit: An Integrated Defense',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
          <ToolsIcon className="w-32 h-32 text-cyan-400 mb-6" />
          <p className="text-3xl mb-6">No single tool is a silver bullet. Effective defense requires a suite of specialized tools working in concert.</p>
          <p className="text-xl">This strategy is known as <span className="text-cyan-400 font-bold">"Defense in Depth."</span></p>
      </div>
    ),
  },
  {
    title: 'Defense in Depth: A Layered Approach',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-3xl font-bold mb-4">Multiple, overlapping layers of security.</p>
        <p className="text-xl mb-6 max-w-3xl">If an attacker bypasses one control, another is waiting to detect or stop them. This creates a resilient security posture where a single point of failure is less likely to result in a full-scale breach.</p>
      </div>
    ),
  },
  {
    title: 'The New Frontier: The Cloud Battlefield',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <CloudIcon className="w-32 h-32 text-cyan-400 mb-6" />
            <p className="text-4xl font-bold mb-4">Securing the Ephemeral</p>
            <p className="text-xl text-gray-300">As infrastructure moves to the cloud, so do the attackers. Securing cloud environments presents unique challenges and requires new tools.</p>
        </div>
    ),
  },
  {
    title: 'Unique Threats in the Cloud',
    content: (
      <div className="space-y-4">
        <p>The cloud's scale and flexibility introduce new risks that don't exist in traditional data centers.</p>
        <div className="p-3 bg-red-900/40 rounded-lg"><p><strong className="text-red-400 text-xl">Misconfigurations:</strong> The #1 threat. Public S3 buckets, overly permissive IAM roles, and open security groups are common entry points.</p></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Insecure APIs:</strong> Exposed and poorly secured APIs can allow direct access to sensitive data and services.</p></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Credential Theft / Account Hijacking:</strong> Compromised user or service account credentials can give an attacker the "keys to the kingdom."</p></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Shared Tenancy Vulnerabilities:</strong> Exploiting flaws in the hypervisor to "escape" a virtual machine and access other customers' data.</p></div>
      </div>
    ),
  },
  {
    title: 'Cloud Security Tooling: CSPM',
    content: (
      <div className="text-center">
        <p className="text-3xl font-bold mb-4">Cloud Security Posture Management</p>
        <p className="text-xl mb-6">The automated compliance checker. CSPM tools continuously scan your cloud environment's configuration against security best practices and compliance frameworks (like CIS, NIST, PCI DSS).</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">A CSPM's primary job is to find and alert on misconfigurations <span className="text-red-500 font-bold">before</span> they can be exploited.</p>
      </div>
    ),
  },
  {
    title: 'Cloud Security Tooling: CWPP',
    content: (
      <div className="text-center">
        <p className="text-3xl font-bold mb-4">Cloud Workload Protection Platform</p>
        <p className="text-xl mb-6">The "EDR" for your cloud servers and containers. While CSPM secures the cloud control plane, CWPP secures the actual workloads running within it.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">CWPP provides vulnerability management, runtime protection, and EDR-like visibility for VMs, containers, and serverless functions.</p>
      </div>
    ),
  },
  {
    title: 'Cloud Security Tooling: CASB',
    content: (
      <div className="text-center">
        <p className="text-3xl font-bold mb-4">Cloud Access Security Broker</p>
        <p className="text-xl mb-6">The security guard for your SaaS applications (e.g., Office 365, Salesforce, Box). A CASB sits between your users and the cloud apps they access.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">It enforces security policies like data loss prevention (DLP), threat protection, and access control, giving you visibility and control over apps you don't own.</p>
      </div>
    ),
  },
  {
    title: 'Tool Deep Dive: SIEM',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <SIEMIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold">The Security Control Room</h2>
          <p>A <span className="text-cyan-400 font-bold">SIEM (Security Information and Event Management)</span> platform is the central nervous system of a Security Operations Center (SOC).</p>
          <p>Its primary function is to collect, aggregate, and analyze log data from across the entire IT environment.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'SIEM: Log Sources & Data Aggregation',
    content: (
        <div className="space-y-6">
            <p>A SIEM is only as good as the data it ingests. It collects logs from a massive range of sources, including:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-800/50 rounded-lg"><p>Firewalls</p></div>
                <div className="p-4 bg-gray-800/50 rounded-lg"><p>Servers</p></div>
                <div className="p-4 bg-gray-800/50 rounded-lg"><p>Endpoints (EDR)</p></div>
                <div className="p-4 bg-gray-800/50 rounded-lg"><p>Network Devices</p></div>
                <div className="p-4 bg-gray-800/50 rounded-lg"><p>Applications</p></div>
                <div className="p-4 bg-gray-800/50 rounded-lg"><p>Cloud Services</p></div>
            </div>
            <p>The SIEM then <span className="text-cyan-400">normalizes</span> this data, converting it into a common format for analysis.</p>
        </div>
    ),
  },
   {
    title: 'SIEM: Correlation Rules & Alerting',
    content: (
        <div className="space-y-6">
            <p>The "magic" of a SIEM is its ability to find the story hidden in the data. It uses <span className="text-cyan-400 font-bold">correlation rules</span> to link seemingly unrelated events into a potential attack chain.</p>
            <div className="p-4 bg-gray-800/50 rounded-lg mt-2">
              <p className="font-bold text-cyan-400 text-lg mb-2">Example Correlation Rule:</p>
              <p><strong className="text-gray-400">IF</strong> >100 failed logins for one user in 1 minute (from Active Directory logs),</p>
              <p><strong className="text-gray-400">AND THEN</strong> a successful login from a new country (from VPN logs),</p>
              <p><strong className="text-gray-400">AND THEN</strong> a large data exfiltration event (from Firewall logs),</p>
              <p><strong className="text-red-500">THEN</strong> create a CRITICAL alert for a compromised account.</p>
          </div>
        </div>
    ),
  },
  {
    title: 'Tool Deep Dive: EDR',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <EndpointIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold">The On-Site Detective</h2>
          <p>An <span className="text-cyan-400 font-bold">EDR (Endpoint Detection & Response)</span> tool is an agent installed on endpoints (laptops, servers) that provides deep visibility into device activity.</p>
           <p>It's like having a security camera and a security guard on every single computer.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'EDR: How It Works',
    content: (
      <div className="space-y-6">
        <p>EDR agents monitor low-level system events in real-time, looking for suspicious behavior. This includes:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-gray-800/50 rounded-lg"><p>Process Creation</p></div>
            <div className="p-4 bg-gray-800/50 rounded-lg"><p>Network Connections</p></div>
            <div className="p-4 bg-gray-800/50 rounded-lg"><p>File Modifications</p></div>
            <div className="p-4 bg-gray-800/50 rounded-lg"><p>Registry Changes</p></div>
        </div>
        <p>This data is sent to a central console where it is analyzed for Tactics, Techniques, and Procedures (TTPs) associated with known attackers.</p>
      </div>
    ),
  },
  {
    title: 'EDR: Response Capabilities',
    content: (
      <div className="space-y-6">
        <p>The "R" in EDR is crucial. It gives security analysts the power to take immediate action on a compromised device from anywhere in the world.</p>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl space-y-2 text-xl">
          <li><strong>Isolate Host:</strong> Disconnect the machine from the network to stop an attack from spreading.</li>
          <li><strong>Kill Process:</strong> Terminate a malicious process.</li>
          <li><strong>Quarantine File:</strong> Delete or move a malicious file.</li>
          <li><strong>Live Response:</strong> Open a remote shell on the device to perform deep forensic investigation.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'The Evolution: XDR (Extended Detection & Response)',
    content: (
      <div className="text-center">
        <p className="text-3xl font-bold mb-4">Beyond the Endpoint</p>
        <p className="text-xl mb-6">XDR is the next step. It expands on EDR by ingesting data not just from endpoints, but from other sources like email, cloud, and network sensors.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">XDR aims to provide a single, unified platform for detection and response across the entire IT ecosystem, breaking down the silos between different security tools.</p>
      </div>
    ),
  },
  {
    title: 'Tool Deep Dive: IDS/IPS',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <IDSIcon className="w-24 h-24 text-yellow-400 mb-4" />
          <h3 className="text-3xl font-bold mb-3">IDS: The Burglar Alarm</h3>
          <p className="text-center text-gray-300 text-lg"><span className="text-yellow-400 font-bold">(Intrusion Detection System)</span> Watches network traffic and <span className="font-bold">sends an alert</span> when it sees something malicious. It tells you about a break-in but can't stop it.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <ShieldCheckIcon className="w-24 h-24 text-green-400 mb-4" />
          <h3 className="text-3xl font-bold mb-3">IPS: The Automated Guard</h3>
          <p className="text-center text-gray-300 text-lg"><span className="text-green-400 font-bold">(Intrusion Prevention System)</span> Sits in the path of traffic and <span className="font-bold">actively blocks</span> attacks before they reach their target.</p>
        </div>
      </div>
    )
  },
  {
    title: 'IDS/IPS: Network vs. Host-Based',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">NIDS/NIPS</h3>
          <p className="text-center text-gray-300 text-lg"><strong>(Network-Based)</strong> Deployed at strategic points in the network to monitor traffic to and from all devices.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">HIDS/HIPS</h3>
          <p className="text-center text-gray-300 text-lg"><strong>(Host-Based)</strong> Runs on an individual host or device, monitoring its specific activity. (Functionality largely absorbed by modern EDR).</p>
        </div>
      </div>
    )
  },
  {
    title: 'Tool Deep Dive: Network Traffic Analysis (NTA)',
    content: (
        <div className="text-center">
            <p className="text-3xl font-bold mb-4">Seeing the Unseen</p>
            <p className="text-xl mb-6">NTA tools provide deep visibility into network communications. They go beyond simple blocking and alerting to understand the context of network traffic.</p>
            <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">NTA uses machine learning to create a baseline of normal network behavior, then alerts on anomalies that could indicate an attack, such as command-and-control (C2) traffic or lateral movement.</p>
        </div>
    ),
  },
  {
    title: 'Tool Deep Dive: SOAR',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="space-y-4 max-w-4xl">
          <h2 className="text-3xl font-bold">The Automated First Responder</h2>
          <p><span className="text-cyan-400 font-bold">SOAR (Security Orchestration, Automation, and Response)</span> platforms are the "robots" for your security team. They connect your tools together to automate repetitive tasks.</p>
           <p className="text-lg">The goal is to handle low-level alerts automatically, freeing up human analysts to focus on complex investigations.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'SOAR: Orchestration vs. Automation',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Automation</h3>
          <p className="text-gray-300 text-lg">Automating a single, specific task. <br/><em>Example: Automatically detonating a suspicious URL from an email in a sandbox.</em></p>
        </div>
        <div className="p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Orchestration</h3>
          <p className="text-gray-300 text-lg">Connecting multiple automated tasks together into a complete workflow that involves different security tools. <br/><em>Example: The sandbox result is used to block the URL on the firewall, search for the sender in the SIEM, and delete the email from all inboxes via the EDR.</em></p>
        </div>
      </div>
    )
  },
  {
    title: 'Tool Deep Dive: Digital Forensics',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <ForensicsIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold">Reconstructing the Crime Scene</h2>
          <p>Digital Forensics is the practice of collecting, preserving, and analyzing digital evidence in a way that is legally admissible.</p>
           <p className="text-lg">It's used after an incident to determine the full scope of the breach, identify the attacker's actions, and ensure all traces of them have been removed.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Forensics: Data Acquisition & Analysis',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Data Acquisition</h3>
          <p className="text-gray-300 text-lg">The first step is to create a forensically sound copy of the evidence. This includes capturing:</p>
          <ul className="list-disc list-inside ml-4">
              <li>Disk Images (a bit-for-bit copy of a hard drive)</li>
              <li>Memory Dumps (a snapshot of the live RAM)</li>
          </ul>
        </div>
        <div className="p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Timeline Analysis</h3>
          <p className="text-gray-300 text-lg">Analysts then use specialized tools to create a timeline of all events on the system (file access, program execution, logins) to reconstruct the attacker's activities step-by-step.</p>
        </div>
      </div>
    )
  },
  {
    title: 'The Role of Intelligence',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-4xl font-bold mb-4">Turning Data into Action</p>
            <p className="text-xl text-gray-300">Raw alerts are just noise. Threat Intelligence provides the context needed to understand and act on them.</p>
        </div>
    ),
  },
   {
    title: 'What is Threat Intelligence?',
    content: (
        <div className="text-center">
            <p className="text-3xl mb-6">Threat Intelligence (TI) is evidence-based knowledge—including context, mechanisms, indicators, implications, and actionable advice—about an existing or emerging menace or hazard to assets.</p>
            <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">In simple terms: It's the difference between seeing a footprint (<span className="text-cyan-400">Data</span>) and knowing it belongs to a 200kg bear that is 10 minutes ahead of you and heading east (<span className="text-red-500">Intelligence</span>).</p>
        </div>
    ),
  },
  {
    title: 'The Threat Intelligence Lifecycle',
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-center mb-6 text-xl">Intelligence is not just data; it's a refined product developed through a continuous, structured process.</p>
        <ol className="list-none space-y-1 text-center text-lg w-full max-w-4xl font-semibold flex flex-wrap justify-center items-center gap-x-2">
          <li className="text-cyan-400">Planning & Direction</li>
          <li><ChevronRightIcon className="w-6 h-6 text-gray-500"/></li>
          <li className="text-cyan-400">Collection</li>
          <li><ChevronRightIcon className="w-6 h-6 text-gray-500"/></li>
           <li className="text-cyan-400">Processing</li>
           <li><ChevronRightIcon className="w-6 h-6 text-gray-500"/></li>
           <li className="text-cyan-400">Analysis</li>
           <li><ChevronRightIcon className="w-6 h-6 text-gray-500"/></li>
           <li className="text-cyan-400">Dissemination</li>
            <li><ChevronRightIcon className="w-6 h-6 text-gray-500"/></li>
           <li className="text-cyan-400">Feedback</li>
        </ol>
      </div>
    ),
  },
  {
    title: 'Types of Threat Intelligence',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-800/40 rounded-lg">
          <h3 className="text-xl font-bold text-cyan-400">Strategic</h3>
          <p>High-level information for decision-makers. "Who is attacking our industry and why?"</p>
        </div>
        <div className="p-4 bg-gray-800/40 rounded-lg">
          <h3 className="text-xl font-bold text-cyan-400">Tactical</h3>
          <p>Information about attacker TTPs. "How are they attacking us?" Used by security teams to build defenses.</p>
        </div>
        <div className="p-4 bg-gray-800/40 rounded-lg">
          <h3 className="text-xl font-bold text-cyan-400">Operational</h3>
          <p>Information about a specific, impending attack. "They are attacking us right now with these IPs and domains."</p>
        </div>
      </div>
    )
  },
  {
    title: 'Indicators of Compromise (IOCs)',
    content: (
        <div className="space-y-6">
            <p>IOCs are the digital "fingerprints" an attacker leaves behind. They are the raw data that fuels threat intelligence.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-gray-800/50 rounded-lg"><HashIcon className="w-10 h-10 mx-auto mb-2 text-cyan-400"/><p>File Hashes</p></div>
                <div className="p-4 bg-gray-800/50 rounded-lg"><APTIcon className="w-10 h-10 mx-auto mb-2 text-cyan-400"/><p>IP Addresses</p></div>
                <div className="p-4 bg-gray-800/50 rounded-lg"><PhishingIcon className="w-10 h-10 mx-auto mb-2 text-cyan-400"/><p>Domain Names</p></div>
                <div className="p-4 bg-gray-800/50 rounded-lg"><RunbookIcon className="w-10 h-10 mx-auto mb-2 text-cyan-400"/><p>Malicious URLs</p></div>
            </div>
            <p>These indicators are fed into security tools (SIEM, EDR, Firewalls) to enable signature-based detection.</p>
        </div>
    ),
  },
  {
    title: 'The Pyramid of Pain',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3 space-y-4">
          <p>This model illustrates the relationship between the types of indicators you detect and how much "pain" it causes an adversary when you deny them those indicators.</p>
          <p>Blocking an attacker's <span className="text-cyan-400">IP address</span> is trivial for them to overcome. Detecting and blocking their core <span className="text-red-500">TTPs</span> (Tactics, Techniques, and Procedures) forces them to completely re-tool, causing the most pain.</p>
          <p className="font-bold">A mature defense focuses on detecting indicators at the top of the pyramid.</p>
        </div>
        <div className="md:w-1/3 flex justify-center">
            <PyramidIcon className="w-48 h-48 text-cyan-500" />
        </div>
      </div>
    ),
  },
  {
    title: 'Threat Intelligence Platforms (TIPs)',
    content: (
      <div className="text-center">
          <p className="text-3xl font-bold mb-4">Managing the Flood</p>
          <p className="text-xl mb-6">Organizations are flooded with IOCs from dozens of sources (open source, commercial feeds, government agencies). A TIP is a tool to manage this data.</p>
          <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">A TIP aggregates, de-duplicates, and enriches threat data, then integrates with other security tools to automate the dissemination of relevant indicators.</p>
      </div>
    ),
  },
  {
    title: 'Proactive Defense: Threat Hunting',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <SearchIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold">From Defensive to Offensive</h2>
          <p>Threat Hunting flips security on its head. Instead of waiting for an alarm, hunters start with the "Assume Breach" mindset and proactively search for attackers already hiding in the network.</p>
          <p>It is an intelligence-driven, human-led process designed to find the threats that all your automated tools missed.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'The Threat Hunting Loop',
    content: (
      <div className="flex flex-col items-center">
        <p className="text-center mb-6 text-xl">Threat hunting is not random searching; it's a structured, repeatable process.</p>
        <ol className="list-none space-y-1 text-center text-lg w-full max-w-4xl font-semibold">
          <li className="text-cyan-400 p-3 bg-gray-800/50 rounded-lg">1. Create Hypothesis (e.g., "An attacker is using PowerShell for lateral movement")</li>
          <li className="text-2xl text-gray-500">↓</li>
          <li className="text-cyan-400 p-3 bg-gray-800/50 rounded-lg">2. Investigate (Search logs and data for supporting evidence)</li>
          <li className="text-2xl text-gray-500">↓</li>
          <li className="text-cyan-400 p-3 bg-gray-800/50 rounded-lg">3. Uncover New Patterns (Find malicious TTPs)</li>
          <li className="text-2xl text-gray-500">↓</li>
          <li className="text-cyan-400 p-3 bg-gray-800/50 rounded-lg">4. Inform & Enrich Analytics (Create new automated detections)</li>
        </ol>
        <p className="mt-4">Each successful hunt makes your automated defenses stronger.</p>
      </div>
    ),
  },
  {
    title: 'Proactive Defense: Deception Technology',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <TrapIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold">Laying Traps for Attackers</h2>
          <p>Instead of just looking for attackers, why not lay traps for them? Deception technology creates a minefield of lures and decoys within your network.</p>
          <p>This allows you to expose, study, and mislead attackers, turning your environment into a weapon against them.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Deception in Action: Honeypots & Honeytokens',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Honeypots</h3>
          <p className="text-center text-gray-300 text-lg">Decoy systems (servers, workstations, network devices) that appear to be legitimate parts of the network. Any interaction with them is, by definition, malicious and generates a high-fidelity alert.</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold mb-3">Honeytokens</h3>
          <p className="text-center text-gray-300 text-lg">Decoy data planted in real systems. Examples include fake user accounts, AWS API keys in code, or fake records in a database. If a honeytoken is ever used, you know you've been breached.</p>
        </div>
      </div>
    )
  },
  // PART 3: THE PLAN
  {
    title: 'Part 3: The Plan',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <ClipboardDocumentCheckIcon className="w-32 h-32 text-cyan-400 mb-6" />
            <p className="text-4xl font-bold mb-4">Building a Resilient Incident Response Program</p>
            <p className="text-xl text-gray-300">Detection is knowing the house is on fire. Response is the plan to put it out, rebuild, and prevent it from happening again.</p>
        </div>
    ),
  },
  {
    title: 'The IR Lifecycle (NIST Framework)',
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-center mb-6 text-xl">The NIST framework provides a structured, repeatable process for handling incidents. It's a continuous loop designed for constant improvement.</p>
        <ol className="list-none space-y-1 text-center text-lg w-full max-w-4xl font-semibold flex flex-wrap justify-center items-center gap-x-2">
          <li className="text-cyan-400">Preparation</li>
          <li><ChevronRightIcon className="w-6 h-6 text-gray-500"/></li>
          <li className="text-cyan-400">Detection & Analysis</li>
          <li><ChevronRightIcon className="w-6 h-6 text-gray-500"/></li>
           <li className="text-cyan-400">Containment, Eradication & Recovery</li>
           <li><ChevronRightIcon className="w-6 h-6 text-gray-500"/></li>
           <li className="text-cyan-400">Post-Incident Activity</li>
        </ol>
      </div>
    ),
  },
  {
    title: 'IR Phase 1: Preparation',
    content: (
      <div className="space-y-6">
          <p className="text-3xl font-bold">The work you do <span className="text-cyan-400">before</span> an incident is the single biggest predictor of success.</p>
          <ul className="list-disc list-inside text-xl space-y-3">
              <li>Develop and maintain an Incident Response Plan.</li>
              <li>Establish a formal CSIRT with defined roles.</li>
              <li>Deploy and configure necessary security tools (SIEM, EDR, etc.).</li>
              <li>Conduct regular training and simulations.</li>
              <li>Ensure you have access to forensic capabilities.</li>
          </ul>
      </div>
    ),
  },
  {
    title: 'IR Phase 2: Detection & Analysis',
    content: (
      <div className="space-y-6">
          <p className="text-3xl font-bold">Is it a real incident? How bad is it?</p>
          <ul className="list-disc list-inside text-xl space-y-3">
              <li>Analyze initial alerts to validate them (filter out false positives).</li>
              <li>Determine the scope of the incident: Who is affected? What systems? What data?</li>
              <li>Prioritize the incident based on its business impact (triage).</li>
              <li>Document every action taken in an incident log.</li>
          </ul>
      </div>
    ),
  },
  {
    title: 'IR Phase 3: Containment, Eradication & Recovery',
    content: (
      <div className="space-y-6">
          <p className="text-3xl font-bold">Stop the bleeding, remove the threat, and get back to business.</p>
          <ul className="list-disc list-inside text-xl space-y-3">
              <li><strong className="text-cyan-400">Containment:</strong> Isolate affected systems to prevent further damage (e.g., disconnect from network).</li>
              <li><strong className="text-cyan-400">Eradication:</strong> Remove all artifacts of the attacker from the environment (malware, backdoors, compromised accounts).</li>
              <li><strong className="text-cyan-400">Recovery:</strong> Restore systems to normal operation from clean backups and begin monitoring for any signs of the attacker's return.</li>
          </ul>
      </div>
    ),
  },
  {
    title: 'IR Phase 4: Post-Incident Activity',
    content: (
      <div className="space-y-6">
          <p className="text-3xl font-bold">Learning from what happened to prevent it from happening again.</p>
          <ul className="list-disc list-inside text-xl space-y-3">
              <li>Conduct a <span className="text-cyan-400">blameless post-mortem</span> or "lessons learned" session.</li>
              <li>Identify the root cause of the incident.</li>
              <li>Create a final report detailing the incident timeline, impact, and actions taken.</li>
              <li>Update the Incident Response Plan and security controls based on the findings.</li>
              <li>Track completion of all follow-up actions.</li>
          </ul>
      </div>
    ),
  },
  {
    title: 'The Response Team (CSIRT)',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="space-y-4 max-w-3xl">
          <p>A <span className="text-cyan-400 font-bold">CSIRT (Cyber Security Incident Response Team)</span> is the pre-defined group that manages a crisis. It's a cross-functional team with clear roles and responsibilities.</p>
          <p>This avoids chaos and ensures a coordinated, efficient response.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'CSIRT Roles & Responsibilities',
    content: (
      <div className="space-y-4">
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Incident Commander:</strong> The overall strategic leader. Makes key decisions, manages resources.</p></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Technical Lead:</strong> Leads the hands-on investigation and remediation efforts.</p></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Communications Lead:</strong> Manages all internal and external messaging to stakeholders, customers, and media.</p></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Scribe:</strong> Meticulously documents all actions, decisions, and findings.</p></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">Team Members:</strong> Security Analysts, IT staff, Legal, HR, etc.</p></div>
      </div>
    ),
  },
  {
    title: 'The Communication Plan',
    content: (
      <div className="text-center">
        <p className="text-3xl font-bold mb-4">Who to tell, what to say, and when to say it.</p>
        <p className="text-xl mb-6">A poor communication strategy can cause more damage than the incident itself. The plan must define:</p>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl space-y-2">
          <li>Communication channels (email, status page, etc.).</li>
          <li>Stakeholder notification lists (internal and external).</li>
          <li>Pre-approved message templates.</li>
          <li>When and how to engage legal counsel and law enforcement.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Playbooks & Runbooks: The Plan in Action',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <PlaybookIcon className="w-24 h-24 text-cyan-400 mb-4" />
          <h3 className="text-3xl font-bold mb-3">Playbooks</h3>
          <p className="text-center text-gray-300 text-lg">High-level guides that define the strategy and phases for responding to a specific incident type (e.g., Ransomware Playbook).</p>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
          <RunbookIcon className="w-24 h-24 text-cyan-400 mb-4" />
          <h3 className="text-3xl font-bold mb-3">Runbooks</h3>
          <p className="text-center text-gray-300 text-lg">Detailed, step-by-step instructions for specific technical tasks within a playbook (e.g., How to isolate a host using the EDR).</p>
        </div>
      </div>
    )
  },
  {
    title: 'Practice Makes Permanent: Incident Simulations',
    content: (
      <div className="space-y-4">
        <p className="text-xl">A plan you've never practiced is just a piece of paper. Simulations build "muscle memory" before a real crisis.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-800/50 rounded-lg flex flex-col justify-center">
                <h3 className="font-bold text-xl mb-2">Tabletop Exercise</h3>
                <p>A discussion-based session to walk through a scenario and find gaps in the plan.</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg flex flex-col justify-center">
                <h3 className="font-bold text-xl mb-2">Red vs. Blue Team</h3>
                <p>An adversarial exercise where an ethical "Red Team" attacks, and the "Blue Team" defends.</p>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg flex flex-col justify-center">
                <h3 className="font-bold text-xl mb-2">Purple Team</h3>
                <p>A collaborative exercise where both teams work together to improve detections.</p>
            </div>
        </div>
      </div>
    )
  },
  {
    title: 'Legal & Regulatory Considerations',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <GavelIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p>Incident response doesn't happen in a vacuum. Organizations must comply with various laws and regulations.</p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg">
            <li><strong>Data Breach Notification Laws:</strong> Mandate when and how you must notify affected individuals.</li>
            <li><strong>Evidence Preservation:</strong> Data must be handled in a forensically sound manner if it may be used in court.</li>
            <li><strong>Attorney-Client Privilege:</strong> Involving legal counsel early can protect sensitive communications.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Legal & Regulatory Deep Dive',
    content: (
      <div className="space-y-3">
        <p>Compliance requirements significantly shape the IR process. Failing to comply can result in massive fines.</p>
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">GDPR (General Data Protection Regulation):</strong> Requires notification to authorities within <span className="text-red-400">72 hours</span> for breaches affecting EU citizens.</p></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">HIPAA (Health Insurance Portability and Accountability Act):</strong> Strict rules and notification requirements for protecting patient health information in the US.</p></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">PCI DSS (Payment Card Industry Data Security Standard):</strong> Mandates specific security controls and IR capabilities for organizations that handle credit card data.</p></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><p><strong className="text-cyan-400 text-xl">SOX (Sarbanes-Oxley Act):</strong> Requires public companies to have controls for ensuring the integrity and security of their financial data.</p></div>
      </div>
    ),
  },
  {
    title: 'Measure & Improve: Key Metrics',
    content: (
      <div className="space-y-6">
        <p>You can't improve what you don't measure. These two metrics are the ultimate measure of a successful incident response program.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
            <EyeIcon className="w-16 h-16 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">MTTD</h3>
            <p className="text-center text-gray-300"><span className="text-cyan-400 font-bold">Mean Time to Detect.</span> How long until we find them? (Goal: Low)</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg">
            <ClockIcon className="w-16 h-16 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">MTTR</h3>
            <p className="text-center text-gray-300"><span className="text-cyan-400 font-bold">Mean Time to Respond.</span> How long until we fix it? (Goal: Low)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The Ultimate Safety Net: BCP, DR, and Backups',
    content: (
      <div className="flex flex-col items-center text-center">
        <ArchiveBoxIcon className="w-32 h-32 text-cyan-400 mb-6"/>
        <p className="text-xl mb-6">Incident response is reactive; resilience is proactive.</p>
        <div className="text-left text-lg space-y-3 bg-gray-800/40 p-6 rounded-lg">
          <p><strong className="text-cyan-400">Business Continuity (BCP):</strong> The plan to keep the business running during a crisis.</p>
          <p><strong className="text-cyan-400">Disaster Recovery (DR):</strong> The technical plan to restore IT systems after a disaster.</p>
          <p><strong className="text-cyan-400">Backups:</strong> Your last line of defense. Follow the 3-2-1 rule: 3 copies, 2 different media, 1 off-site and offline (immutable).</p>
        </div>
      </div>
    ),
  },
  // PART 4: LEARNING FROM THE FIELD
  {
    title: 'Part 4: Learning from the Field',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <CaseStudyIcon className="w-32 h-32 text-cyan-400 mb-6" />
            <p className="text-4xl font-bold mb-4">Applying Concepts to Real-World Events</p>
            <p className="text-xl text-gray-300">"Those who cannot remember the past are condemned to repeat it." Studying breaches is critical for improving our collective defense.</p>
        </div>
    ),
  },
  {
    title: 'Case Study: SolarWinds (2020)',
    content: (
      <div className="p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold text-cyan-400 mb-2">The Supply Chain Attack</h3>
          <p className="text-xl">A sophisticated nation-state group (APT29) compromised the build environment of SolarWinds, a major IT management software company. They injected malicious code into a legitimate software update for the Orion product.</p>
          <p className="mt-4 text-xl">This "trojanized" update was then digitally signed and distributed to thousands of customers, creating a backdoor in some of the most secure organizations in the world.</p>
          <p className="mt-4 text-2xl text-red-400 italic"><strong>Lesson:</strong> Your security is only as strong as your vendors'. Trust nothing, verify everything. Monitor for anomalous behavior even from "trusted" software.</p>
        </div>
    ),
  },
  {
    title: 'Case Study: Colonial Pipeline (2021)',
    content: (
      <div className="p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold text-cyan-400 mb-2">The Ransomware Catastrophe</h3>
          <p className="text-xl">A ransomware group (DarkSide) gained access to the IT network of the largest fuel pipeline in the US. The company shut down the pipeline out of fear the attack could spread to the operational technology (OT) network, causing a massive fuel shortage.</p>
          <p className="mt-4 text-xl">The initial entry point? A single compromised password for a VPN account that <span className="font-bold">did not have Multi-Factor Authentication (MFA) enabled</span>.</p>
          <p className="mt-4 text-2xl text-red-400 italic"><strong>Lesson:</strong> The basics matter most. A single missing fundamental control can lead to catastrophic national-level failure.</p>
        </div>
    ),
  },
  {
    title: 'Case Study: Equifax (2017)',
    content: (
      <div className="p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold text-cyan-400 mb-2">The Cost of Unpatched Systems</h3>
          <p className="text-xl">Attackers exploited a critical, publicly known vulnerability in the Apache Struts web application framework to gain access to Equifax's network. The patch for this vulnerability had been available for two months.</p>
          <p className="mt-4 text-xl">The attackers spent months moving laterally and exfiltrating the personal data of over 147 million people. The failure was not one of detection, but of basic vulnerability management.</p>
          <p className="mt-4 text-2xl text-red-400 italic"><strong>Lesson:</strong> You can't detect your way out of a poor security foundation. Patch management is non-negotiable.</p>
        </div>
    ),
  },
  {
    title: 'Case Study: NotPetya (2017)',
    content: (
      <div className="p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-3xl font-bold text-cyan-400 mb-2">The Wiper in Disguise</h3>
          <p className="text-xl">Initially appearing as ransomware, NotPetya was in fact a destructive "wiper" malware designed by a nation-state to cause maximum damage, primarily targeting Ukraine.</p>
          <p className="mt-4 text-xl">It spread rapidly as a worm using the EternalBlue exploit (the same one used by WannaCry). The "ransom" was a decoy; the encryption was irreversible, and the goal was pure destruction, causing billions in damages globally.</p>
          <p className="mt-4 text-2xl text-red-400 italic"><strong>Lesson:</strong> Understand attacker intent. Not all attacks are financially motivated; some are purely destructive. Segmentation is key to limiting the blast radius.</p>
        </div>
    ),
  },
  {
    title: 'Structuring Knowledge: The MITRE ATT&CK Framework',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <MitreIcon className="w-40 h-40 text-cyan-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p>The <span className="text-cyan-400 font-bold">MITRE ATT&CK Framework</span> is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. Think of it as the "periodic table of hacking."</p>
          <p>It provides a common language for security professionals to describe and analyze attacker behavior.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'MITRE ATT&CK: Tactics, Techniques, & Procedures',
    content: (
        <div className="space-y-6">
            <p>ATT&CK is organized into a matrix:</p>
            <ul className="list-disc list-inside text-xl space-y-3">
                <li><strong className="text-cyan-400">Tactics:</strong> The adversary's technical goals (the "why"). Examples: Initial Access, Execution, Lateral Movement, Exfiltration.</li>
                <li><strong className="text-cyan-400">Techniques:</strong> How a tactic is achieved (the "how"). Example: To achieve Initial Access, an attacker might use the technique "Phishing".</li>
                <li><strong className="text-cyan-400">Procedures:</strong> The specific implementation of a technique (the "exact how"). Example: A specific phishing email with a specific malware payload.</li>
            </ul>
        </div>
    ),
  },
  {
    title: 'Using MITRE ATT&CK',
    content: (
      <div className="space-y-6">
          <p>Security teams use the framework to:</p>
          <ul className="list-disc list-inside text-xl space-y-3">
              <li><strong>Map Detection Coverage:</strong> Visualize which techniques your tools can and cannot detect.</li>
              <li><strong>Prioritize Gaps:</strong> Identify and prioritize improvements to your defensive posture.</li>
              <li><strong>Structure Threat Hunts:</strong> Use TTPs as the basis for hunting hypotheses.</li>
              <li><strong>Adversary Emulation:</strong> Simulate specific APT groups to test your defenses against their known TTPs.</li>
          </ul>
      </div>
    ),
  },
   // PART 5: CONCLUSION
  {
    title: 'Conclusion',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-4xl font-bold mb-4">Final Thoughts & Future Outlook</p>
            <p className="text-xl text-gray-300">Summarizing our journey and looking ahead at what's next in the world of cyber defense.</p>
        </div>
    ),
  },
  {
    title: 'The Human Element: Your Strongest and Weakest Link',
    content: (
      <div className="text-center flex flex-col justify-center h-full">
        <p className="text-3xl font-bold mb-4">Technology alone is not enough.</p>
        <p className="text-xl mb-6">Your employees can be your first line of defense or your biggest vulnerability. A continuous <span className="text-cyan-400 font-bold">Security Awareness Training</span> program is essential.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">A well-trained workforce that can spot and report phishing attempts is more effective than any email filter.</p>
      </div>
    ),
  },
  {
    title: 'The Future: AI & Machine Learning in Detection',
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-4xl space-y-4">
          <p>The future of threat detection lies in leveraging Artificial Intelligence and Machine Learning to analyze vast amounts of data at machine speed.</p>
          <p>This will enable us to:</p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-lg">
            <li>Detect subtle anomalies that humans would miss.</li>
            <li>Automate the investigation of complex alerts.</li>
            <li>Predict potential attacks based on precursor activity.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Key Takeaways',
    content: (
      <div className="space-y-6">
        <ul className="list-none space-y-4 text-xl">
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Assume Breach:</strong> Shift from prevention-only to rapid detection and response.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Defense in Depth:</strong> Layered, integrated tools provide the necessary visibility.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Plan & Practice:</strong> An untested plan is a failed plan. Regular simulations are crucial.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Learn Relentlessly:</strong> Use frameworks like MITRE, study breaches, and conduct blameless post-mortems to constantly improve.</div></li>
        </ul>
      </div>
    ),
  },
  {
    title: 'References & Further Reading',
    content: (
      <div className="text-sm space-y-3 overflow-y-auto h-full pr-4">
        <p>This presentation was compiled using information from numerous industry-standard sources, including:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>NIST Special Publication 800-61:</strong> Computer Security Incident Handling Guide.</li>
          <li><strong>The MITRE ATT&CK® Framework:</strong> attack.mitre.org</li>
          <li><strong>Lockheed Martin's Cyber Kill Chain®:</strong> lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html</li>
          <li><strong>SANS Institute Reading Room & Posters:</strong> sans.org</li>
          <li><strong>Verizon Data Breach Investigations Report (DBIR):</strong> verizon.com/business/reports/dbir/</li>
          <li><strong>IBM's Cost of a Data Breach Report.</strong></li>
          <li><strong>OWASP Top 10 Project:</strong> owasp.org</li>
        </ul>
        <p className="pt-4">The concepts and case studies reflect common knowledge and analysis within the cybersecurity community.</p>
      </div>
    ),
  },
  {
    title: 'Q&A',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
        <p className="text-6xl font-bold text-cyan-400 mb-8">Thank You</p>
        <p className="text-4xl text-gray-300">Questions?</p>
      </div>
    ),
  },
];

const App: React.FC = () => {
  return <Presentation slides={slides} />;
};

export default App;
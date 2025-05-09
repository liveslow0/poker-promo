// pages/stories.js
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Stories() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const stories = [
    {
      title: 'Doyle Brunson vs Tom Dwan – Battle of Generations',
      content: `When legends clash, it's never just about the cards — it's about time, legacy, and ego.

In a dimly lit studio surrounded by bulletproof glass and poker royalty, the old gunslinger Doyle Brunson — ten-time WSOP bracelet winner, author of Super/System, and godfather of Texas Hold’em — faced a rising storm in the form of Tom "durrrr" Dwan, a fearless young online phenom with an unpredictable style and nerves of steel.

The hand? Legendary.

Blinds were $300/$600. Dwan opened with 6♦7♦ from the cutoff. Brunson, in the small blind, looked down at A♥Q♠ and made the call. The flop came 5♦8♣9♠ — a dream for Dwan, who flopped the nuts. Brunson checked, and Dwan bet $2,000. Doyle called. The turn brought the A♠. Suddenly, Doyle had top pair — but still, no clue he was drawing dead. He check-called another $5,000 bet.

Then came the river: a brick — 2♣. Doyle checked again. Dwan bet $17,000.

Now came the moment poker fans live for.

Brunson sat back, arms crossed. His eyes — shaded by the cowboy hat — squinted toward Dwan, who sat motionless, betraying nothing. Doyle counted chips. Then, calmly, he check-raised to $45,000.

The crowd held its breath. Dwan barely moved a muscle. After a short pause, he reraised again — to $104,000.

Doyle tanked. He knew Dwan was capable of anything — bluffs, overbets, total madness. But could he really be bluffing this time?

After several minutes, Doyle laid it down.

Dwan smiled. “Nice fold,” he said, as he flipped over the straight — the nuts.

Doyle smirked, unfazed. “You’ll learn that in 40 years or so,” he drawled.

It wasn’t just a hand. It was a moment. A nod of respect from the future to the past, and a warning shot from the future king.`,
    },
    {
      title: 'Phil Hellmuth vs Loose Cannon – Can The Poker Brat Finally Win?',
      content: `He’s loud. He’s arrogant. But can he back it up?

Phil Hellmuth, the self-proclaimed “Poker Brat” and holder of 17 WSOP bracelets, has always had a love-hate relationship with poker fans. They cheer his wins. They meme his meltdowns. But in one unforgettable PokerStars Big Game episode, Hellmuth found himself in a psychological war — not with another legend, but with an amateur: the "Loose Cannon."

The Loose Cannon was an unknown qualifier — a young math teacher named Ernest Wiggins from Washington, D.C., with just a $100,000 stake to play with. Hellmuth underestimated him from the start. Big mistake.

On one particular hand, Hellmuth raised with K♣K♦. Wiggins called with 9♣10♣. The flop came 8♣J♠Q♦ — boom. Wiggins flopped the nut straight. Hellmuth, holding an overpair, bet aggressively — $6,000. Wiggins called, barely blinking.

The turn was a 2♣ — giving Wiggins a straight and a flush draw. Phil bet again: $14,000.

“I think he’s on tilt,” whispered Antonio Esfandiari from the rail. “He has no clue what he’s up against.”

The river came 4♦. Wiggins checked — a brilliant trap. Hellmuth bet $25,000. Wiggins snap-called.

Phil flipped over his kings with confidence.

Then the table erupted when Wiggins showed the straight.

“WHAT is he DOING calling me there?!” Phil exploded. “He called $25,000 with just a straight? Are you kidding me?!”

No, Phil. He wasn’t kidding. And he walked away with $150,000 in profit and the respect of every home game hero across America.`
    },
    {
      title: 'Daniel Negreanu vs Tony G – Two Monster Hands Collide',
      content: `What happens when two of poker’s biggest mouths have monster hands at the same time? A battle for the ages.

In a high-stakes televised cash game, Daniel “Kid Poker” Negreanu found himself across the felt from Antanas Guoga — better known as Tony G, the bombastic Lithuanian poker beast known for tilting opponents with his loud, taunting table talk.

The hand began innocently enough.

Negreanu looked down at Q♦Q♣ and raised under the gun. Tony G, on the button, peeked at A♠K♠ and reraised. Daniel, ever the entertainer, tried to bait him with a speech.

“I have a feeling you’re trying to steal again, Tony.”

Tony laughed. “I never steal. I take what's mine.”

Daniel called.

The flop came Q♠J♠9♥. Trouble was brewing. Daniel flopped top set. Tony had a gutshot straight draw and a royal flush draw.

They both checked. The trap was set.

Turn: 10♠.

Fireworks.

Tony bet $5,000. Daniel raised to $20,000. Tony reraised to $50,000.

Negreanu stood up, paced, smiled at the camera. “Well, if I go broke, I go broke,” he said as he shoved for $120,000 more.

Tony snap-called.

Both players stood as the cards were revealed. “Wow,” Tony muttered. “This is gonna be a sick one.”

The river: 2♦.

Negreanu's top set held. The table exploded in applause.

Tony took it like a champ… sort of.

“I’ll get you next time, Daniel! You’re going on the bike!”

Daniel laughed. “I love you, Tony. Even when you lose, you make it fun.”

That hand was more than poker — it was theater. Two giants with massive hands, massive egos, and massive respect.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#24382c] text-white font-sans pt-24 px-6">
      <h1 className="text-4xl font-bold text-center text-[#ffcc53] mb-12">Poker Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {stories.map((story, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            className="bg-[#2f4a3b] p-6 rounded-2xl shadow-xl hover:scale-[1.02] transform transition duration-300 cursor-pointer group"
          >
            <h2 className="text-2xl font-semibold text-[#ffcc53] mb-4 group-hover:underline">
              {story.title}
            </h2>
            <p className="text-md leading-relaxed line-clamp-6 group-hover:line-clamp-none transition-all duration-500 whitespace-pre-line">
              {story.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

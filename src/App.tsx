import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Instagram,
  Youtube,
  Music,
  Disc,
  Headphones,
  Radio,
  Waves,
  Menu,
  X
} from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-300"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="text-4xl text-purple-400"
      >
        {icon}
      </motion.div>
      <h3 className="font-semibold text-lg text-white">{title}</h3>
      <p className="text-gray-400 text-sm text-center leading-relaxed">{desc}</p>
    </motion.div>
  );
}

const SongCard = ({ lyrics, title, index }: { lyrics: string; title: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, rotate: 1 }}
      className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-2xl shadow-xl hover:shadow-purple-500/20 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <p className="text-gray-300 text-base whitespace-pre-line leading-relaxed">{lyrics}</p>
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <p className="font-semibold text-purple-400 text-lg flex items-center gap-2">
              <Music size={18} />
              {title}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FloatingMusicNote = ({ delay = 0, left = '10%' }: { delay?: number; left?: string }) => {
  return (
    <motion.div
      className="absolute text-purple-400/20"
      style={{ left }}
      initial={{ y: '100vh', opacity: 0 }}
      animate={{
        y: '-100vh',
        opacity: [0, 1, 1, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        delay,
        ease: 'linear',
      }}
    >
      <Music size={40} />
    </motion.div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gradient-to-t from-black via-gray-900/50 to-transparent border-t border-gray-800/50 backdrop-blur-sm relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            StyloEFX
          </span>
          <span className="text-sm text-gray-400">Cinematic Visuals & Audio</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.youtube.com/@styloefx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 flex items-center gap-2 transition-colors duration-300"
          >
            <Youtube size={24} />
            <span className="hidden sm:inline">YouTube</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/styloefx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 flex items-center gap-2 transition-colors duration-300"
          >
            <Instagram size={24} />
            <span className="hidden sm:inline">Instagram</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-6 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} StyloEFX. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default function StyloEFX() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const songs = [
    {
      lyrics: `I'm just waking up at 10am\nI skip my breakfast\nI wanna watch movie Day by night\nI won't do work\nI will never sleep before 11pm\nIt's my life\nIt's my routine\nI want to be alone\nI won't trust anyone\nI don't like anything too much\nI am not a bad but also not a good\nJust Saying.This my life`,
      title: "I'm just waking up",
    },
    {
      lyrics: `Magarasi Magarasanum\nOnnu sernthachu\nKalayana mudichivaika\nNeram koodivanthachu\nKetti Mellam adichum\nPonnu sirichum malaiya mathiyachu\nIrukudumbam onnu sera\nManmakkal aananthathil sirika`,
      title: "Ketti Mellam",
    },
    {
      lyrics: `You Be The one\nJust raise like a sun\nGo on your own way,\ndont follow anyone\nNo matter what anyone says,\ndon't be offended\nBe happy with everyone\nLearn good things and\nteach them to others\nDon't tell anyone or\nanything until you win\nYou too, may you win and\nmake others Victorious\nJust forget the victory\nLike the setting sun`,
      title: "Raise Like a Sun",
    },
    {
      lyrics: `Just looking at you is enough\nIt's enough to just listen\nto you talk\nIt's enough for you to know\nthat I love you\nIt's enough making me happy\nby seeing your smile\nThis is enough for me\nIt's enough...`,
      title: "It's enough",
    },
    {
      lyrics: `En thanthai yaga unnai parpaenae\nEn thaai pola unna valarpaenae\nEn ulagae ne vada unna konjida\nEn uyirae vada polam ooru suthida`,
      title: "En Thanthaiyaga",
    },
    {
      lyrics: `Chinna siripum sirikala\nPattathellam ethuvum marakala\nEn iraiva intha vazhvae\nEpo varum enthann saavae\nNan seitha paavam ethuvo\nNee kuduthah  vazhkai ithuvo\nIntha thanimaiyin nilai marumo`,
      title: "Chinna Siripum",
    },
    {
      lyrics: `engirundhu vanthavanuu ninaikatha\nunnakaga poranthavan naandhana \nvena verupellam thalli  vechi\nvanthu en kaigal anachi \nada da unna parka vanthen\nada da unnodu pesa virumbinaen\nada da en vazhvin artham neeyae\nun siripinin oliyum nanthanae\nunnodu sandaiyil sirika\nnamakaga nam ulagam piraka\nNam kadhalai sernthu poliya\nPidithathai alli koduka \nUlaginil engum paraka`,
      title: "Kaigal Anachi",
    },
    {
      lyrics: `neeyum avalum sernthal  \nsandhosa siripum koodi varu \nkadhal pookal poothu kulungum \nkarumegam vilagum \nvelicham unnai anaikum\nvazhthu malaigal kotti theerkum`,
      title: "Neeyum Avalum",
    },
    {
      lyrics: `nam kaetpadhai avan kuduthuvital\nintha ulagamae irunduvidum\nnam ninaithathai avan nadathivittal\npoo chaediyil pookal udhirndhuvidum`,
      title: "En Iraiva",
    },
  ].sort((a, b) => a.lyrics.length - b.lyrics.length);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      <FloatingMusicNote delay={0} left="5%" />
      <FloatingMusicNote delay={3} left="20%" />
      <FloatingMusicNote delay={6} left="80%" />
      <FloatingMusicNote delay={9} left="90%" />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-purple-500/10'
            : 'bg-gradient-to-r from-purple-900/50 via-gray-900/50 to-black/50 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 flex items-center gap-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Disc size={32} />
            </motion.div>
            StyloEFX
          </motion.h1>

          <nav className="hidden md:flex gap-8 text-gray-300">
            {['Home', 'Portfolio', 'About'].map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section === 'Home' ? 'top' : section.toLowerCase())}
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="hover:text-white transition-colors duration-300">{section}</span>
                <motion.span
                  className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
            >
              <nav className="flex flex-col gap-4 p-6">
                {['Home', 'Portfolio', 'About'].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section === 'Home' ? 'top' : section.toLowerCase())}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-left text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-lg"
                  >
                    {section}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="h-20" />

      <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
        <motion.div
          className="absolute left-4 md:left-12 top-1/2 transform -translate-y-1/2 text-pink-400"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <Radio size={48} className="md:w-20 md:h-20" />
        </motion.div>

        <motion.div
          className="absolute right-4 md:right-12 top-1/2 transform -translate-y-1/2 text-purple-400"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -15, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <Waves size={48} className="md:w-20 md:h-20" />
        </motion.div>

        <div className="text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
            >
              Creative Visuals
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 max-w-xl md:max-w-3xl mx-auto text-gray-400 text-base md:text-xl leading-relaxed px-4"
          >
            At StyloEFX, we craft cinematic edits, stylish visuals, and digital magic that define the future of media.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-10 flex gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              Explore Portfolio
            </motion.a>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="portfolio"
        className="px-4 md:px-10 py-16 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        >
          Our Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {songs.map((song, i) => (
            <SongCard key={i} lyrics={song.lyrics} title={song.title} index={i} />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="px-4 md:px-10 py-20 overflow-hidden relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 rounded-3xl" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 text-center text-white drop-shadow-lg relative z-10"
        >
          Featured Songs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 italic text-lg relative z-10"
        >
          DM for Custom Lyrics
        </motion.p>

        <div className="w-full overflow-hidden relative">
          <motion.div
            className="flex gap-6 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {songs.concat(songs).map((song, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-md border border-purple-700/50 rounded-2xl shadow-2xl w-72 flex-shrink-0 hover:border-pink-500/50 transition-all duration-500"
              >
                <div className="p-6">
                  <p className="text-gray-200 text-sm whitespace-pre-line font-medium tracking-tight leading-relaxed">
                    {song.lyrics}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <p className="font-bold text-purple-300 text-center flex items-center justify-center gap-2">
                      <Music size={18} />
                      {song.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="px-4 md:px-10 py-20 md:py-32 text-center max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        >
          About StyloEFX
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-base md:text-xl leading-relaxed mb-12"
        >
          StyloEFX is more than just a channel — it's a creative journey. With a passion for premium edits and artistic visuals, we bring cinematic experiences to life, blending technology with imagination.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={<Music />}
            title="Creative Vision"
            desc="Cinematic storytelling and bold visual language."
          />
          <Feature
            icon={<Disc />}
            title="Innovation"
            desc="Exploring new textures, soundscapes, and techniques."
          />
          <Feature
            icon={<Headphones />}
            title="Passion"
            desc="Relentless craft and obsession for detail."
          />
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

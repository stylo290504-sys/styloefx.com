import React, { useState, useEffect, useRef } from 'react';
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
  X,
  Sparkles,
  Play,
  ExternalLink,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: number;
};

function Feature({ icon, title, desc, delay = 0 }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="relative p-8 overflow-hidden transition-all duration-500 border group bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 rounded-3xl border-slate-700/30 backdrop-blur-xl hover:border-cyan-500/40"
    >
      <motion.div
        className="absolute inset-0 opacity-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 group-hover:opacity-100"
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="p-4 text-cyan-400 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
        >
          {React.cloneElement(icon as React.ReactElement, { size: 32 })}
        </motion.div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      />
    </motion.div>
  );
}

type LyricsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  lyrics: string;
  title: string;
  instagramUrl?: string;
};

const LyricsModal: React.FC<LyricsModalProps> = ({ isOpen, onClose, lyrics, title, instagramUrl }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden border bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-3xl border-slate-700/50 shadow-2xl shadow-cyan-500/20"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b bg-slate-900/90 backdrop-blur-xl border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <Music className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {title}
              </h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="p-2 transition-colors duration-300 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X size={24} />
            </motion.button>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
            <p className="text-base leading-relaxed whitespace-pre-line text-slate-300">
              {lyrics}
            </p>
          </div>

          {instagramUrl && (
            <div className="sticky bottom-0 p-6 border-t bg-slate-900/90 backdrop-blur-xl border-slate-700/50">
              <motion.a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                <Play size={20} />
                Watch on Instagram
              </motion.a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

type SongCardProps = {
  lyrics: string;
  title: string;
  index: number;
  instagramUrl?: string;
};

const SongCard = ({ lyrics, title, index, instagramUrl }: SongCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="relative overflow-hidden transition-all duration-500 border shadow-2xl group bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 border-slate-700/30 rounded-3xl hover:shadow-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-xl"
      >
        <motion.div
          className="absolute inset-0 opacity-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 group-hover:opacity-100"
          transition={{ duration: 0.5 }}
        />

        <div className="relative z-10 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
            >
              <Music className="text-cyan-400" size={20} />
            </motion.div>

            {instagramUrl && (
              <motion.a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-1 text-xs font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                <Play size={12} />
                Watch
              </motion.a>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {title}
            </h3>
            <p className="text-sm leading-relaxed whitespace-pre-line text-slate-300 line-clamp-6">
              {lyrics}
            </p>
          </div>

          <motion.div
            className="pt-4 border-t border-slate-700/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
            >
              Read full lyrics
              <ExternalLink size={14} />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 bg-gradient-to-br from-cyan-500 to-blue-500 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <LyricsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lyrics={lyrics}
        title={title}
        instagramUrl={instagramUrl}
      />
    </>
  );
};

const FloatingMusicNote = ({ delay = 0, left = '10%' }: { delay?: number; left?: string }) => {
  return (
    <motion.div
      className="absolute text-cyan-400/10"
      style={{ left }}
      initial={{ y: '100vh', opacity: 0 }}
      animate={{
        y: '-100vh',
        opacity: [0, 0.3, 0.3, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay,
        ease: 'linear',
      }}
    >
      <Music size={40} />
    </motion.div>
  );
};

const ParallaxBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
        style={{ top: '10%', left: '10%' }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 0.5, scale: { duration: 4, repeat: Infinity } }}
      />
      <motion.div
        className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        style={{ bottom: '10%', right: '10%' }}
        animate={{
          x: -mousePosition.x,
          y: -mousePosition.y,
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 0.5, scale: { duration: 5, repeat: Infinity } }}
      />
    </div>
  );
};

type MusicPlayerProps = {
  isPlaying: boolean;
  isMuted: boolean;
  onPlayPause: () => void;
  onMuteToggle: () => void;
};

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, isMuted, onPlayPause, onMuteToggle }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed z-50 shadow-2xl bottom-6 right-6 shadow-cyan-500/20"
    >
      <div className="flex items-center gap-3 px-4 py-3 border bg-slate-900/95 backdrop-blur-xl rounded-2xl border-slate-700/50">
        <motion.div
          animate={isPlaying ? { rotate: 360 } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="text-cyan-400"
        >
          <Disc size={24} />
        </motion.div>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPlayPause}
            className="p-2 transition-all duration-300 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
          >
            {isPlaying ? <Pause size={18} className="text-white" /> : <Play size={18} className="text-white" />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMuteToggle}
            className="p-2 transition-colors duration-300 rounded-full text-slate-400 bg-slate-800/50 hover:text-white hover:bg-slate-800"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 overflow-hidden border-t bg-gradient-to-b from-slate-900/50 via-slate-950 to-black border-slate-800/50 backdrop-blur-xl">
      <motion.div
        className="absolute inset-0 opacity-30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 px-6 mx-auto space-y-8 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="text-cyan-400"
            >
             
            </motion.div>
            <div>
               
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                StyloEFX
              </h3>
              <p className="text-sm text-slate-400">Cinematic Visuals & Audio</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.youtube.com/@styloefx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 transition-all duration-300 rounded-full text-slate-400 bg-slate-800/50 hover:text-red-500 hover:bg-slate-800 backdrop-blur-sm"
            >
              <Youtube size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/styloefx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 transition-all duration-300 rounded-full text-slate-400 bg-slate-800/50 hover:text-pink-500 hover:bg-slate-800 backdrop-blur-sm"
            >
              <Instagram size={24} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 text-center border-t border-slate-800/50"
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} StyloEFX. All rights reserved. Crafted with passion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default function StyloEFX() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const songs = [
    {
      lyrics: `I'm just waking up at 10am\nI skip my breakfast\nI wanna watch movie Day by night\nI won't do work\nI will never sleep before 11pm\nIt's my life\nIt's my routine\nI want to be alone\nI won't trust anyone\nI don't like anything too much\nI am not a bad but also not a good\nJust Saying.This my life`,
      title: "I'm just waking up",
      instagramUrl: "https://www.instagram.com/styloefx"
    },
    {
      lyrics: `Magarasi Magarasanum\nOnnu sernthachu\nKalayana mudichivaika\nNeram koodivanthachu\nKetti Mellam adichum\nPonnu sirichum malaiya mathiyachu\nIrukudumbam onnu sera\nManmakkal aananthathil sirika`,
      title: "Ketti Mellam",
      instagramUrl: "https://www.instagram.com/styloefx"
    },
    {
      lyrics: `You Be The one\nJust raise like a sun\nGo on your own way,\ndont follow anyone\nNo matter what anyone says,\ndon't be offended\nBe happy with everyone\nLearn good things and\nteach them to others\nDon't tell anyone or\nanything until you win\nYou too, may you win and\nmake others Victorious\nJust forget the victory\nLike the setting sun`,
      title: "Raise Like a Sun",
      instagramUrl: "https://www.instagram.com/styloefx"
    },
    {
      lyrics: `Just looking at you is enough\nIt's enough to just listen\nto you talk\nIt's enough for you to know\nthat I love you\nIt's enough making me happy\nby seeing your smile\nThis is enough for me\nIt's enough...`,
      title: "It's enough",
      instagramUrl: "https://www.instagram.com/styloefx"
    },
    {
      lyrics: `En thanthai yaga unnai parpaenae\nEn thaai pola unna valarpaenae\nEn ulagae ne vada unna konjida\nEn uyirae vada polam ooru suthida`,
      title: "En Thanthaiyaga",
      instagramUrl: "https://www.instagram.com/styloefx"
    },
    {
      lyrics: `Chinna siripum sirikala\nPattathellam ethuvum marakala\nEn iraiva intha vazhvae\nEpo varum enthann saavae\nNan seitha paavam ethuvo\nNee kuduthah  vazhkai ithuvo\nIntha thanimaiyin nilai marumo`,
      title: "Chinna Siripum",
      instagramUrl: "https://www.instagram.com/styloefx"
    },
    {
      lyrics: `engirundhu vanthavanuu ninaikatha\nunnakaga poranthavan naandhana \nvena verupellam thalli  vechi\nvanthu en kaigal anachi \nada da unna parka vanthen\nada da unnodu pesa virumbinaen\nada da en vazhvin artham neeyae\nun siripinin oliyum nanthanae\nunnodu sandaiyil sirika\nnamakaga nam ulagam piraka\nNam kadhalai sernthu poliya\nPidithathai alli koduka \nUlaginil engum paraka`,
      title: "Kaigal Anachi",
      instagramUrl: "https://www.instagram.com/styloefx"
    },
    {
      lyrics: `neeyum avalum sernthal  \nsandhosa siripum koodi varu \nkadhal pookal poothu kulungum \nkarumegam vilagum \nvelicham unnai anaikum\nvazhthu malaigal kotti theerkum`,
      title: "Neeyum Avalum",
      instagramUrl: "https://www.instagram.com/styloefx"
    },
    {
      lyrics: `nam kaetpadhai avan kuduthuvital\nintha ulagamae irunduvidum\nnam ninaithathai avan nadathivittal\npoo chaediyil pookal udhirndhuvidum`,
      title: "En Iraiva",
      instagramUrl: "https://www.instagram.com/styloefx"
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div id="top" className="min-h-screen overflow-hidden text-white bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <ParallaxBackground />

      <FloatingMusicNote delay={0} left="5%" />
      <FloatingMusicNote delay={5} left="25%" />
      <FloatingMusicNote delay={10} left="75%" />
      <FloatingMusicNote delay={15} left="90%" />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50
            ? 'bg-slate-950/90 backdrop-blur-2xl shadow-2xl shadow-cyan-500/5 border-b border-slate-800/50'
            : 'bg-gradient-to-b from-slate-950/80 via-slate-900/50 to-transparent backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 mx-auto md:px-10 max-w-7xl">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('top')}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="text-cyan-400"
            >
            
            </motion.div>
            

            <h1 className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            StyloEFX
            </h1>
          </motion.div>

          <nav className="hidden gap-8 md:flex">
            {['Home', 'Lyrics', 'About'].map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section === 'Home' ? 'top' : section.toLowerCase())}
                className="relative text-slate-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-white">
                  {section}
                </span>
                <motion.span
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white transition-colors duration-300 rounded-xl bg-slate-800/50 hover:bg-slate-800 md:hidden backdrop-blur-sm"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t md:hidden bg-slate-950/95 backdrop-blur-2xl border-slate-800/50"
            >
              <nav className="flex flex-col gap-1 p-4">
                {['Home', 'Lyrics', 'About'].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section === 'Home' ? 'top' : section.toLowerCase())}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-3 text-left transition-all duration-300 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50"
                  >
                    {section}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="h-24" />

      <section className="relative px-4 py-24 overflow-hidden md:py-40 md:px-6">
        <motion.div
          className="absolute transform -translate-y-1/2 text-cyan-400/30 left-8 md:left-16 top-1/2"
          animate={{
            y: [0, -40, 0],
            rotate: [0, 20, -20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <Radio size={60} className="md:w-24 md:h-24" />
        </motion.div>

        <motion.div
          className="absolute transform -translate-y-1/2 text-purple-400/30 right-8 md:right-16 top-1/2"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -20, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <Waves size={60} className="md:w-24 md:h-24" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold border rounded-full text-cyan-400 bg-cyan-500/10 border-cyan-500/20 backdrop-blur-sm"
            >
              <Sparkles size={16} />
              Cinematic Visual Experience
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-5xl font-black leading-tight text-transparent md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
            >
              Creative Visuals
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-1 mx-auto mb-8 rounded-full w-36 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-3xl px-4 mx-auto mb-12 text-lg leading-relaxed md:text-xl text-slate-400"
          >
            At StyloEFX, we craft cinematic edits, stylish visuals, and digital magic that define the future of media.
            Experience the art of storytelling through stunning visuals and captivating audio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('lyrics')}
              className="px-8 py-4 font-bold text-white transition-all duration-300 shadow-xl rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              Explore Lyrics
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('about')}
              className="px-8 py-4 font-bold transition-all duration-300 border-2 text-slate-300 rounded-2xl border-slate-700 hover:border-cyan-500 hover:text-white hover:bg-slate-800/50 backdrop-blur-sm"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="lyrics"
        className="relative px-4 py-20 mx-auto md:px-10 max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-purple-400 border rounded-full bg-purple-500/10 border-purple-500/20"
          >
            <Music size={16} />
            Our Collection
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-4xl font-black text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
          >
            Song Lyrics
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Explore our collection of original lyrics and lyric videos
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {songs.map((song, i) => (
            <SongCard
              key={i}
              lyrics={song.lyrics}
              title={song.title}
              index={i}
              instagramUrl={song.instagramUrl}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="relative px-4 py-24 overflow-hidden md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-4xl font-black text-white md:text-6xl"
            >
              Featured Songs
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg italic text-cyan-400"
            >
              DM for Custom Lyrics
            </motion.p>
          </div>

          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex items-center gap-6"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            >
              {songs.concat(songs).map((song, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 overflow-hidden transition-all duration-500 border shadow-2xl bg-gradient-to-br from-slate-900/95 via-slate-800/80 to-slate-900/95 backdrop-blur-xl border-slate-700/30 rounded-3xl w-80 hover:border-cyan-500/40 hover:shadow-cyan-500/20"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                          className="p-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
                        >
                          <Music className="text-cyan-400" size={20} />
                        </motion.div>
                        <h3 className="font-bold text-white">{song.title}</h3>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed whitespace-pre-line text-slate-300 line-clamp-8">
                      {song.lyrics}
                    </p>

                    {song.instagramUrl && (
                      <motion.a
                        href={song.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 px-4 py-2 mt-4 font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                      >
                        <Play size={16} />
                        Watch on Instagram
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="max-w-6xl px-4 py-24 mx-auto md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold border rounded-full text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
          >
            <Sparkles size={16} />
            About Us
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-black text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
          >
            About StyloEFX
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg leading-relaxed md:text-xl text-slate-400"
          >
            StyloEFX is more than just a channel — it's a creative journey. With a passion for premium edits
            and artistic visuals, we bring cinematic experiences to life, blending technology with imagination
            to create unforgettable digital content.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Feature
            icon={<Music />}
            title="Creative Vision"
            desc="Cinematic storytelling and bold visual language that captivates audiences."
            delay={0}
          />
          <Feature
            icon={<Disc />}
            title="Innovation"
            desc="Exploring new textures, soundscapes, and cutting-edge techniques."
            delay={0.1}
          />
          <Feature
            icon={<Headphones />}
            title="Passion"
            desc="Relentless craft and obsession for detail in every project."
            delay={0.2}
          />
        </div>
      </motion.section>

      <Footer />

      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      <MusicPlayer
        isPlaying={isPlaying}
        isMuted={isMuted}
        onPlayPause={handlePlayPause}
        onMuteToggle={handleMuteToggle}
      />
    </div>
  );
}

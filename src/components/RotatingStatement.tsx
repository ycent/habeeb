import { motion, AnimatePresence } from "framer-motion";

interface Statement {
  before: string;
  keyword: string;
  after: string;
  accentClass: string;
}

const statements: Statement[] = [
  {
    before: "I turn vague ideas into ",
    keyword: "shipped products",
    after: "",
    accentClass: "text-accent-warm", // Muted warm yellow
  },
  {
    before: "I bring ",
    keyword: "clarity",
    after: " to early-stage chaos",
    accentClass: "text-accent-calm", // Calm blue
  },
  {
    before: "I help teams move from thinking to ",
    keyword: "execution",
    after: "",
    accentClass: "text-accent-soft", // Soft green
  },
];

interface RotatingStatementProps {
  activeIndex: number;
}

export const RotatingStatement = ({ activeIndex }: RotatingStatementProps) => {
  const current = statements[activeIndex];

  return (
    <div className="h-16 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={activeIndex}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="font-body text-xl md:text-2xl text-body h-16 flex items-center"
        >
          <span>{current.before}</span>
          <span className={`${current.accentClass} font-medium transition-colors duration-500`}>
            {current.keyword}
          </span>
          <span>{current.after}</span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export { statements };

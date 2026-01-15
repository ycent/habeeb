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
    accentClass: "text-accent-warm", // Warm sharp yellow
  },
  {
    before: "I bring ",
    keyword: "clarity",
    after: " to early-stage chaos",
    accentClass: "text-accent-calm", // Calm blue
  },
  {
    before: "I move teams from thinking to ",
    keyword: "execution",
    after: "",
    accentClass: "text-accent-soft", // Clean green
  },
];

interface RotatingStatementProps {
  activeIndex: number;
}

export const RotatingStatement = ({ activeIndex }: RotatingStatementProps) => {
  const current = statements[activeIndex];

  return (
    <div 
      className="min-h-[3.5rem] md:min-h-[4rem] overflow-hidden relative"
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={activeIndex}
          initial={{ 
            rotateX: 90, 
            opacity: 0,
            y: 20,
          }}
          animate={{ 
            rotateX: 0, 
            opacity: 1,
            y: 0,
          }}
          exit={{ 
            rotateX: -90, 
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.7,
            ease: [0.33, 1, 0.68, 1],
          }}
          style={{
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
          className="font-body text-lg sm:text-xl md:text-2xl text-body leading-relaxed"
        >
          <span>{current.before}</span>
          <span className={`${current.accentClass} font-semibold`}>
            {current.keyword}
          </span>
          <span>{current.after}</span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export { statements };

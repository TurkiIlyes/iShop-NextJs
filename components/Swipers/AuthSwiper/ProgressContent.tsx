const ProgressContent = ({
  progressCircle,
  progressContent,
}: {
  progressCircle: any;
  progressContent: any;
}) => {
  return (
    <div className="absolute right-4 bottom-4 z-10 flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-current text-customBlue-800 "
            style={{
              strokeWidth: "4px",
              fill: "none",
              strokeDasharray: "125.6", // Circumference
              strokeDashoffset: "125.6", // Initial offset
              transform: "rotate(-90deg)",
              transformOrigin: "center",
            }}
            ref={progressCircle}
          />
        </svg>
        <span
          ref={progressContent}
          className="absolute text-lg font-bold text-customBlue-800 "
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></span>
      </div>
    </div>
  );
};

export default ProgressContent;

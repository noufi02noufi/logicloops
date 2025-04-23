export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="500" height="500" fill="transparent" />
      
      <g transform="translate(150, 50)">
        {/* Calendar with 364 */}
        <g>
          {/* Calendar top tabs */}
          <path
            d="M30 30C30 24.4772 34.4772 20 40 20H50C55.5228 20 60 24.4772 60 30V45C60 50.5228 55.5228 55 50 55H40C34.4772 55 30 50.5228 30 45V30Z"
            fill="#0D99FF"
          />
          <path
            d="M140 30C140 24.4772 144.477 20 150 20H160C165.523 20 170 24.4772 170 30V45C170 50.5228 165.523 55 160 55H150C144.477 55 140 50.5228 140 45V30Z"
            fill="#0D99FF"
          />
          
          {/* Calendar body */}
          <rect 
            x="20" 
            y="45" 
            width="160" 
            height="110" 
            rx="15" 
            stroke="#0D99FF" 
            strokeWidth="12" 
            fill="black" 
          />
          
          {/* 364 text */}
          <text 
            x="100" 
            y="115" 
            fontFamily="Arial" 
            fontSize="65" 
            fontWeight="bold" 
            fill="white" 
            textAnchor="middle"
          >364</text>
        </g>
        
        {/* Infinity symbol */}
        <g transform="translate(0, 110)">
          <path
            d="M20 50C20 25 40 5 70 5C100 5 130 25 130 50C130 75 100 95 70 95C40 95 20 75 20 50Z"
            fill="transparent"
            stroke="#0D99FF"
            strokeWidth="15"
          />
          <path
            d="M130 50C130 25 150 5 180 5C210 5 240 25 240 50C240 75 210 95 180 95C150 95 130 75 130 50Z"
            fill="transparent"
            stroke="#0D99FF"
            strokeWidth="15"
          />
        </g>
      </g>
      
      {/* LogicLoops */}
      <text 
        x="250" 
        y="330" 
        fontFamily="Arial" 
        fontSize="46" 
        fontWeight="bold" 
        fill="white" 
        textAnchor="middle"
      >LogicLoops</text>
      
      {/* DAYS364 */}
      <text 
        x="250" 
        y="390" 
        fontFamily="Arial" 
        fontSize="38" 
        fontWeight="bold" 
        fill="#0D99FF" 
        textAnchor="middle"
      >DAYS364</text>
    </svg>
  );
}

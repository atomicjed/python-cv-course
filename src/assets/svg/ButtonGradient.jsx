const ButtonGradient = ({ isDarkMode }) => {
  const darkColour = isDarkMode ? '#1e1a3e' : '#286bdc';
  return (
    <svg className="block" width={0} height={0}>
      {/*<defs>*/}
      {/*  <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">*/}
      {/*    <stop offset="0%" stopColor="#89F9E8" />*/}
      {/*    <stop offset="100%" stopColor="#FACB7B" />*/}
      {/*  </linearGradient>*/}
      {/*  <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">*/}
      {/*    <stop offset="0%" stopColor="#D87CEE" />*/}
      {/*    <stop offset="100%" stopColor="#FACB7B" />*/}
      {/*  </linearGradient>*/}
      {/*  <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">*/}
      {/*    <stop offset="0%" stopColor="#9099FC" />*/}
      {/*    <stop offset="100%" stopColor="#89F9E8" />*/}
      {/*  </linearGradient>*/}
      {/*  <linearGradient*/}
      {/*    id="btn-right"*/}
      {/*    x1="14.635%"*/}
      {/*    x2="14.635%"*/}
      {/*    y1="0%"*/}
      {/*    y2="100%"*/}
      {/*  >*/}
      {/*    <stop offset="0%" stopColor="#9099FC" />*/}
      {/*    <stop offset="100%" stopColor="#D87CEE" />*/}
      {/*  </linearGradient>*/}
      {/*</defs>*/}
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor={darkColour}/>
          {/* Dark Purple */}
          <stop offset="100%" stopColor="#2eaab1"/>
          {/* Teal */}
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#33a699"/>
          {/* Deep Blue */}
          <stop offset="100%" stopColor="#33a699"/>
          {/* Soft Greenish-Blue */}
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor={darkColour}/>
          {/* Intense Blue */}
          <stop offset={"50%"} stopColor={"#2eaab1"} />
          <stop offset="100%" stopColor={darkColour}/>
          {/* Teal */}
        </linearGradient>
        {/*<linearGradient*/}
        {/*  id="btn-right"*/}
        {/*  x1="14.635%"*/}
        {/*  x2="14.635%"*/}
        {/*  y1="0%"*/}
        {/*  y2="100%"*/}
        {/*>*/}
        {/*  <stop offset="0%" stopColor="#33a699"/>*/}
        {/*  /!* Dark Purple *!/*/}
        {/*  <stop offset="100%" stopColor="#33a699"/>*/}
        {/*  /!* Soft Greenish-Blue *!/*/}
        {/*</linearGradient>*/}
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor={darkColour}/>
          {/* Dark Purple */}
          <stop offset="100%" stopColor="#33a699"/>
          {/* Soft Greenish-Blue */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;

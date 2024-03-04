// Song file:
const SONG_FILE = "song.mp3";

// Total time / countdown begin:
const TIME_LENGTH = 72; // seconds
// (recommended: Choose length of the song)

// Time per picture in seconds (first picture may be a bit longer):
const TIME_PER_PIC = 5; // seconds

// Path to pictures:
const PATH_TO_PICS = "pictures/";

// The image format that ALL pictures in directory "pictures/" MUST apply to:
const PIC_FORMAT = "jpg";

// Font size:
const FONT_SIZE = "14vw";
// (recommended: "14vw")

// Unit that is used for minutes:
const UNIT_MINUTE = "m";

// Unit that is used for seconds:
const UNIT_SECOND = "s";

// Seperating character(s) between minutes and seconds:
const SEPERATOR = " "

// If 0 minutes shall be shown under the one minute mark:
const SHOW_ZERO_MIN = true;





// -------- Recommended configuration #1 --------

//const UNIT_MINUTE = "m";
//const UNIT_SECOND = "s";
//const SEPERATOR = " "
//const SHOW_ZERO_MIN = true;

// -> e.g. "2m 34s", "0m 56s" or "0m 07s"



// -------- Recommended configuration #2 --------

//const UNIT_MINUTE = "";
//const UNIT_SECOND = "";
//const SEPERATOR = ":"
//const SHOW_ZERO_MIN = false;

//-> e.g. "2:34", "56" or "7"
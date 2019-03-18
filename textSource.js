const textArray = [
  "it",
  "was",
  "many",
  "and",
  "many",
  "a",
  "year",
  "ago",
  "in",
  "a",
  "kingdom",
  "by",
  "the",
  "sea",
  "that",
  "a",
  "maiden",
  "there",
  "lived",
  "whom",
  "you",
  "may",
  "know",
  "by",
  "the",
  "name",
  "of",
  "Annabel",
  "Lee",
  "and",
  "this",
  "maiden",
  "she",
  "lived",
  "with",
  "no",
  "other",
  "thought",
  "than",
  "to",
  "love",
  "and",
  "be",
  "loved",
  "by",
  "me",
  "I",
  "was",
  "a",
  "child",
  "and",
  "she",
  "was",
  "a",
  "child",
  "in",
  "this",
  "kingdom",
  "by",
  "the",
  "sea",
  "but",
  "we",
  "loved",
  "with",
  "a",
  "love",
  "that",
  "was",
  "more",
  "than",
  "love",
  "I",
  "and",
  "my",
  "Annabel",
  "Lee",
  "with",
  "a",
  "love",
  "that",
  "the",
  "winged",
  "seraphs",
  "of",
  "heaven",
  "coveted",
  "her",
  "and",
  "me",
  "and",
  "this",
  "was",
  "the",
  "reason",
  "that",
  "long",
  "ago",
  "in",
  "this",
  "kingdom",
  "by",
  "the",
  "sea",
  "a",
  "wind",
  "blew",
  "out",
  "of",
  "a",
  "cloud",
  "chilling",
  "my",
  "beautiful",
  "Annabel",
  "Lee",
  "so",
  "that",
  "her",
  "highborn",
  "kinsman",
  "came",
  "and",
  "bore",
  "her",
  "away",
  "from",
  "me",
  "to",
  "shut",
  "her",
  "up",
  "in",
  "a",
  "sepulchre",
  "in",
  "this",
  "kingdom",
  "by",
  "the",
  "sea",
  "the",
  "angels",
  "not",
  "half",
  "so",
  "happy",
  "in",
  "heaven",
  "went",
  "envying",
  "her",
  "and",
  "me",
  "yes",
  "that",
  "was",
  "the",
  "reason",
  "as",
  "all",
  "men",
  "know",
  "in",
  "this",
  "kingdom",
  "by",
  "the",
  "sea",
  "that",
  "the",
  "wind",
  "came",
  "out",
  "of",
  "the",
  "cloud",
  "by",
  "night",
  "chilling",
  "and",
  "killing",
  "my",
  "Annabel",
  "Lee",
  "but",
  "our",
  "love",
  "it",
  "was",
  "stronger",
  "by",
  "far",
  "than",
  "the",
  "love",
  "of",
  "those",
  "who",
  "were",
  "older",
  "than",
  "we",
  "of",
  "many",
  "far",
  "wiser",
  "than",
  "we",
  "and",
  "neither",
  "the",
  "angels",
  "in",
  "heaven",
  "above",
  "nor",
  "the",
  "demons",
  "down",
  "under",
  "the",
  "sea",
  "can",
  "ever",
  "dissever",
  "my",
  "soul",
  "from",
  "the",
  "soul",
  "of",
  "the",
  "beautiful",
  "Annabel",
  "Lee",
  "for",
  "the",
  "moon",
  "never",
  "beams",
  "without",
  "bringing",
  "me",
  "dreams",
  "of",
  "the",
  "beautiful",
  "Annabel",
  "Lee",
  "and",
  "the",
  "stars",
  "never",
  "rise",
  "but",
  "I",
  "feel",
  "the",
  "bright",
  "eyes",
  "of",
  "the",
  "beautiful",
  "Annabel",
  "Lee",
  "and",
  "so",
  "all",
  "the",
  "night",
  "tide",
  "I",
  "lie",
  "down",
  "by",
  "the",
  "side",
  "of",
  "my",
  "darling",
  "my",
  "darling",
  "my",
  "life",
  "and",
  "my",
  "bride",
  "in",
  "the",
  "sepulchre",
  "there",
  "by",
  "the",
  "sea",
  "in",
  "her",
  "tomb",
  "by",
  "the",
  "sounding",
  "sea",
  "the",
  "skies",
  "they",
  "were",
  "ashen",
  "and",
  "sober",
  "the",
  "leaves",
  "they",
  "were",
  "crisp",
  "and",
  "sere",
  "the",
  "leaves",
  "they",
  "were",
  "withering",
  "and",
  "sere",
  "it",
  "was",
  "night",
  "in",
  "the",
  "lonesome",
  "October",
  "of",
  "my",
  "most",
  "immemorial",
  "year",
  "it",
  "was",
  "hard",
  "by",
  "the",
  "dim",
  "lake",
  "of",
  "in",
  "the",
  "misty",
  "mid",
  "region",
  "of",
  "it",
  "was",
  "down",
  "by",
  "the",
  "dank",
  "tarn",
  "of",
  "in",
  "the",
  "ghoul",
  "haunted",
  "woodland",
  "of",
  "here",
  "once",
  "through",
  "an",
  "alley",
  "titanic",
  "of",
  "cypress",
  "I",
  "roamed",
  "with",
  "my",
  "soul",
  "of",
  "cypress",
  "with",
  "psyche",
  "my",
  "soul",
  "these",
  "were",
  "days",
  "when",
  "my",
  "heart",
  "was",
  "volcanic",
  "as",
  "the",
  "scoriac",
  "rivers",
  "that",
  "roll",
  "as",
  "the",
  "lavas",
  "that",
  "restlessly",
  "roll",
  "their",
  "sulphurous",
  "currents",
  "down",
  "in",
  "the",
  "ultimate",
  "climes",
  "of",
  "the",
  "pole",
  "that",
  "groan",
  "as",
  "they",
  "roll",
  "down",
  "mount",
  "in",
  "the",
  "realms",
  "of",
  "the",
  "boreal",
  "pole",
  "our",
  "talk",
  "had",
  "been",
  "serious",
  "and",
  "sober",
  "but",
  "our",
  "thoughts",
  "they",
  "were",
  "palsied",
  "and",
  "sere",
  "our",
  "memories",
  "were",
  "treacherous",
  "and",
  "sere",
  "for",
  "we",
  "knew",
  "not",
  "the",
  "month",
  "was",
  "October",
  "and",
  "we",
  "marked",
  "not",
  "the",
  "night",
  "of",
  "the",
  "year",
  "ah",
  "night",
  "of",
  "all",
  "nights",
  "in",
  "the",
  "year",
  "we",
  "noted",
  "not",
  "the",
  "dim",
  "lake",
  "of",
  "though",
  "once",
  "we",
  "had",
  "journeyed",
  "down",
  "here",
  "we",
  "remembered",
  "not",
  "the",
  "dank",
  "tarn",
  "of",
  "nor",
  "the",
  "ghoul",
  "haunted",
  "woodland",
  "of",
  "and",
  "now",
  "as",
  "the",
  "night",
  "was",
  "senescent",
  "and",
  "star",
  "dials",
  "pointed",
  "to",
  "morn",
  "as",
  "the",
  "star",
  "dials",
  "hinted",
  "of",
  "morn",
  "at",
  "the",
  "end",
  "of",
  "our",
  "path",
  "a",
  "liquescent",
  "and",
  "nebulous",
  "lustre",
  "was",
  "born",
  "out",
  "of",
  "which",
  "a",
  "miraculous",
  "crescent",
  "arose",
  "with",
  "a",
  "duplicate",
  "horn",
  "bediamonded",
  "crescent",
  "distinct",
  "with",
  "its",
  "duplicate",
  "horn",
  "and",
  "I",
  "said",
  "she",
  "is",
  "warmer",
  "than",
  "she",
  "rolls",
  "through",
  "an",
  "ether",
  "of",
  "sighs",
  "she",
  "revels",
  "in",
  "a",
  "region",
  "of",
  "sighs",
  "she",
  "has",
  "seen",
  "that",
  "the",
  "tears",
  "are",
  "not",
  "dry",
  "on",
  "these",
  "where",
  "the",
  "worm",
  "never",
  "dies",
  "and",
  "has",
  "come",
  "past",
  "the",
  "stars",
  "of",
  "the",
  "to",
  "point",
  "us",
  "the",
  "path",
  "to",
  "the",
  "skies",
  "to",
  "the",
  "peace",
  "of",
  "the",
  "skies",
  "come",
  "up",
  "in",
  "despite",
  "of",
  "the",
  "to",
  "shine",
  "on",
  "us",
  "with",
  "her",
  "bright",
  "eyes",
  "come",
  "up",
  "through",
  "the",
  "lair",
  "of",
  "the",
  "with",
  "love",
  "in",
  "her",
  "luminous",
  "eyes",
  "but",
  "psyche",
  "uplifting",
  "her",
  "finger",
  "sadly",
  "this",
  "star",
  "I",
  "mistrust",
  "her",
  "pallor",
  "I",
  "strangely",
  "mistrust",
  "hasten",
  "oh",
  "let",
  "us",
  "not",
  "linger",
  "oh",
  "fly",
  "let",
  "us",
  "fly",
  "for",
  "we",
  "must",
  "in",
  "terror",
  "she",
  "spoke",
  "letting",
  "sink",
  "her",
  "wings",
  "till",
  "they",
  "trailed",
  "in",
  "the",
  "dust",
  "in",
  "agony",
  "sobbed",
  "letting",
  "sink",
  "her",
  "plumes",
  "till",
  "they",
  "trailed",
  "in",
  "the",
  "dust",
  "till",
  "they",
  "sorrowfully",
  "trailed",
  "in",
  "the",
  "dust",
  "I",
  "replied",
  "this",
  "is",
  "nothing",
  "but",
  "dreaming",
  "let",
  "us",
  "on",
  "by",
  "this",
  "tremulous",
  "light",
  "let",
  "us",
  "bathe",
  "in",
  "this",
  "crystalline",
  "light",
  "its",
  "sybilic",
  "splendor",
  "is",
  "beaming",
  "with",
  "hope",
  "and",
  "in",
  "beauty",
  "to",
  "night",
  "it",
  "flickers",
  "up",
  "the",
  "sky",
  "through",
  "the",
  "night",
  "ah",
  "we",
  "safely",
  "may",
  "trust",
  "to",
  "its",
  "gleaming",
  "and",
  "be",
  "sure",
  "it",
  "will",
  "lead",
  "us",
  "aright",
  "we",
  "safely",
  "may",
  "trust",
  "to",
  "a",
  "gleaming",
  "that",
  "cannot",
  "but",
  "guide",
  "us",
  "aright",
  "since",
  "it",
  "flickers",
  "up",
  "to",
  "heaven",
  "through",
  "the",
  "night",
  "thus",
  "I",
  "pacified",
  "Psyche",
  "and",
  "kissed",
  "her",
  "and",
  "tempted",
  "her",
  "out",
  "of",
  "her",
  "gloom",
  "and",
  "conquered",
  "her",
  "scruples",
  "and",
  "gloom",
  "and",
  "we",
  "passed",
  "to",
  "the",
  "end",
  "of",
  "the",
  "vista",
  "but",
  "were",
  "stopped",
  "by",
  "the",
  "door",
  "of",
  "a",
  "tomb",
  "by",
  "the",
  "door",
  "of",
  "a",
  "legended",
  "tomb",
  "and",
  "I",
  "said",
  "what",
  "is",
  "written",
  "sweet",
  "sister",
  "on",
  "the",
  "door",
  "of",
  "this",
  "legended",
  "tomb",
  "tis",
  "the",
  "vault",
  "of",
  "thy",
  "lost",
  "then",
  "my",
  "heart",
  "it",
  "grew",
  "ashen",
  "and",
  "sober",
  "as",
  "the",
  "leaves",
  "that",
  "were",
  "and",
  "sere",
  "as",
  "the",
  "leaves",
  "that",
  "were",
  "withering",
  "and",
  "sere",
  "and",
  "I",
  "cried",
  "it",
  "was",
  "surely",
  "October",
  "on",
  "this",
  "very",
  "night",
  "of",
  "last",
  "year",
  "that",
  "I",
  "journeyed",
  "I",
  "journeyed",
  "down",
  "here",
  "that",
  "I",
  "brought",
  "a",
  "dread",
  "burden",
  "down",
  "here",
  "on",
  "this",
  "night",
  "of",
  "all",
  "nights",
  "in",
  "the",
  "year",
  "oh",
  "what",
  "demon",
  "has",
  "tempted",
  "me",
  "here",
  "well",
  "I",
  "know",
  "now",
  "this",
  "dim",
  "lake",
  "this",
  "misty",
  "mid",
  "region",
  "of",
  "well",
  "I",
  "know",
  "now",
  "this",
  "dank",
  "tarn",
  "of",
  "in",
  "the",
  "ghoul",
  "haunted",
  "woodland",
  "of",
  "said",
  "we",
  "then",
  "the",
  "two",
  "then",
  "ah",
  "can",
  "it",
  "have",
  "been",
  "that",
  "the",
  "woodlandish",
  "ghouls",
  "the",
  "pitiful",
  "the",
  "merciful",
  "ghouls",
  "to",
  "bar",
  "up",
  "our",
  "way",
  "and",
  "to",
  "ban",
  "it",
  "from",
  "the",
  "secret",
  "that",
  "lies",
  "from",
  "the",
  "thing",
  "that",
  "lies",
  "hidden",
  "in",
  "these",
  "had",
  "drawn",
  "up",
  "the",
  "spectre",
  "of",
  "a",
  "planet",
  "from",
  "the",
  "limbo",
  "of",
  "lunary",
  "souls",
  "this",
  "sinfully",
  "scintillant",
  "planet",
  "from",
  "the",
  "hell",
  "of",
  "the",
  "planetary",
  "souls"
];
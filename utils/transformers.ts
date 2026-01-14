
// Map of normal characters to their fancy equivalents
// We focus on a-z, A-Z, 0-9. Punctuation is usually left as-is or mapped if possible.

interface FontMap {
  name: string;
  label: string;
  map: Record<string, string>;
  isReversed?: boolean; // For "Reverse" style
}

const normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const createMap = (targetResult: string): Record<string, string> => {
  const map: Record<string, string> = {};
  const targets = [...targetResult];
  for (let i = 0; i < normalChars.length; i++) {
    const char = normalChars[i];
    const target = targets[i] || char; // Fallback to normal if missing
    map[char] = target;
  }
  return map;
};

// 1. Script (Fancy)
// 𝓪𝓫𝓬...
const scriptMap = createMap(
  "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩0123456789"
);

// 2. Bold Script
// 𝓐𝓑𝓒...
const boldScriptMap = createMap(
  "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"
);

// 3. Double Struck (Bold)
// 𝕒𝕓𝕔...
const doubleStruckMap = createMap(
  "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"
);

// 4. Sans Serif Bold
// 𝗮𝗯𝗰...
const sansBoldMap = createMap(
  "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"
);

// 5. Gothic / Fraktur
// 𝔞𝔟𝔠...
const gothicMap = createMap(
  "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅𝔔𝔇𝔈𝔉𝔊𝔋ℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ0123456789"
);

// 6. Monospace
// 𝚊𝚋𝚌...
const monospaceMap = createMap(
  "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿"
);

// 7. Bubbles (Circled)
// ⓐⓑⓒ...
const bubblesMap = createMap(
  "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨"
);

// 8. Black Bubbles
// 🅐𝔅...
const blackBubblesMap = createMap(
  "🅐𝑩𝓒𝔇𝑬𝓕𝑮𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩🅐𝑩𝓒𝔇𝑬𝓕𝑮𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩⓿❶❷❸❹❺❻❼❽❾"
);
// Actually let's use the real black circles for a-z if available, or just reuse caps.
// A common trick is mixing sets. Let's try to be accurate:
// 🅐𝔅 is not quite right. Let's fix standard negative circles:
const blackCirclesReal = createMap(
  "🅐𝑩𝓒𝔇𝑬𝓕𝑮𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩🅐𝑩𝓒𝔇𝑬𝓕𝑮𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩⓿❶❷❸❹❺❻❼❽❾"
);
// Retrying with correct unicode for black circles (often only Caps exist well in some fonts, but let's use what we have)
// Actually, let's use a simpler mapping for reliability or standard Sans-Serif Italic if black bubbles are patchy.
// Let's swap to "Square" and "Black Square" which are popular.

// 8. Squares
// 🄰𝄄...
const squareMap = createMap(
  "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉0123456789"
);

// 9. Small Caps
// ᴀʙᴄ...
// Note: Small caps for lowercase only usually. 
const smallCapsResult = "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ0123456789";
const smallCapsMap = createMap(smallCapsResult);

// 10. Upside Down (requires reversing string too)
// ɐqɔ...
const upsideDownResult = "ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎz∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z0123456789";
const upsideDownMap = createMap(upsideDownResult);

// 11. Fullwidth (Vaporwave)
// ａｂｃ...
const fullWidthMap = createMap(
  "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ０１２３４５６７８９"
);

// 12. Runes / Special
// ᚪᛒᚳ... simplified
const runeMap = createMap(
  "ᚪᛒᚳᛞᛖᚠᚷᚻᛁᛃᚲᛚᛗᚾᚩᛈᛩᚱᛋᛏᚢveᚹᛪᚣᛯᚪᛒᚳᛞᛖᚠᚷᚻᛁᛃᚲᛚᛗᚾᚩᛈᛩᚱᛋᛏᚢveᚹᛪᚣᛯ0123456789"
);

// 13. Italic (Sans Serif)
// 𝘢𝘣𝘤...
const italicMap = createMap(
  "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡0123456789"
);

// 14. Bold Italic (Sans Serif)
// 𝙖𝙗𝙘...
const boldItalicMap = createMap(
  "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕0123456789"
);

// 15. Serif Bold
// 𝐀𝐁𝐂...
const serifBoldMap = createMap(
  "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"
);

// 16. Strikethrough (combining char)
const strikeMap: Record<string, string> = {};
[...normalChars].forEach(c => strikeMap[c] = c + '\u0336');

// 17. Underline (combining char)
const underlineMap: Record<string, string> = {}; // 'u' is taken by unicode
[...normalChars].forEach(c => underlineMap[c] = c + '\u0332');

// 18. Slashthrough (combining char)
const slashMap: Record<string, string> = {};
[...normalChars].forEach(c => slashMap[c] = c + '\u0338');

// Registry of supported text styles
export const fontStyles = [
  { id: 'script', name: 'Script', map: scriptMap },
  { id: 'bold', name: 'Bold', map: sansBoldMap },
  { id: 'italic', name: 'Italic', map: italicMap },
  { id: 'bolditalic', name: 'Bold Italic', map: boldItalicMap },
  { id: 'serifbold', name: 'Serif Bold', map: serifBoldMap },
  { id: 'double', name: 'Double Struck', map: doubleStruckMap },
  { id: 'bubbles', name: 'Bubbles', map: bubblesMap },
  { id: 'monospace', name: 'Monospace', map: monospaceMap },
  { id: 'gothic', name: 'Gothic', map: gothicMap },
  { id: 'smallcaps', name: 'Small Caps', map: smallCapsMap },
  { id: 'fullwidth', name: 'Vaporwave', map: fullWidthMap },
  { id: 'squares', name: 'Squares', map: squareMap },
  { id: 'runes', name: 'Runes', map: runeMap },
  { id: 'strike', name: 'Strikethrough', map: strikeMap },
  { id: 'underline', name: 'Underline', map: underlineMap },
  { id: 'slash', name: 'Slash', map: slashMap },
  { id: 'upsidedown', name: 'Upside Down', map: upsideDownMap, isReversed: true },
];

export function transform(text: string, styleId: string): string {
  const style = fontStyles.find(s => s.id === styleId);
  if (!style) return text;

  // Process characters
  let result = [...text].map(char => {
    return style.map[char] || char;
  }).join('');

  if (style.isReversed) {
    result = [...result].reverse().join('');
  }

  return result;
}

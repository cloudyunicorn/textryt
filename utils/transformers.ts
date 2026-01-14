
// Map of normal characters to their fancy equivalents
// We focus on a-z, A-Z, 0-9. Punctuation is usually left as-is or mapped if possible.

interface FontMap {
  name: string;
  label: string;
  map: Record<string, string>;
  isReversed?: boolean;
  wrapper?: { prefix: string; suffix: string };
}

const normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const createMap = (targetResult: string): Record<string, string> => {
  const map: Record<string, string> = {};
  const targets = [...targetResult];
  for (let i = 0; i < normalChars.length; i++) {
    const char = normalChars[i];
    const target = targets[i] || char;
    map[char] = target;
  }
  return map;
};

// 1. Script (Fancy)
const scriptMap = createMap(
  "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩0123456789"
);

// 2. Bold
const sansBoldMap = createMap(
  "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"
);

// 3. Italic
const italicMap = createMap(
  "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡0123456789"
);

// 4. Bold Italic
const boldItalicMap = createMap(
  "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕0123456789"
);

// 5. Double Struck
const doubleStruckMap = createMap(
  "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"
);

// 6. Monospace
const monospaceMap = createMap(
  "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿"
);

// 7. Gothic / Fraktur
const gothicMap = createMap(
  "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ0123456789"
);

// 8. Bold Gothic
const boldGothicMap = createMap(
  "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅0123456789"
);

// 9. Bubbles (Circled)
const bubblesMap = createMap(
  "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨"
);

// 10. Squares
const squareMap = createMap(
  "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉0123456789"
);

// 11. Negative Squares
const negativeSquareMap = createMap(
  "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉0123456789"
);

// 12. Small Caps
const smallCapsMap = createMap(
  "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ0123456789"
);

// 13. Fullwidth (Vaporwave)
const fullWidthMap = createMap(
  "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ０１２３４５６７８９"
);

// 14. Upside Down
const upsideDownMap = createMap(
  "ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎz∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z0123456789"
);

// 15. Reversed
const reversedMap = createMap(
  "ɒdɔbɘʇǫʜiįʞ|mᴎoqpɿƨƚυvwxγzAᙠƆᗡƎꟻGHIJK⅃MᴎOꟼpᴙꙄTUVWXYZ0123456789"
);

// 16. Subscript
const subscriptMap = createMap(
  "ₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyzₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz₀₁₂₃₄₅₆₇₈₉"
);

// 17. Superscript
const superscriptMap = createMap(
  "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹"
);

// 18. Currency
const currencyMap = createMap(
  "₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ0123456789"
);

// 19. Asian Style
const asianMap = createMap(
  "ﾑ乃ᄃり乇ｷムんﾉﾌズﾚᄊ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙ﾑ乃ᄃり乇ｷムんﾉﾌズﾚᄊ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙0123456789"
);

// 20. Greek Style
const greekMap = createMap(
  "αႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
);

// 21. Cute/Kawaii
const cuteMap = createMap(
  "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹"
);

// Strikethrough (combining char)
const strikeMap: Record<string, string> = {};
[...normalChars].forEach(c => strikeMap[c] = c + '\u0336');

// Underline (combining char)
const underlineMap: Record<string, string> = {};
[...normalChars].forEach(c => underlineMap[c] = c + '\u0332');

// Slashthrough (combining char)
const slashMap: Record<string, string> = {};
[...normalChars].forEach(c => slashMap[c] = c + '\u0338');

// Registry of supported text styles
export const fontStyles = [
  { id: 'script', name: '𝓢𝓬𝓻𝓲𝓹𝓽', map: scriptMap },
  { id: 'bold', name: '𝐁𝐨𝐥𝐝', map: sansBoldMap },
  { id: 'italic', name: '𝘐𝘵𝘢𝘭𝘪𝘤', map: italicMap },
  { id: 'bolditalic', name: '𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘', map: boldItalicMap },
  { id: 'double', name: '𝔻𝕠𝕦𝕓𝕝𝕖', map: doubleStruckMap },
  { id: 'monospace', name: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎', map: monospaceMap },
  { id: 'gothic', name: '𝔊𝔬𝔱𝔥𝔦𝔠', map: gothicMap },
  { id: 'boldgothic', name: '𝕭𝖔𝖑𝖉 𝕲𝖔𝖙𝖍𝖎𝖈', map: boldGothicMap },
  { id: 'bubbles', name: 'Ⓑⓤⓑⓑⓛⓔⓢ', map: bubblesMap },
  { id: 'squares', name: '🅂🅀🅄🄰🅁🄴🅂', map: squareMap },
  { id: 'negativesquares', name: '🅽🅴🅶 🆂🆀🆄🅰🆁🅴🆂', map: negativeSquareMap },
  { id: 'smallcaps', name: 'Sᴍᴀʟʟ Cᴀᴘs', map: smallCapsMap },
  { id: 'fullwidth', name: 'Ｖａｐｏｒｗａｖｅ', map: fullWidthMap },
  { id: 'upsidedown', name: 'Upside Down', map: upsideDownMap, isReversed: true },
  { id: 'reversed', name: 'Reversed', map: reversedMap, isReversed: true },
  { id: 'subscript', name: 'Subscript', map: subscriptMap },
  { id: 'superscript', name: 'Superscript', map: superscriptMap },
  { id: 'currency', name: 'Currency', map: currencyMap },
  { id: 'asian', name: 'Asian', map: asianMap },
  { id: 'greek', name: 'Greek', map: greekMap },
  { id: 'strike', name: 'Strikethrough', map: strikeMap },
  { id: 'underline', name: 'Underline', map: underlineMap },
  { id: 'slash', name: 'Slash', map: slashMap },

  // Decorative wrappers
  { id: 'heart', name: '♥ Heart ♥', map: {}, wrapper: { prefix: '♥ ', suffix: ' ♥' } },
  { id: 'star', name: '★ Star ★', map: {}, wrapper: { prefix: '★ ', suffix: ' ★' } },
  { id: 'wave', name: '≋ Wave ≋', map: {}, wrapper: { prefix: '≋', suffix: '≋' } },
  { id: 'square_bracket', name: '【Bracket】', map: {}, wrapper: { prefix: '【', suffix: '】' } },
  { id: 'cute_bracket', name: '『Cute』', map: {}, wrapper: { prefix: '『', suffix: '』' } },
  { id: 'arrow', name: '→ Arrow ←', map: {}, wrapper: { prefix: '→ ', suffix: ' ←' } },
  { id: 'crown', name: '♛ Crown ♛', map: {}, wrapper: { prefix: '♛ ', suffix: ' ♛' } },
  { id: 'sparkle', name: '✨ Sparkle ✨', map: {}, wrapper: { prefix: '✨ ', suffix: ' ✨' } },

  // Instagram & Decorative Styles
  { id: 'flower', name: '❖❀～ Flower ～❀❖', map: {}, wrapper: { prefix: '❖❀～ ', suffix: ' ～❀❖' } },
  { id: 'music', name: '♪ Music ♪', map: {}, wrapper: { prefix: '♪ d◕‿◕b ♪ ', suffix: ' ♪ d◔‿◔b ♪' } },
  { id: 'robot', name: '<(+_+)> Robot', map: {}, wrapper: { prefix: '<(+_+)> ', suffix: ' <(+_+)>' } },
  { id: 'butterfly', name: '❧Ƹ̵̡Ӝ̵̨̄Ʒ☙ Butterfly', map: {}, wrapper: { prefix: '❧Ƹ̵̡Ӝ̵̨̄Ʒ☙ ', suffix: ' ❧Ƹ̵̡Ӝ̵̨̄Ʒ☙' } },
  { id: 'gun', name: '︻╦̵̵̿╤─ Gun', map: {}, wrapper: { prefix: '', suffix: ' ︻╦̵̵̿╤─ ҉~•' } },
  { id: 'cool', name: '😎 Cool 😎', map: {}, wrapper: { prefix: '😎 ', suffix: ' 😎' } },
  { id: 'ghost', name: '👻 Ghost 🍬', map: {}, wrapper: { prefix: '👻🍬 ', suffix: ' 😈🐍' } },
  { id: 'devil', name: '😈 Devil 🐍', map: {}, wrapper: { prefix: '♠✌ ', suffix: ' ൠ👻' } },
  { id: 'love', name: '💝 Love 💝', map: {}, wrapper: { prefix: '💝 ', suffix: ' 💝' } },
  { id: 'cute_face', name: '【｡_｡】 Face', map: {}, wrapper: { prefix: '【｡_｡】 ', suffix: ' 【｡_｡】' } },

  // Fancy Decorative
  { id: 'dots', name: '°•.•° Dots °•.•°', map: {}, wrapper: { prefix: '°•.•°¤*✬.•°°• ', suffix: ' °•°•.✬*¤°•.•°' } },
  { id: 'hearts_fancy', name: '❤꧁ღ⊱♥ Hearts', map: {}, wrapper: { prefix: '❤꧁ღ⊱♥ ', suffix: ' ♥⊱ღ꧂❤' } },
  { id: 'stars_fancy', name: '°⨳° Stars °⨳°', map: {}, wrapper: { prefix: '°⨳°·..·°⨳°⊹٭ ', suffix: ' ٭⊹°⨳°·..·°⨳°' } },
  { id: 'pink', name: 'ミ💖 Pink 💖彡', map: {}, wrapper: { prefix: 'ミ💖 ', suffix: ' 💖彡' } },
  { id: 'star_border', name: '★¸.•☆•.¸★ Star', map: {}, wrapper: { prefix: '★¸.•☆•.¸★ ', suffix: ' ★⡀.•☆•.★' } },
  { id: 'heart_circle', name: '◦•●❤♡ Heart', map: {}, wrapper: { prefix: '◦•●❤♡ ', suffix: ' ♡❤●•◦' } },
  { id: 'diamond', name: '✵•.¸,✵° Diamond', map: {}, wrapper: { prefix: '✵•.¸,✵°✵.｡.✰ ', suffix: ' ✰.｡.✵°✵,¸.•✵' } },
  { id: 'flower_face', name: '🌸ξξ(∵❤◡❤∵) Flower', map: {}, wrapper: { prefix: '🌸ξξ(∵❤◡❤∵)ξξ·¯·♩¸ ', suffix: ' ¸♩·¯·ξξ(∵❤◡❤∵)ξξ🌸' } },
  { id: 'mystical', name: '¸„٭⊹✡ Mystical', map: {}, wrapper: { prefix: '¸„٭⊹✡•~⍣°"ˆ˜¨ ', suffix: ' ¨˜ˆ"°⍣~•✡⊹٭„¸' } },
  { id: 'star_sparkle', name: '٭⊹¤ Star Sparkle', map: {}, wrapper: { prefix: '٭⊹¤.•⨳•.*☆✬ ', suffix: ' ✬☆*.•⨳•.¤⊹٭' } },
  { id: 'mega_heart', name: 'ミミ◦❧◦ Mega Heart', map: {}, wrapper: { prefix: 'ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥ ', suffix: ' ♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡' } },
  { id: 'star_simple', name: '·.★·.·´¯` Star', map: {}, wrapper: { prefix: '·.★·.·´¯`·.·★ ', suffix: ' ★·.·´¯`·.·★.·' } },
  { id: 'heart_dots', name: '♥❤♥.¸• Heart Dots', map: {}, wrapper: { prefix: '♥❤♥.¸•❤`.¸•❤`.¸ ', suffix: ' ¸.`❤•¸.`❤•¸.♥❤♥' } },
  { id: 'music_face', name: '(¯`\'•.¸❤♫♪ Music', map: {}, wrapper: { prefix: '(¯`\'•.¸❤♫♪♥(◠‿◠)♥♫♪❤¸.•\'´¯) ', suffix: ' (¯`\'•.¸❤♫♪♥(◠‿◠)♥♫♪❤¸.•\'´¯)' } },
  { id: 'simple_heart', name: '*¸ „„.•~¹° Heart', map: {}, wrapper: { prefix: '*¸ „„.•~¹°"ˆ˜¨♡ ', suffix: ' ♡¨˜ˆ"°¹~•.„¸*' } },
  { id: 'lotus', name: '꧁•⊹٭ Lotus ٭⊹•꧂', map: {}, wrapper: { prefix: '꧁•⊹٭ ', suffix: ' ٭⊹•꧂' } },
  { id: 'pink_heart', name: '💖´ *•.¸♥ Pink', map: {}, wrapper: { prefix: '💖´ *•.¸♥¸.•** ', suffix: ' **•.¸♥¸.•*´💖' } },
  { id: 'double_heart', name: '•¤»((¯♥¯))«¤• Heart', map: {}, wrapper: { prefix: '•¤»((¯♥¯))«¤• ', suffix: ' •¤»((¯♥¯))«¤•' } },
  { id: 'sinhala', name: '෴❤️෴ Sinhala ෴❤️෴', map: {}, wrapper: { prefix: '෴❤️෴ ෴❤️෴ ', suffix: ' ෴❤️෴ ෴❤️෴' } },
  { id: 'wave_fancy', name: '¸,ø¤º°`° Wave', map: {}, wrapper: { prefix: '¸,ø¤º°`°º¤ø,¸¸,ø¤º° ', suffix: ' °º¤ø,¸¸,ø¤º°`°º¤ø,¸' } },

  // Glitch/Special combining
  { id: 'dots_above', name: '░ Dots ░', map: {}, wrapper: { prefix: '░', suffix: '░' } },
  { id: 'heart_between', name: 'P♥ Heart Between', map: {}, wrapper: { prefix: '', suffix: '' } }, // Special handling needed
  { id: 'wingdings', name: '🏱︎ Wingdings', map: {}, wrapper: { prefix: '', suffix: '' } }, // Wingdings style

  // Cute/Kawaii
  { id: 'kawaii', name: '(っ◔◡◔)っ ♥ Kawaii', map: {}, wrapper: { prefix: '(っ◔◡◔)っ ♥ ', suffix: ' ♥' } },
  { id: 'bear', name: 'ʕ•ᴥ•ʔ Bear', map: {}, wrapper: { prefix: 'ʕ•ᴥ•ʔ ', suffix: ' ʕ•ᴥ•ʔ' } },
];

export function transform(text: string, styleId: string): string {
  const style = fontStyles.find(s => s.id === styleId);
  if (!style) return text;

  // Handle wrapper styles
  if (style.wrapper) {
    return style.wrapper.prefix + text + style.wrapper.suffix;
  }

  // Process characters
  let result = [...text].map(char => {
    return style.map[char] || char;
  }).join('');

  if (style.isReversed) {
    result = [...result].reverse().join('');
  }

  return result;
}

/* Product catalog — source: "Product Catalog Descriptions.pdf".
   Edit descriptions/applications here; products.html and ingredient.html both read this file. */
const CATEGORIES = [
  {
    "id": "acids-actives",
    "label": "Acids & Actives",
    "icon": "🧪"
  },
  {
    "id": "antiseptics",
    "label": "Antiseptics",
    "icon": "🧴"
  },
  {
    "id": "butters-waxes",
    "label": "Butters & Waxes",
    "icon": "🧈"
  },
  {
    "id": "clays",
    "label": "Clays",
    "icon": "🪨"
  },
  {
    "id": "emollients",
    "label": "Emollients & Humectants",
    "icon": "💧"
  },
  {
    "id": "excipients",
    "label": "Excipients & Tablet Aids",
    "icon": "💊"
  },
  {
    "id": "fatty-acids",
    "label": "Fatty Acids",
    "icon": "🫧"
  },
  {
    "id": "mcts",
    "label": "MCT's",
    "icon": "🥥"
  },
  {
    "id": "nutritional",
    "label": "Nutritional",
    "icon": "🌱"
  },
  {
    "id": "oils",
    "label": "Oils",
    "icon": "🫙"
  },
  {
    "id": "peptides",
    "label": "Peptides",
    "icon": "🧬"
  },
  {
    "id": "preservatives",
    "label": "Preservatives",
    "icon": "🛡️"
  },
  {
    "id": "proteins",
    "label": "Proteins",
    "icon": "🥚"
  },
  {
    "id": "salts-sugars",
    "label": "Salts & Sugars",
    "icon": "🧂"
  },
  {
    "id": "sunscreen",
    "label": "Sunscreen",
    "icon": "☀️"
  },
  {
    "id": "surfactants",
    "label": "Surfactants & Emulsifiers",
    "icon": "🧼"
  },
  {
    "id": "vitamins",
    "label": "Vitamins",
    "icon": "🍊"
  }
];

const PRODUCTS = [
  {
    "name": "Alpha Lipoic Acid",
    "category": "acids-actives",
    "description": "A sulfur-containing compound the body makes naturally, where it supports energy-producing enzymes. It is an antioxidant that works in both water and fat.",
    "applications": "Antioxidant dietary supplements; anti-aging skincare."
  },
  {
    "name": "Apple Cider Vinegar",
    "category": "acids-actives",
    "description": "Vinegar made by fermenting apple juice. Its main active component is acetic acid.",
    "applications": "Dressings, marinades and beverages; supplement capsules and gummies; hair rinses and toners."
  },
  {
    "name": "Arbutin",
    "category": "acids-actives",
    "description": "A glycoside of hydroquinone found naturally in bearberry leaves. It inhibits tyrosinase, the enzyme that drives melanin production.",
    "applications": "Brightening serums and creams for dark spots and uneven skin tone."
  },
  {
    "name": "Ascorbic Acid",
    "category": "acids-actives",
    "description": "Pure vitamin C, a water-soluble antioxidant and essential nutrient.",
    "applications": "Dietary supplements; food antioxidant that prevents browning; brightening and antioxidant serums."
  },
  {
    "name": "Ascorbyl Glucoside",
    "category": "acids-actives",
    "description": "A stable vitamin C derivative made by bonding ascorbic acid to glucose. Enzymes in the skin release the ascorbic acid after application.",
    "applications": "Brightening serums, creams and lotions where pure vitamin C would be too unstable."
  },
  {
    "name": "Azelaic Acid",
    "category": "acids-actives",
    "description": "A dicarboxylic acid that occurs naturally in grains such as wheat, rye and barley.",
    "applications": "Skincare for blemish-prone skin, redness and uneven tone; higher strengths are regulated as acne and rosacea drugs."
  },
  {
    "name": "Behenic Acid",
    "category": "acids-actives",
    "description": "A long-chain (C22) saturated fatty acid obtained from vegetable oils such as rapeseed and moringa.",
    "applications": "Thickener and opacifier in creams, hair conditioners and stick products."
  },
  {
    "name": "Benzoic Acid",
    "category": "acids-actives",
    "description": "An aromatic acid used as a preservative. It works against yeasts and molds in acidic products.",
    "applications": "Preservation of acidic foods and beverages, cosmetics and pharmaceuticals."
  },
  {
    "name": "Calamine",
    "category": "acids-actives",
    "description": "A pink powder of zinc oxide with a small amount of ferric oxide. It is a traditional ingredient in soothing topical products.",
    "applications": "Anti-itch lotions, skin protectant creams and soothing topical products."
  },
  {
    "name": "Citric Acid",
    "category": "acids-actives",
    "description": "A weak organic acid found in citrus fruit and made commercially by fermentation. It acts as an acidulant, pH adjuster and chelating agent.",
    "applications": "Foods and beverages; cosmetic pH adjustment; bath bombs and effervescent tablets; descaling cleaners."
  },
  {
    "name": "Colloidal Oatmeal",
    "category": "acids-actives",
    "description": "Finely milled oat kernels (Avena sativa) that disperse evenly in water. The US FDA recognizes it as an over-the-counter skin protectant.",
    "applications": "Lotions, bath treatments and cleansers for dry, itchy or sensitive skin."
  },
  {
    "name": "Fumaric Acid",
    "category": "acids-actives",
    "description": "An organic acid with a strong sour taste that absorbs very little moisture.",
    "applications": "Acidulant in dry beverage mixes, bakery products and tortillas; animal feed; polyester resin manufacture."
  },
  {
    "name": "Hyaluronic Acid",
    "category": "acids-actives",
    "description": "A glycosaminoglycan found naturally in skin and connective tissue that binds large amounts of water. Commercial material is made by bacterial fermentation and usually supplied as sodium hyaluronate.",
    "applications": "Hydrating serums and creams; joint and skin supplements."
  },
  {
    "name": "Kojic Acid",
    "category": "acids-actives",
    "description": "A compound produced by fungi such as Aspergillus oryzae during fermentation. It inhibits tyrosinase.",
    "applications": "Brightening soaps, creams and serums."
  },
  {
    "name": "Lactic Acid",
    "category": "acids-actives",
    "description": "An alpha hydroxy acid (AHA) made by fermenting sugars. It exfoliates and hydrates skin, and acidifies and preserves food.",
    "applications": "Exfoliating lotions and peels; food and beverage acidulant; pH adjuster."
  },
  {
    "name": "Malic Acid",
    "category": "acids-actives",
    "description": "The organic acid that gives apples and many other fruits their tartness.",
    "applications": "Sour candies and beverages; AHA in skincare; pH adjuster."
  },
  {
    "name": "Mandelic Acid",
    "category": "acids-actives",
    "description": "An AHA derived from bitter almonds. Its larger molecule penetrates skin more slowly than glycolic acid, so it is considered gentler.",
    "applications": "Exfoliating serums and peels for blemish-prone or uneven skin."
  },
  {
    "name": "Methyl Salicylate",
    "category": "acids-actives",
    "description": "An ester known as oil of wintergreen, with a strong minty scent. It occurs in wintergreen and sweet birch and is also made synthetically.",
    "applications": "Counterirritant in muscle and joint rubs; flavor and fragrance at low levels in oral care and confectionery."
  },
  {
    "name": "Oleic Acid",
    "category": "acids-actives",
    "description": "An omega-9 monounsaturated fatty acid and the main fatty acid in olive oil.",
    "applications": "Soap making; emollient and emulsifier raw material; pharmaceutical excipient and penetration enhancer."
  },
  {
    "name": "Phosphoric Acid",
    "category": "acids-actives",
    "description": "A mineral acid sold in food and technical grades.",
    "applications": "Acidulant in cola beverages; pH control; metal treatment and rust removal; fertilizer manufacture."
  },
  {
    "name": "Pramoxine Hydrochloride",
    "category": "acids-actives",
    "description": "A topical local anesthetic used in products for temporary relief of itching and minor pain.",
    "applications": "Over-the-counter anti-itch creams and lotions; hemorrhoidal products."
  },
  {
    "name": "Salicylic Acid",
    "category": "acids-actives",
    "description": "An oil-soluble beta hydroxy acid (BHA), first derived from willow bark. It loosens and sheds dead skin cells.",
    "applications": "Acne products and exfoliating cleansers; dandruff shampoos; wart and callus removers."
  },
  {
    "name": "Tartaric Acid",
    "category": "acids-actives",
    "description": "An organic acid found naturally in grapes and recovered as a by-product of winemaking.",
    "applications": "Food and beverage acidulant; winemaking; leavening systems and effervescent products."
  },
  {
    "name": "Urea USP",
    "category": "acids-actives",
    "description": "A component of the skin's natural moisturizing factor, here in a grade that meets United States Pharmacopeia standards. It hydrates at low levels and softens thick, rough skin at high levels.",
    "applications": "Moisturizers for dry skin; foot and heel creams; dermatological products."
  },
  {
    "name": "Benzalkonium Chloride 50% Solution",
    "category": "antiseptics",
    "description": "A quaternary ammonium compound with broad antimicrobial activity, supplied as a 50% concentrate for dilution.",
    "applications": "Disinfectants and sanitizers; alcohol-free hand sanitizers and antiseptic wipes; preservative in eye and nasal products."
  },
  {
    "name": "Benzethonium Chloride",
    "category": "antiseptics",
    "description": "A synthetic quaternary ammonium antimicrobial.",
    "applications": "First-aid antiseptics; antibacterial hand washes and wipes; cosmetic preservative."
  },
  {
    "name": "Cetrimide Powder",
    "category": "antiseptics",
    "description": "A quaternary ammonium antiseptic made up mainly of tetradecyltrimethylammonium bromide. It also acts as a cationic surfactant.",
    "applications": "Antiseptic creams and skin-cleansing solutions; medicated shampoos; often paired with chlorhexidine."
  },
  {
    "name": "Cetylpyridinium Chloride",
    "category": "antiseptics",
    "description": "A quaternary ammonium antiseptic used mainly in oral care.",
    "applications": "Mouthwashes, toothpastes, lozenges and throat sprays."
  },
  {
    "name": "Chlorhexidine Base",
    "category": "antiseptics",
    "description": "A broad-spectrum bisbiguanide antiseptic. The base dissolves poorly in water and is the starting material for salts such as chlorhexidine gluconate and acetate.",
    "applications": "Manufacture of chlorhexidine salts for skin antiseptics, surgical scrubs and mouth rinses."
  },
  {
    "name": "Mecetronium Ethosulfate",
    "category": "antiseptics",
    "description": "A quaternary ammonium compound, also written mecetronium ethylsulfate (MES).",
    "applications": "Combined with propanol alcohols in rub-in hand disinfectants."
  },
  {
    "name": "Octenidine Hydrochloride",
    "category": "antiseptics",
    "description": "A cationic antiseptic active against a broad range of bacteria and fungi.",
    "applications": "Antiseptics for skin, mucous membranes and wounds; mouth rinses."
  },
  {
    "name": "Strong Cetrimide 40% Solution",
    "category": "antiseptics",
    "description": "A concentrated aqueous solution of cetrimide intended for dilution.",
    "applications": "Manufacture of antiseptic solutions, creams and cleansers."
  },
  {
    "name": "Acai Butter",
    "category": "butters-waxes",
    "description": "A blended butter made with oil from acai berries (Euterpe oleracea), an Amazonian palm fruit.",
    "applications": "Body butters, creams and lip balms."
  },
  {
    "name": "Almond Butter",
    "category": "butters-waxes",
    "description": "A cosmetic blended butter based on sweet almond oil. It is soft, spreadable and mild on skin.",
    "applications": "Body butters, massage products, lotions and lip care."
  },
  {
    "name": "Aloe Vera Butter",
    "category": "butters-waxes",
    "description": "A blended butter that carries aloe vera extract in a vegetable fat base, commonly coconut oil. It melts readily on skin contact.",
    "applications": "After-sun products, body butters, lotions and soaps."
  },
  {
    "name": "Apricot Butter",
    "category": "butters-waxes",
    "description": "A blended butter based on apricot kernel oil.",
    "applications": "Creams, body butters and lip balms."
  },
  {
    "name": "Argan Butter",
    "category": "butters-waxes",
    "description": "A blended butter based on argan oil from the kernels of the Moroccan argan tree.",
    "applications": "Hair masks and styling products; body butters and creams."
  },
  {
    "name": "Avocado Butter",
    "category": "butters-waxes",
    "description": "A blended butter based on avocado fruit oil, with a rich, creamy feel.",
    "applications": "Creams for dry skin, hair conditioners and body butters."
  },
  {
    "name": "Babassu Butter",
    "category": "butters-waxes",
    "description": "A fat from the kernels of the Brazilian babassu palm, high in lauric acid. It is solid at room temperature and melts on skin contact.",
    "applications": "Soaps, balms, hair products and lotions."
  },
  {
    "name": "Baobab Butter",
    "category": "butters-waxes",
    "description": "A blended butter based on oil from the seeds of the African baobab tree.",
    "applications": "Body butters, creams and hair care."
  },
  {
    "name": "Beeswax",
    "category": "butters-waxes",
    "description": "A natural wax made by honeybees, sold as yellow or white grades. It thickens and gives structure to formulations.",
    "applications": "Balms, salves and lipsticks; creams; candles and polishes."
  },
  {
    "name": "Blueberry Butter",
    "category": "butters-waxes",
    "description": "A blended butter made with blueberry seed oil or extract.",
    "applications": "Body butters, lip balms and creams."
  },
  {
    "name": "Brazil Nut Butter",
    "category": "butters-waxes",
    "description": "A blended butter based on Brazil nut oil.",
    "applications": "Hair conditioners, body butters and soaps."
  },
  {
    "name": "Cocoa Butter",
    "category": "butters-waxes",
    "description": "The fat pressed from cocoa beans (Theobroma cacao). It is hard and brittle at room temperature and melts close to body temperature.",
    "applications": "Chocolate and confectionery; lotion bars, lip balms and soaps; suppository bases."
  },
  {
    "name": "Cupuacu Butter",
    "category": "butters-waxes",
    "description": "A soft butter from the seeds of Theobroma grandiflorum, an Amazonian relative of cacao. It is known for holding water well.",
    "applications": "Creams, lip care and hair products."
  },
  {
    "name": "Grape Seed Butter",
    "category": "butters-waxes",
    "description": "A blended butter based on grapeseed oil, with a light feel.",
    "applications": "Lotions, body butters and lip balms."
  },
  {
    "name": "Hemp Seed Butter",
    "category": "butters-waxes",
    "description": "A blended butter based on hemp seed oil.",
    "applications": "Body butters, balms and soaps."
  },
  {
    "name": "Illipe Butter",
    "category": "butters-waxes",
    "description": "A hard butter from the nuts of the Shorea stenoptera tree of Borneo. Its properties are close to cocoa butter, with a slightly higher melting point.",
    "applications": "Lotion bars, balms and soaps; cocoa butter alternative."
  },
  {
    "name": "Jojoba Butter",
    "category": "butters-waxes",
    "description": "A butter made from jojoba oil, the liquid wax of the jojoba seed, combined with a hardened base.",
    "applications": "Lip balms, body butters and hair products."
  },
  {
    "name": "Kokum Butter",
    "category": "butters-waxes",
    "description": "A hard, non-greasy butter from the seeds of the Indian Garcinia indica tree, high in stearic acid.",
    "applications": "Lip balms, lotion bars, soaps and creams."
  },
  {
    "name": "Lanolin Wax",
    "category": "butters-waxes",
    "description": "The harder, higher-melting fraction of lanolin, which is refined from sheep's wool grease.",
    "applications": "Lipsticks and stick products; thickener and emulsifier in creams and ointments."
  },
  {
    "name": "Lavender Butter",
    "category": "butters-waxes",
    "description": "A blended butter that carries lavender oil or extract in a vegetable fat base.",
    "applications": "Body butters, massage products and balms."
  },
  {
    "name": "Mango Butter",
    "category": "butters-waxes",
    "description": "A semi-solid butter from the kernels of the mango fruit (Mangifera indica). Its texture sits between shea and cocoa butter.",
    "applications": "Body butters, lotions, hair care and soaps."
  },
  {
    "name": "Marula Butter",
    "category": "butters-waxes",
    "description": "A blended butter based on marula oil from southern Africa.",
    "applications": "Creams, body butters and hair care."
  },
  {
    "name": "Monoi Butter",
    "category": "butters-waxes",
    "description": "A butter based on monoi, the Tahitian preparation of tiare flowers soaked in coconut oil.",
    "applications": "Body butters, hair products and after-sun care."
  },
  {
    "name": "Moringa Butter",
    "category": "butters-waxes",
    "description": "A blended butter based on oil from Moringa oleifera seeds.",
    "applications": "Creams, balms and hair care."
  },
  {
    "name": "Neem Butter",
    "category": "butters-waxes",
    "description": "A blended butter based on neem seed oil, which softens the oil's strong natural odor and makes it easier to use.",
    "applications": "Soaps, balms and scalp and hair products."
  },
  {
    "name": "Oat Butter",
    "category": "butters-waxes",
    "description": "A blended butter made with oat kernel oil or extract.",
    "applications": "Products for dry or sensitive skin; baby care; lotions."
  },
  {
    "name": "Olive Butter",
    "category": "butters-waxes",
    "description": "A blended butter based on olive oil, usually hardened with hydrogenated olive oil.",
    "applications": "Body butters, soaps, hair care and lip balms."
  },
  {
    "name": "Sal Butter",
    "category": "butters-waxes",
    "description": "A firm butter from the seeds of the Indian Shorea robusta tree, rich in stearic and oleic acids.",
    "applications": "Lotion bars, balms, creams and soaps."
  },
  {
    "name": "Shea Butter",
    "category": "butters-waxes",
    "description": "The fat from the nuts of the African shea tree (Vitellaria paradoxa). It is rich in stearic and oleic acids.",
    "applications": "Creams, body butters, lip balms, hair care and soaps."
  },
  {
    "name": "Bentonite",
    "category": "clays",
    "description": "An absorbent clay formed from volcanic ash and composed mainly of montmorillonite. It swells in water and binds oils.",
    "applications": "Face masks; thickener and suspending agent; clarifying wine and juice."
  },
  {
    "name": "Diatomaceous Earth",
    "category": "clays",
    "description": "A soft, silica-rich powder made of the fossilized shells of microscopic algae called diatoms.",
    "applications": "Filtration aid; mild abrasive in scrubs and polishes; absorbent and anti-caking agent."
  },
  {
    "name": "French Black",
    "category": "clays",
    "description": "A dark cosmetic clay used like other absorbent clays.",
    "applications": "Face masks, soaps and scrubs."
  },
  {
    "name": "French Green",
    "category": "clays",
    "description": "A green clay rich in illite and montmorillonite, colored by iron oxides. It is highly absorbent.",
    "applications": "Masks for oily skin, poultices and soaps."
  },
  {
    "name": "Glacial",
    "category": "clays",
    "description": "Glacial marine clay, a very fine mineral-rich clay from glacial deposits, most commonly sourced from coastal British Columbia, Canada.",
    "applications": "Face and body masks, soaps, scrubs and hair care."
  },
  {
    "name": "Green Illite",
    "category": "clays",
    "description": "Illite is a non-swelling clay mineral with strong absorbent properties. The green grade is the main mineral in French green clay.",
    "applications": "Masks for oily and combination skin; soaps."
  },
  {
    "name": "Kaolin Coral",
    "category": "clays",
    "description": "A kaolin clay with a soft coral-pink color that comes from iron oxides. It is mild on skin.",
    "applications": "Masks, soaps and bath products; natural colorant."
  },
  {
    "name": "Kaolin White",
    "category": "clays",
    "description": "China clay, a white clay made mostly of the mineral kaolinite. It is the mildest of the common cosmetic clays.",
    "applications": "Masks for sensitive skin; face and body powders; soaps and deodorants."
  },
  {
    "name": "Multani Mitti",
    "category": "clays",
    "description": "Fuller's earth from the Indian subcontinent, a traditional oil-absorbing clay.",
    "applications": "Face packs, hair packs and cleansers."
  },
  {
    "name": "Red Illite",
    "category": "clays",
    "description": "An illite clay whose red color comes from a high iron oxide content.",
    "applications": "Masks and soaps; natural colorant."
  },
  {
    "name": "Rhassoul",
    "category": "clays",
    "description": "A magnesium-rich clay mined in the Atlas Mountains of Morocco, also called ghassoul. It has been used for centuries to wash skin and hair.",
    "applications": "Hair masks, cleansing clays and spa treatments."
  },
  {
    "name": "Sea",
    "category": "clays",
    "description": "Sea clay is a fine clay taken from marine sediment deposits.",
    "applications": "Face masks, body wraps and soaps."
  },
  {
    "name": "Yellow Illite",
    "category": "clays",
    "description": "An illite clay with a yellow color from iron oxides. It is regarded as one of the milder illites.",
    "applications": "Masks for sensitive or combination skin; soaps."
  },
  {
    "name": "CO-Q10",
    "category": "emollients",
    "description": "Coenzyme Q10 (ubiquinone) is a fat-soluble, vitamin-like compound found in nearly every cell. It takes part in cellular energy production and acts as an antioxidant.",
    "applications": "Dietary supplements, often as softgels; anti-aging skincare."
  },
  {
    "name": "DL-Panthenol",
    "category": "emollients",
    "description": "The powder form of panthenol, also called provitamin B5. It attracts moisture and conditions hair and skin.",
    "applications": "Shampoos and conditioners; moisturizers; after-sun products."
  },
  {
    "name": "Isopropyl Myristate",
    "category": "emollients",
    "description": "An ester of isopropyl alcohol and myristic acid. It is a thin, fast-absorbing emollient that reduces the greasy feel of a formula.",
    "applications": "Lotions and bath oils; makeup removers; topical pharmaceuticals."
  },
  {
    "name": "Isopropyl Palmitate",
    "category": "emollients",
    "description": "An ester of isopropyl alcohol and palmitic acid. It gives a smooth, silky skin feel.",
    "applications": "Creams and lotions; makeup; sun care; hair conditioners."
  },
  {
    "name": "Myristyl Myristate",
    "category": "emollients",
    "description": "A waxy ester of myristyl alcohol and myristic acid that melts near skin temperature. It adds body to emulsions and a soft, velvety finish.",
    "applications": "Creams, lotions and hair conditioners."
  },
  {
    "name": "Di-Pac Sugar",
    "category": "excipients",
    "description": "Di-Pac® is a directly compressible sugar from Domino Specialty Ingredients, made by co-crystallizing sucrose with a small amount of maltodextrin. It is free-flowing and picks up little moisture.",
    "applications": "Chewable and direct-compression tablets; supplements; compressed mints and candies."
  },
  {
    "name": "Dicalcium Phosphate",
    "category": "excipients",
    "description": "Dibasic calcium phosphate, a mineral salt that supplies both calcium and phosphorus. It flows and compresses well in tablet presses.",
    "applications": "Tablet and capsule filler; calcium and phosphorus source in supplements and fortified foods; animal feed."
  },
  {
    "name": "Lactose (Anhydrous / Monohydrate / DT)",
    "category": "excipients",
    "description": "Milk sugar, one of the most widely used fillers for tablets and capsules. Monohydrate suits wet granulation and capsule filling, anhydrous suits moisture-sensitive actives, and DT is a direct-tableting grade.",
    "applications": "Tablet and capsule diluent; dry powder blends; food and infant nutrition."
  },
  {
    "name": "Magnesium Stearate",
    "category": "excipients",
    "description": "The magnesium salt of stearic acid, a fine white powder. It is the most widely used tablet and capsule lubricant and keeps powders from sticking to equipment.",
    "applications": "Tablet and capsule manufacturing; pressed cosmetic powders; anti-caking agent."
  },
  {
    "name": "Mannitol",
    "category": "excipients",
    "description": "A sugar alcohol with a sweet, cooling taste that absorbs very little moisture.",
    "applications": "Chewable and orally disintegrating tablets; sugar-free confectionery; bulking agent for freeze-dried products."
  },
  {
    "name": "Microcrystalline Cellulose",
    "category": "excipients",
    "description": "Purified, partially broken-down cellulose from plant fiber. It is a binder and filler with excellent compressibility.",
    "applications": "Direct-compression tablets and capsules; anti-caking agent, texturizer and bulking agent in foods."
  },
  {
    "name": "Myristyl Stearate",
    "category": "excipients",
    "description": "A waxy ester of myristyl alcohol and stearic acid that softens and conditions skin.",
    "applications": "Creams, lotions and stick products."
  },
  {
    "name": "Rose",
    "category": "excipients",
    "description": "Rose clay is a pink kaolin colored by iron oxides. It is gentle and only mildly absorbent.",
    "applications": "Masks for dry or sensitive skin; soaps and bath bombs."
  },
  {
    "name": "Sorbitol",
    "category": "excipients",
    "description": "A sugar alcohol about 60% as sweet as sugar that also holds moisture. It is sold as a powder or a 70% solution.",
    "applications": "Sugar-free gum and candy; toothpaste and mouthwash; syrups; tablet diluent."
  },
  {
    "name": "Stearates",
    "category": "excipients",
    "description": "Salts of stearic acid, such as magnesium, calcium, zinc and sodium stearate. They act as lubricants, release agents and anti-caking agents.",
    "applications": "Tableting; cosmetic powders; soaps and stick products."
  },
  {
    "name": "Stearic Acid",
    "category": "excipients",
    "description": "A saturated C18 fatty acid obtained from vegetable or animal fats. It hardens and thickens formulations.",
    "applications": "Tablet lubricant; bar soaps and candles; creams and lotions."
  },
  {
    "name": "Trimethylolpropane",
    "category": "excipients",
    "description": "A polyol with three hydroxyl groups, used mainly as a building block for resins, coatings and synthetic lubricants. Its fatty acid esters, such as trimethylolpropane triisostearate, are cosmetic emollients.",
    "applications": "Resin and lubricant manufacture; raw material for emollient esters."
  },
  {
    "name": "Cholesterol",
    "category": "fatty-acids",
    "description": "A sterol that forms part of the skin's natural barrier lipids alongside ceramides and fatty acids. Commercial material is usually derived from lanolin.",
    "applications": "Barrier-repair creams; emulsion stabilizer; liposome and lipid-based drug delivery systems."
  },
  {
    "name": "DHA",
    "category": "fatty-acids",
    "description": "Docosahexaenoic acid, a long-chain omega-3 fatty acid and a major structural fat in the brain and retina. It is sourced from fish oil or microalgae.",
    "applications": "Omega-3 and prenatal supplements; infant formula; fortified foods."
  },
  {
    "name": "Ethyl Oleate",
    "category": "fatty-acids",
    "description": "An ester of ethanol and oleic acid, a thin, pale yellow oily liquid.",
    "applications": "Solvent and vehicle for oil-soluble pharmaceutical actives; emollient in cosmetics."
  },
  {
    "name": "GLA",
    "category": "fatty-acids",
    "description": "Gamma-linolenic acid, an omega-6 fatty acid found in evening primrose, borage and black currant seed oils.",
    "applications": "Dietary supplements; skincare for dry skin."
  },
  {
    "name": "Caprylic/Capric Triglyceride (60/40)",
    "category": "mcts",
    "description": "A medium-chain triglyceride (MCT) oil made from glycerin and the caprylic (C8) and capric (C10) fatty acids of coconut or palm kernel oil, at about 60% C8 to 40% C10. It is clear, odorless and resists oxidation.",
    "applications": "MCT oil supplements; carrier for flavors, vitamins and essential oils; light cosmetic emollient."
  },
  {
    "name": "Caprylic/Capric Triglyceride (70/30)",
    "category": "mcts",
    "description": "The same MCT oil with a higher share of caprylic acid, about 70% C8 to 30% C10.",
    "applications": "Sports and ketogenic nutrition products; carrier oil; light cosmetic emollient."
  },
  {
    "name": "Caprylic/Capric/Lauric Triglyceride",
    "category": "mcts",
    "description": "A triglyceride that adds lauric acid (C12) to the caprylic and capric mix. It is a smooth, stable emollient and carrier.",
    "applications": "Creams, lotions and makeup; carrier for actives and fragrances; food applications."
  },
  {
    "name": "Banaba",
    "category": "nutritional",
    "description": "An extract of Lagerstroemia speciosa leaves, a tree native to Southeast Asia. Extracts are typically standardized for corosolic acid.",
    "applications": "Dietary supplements positioned for healthy glucose metabolism."
  },
  {
    "name": "Berberine",
    "category": "nutritional",
    "description": "A yellow plant alkaloid found in barberry, goldenseal and Oregon grape, usually supplied as berberine hydrochloride.",
    "applications": "Dietary supplements positioned for metabolic and blood sugar support."
  },
  {
    "name": "EGCG (Green Tea)",
    "category": "nutritional",
    "description": "Epigallocatechin gallate, the most abundant catechin in green tea (Camellia sinensis) and a polyphenol antioxidant.",
    "applications": "Antioxidant and weight-management supplements; functional beverages; antioxidant skincare."
  },
  {
    "name": "GABA",
    "category": "nutritional",
    "description": "Gamma-aminobutyric acid, an amino acid that serves as the brain's main inhibitory neurotransmitter.",
    "applications": "Relaxation and sleep supplements; functional foods and beverages."
  },
  {
    "name": "Ginkgo Biloba",
    "category": "nutritional",
    "description": "An extract from the leaves of the ginkgo tree, commonly standardized to flavone glycosides and terpene lactones.",
    "applications": "Dietary supplements positioned for memory, focus and circulation."
  },
  {
    "name": "Glucosamine",
    "category": "nutritional",
    "description": "An amino sugar found naturally in cartilage. It is supplied as glucosamine hydrochloride or sulfate, usually derived from shellfish.",
    "applications": "Joint health supplements, often with chondroitin and MSM; pet supplements."
  },
  {
    "name": "Glutamine",
    "category": "nutritional",
    "description": "L-glutamine, the most abundant amino acid in the human body.",
    "applications": "Sports nutrition and recovery products; digestive health supplements; clinical nutrition."
  },
  {
    "name": "Glutathione",
    "category": "nutritional",
    "description": "A tripeptide of glutamate, cysteine and glycine and one of the body's main intracellular antioxidants.",
    "applications": "Antioxidant supplements; skin-brightening products."
  },
  {
    "name": "Inulin",
    "category": "nutritional",
    "description": "A soluble prebiotic fiber, most often extracted from chicory root.",
    "applications": "Fiber fortification; prebiotic supplements; sugar and fat reduction in foods."
  },
  {
    "name": "Lutein",
    "category": "nutritional",
    "description": "A yellow carotenoid extracted from marigold flowers. It concentrates naturally in the macula of the eye.",
    "applications": "Eye health supplements, often with zeaxanthin; natural food colorant."
  },
  {
    "name": "Melatonin",
    "category": "nutritional",
    "description": "A hormone the body produces to regulate the sleep-wake cycle; supplement material is made synthetically.",
    "applications": "Sleep support and jet lag supplements. It is regulated as a medicine in some countries."
  },
  {
    "name": "Methylsulfonylmethane (MSM)",
    "category": "nutritional",
    "description": "An organic sulfur compound.",
    "applications": "Joint health supplements, often with glucosamine and chondroitin; hair, skin and nail formulas."
  },
  {
    "name": "N-acetylcysteine (NAC)",
    "category": "nutritional",
    "description": "The acetylated form of the amino acid L-cysteine and a precursor to glutathione.",
    "applications": "Antioxidant supplements; also used as a pharmaceutical active."
  },
  {
    "name": "Potassium Carbonate",
    "category": "nutritional",
    "description": "A white, water-soluble alkaline potassium salt.",
    "applications": "Acidity regulator in foods such as cocoa and noodles; buffering agent; soap and glass manufacture."
  },
  {
    "name": "Quercetin",
    "category": "nutritional",
    "description": "A flavonoid antioxidant found in onions, apples and berries.",
    "applications": "Antioxidant and immune-support supplements, often with vitamin C."
  },
  {
    "name": "Resveratrol",
    "category": "nutritional",
    "description": "A polyphenol found in grape skins and red wine. Commercial material usually comes from Japanese knotweed.",
    "applications": "Antioxidant and healthy-aging supplements; skincare."
  },
  {
    "name": "Rhodiola Rosea",
    "category": "nutritional",
    "description": "An adaptogenic herb whose root grows in cold regions of Europe and Asia. Extracts are standardized for rosavins and salidroside.",
    "applications": "Dietary supplements positioned for stress, energy and mental performance."
  },
  {
    "name": "Abyssinian (Crambe) Oil",
    "category": "oils",
    "description": "A light oil from the seeds of Crambe abyssinica, very high in erucic acid. It absorbs quickly, adds shine and resists oxidation.",
    "applications": "Hair serums and conditioners; facial oils; makeup."
  },
  {
    "name": "Acai Oil",
    "category": "oils",
    "description": "An oil from the fruit of the Amazonian acai palm (Euterpe oleracea), rich in oleic acid and antioxidants.",
    "applications": "Anti-aging skincare; hair care."
  },
  {
    "name": "Ahiflower Oil",
    "category": "oils",
    "description": "A plant oil from the seeds of Buglossoides arvensis, sold under the Ahiflower® trademark. It is a rich plant source of the omega-3 stearidonic acid (SDA), along with ALA and GLA.",
    "applications": "Vegan omega supplements; skincare."
  },
  {
    "name": "Apricot Kernel Oil",
    "category": "oils",
    "description": "A light oil pressed from apricot kernels, high in oleic and linoleic acids. It is close to sweet almond oil in feel.",
    "applications": "Massage oils, facial oils and baby products."
  },
  {
    "name": "Argan Oil",
    "category": "oils",
    "description": "An oil from the kernels of the argan tree (Argania spinosa), native to Morocco. It is rich in oleic and linoleic acids and vitamin E.",
    "applications": "Hair serums; facial oils; nail and cuticle care."
  },
  {
    "name": "Avocado Oil",
    "category": "oils",
    "description": "A rich oil pressed from avocado fruit pulp, high in oleic acid.",
    "applications": "Cooking oil; creams for dry skin; hair masks."
  },
  {
    "name": "Babassu Oil",
    "category": "oils",
    "description": "An oil from the kernels of the Brazilian babassu palm, high in lauric acid and similar to coconut oil. It melts on contact with skin.",
    "applications": "Soaps, balms and hair care."
  },
  {
    "name": "Baobab Oil",
    "category": "oils",
    "description": "An oil from the seeds of the African baobab tree (Adansonia digitata), with a balanced mix of palmitic, oleic and linoleic acids.",
    "applications": "Skincare for dry skin; hair care."
  },
  {
    "name": "Black Cumin Oil",
    "category": "oils",
    "description": "An oil from Nigella sativa seeds, also called black seed oil. It contains thymoquinone.",
    "applications": "Dietary supplements; skincare and hair care."
  },
  {
    "name": "Blackberry Oil",
    "category": "oils",
    "description": "An oil cold-pressed from blackberry seeds, rich in linoleic and alpha-linolenic acids and vitamin E.",
    "applications": "Facial oils and serums."
  },
  {
    "name": "Blueberry Oil",
    "category": "oils",
    "description": "An oil pressed from blueberry seeds, supplying omega-3 and omega-6 fatty acids and natural antioxidants.",
    "applications": "Facial oils, serums and lip care."
  },
  {
    "name": "Borage Oil",
    "category": "oils",
    "description": "An oil from the seeds of Borago officinalis and one of the richest plant sources of gamma-linolenic acid (GLA).",
    "applications": "GLA supplements; skincare for dry or sensitive skin."
  },
  {
    "name": "Brazil Nut Oil",
    "category": "oils",
    "description": "An emollient oil pressed from Brazil nuts (Bertholletia excelsa), rich in oleic and linoleic acids.",
    "applications": "Hair care, skincare and soaps."
  },
  {
    "name": "Buriti Fruit Oil",
    "category": "oils",
    "description": "A deep orange-red oil from the fruit of the Amazonian Mauritia flexuosa palm. It is among the richest natural sources of beta-carotene and is high in oleic acid.",
    "applications": "Sun and after-sun care; skincare; hair products."
  },
  {
    "name": "Cacay (Kahai) Oil",
    "category": "oils",
    "description": "An oil from the nuts of the Amazonian Caryodendron orinocense tree. It is valued for its linoleic acid and vitamin E content.",
    "applications": "Anti-aging facial oils and serums."
  },
  {
    "name": "Camelina Oil",
    "category": "oils",
    "description": "An oil from the seeds of Camelina sativa, high in the omega-3 alpha-linolenic acid (ALA) and naturally stable thanks to its vitamin E content.",
    "applications": "Food and supplements; animal feed; skincare."
  },
  {
    "name": "Camellia Seed Oil",
    "category": "oils",
    "description": "A light, fast-absorbing oil from the seeds of camellia plants of East Asia, high in oleic acid. It is also known as tsubaki or tea seed oil.",
    "applications": "Hair oils; facial oils; cooking oil."
  },
  {
    "name": "Canola Oil",
    "category": "oils",
    "description": "A low-erucic-acid rapeseed oil with a neutral flavor and low saturated fat.",
    "applications": "Cooking and food manufacturing; economical base oil for soaps and cosmetics."
  },
  {
    "name": "Carrot Oil",
    "category": "oils",
    "description": "An orange oil made by infusing carrot root in a carrier oil, rich in beta-carotene.",
    "applications": "Facial oils, creams and sun-related skincare."
  },
  {
    "name": "Castor Oil",
    "category": "oils",
    "description": "A thick, viscous oil from the seeds of Ricinus communis, made up of about 90% ricinoleic acid.",
    "applications": "Hair and lash products; lipsticks and glosses; soaps; pharmaceutical and industrial uses."
  },
  {
    "name": "Cetyl Palmitate",
    "category": "oils",
    "description": "A wax ester of cetyl alcohol and palmitic acid, supplied as white waxy flakes. It thickens formulas and softens skin.",
    "applications": "Creams, lotions and stick products."
  },
  {
    "name": "Cherry Oil",
    "category": "oils",
    "description": "A light oil pressed from cherry kernels, rich in oleic and linoleic acids.",
    "applications": "Lip care, skincare and hair care."
  },
  {
    "name": "Chia Seed Oil",
    "category": "oils",
    "description": "An oil from the seeds of Salvia hispanica, very high in the omega-3 ALA.",
    "applications": "Dietary supplements; food; skincare."
  },
  {
    "name": "Coconut Oil",
    "category": "oils",
    "description": "An oil from the kernel of the coconut (Cocos nucifera), high in saturated fat and about half lauric acid. It is solid below roughly 24 °C (76 °F).",
    "applications": "Cooking; soap making; hair and skin care."
  },
  {
    "name": "Corn Oil",
    "category": "oils",
    "description": "An oil extracted from the germ of corn, high in linoleic acid.",
    "applications": "Cooking and frying; margarine; soap making."
  },
  {
    "name": "Cottonseed Oil",
    "category": "oils",
    "description": "An oil extracted from cotton seeds and refined for food use.",
    "applications": "Frying oil, snack foods and shortening; soaps."
  },
  {
    "name": "Cranberry Oil",
    "category": "oils",
    "description": "An oil pressed from cranberry seeds, notable for its balance of omega-3, omega-6 and omega-9 fatty acids.",
    "applications": "Facial oils and serums."
  },
  {
    "name": "Cupuacu Oil",
    "category": "oils",
    "description": "An emollient oil from the seeds of Theobroma grandiflorum, the Amazonian tree that also gives cupuacu butter.",
    "applications": "Skincare and hair care."
  },
  {
    "name": "Elderberry Seed Oil",
    "category": "oils",
    "description": "An oil from the seeds of Sambucus nigra, high in linoleic and alpha-linolenic acids.",
    "applications": "Skincare."
  },
  {
    "name": "Evening Primrose Oil",
    "category": "oils",
    "description": "An oil from the seeds of Oenothera biennis, rich in linoleic acid and a source of GLA.",
    "applications": "Dietary supplements; skincare for dry skin."
  },
  {
    "name": "Fish Oil (All Specs)",
    "category": "oils",
    "description": "Oil from fatty fish such as anchovy, sardine and mackerel, supplying the omega-3 fatty acids EPA and DHA. It is offered in a range of concentrations and forms.",
    "applications": "Omega-3 softgels and liquids; fortified foods; pet nutrition."
  },
  {
    "name": "Flaxseed Oil",
    "category": "oils",
    "description": "An oil from the seeds of Linum usitatissimum, very high in the omega-3 ALA. It is also known as linseed oil.",
    "applications": "Dietary supplements; food; wood finishes and paints."
  },
  {
    "name": "Glycerin",
    "category": "oils",
    "description": "A clear, sweet, viscous liquid obtained from vegetable oils. It is a water-soluble humectant, not an oil.",
    "applications": "Moisturizers and soaps; toothpaste; food humectant; pharmaceutical syrups."
  },
  {
    "name": "Grapeseed Oil",
    "category": "oils",
    "description": "A light oil pressed from grape seeds, a by-product of winemaking, high in linoleic acid.",
    "applications": "Cooking; massage oils; facial products for oily skin."
  },
  {
    "name": "Hazelnut Oil",
    "category": "oils",
    "description": "An oil pressed from hazelnuts (Corylus avellana), high in oleic acid. It has a light, dry feel on skin.",
    "applications": "Culinary oil; facial oils for oily and combination skin; massage oils."
  },
  {
    "name": "Hemp Seed Oil",
    "category": "oils",
    "description": "An oil from the seeds of Cannabis sativa with roughly a 3:1 ratio of omega-6 to omega-3 fatty acids.",
    "applications": "Food and supplements; skincare; soaps."
  },
  {
    "name": "Jojoba Oil",
    "category": "oils",
    "description": "A liquid wax from the seeds of the desert shrub Simmondsia chinensis. It resembles the skin's own sebum and is very stable against oxidation.",
    "applications": "Facial oils; hair care; makeup removers; carrier oil."
  },
  {
    "name": "Kiwi Seed Oil",
    "category": "oils",
    "description": "An oil pressed from kiwi fruit seeds, very high in the omega-3 ALA.",
    "applications": "Facial oils, serums and hair care."
  },
  {
    "name": "Kukui Nut Oil",
    "category": "oils",
    "description": "A light, quickly absorbed oil from the nuts of Aleurites moluccanus, the candlenut tree of Hawaii, rich in linoleic and linolenic acids.",
    "applications": "Skincare for dry skin; massage oils; hair care."
  },
  {
    "name": "Lanolin Oil",
    "category": "oils",
    "description": "The liquid fraction of lanolin, which is refined from sheep's wool grease. It is a strong emollient.",
    "applications": "Bath oils, hair products, lipsticks and baby products."
  },
  {
    "name": "Macadamia Nut Oil",
    "category": "oils",
    "description": "An oil pressed from macadamia nuts, high in oleic acid and notable for its palmitoleic acid (omega-7).",
    "applications": "Skincare for dry and mature skin; hair care; cooking."
  },
  {
    "name": "Marula Oil",
    "category": "oils",
    "description": "A light, stable oil from the kernels of the southern African marula tree (Sclerocarya birrea), high in oleic acid.",
    "applications": "Facial oils and hair care."
  },
  {
    "name": "Meadowfoam Seed Oil",
    "category": "oils",
    "description": "An oil from the seeds of Limnanthes alba, made up almost entirely of long-chain fatty acids. It is exceptionally resistant to oxidation.",
    "applications": "Skincare, hair care and lip products; extending the shelf life of oil blends."
  },
  {
    "name": "Mineral Oil / Petrolatum",
    "category": "oils",
    "description": "Highly refined hydrocarbons from petroleum. Mineral oil is a liquid and petrolatum (petroleum jelly) a semi-solid; both are inert and form a barrier that slows water loss from skin.",
    "applications": "Baby oil, ointment bases, skin protectants, lip care and hair pomades."
  },
  {
    "name": "Monoi Oil",
    "category": "oils",
    "description": "A Tahitian oil made by soaking tiare flowers (Gardenia taitensis) in refined coconut oil.",
    "applications": "Hair and body oils; sun and after-sun products."
  },
  {
    "name": "Moringa Oil",
    "category": "oils",
    "description": "A very stable oil from the seeds of Moringa oleifera, also called ben oil. It is high in oleic acid and contains behenic acid.",
    "applications": "Skincare, hair care and massage oils."
  },
  {
    "name": "Murumuru Oil",
    "category": "oils",
    "description": "A fat from the seeds of the Amazonian Astrocaryum murumuru palm, rich in lauric and myristic acids.",
    "applications": "Hair care for frizz control; lip care; soaps."
  },
  {
    "name": "Neem Seed Oil",
    "category": "oils",
    "description": "An oil from the seeds of the neem tree (Azadirachta indica), with a strong characteristic odor. It contains azadirachtin.",
    "applications": "Soaps; scalp and hair care; garden and pet care products."
  },
  {
    "name": "Oat Oil",
    "category": "oils",
    "description": "An oil extracted from oat kernels (Avena sativa), rich in linoleic and oleic acids and natural antioxidants.",
    "applications": "Products for dry or sensitive skin; hair care; baby care."
  },
  {
    "name": "Olive Oil",
    "category": "oils",
    "description": "An oil pressed from the fruit of Olea europaea, high in oleic acid.",
    "applications": "Culinary use; castile and bar soaps; skincare and hair care."
  },
  {
    "name": "Palm Kernel Oil",
    "category": "oils",
    "description": "An oil from the kernel of the oil palm fruit (Elaeis guineensis). It is high in lauric acid and similar to coconut oil.",
    "applications": "Soap and surfactant manufacture; confectionery fats; food."
  },
  {
    "name": "Passion Fruit Oil",
    "category": "oils",
    "description": "A light oil from passion fruit seeds (Passiflora edulis), also called maracuja oil and high in linoleic acid.",
    "applications": "Facial oils, hair care and massage oils."
  },
  {
    "name": "Peanut Oil",
    "category": "oils",
    "description": "An oil pressed from peanuts (Arachis hypogaea), rich in oleic and linoleic acids.",
    "applications": "Frying and food manufacturing; soap making; pharmaceutical vehicle."
  },
  {
    "name": "Pecan Oil",
    "category": "oils",
    "description": "A mild-flavored oil pressed from pecans (Carya illinoinensis), high in oleic acid.",
    "applications": "Culinary oil; massage oils and skincare."
  },
  {
    "name": "Pequi Oil",
    "category": "oils",
    "description": "An oil from the fruit of Caryocar brasiliense, a tree of the Brazilian Cerrado. It is rich in oleic and palmitic acids and carotenoids.",
    "applications": "Hair care for curl definition and frizz control; skincare."
  },
  {
    "name": "Perilla Seed Oil",
    "category": "oils",
    "description": "An oil from the seeds of Perilla frutescens, very high in the omega-3 ALA.",
    "applications": "Dietary supplements; food; skincare."
  },
  {
    "name": "Pistachio Oil",
    "category": "oils",
    "description": "An oil pressed from pistachio nuts (Pistacia vera), high in oleic acid.",
    "applications": "Culinary finishing oil; skincare, hair care and massage oils."
  },
  {
    "name": "Pomegranate Seed Oil",
    "category": "oils",
    "description": "An oil from the seeds of Punica granatum, rich in punicic acid, an omega-5 fatty acid.",
    "applications": "Anti-aging serums and facial oils; supplements."
  },
  {
    "name": "Prickly Pear Oil",
    "category": "oils",
    "description": "A premium oil from the seeds of the Opuntia ficus-indica cactus, high in linoleic acid and vitamin E.",
    "applications": "Facial oils and eye serums."
  },
  {
    "name": "Pumpkin Seed Oil",
    "category": "oils",
    "description": "An oil pressed from the seeds of Cucurbita pepo, rich in linoleic and oleic acids.",
    "applications": "Culinary oil; dietary supplements; skincare and hair care."
  },
  {
    "name": "Raspberry Seed Oil",
    "category": "oils",
    "description": "An oil pressed from red raspberry seeds (Rubus idaeus), rich in linoleic and alpha-linolenic acids and vitamin E.",
    "applications": "Facial oils and daytime skincare."
  },
  {
    "name": "Rice Bran Oil",
    "category": "oils",
    "description": "An oil extracted from the bran layer of rice (Oryza sativa). It contains gamma-oryzanol and has a high smoke point.",
    "applications": "Cooking and frying; skincare; soaps."
  },
  {
    "name": "Rosehip Seed Oil",
    "category": "oils",
    "description": "An oil from the seeds of wild roses such as Rosa canina, rich in linoleic and linolenic acids and natural carotenoids.",
    "applications": "Facial oils for uneven tone, scars and signs of aging."
  },
  {
    "name": "Sacha Inchi Oil",
    "category": "oils",
    "description": "An oil from the seeds of Plukenetia volubilis, a plant of the Peruvian Amazon, rich in the omega-3 ALA and in linoleic acid.",
    "applications": "Dietary supplements; culinary oil; skincare."
  },
  {
    "name": "Safflower Oil",
    "category": "oils",
    "description": "An oil from the seeds of Carthamus tinctorius, sold in high-linoleic and high-oleic types.",
    "applications": "Cooking; skincare and massage oils."
  },
  {
    "name": "Sea Buckthorn Oil",
    "category": "oils",
    "description": "An orange oil from the berries or seeds of Hippophae rhamnoides. The fruit oil is rich in palmitoleic acid (omega-7) and carotenoids.",
    "applications": "Dietary supplements; skincare."
  },
  {
    "name": "Sesame Oil",
    "category": "oils",
    "description": "An oil from the seeds of Sesamum indicum, rich in oleic and linoleic acids and stabilized by natural antioxidants such as sesamol.",
    "applications": "Culinary use; massage oils; pharmaceutical vehicle; skincare."
  },
  {
    "name": "Shea Oil",
    "category": "oils",
    "description": "The liquid fraction of shea butter, separated by fractionation. It delivers shea's emollience in a pourable form.",
    "applications": "Lotions, hair care, massage oils and bath oils."
  },
  {
    "name": "Soybean Oil",
    "category": "oils",
    "description": "An oil from soybeans (Glycine max) and one of the world's most widely used vegetable oils.",
    "applications": "Cooking and food manufacturing; soaps and cosmetics; industrial uses such as inks."
  },
  {
    "name": "Squalane Oil (Olive-derived)",
    "category": "oils",
    "description": "A light, colorless, very stable oil made by hydrogenating squalene from olives. It is non-greasy and closely compatible with the skin's own lipids.",
    "applications": "Facial oils, serums and moisturizers; makeup; hair care."
  },
  {
    "name": "Strawberry Seed Oil",
    "category": "oils",
    "description": "A light oil pressed from strawberry seeds, rich in linoleic and alpha-linolenic acids.",
    "applications": "Facial oils, lip care and hair care."
  },
  {
    "name": "Sunflower Oil",
    "category": "oils",
    "description": "An oil from the seeds of Helianthus annuus, sold in linoleic and high-oleic types and naturally rich in vitamin E.",
    "applications": "Cooking; skincare and massage oils; soap making."
  },
  {
    "name": "Sweet Almond Oil",
    "category": "oils",
    "description": "A mild, well-tolerated oil pressed from almonds (Prunus dulcis), high in oleic acid.",
    "applications": "Massage oils; baby and skin care; hair care; soaps."
  },
  {
    "name": "Tamanu Oil",
    "category": "oils",
    "description": "A thick, green oil with a distinctive nutty scent, from the nuts of Calophyllum inophyllum, a tree of Polynesia and Southeast Asia.",
    "applications": "Balms; skincare for blemishes and scars; after-sun care."
  },
  {
    "name": "Tea Tree Oil",
    "category": "oils",
    "description": "An essential oil steam-distilled from the leaves of the Australian Melaleuca alternifolia tree. Its main component is terpinen-4-ol.",
    "applications": "Blemish care; scalp shampoos; foot care; cleansers. Used diluted."
  },
  {
    "name": "Tomato Seed Oil",
    "category": "oils",
    "description": "An oil from tomato seeds, rich in linoleic acid and containing carotenoids such as lycopene.",
    "applications": "Skincare, hair care and lip products."
  },
  {
    "name": "Walnut Oil",
    "category": "oils",
    "description": "An oil pressed from walnuts (Juglans regia), rich in linoleic and alpha-linolenic acids.",
    "applications": "Culinary dressings; massage oils and skincare."
  },
  {
    "name": "Watermelon Seed Oil",
    "category": "oils",
    "description": "A very light, non-greasy oil from the seeds of Citrullus lanatus, high in linoleic acid.",
    "applications": "Baby oils, facial oils and hair care."
  },
  {
    "name": "Wheat Germ Oil",
    "category": "oils",
    "description": "A thick oil from the germ of the wheat kernel and one of the richest natural sources of vitamin E.",
    "applications": "Dietary supplements; skincare for dry and mature skin; hair care."
  },
  {
    "name": "Acetyl Hexapeptide-8 (SpecPed® AH8P)",
    "category": "peptides",
    "description": "A synthetic peptide of six amino acids, widely known as Argireline. It is used to reduce the look of expression lines.",
    "applications": "Anti-wrinkle serums, eye creams and facial creams."
  },
  {
    "name": "Acetyl Tetrapeptide-5 (SpecPed® AT5P)",
    "category": "peptides",
    "description": "A synthetic peptide of four amino acids used in eye-area care.",
    "applications": "Eye creams and serums for puffiness and under-eye bags."
  },
  {
    "name": "Biotinoyl Tripeptide-1 (SpecPed® BT1P)",
    "category": "peptides",
    "description": "A peptide that joins biotin (vitamin B7) to the tripeptide GHK.",
    "applications": "Hair and scalp serums; eyelash and eyebrow conditioning products."
  },
  {
    "name": "Bis(Tripeptide-1) Copper Acetate (SpecPed® GCu21P)",
    "category": "peptides",
    "description": "A copper peptide powder in which two GHK tripeptides (glycine-histidine-lysine) are bound to one copper ion.",
    "applications": "Anti-wrinkle and anti-aging products; skin and hair repair formulas."
  },
  {
    "name": "Copper Tripeptide-1 (SpecPed® GCu11P)",
    "category": "peptides",
    "description": "GHK-Cu, a one-to-one complex of the GHK tripeptide and copper. GHK occurs naturally in human plasma.",
    "applications": "Anti-aging and firming skincare; skin repair products; hair and scalp care."
  },
  {
    "name": "Dipeptide Diaminobutyroyl Benzylamide Diacetate (SpecPed® SKE-P)",
    "category": "peptides",
    "description": "A synthetic peptide modeled on Waglerin-1, a peptide found in temple viper venom. It is used to soften the appearance of expression lines.",
    "applications": "Anti-wrinkle serums and creams."
  },
  {
    "name": "Glutamylamidoethyl Imidazole (SpecPed® GAI)",
    "category": "peptides",
    "description": "An amino acid-derived skin and hair conditioning ingredient. It is marketed for use in anti-aging formulations.",
    "applications": "Anti-aging products; care for tired or stressed skin."
  },
  {
    "name": "Benzyl Alcohol",
    "category": "preservatives",
    "description": "An aromatic alcohol that occurs naturally in some fruits and essential oils. It works as a preservative and a solvent.",
    "applications": "Cosmetic preservation; preservative in injectable medicines; solvent."
  },
  {
    "name": "Potassium Sorbate",
    "category": "preservatives",
    "description": "The water-soluble potassium salt of sorbic acid. It inhibits molds and yeasts and works best in acidic products.",
    "applications": "Cheese, wine, baked goods and beverages; cosmetics and personal care."
  },
  {
    "name": "Sodium Benzoate",
    "category": "preservatives",
    "description": "The sodium salt of benzoic acid. It is most effective in acidic products.",
    "applications": "Soft drinks, juices, sauces and pickles; cosmetics; pharmaceutical syrups."
  },
  {
    "name": "Sodium Diacetate",
    "category": "preservatives",
    "description": "A compound of sodium acetate and acetic acid that preserves food and adds a vinegar note.",
    "applications": "Baked goods; meat and poultry products; salt-and-vinegar seasonings."
  },
  {
    "name": "Sodium Erythorbate",
    "category": "preservatives",
    "description": "The sodium salt of erythorbic acid, an antioxidant closely related to vitamin C.",
    "applications": "Cured meats, where it speeds curing and holds color; beverages; canned fruits and vegetables."
  },
  {
    "name": "Sodium Propionate",
    "category": "preservatives",
    "description": "The sodium salt of propionic acid, a mold inhibitor.",
    "applications": "Baked goods; cheese; animal feed."
  },
  {
    "name": "Sorbic Acid",
    "category": "preservatives",
    "description": "A naturally occurring organic acid that inhibits molds and yeasts. It is less water-soluble than potassium sorbate.",
    "applications": "Cheese, baked goods and wine; cosmetics; pharmaceuticals."
  },
  {
    "name": "Pea Protein",
    "category": "proteins",
    "description": "A plant protein extracted from yellow peas (Pisum sativum). It is a popular dairy-free and soy-free option.",
    "applications": "Protein powders; meat and dairy alternatives; nutrition bars."
  },
  {
    "name": "Soy Protein",
    "category": "proteins",
    "description": "A protein made from defatted soybeans that supplies all essential amino acids.",
    "applications": "Meat alternatives and extenders; bakery products; nutrition bars and beverages."
  },
  {
    "name": "Soy Protein Isolates",
    "category": "proteins",
    "description": "The most refined form of soy protein, at about 90% protein, with most fat and carbohydrate removed.",
    "applications": "Protein powders and beverages; infant formula; meat products; nutrition bars."
  },
  {
    "name": "Calcium Citrate",
    "category": "salts-sugars",
    "description": "The calcium salt of citric acid, a well-absorbed source of calcium.",
    "applications": "Calcium supplements; food fortification; acidity regulator."
  },
  {
    "name": "D-Mannose",
    "category": "salts-sugars",
    "description": "A simple sugar related to glucose that occurs naturally in cranberries and other fruits.",
    "applications": "Urinary tract health supplements in powder and capsule form."
  },
  {
    "name": "Epsom Salt",
    "category": "salts-sugars",
    "description": "Magnesium sulfate, a crystalline mineral salt that dissolves easily in water.",
    "applications": "Bath soaks and foot soaks; body scrubs; magnesium source for gardening."
  },
  {
    "name": "Magnesium Chloride",
    "category": "salts-sugars",
    "description": "A highly water-soluble magnesium salt, commonly supplied as flakes.",
    "applications": "Magnesium supplements; topical magnesium sprays and bath flakes; tofu coagulant."
  },
  {
    "name": "Potassium Chloride",
    "category": "salts-sugars",
    "description": "A mineral salt with a salty taste.",
    "applications": "Salt substitute for sodium reduction; electrolyte in sports drinks and supplements; fertilizer."
  },
  {
    "name": "Potassium Citrate",
    "category": "salts-sugars",
    "description": "The potassium salt of citric acid.",
    "applications": "Acidity regulator and buffer in foods and beverages; potassium source in supplements and electrolyte drinks."
  },
  {
    "name": "Sea Salt",
    "category": "salts-sugars",
    "description": "Salt produced by evaporating seawater. It is mostly sodium chloride with trace minerals.",
    "applications": "Food seasoning; bath salts and scrubs; salt soap bars."
  },
  {
    "name": "Sodium Citrate",
    "category": "salts-sugars",
    "description": "The sodium salt of citric acid, used to control acidity.",
    "applications": "Buffer in beverages; emulsifying salt in processed cheese; cosmetic pH buffer."
  },
  {
    "name": "Sodium Saccharin",
    "category": "salts-sugars",
    "description": "A calorie-free artificial sweetener several hundred times sweeter than sugar. It is stable to heat.",
    "applications": "Tabletop sweeteners and diet beverages; toothpaste and mouthwash; flavor masking in pharmaceuticals."
  },
  {
    "name": "Trimethylolpropane",
    "category": "salts-sugars",
    "description": "A polyol with three hydroxyl groups, used mainly as a building block for resins, coatings and synthetic lubricants. Its fatty acid esters, such as trimethylolpropane triisostearate, are cosmetic emollients.",
    "applications": "Resin and lubricant manufacture; raw material for emollient esters."
  },
  {
    "name": "Xanthan Gum",
    "category": "salts-sugars",
    "description": "A polysaccharide made by fermenting sugars with the bacterium Xanthomonas campestris. It thickens and stabilizes at low use levels across a wide range of pH and temperature.",
    "applications": "Sauces and dressings; gluten-free baking; lotions, gels and toothpaste."
  },
  {
    "name": "Xylitol",
    "category": "salts-sugars",
    "description": "A sugar alcohol about as sweet as sugar with fewer calories. It is widely used in sugar-free and oral care products.",
    "applications": "Sugar-free gum and mints; oral care products; reduced-sugar foods."
  },
  {
    "name": "Octocrylene",
    "category": "sunscreen",
    "description": "An oil-soluble organic UV filter that absorbs UVB and short UVA rays. It also helps stabilize other filters such as avobenzone.",
    "applications": "Sunscreens; daily moisturizers with SPF; SPF makeup."
  },
  {
    "name": "Titanium Oxide",
    "category": "sunscreen",
    "description": "Titanium dioxide, a white mineral UV filter that protects mainly against UVB and short UVA rays. It is also a white pigment.",
    "applications": "Mineral sunscreens; makeup; opacifier and whitener in soaps and creams."
  },
  {
    "name": "Zinc Oxide",
    "category": "sunscreen",
    "description": "A mineral UV filter that covers both UVA and UVB rays. It is also a skin protectant with mild astringent properties.",
    "applications": "Mineral sunscreens; diaper rash creams; mineral makeup."
  },
  {
    "name": "Polysorbate 20",
    "category": "surfactants",
    "description": "A nonionic surfactant made from sorbitol and lauric acid. It dissolves fragrances and essential oils into water-based products.",
    "applications": "Toners, body sprays and cleansers; food emulsifier; pharmaceutical excipient."
  },
  {
    "name": "Polysorbate 60",
    "category": "surfactants",
    "description": "A nonionic emulsifier made from sorbitol and stearic acid. It blends oil and water into stable creams.",
    "applications": "Creams and lotions; whipped toppings, icings and cake mixes."
  },
  {
    "name": "Polysorbate 80",
    "category": "surfactants",
    "description": "A nonionic surfactant made from sorbitol and oleic acid. It disperses heavier oils in water.",
    "applications": "Bath bombs and bath oils; ice cream; pharmaceutical excipient."
  },
  {
    "name": "Triisostearate",
    "category": "surfactants",
    "description": "Described here as Polyglyceryl-2 Triisostearate, a viscous liquid ester of diglycerin and isostearic acid. It is a nonionic emulsifier and emollient that disperses pigments well.",
    "applications": "Lipsticks and lip care; foundations and other makeup; creams and sunscreens."
  },
  {
    "name": "Biotin",
    "category": "vitamins",
    "description": "Vitamin B7, a water-soluble vitamin that helps the body metabolize fats, carbohydrates and proteins.",
    "applications": "Hair, skin and nail supplements; multivitamins; fortified foods."
  },
  {
    "name": "Vitamin A",
    "category": "vitamins",
    "description": "A fat-soluble vitamin essential for vision, immune function and healthy skin. It is supplied in forms such as retinol, retinyl palmitate and beta-carotene.",
    "applications": "Dietary supplements; food fortification; anti-aging skincare."
  },
  {
    "name": "Vitamin B",
    "category": "vitamins",
    "description": "A group of eight water-soluble vitamins, including thiamine (B1), riboflavin (B2), niacin (B3), B6 and B12, that support energy metabolism.",
    "applications": "B-complex supplements; energy products; fortified foods."
  },
  {
    "name": "Vitamin C",
    "category": "vitamins",
    "description": "Ascorbic acid and its salts, a water-soluble antioxidant the body needs to make collagen and support immune function.",
    "applications": "Dietary supplements; food antioxidant; brightening skincare."
  },
  {
    "name": "Vitamin D",
    "category": "vitamins",
    "description": "A fat-soluble vitamin, supplied as D2 (ergocalciferol) or D3 (cholecalciferol), that the body needs to absorb calcium.",
    "applications": "Bone health supplements; fortified milk and foods."
  },
  {
    "name": "Vitamin E",
    "category": "vitamins",
    "description": "A family of fat-soluble antioxidants made up of tocopherols and tocotrienols.",
    "applications": "Dietary supplements; skincare; natural antioxidant that protects oils from rancidity."
  },
  {
    "name": "Vitamin K",
    "category": "vitamins",
    "description": "A fat-soluble vitamin, supplied as K1 (phylloquinone) or K2 (menaquinone), involved in blood clotting and bone metabolism.",
    "applications": "Bone health supplements, often with vitamin D3; multivitamins."
  }
];

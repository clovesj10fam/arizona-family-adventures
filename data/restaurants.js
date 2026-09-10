// ============================================================
//  WHERE TO EAT
//  To add a restaurant: copy one of the blocks below, paste it at
//  the end of the list (before the closing ]; ), and edit the text.
//  g options: farm, family, best
//  star: true  = blue-glow "has seated 12+" card
// ============================================================
const PLACES = [
  
  {g:"farm", name:"Urban Fraiche", rating:"4.9", price:"$$$", tags:["Mediterranean · Organic"], area:"Central Phoenix", star:false, desc:"Seed-oil-free, organic Mediterranean with an Egyptian soul. Lamb is the thing to order. Closed Mondays; open 11:30 AM–10 PM otherwise.", near:"~25 min", phone:"650-773-8135", addr:"111 E Camelback Rd, Phoenix, AZ 85012", site:"https://www.urbanfraiche.com/"},
  
  {g:"farm", name:"Wildflower", rating:"5.0", price:"$$", tags:["American · Bakery"], area:"Tatum &amp; Thunderbird", star:false, desc:"Neighborhood spot with clean, fresh ingredients, house-baked bread, and a menu that works for breakfast-people and lunch-people at the same table. Daily 8 AM–8 PM.", near:"~5 min", phone:"480-284-5223", addr:"13637 N Tatum Blvd #25, Phoenix, AZ 85032", site:"https://wildflowerbread.com/location/thunderbird-thunderbird-tatum/"},
  
  {g:"farm", name:"The Farm at South Mountain", rating:"4.6", price:"$$$", tags:["Farm dinners"], area:"South Phoenix", star:false, desc:"A working farm with 3-, 4-, and 5-course dinners served in a garden courtyard. Dinner Tue–Sat from 5 PM; closed Mondays.", near:"~35 min", phone:"602-276-6360", addr:"6106 S 32nd St, Phoenix, AZ 85042", site:"https://www.thefarmatsouthmountain.com/"},
  
  {g:"farm", name:"FnB", rating:"4.6", price:"$$$", tags:["Seasonal Arizona"], area:"Old Town", star:false, desc:"James Beard-winning, vegetable-forward kitchen where the menu changes with what's in season. Cozy and dim; a great small-group night. Tue–Sat 5–10 PM.", near:"~20 min", phone:"480-284-4777", addr:"7125 E 5th Ave #31, Scottsdale, AZ 85251", site:"http://www.fnbrestaurant.com/"},
  
  {g:"farm", name:"Beckett's Table", rating:"4.6", price:"$$", tags:["Comfort food · Local"], area:"Arcadia", star:false, desc:"Refined comfort food from local sources—short ribs, jambalaya, cheddar-bacon biscuits, a wrap-around patio with a fireplace. Tue–Sun 5–9 PM.", near:"~20 min", phone:"602-954-1700", addr:"3717 E Indian School Rd, Phoenix, AZ 85018", site:"http://www.beckettstable.com/"},
  
  {g:"farm", name:"Chelsea's Kitchen", rating:"4.6", price:"$$", tags:["Southwest · Scratch"], area:"Arcadia", star:false, desc:"Hand-pressed tortillas, short-rib tacos, ahi tostadas, and one of the best patios in Phoenix. Fair prices for the quality. Open daily.", near:"~15 min", phone:"602-957-2555", addr:"5040 N 40th St, Phoenix, AZ 85018", site:"https://chelseaskitchenaz.com/"},
  
  {g:"farm", name:"The Henry", rating:"4.6", price:"$$", tags:["American · Fresh"], area:"Arcadia", star:false, desc:"Bright, spacious Arcadia favorite with a fresh, local-leaning menu and plenty of vegetarian options. Reservations matter on weekends.", near:"~15 min", phone:"602-429-8020", addr:"4455 E Camelback Rd, Phoenix, AZ 85018", site:"https://www.thehenryrestaurant.com/"},
  
  {g:"farm", name:"Grassroots Kitchen &amp; Tap", rating:"4.6", price:"$$", tags:["Scratch kitchen"], area:"Scottsdale", star:false, desc:"Everything made from scratch—rotisserie chicken, pork belly, jalapeño-cheddar grits. Family-friendly and close to the house.", near:"~10 min", phone:"480-699-0699", addr:"8120 Hayden Rd E-100, Scottsdale, AZ 85258", site:"http://www.grassrootsaz.com/"},
  
  {g:"farm", name:"Olive &amp; Ivy", rating:"4.6", price:"$$", tags:["Mediterranean"], area:"Old Town", star:true, desc:"Big, airy waterfront room with wood-fired pizza and fresh pasta. Reviewers with groups of 10 say the space and service handled it easily.", near:"~20 min", phone:"480-751-2200", addr:"7135 E Camelback Rd, Scottsdale, AZ 85251", site:"https://www.oliveandivyrestaurant.com/"},
  
  {g:"farm", name:"elements", rating:"4.5", price:"$$$$", tags:["Seasonal · Resort"], area:"Paradise Valley", star:false, desc:"Sanctuary resort's farm-sourced, Asian-accented kitchen with a Camelback Mountain view and complimentary valet. The splurge on this list.", near:"~10 min", phone:"855-245-2051", addr:"5700 E McDonald Dr, Paradise Valley, AZ 85253", site:"https://www.sanctuaryaz.com/dining/elements"},
  
  {g:"family", name:"Maggiano's Little Italy", rating:"4.5", price:"$$", tags:["Italian · Family style"], area:"Kierland", star:true, desc:"Built for big tables—order family-style and platters keep coming. Reviewers say the portions for 8 fed more than 8.", near:"~10 min", phone:"480-333-4100", addr:"16405 N Scottsdale Rd, Scottsdale, AZ 85254", site:"https://www.maggianos.com/locations/arizona/scottsdale/16405-n.-scottsdale-rd"},
  
  {g:"family", name:"Aunt Chilada's", rating:"4.4", price:"$$", tags:["Mexican"], area:"Dreamy Draw", star:true, desc:"Colorful, tucked-against-the-mountain Mexican spot that hosts parties of 40 without blinking. Outdoor bar, live music some nights.", near:"~20 min", phone:"602-944-1286", addr:"7330 N Dreamy Draw Dr, Phoenix, AZ 85020", site:"https://www.auntchiladas.com/"},
  
  {g:"family", name:"Grimaldi's Pizzeria", rating:"4.4", price:"$$", tags:["Coal-fired pizza"], area:"Old Town", star:false, desc:"Brooklyn-style coal-oven pies you can watch being tossed. Easy to share, easy to please every age.", near:"~20 min", phone:"480-994-1100", addr:"4000 N Scottsdale Rd Ste 105, Scottsdale, AZ 85251", site:"https://www.grimaldispizzeria.com/locations/old-town/"},
  
  {g:"family", name:"Craft 64", rating:"4.6", price:"$$", tags:["Wood-fired pizza · Brewery"], area:"Old Town", star:false, desc:"House-made mozzarella and meatballs, wood-fired 12-inch pies, and their own beer. No freezer, no microwave—everything fresh.", near:"~20 min", phone:"480-946-0542", addr:"6922 E Main St, Scottsdale, AZ 85251", site:"https://www.craft64.com/"},
  
  {g:"family", name:"Night Owl Pizza &amp; Drinks", rating:"4.5", price:"$", tags:["Pizza · Pinball"], area:"South Scottsdale", star:false, desc:"18-inch pies, wings, pinball, and a patio. The cheapest table on this list and probably the loudest fun.", near:"~25 min", phone:"480-687-1827", addr:"1645 Hayden Rd, Scottsdale, AZ 85257", site:"https://nightowlaz.com/"},
  
  {g:"family", name:"Pitch", rating:"4.4", price:"$$", tags:["Pizza · Burgers"], area:"Scottsdale", star:false, desc:"Pizza, burgers, giant onion rings, a kids' menu, and a big relaxed patio. Servers get high marks for handling little ones.", near:"~20 min", phone:"480-272-7500", addr:"6350 E Thomas Rd, Scottsdale, AZ 85251", site:"http://pitchpizzeria.com/"},
  
  {g:"family", name:"Carlsbad Tavern", rating:"4.5", price:"$$", tags:["New Mexico Tex-Mex"], area:"Scottsdale", star:false, desc:"Bat-cave theme, waterfall, indoor and patio seating, and green-chile everything. Warn the kids about the Scorpion Burger.", near:"~20 min", phone:"480-970-8164", addr:"3313 Hayden Rd, Scottsdale, AZ 85251", site:"https://carlsbadtavern.com/"},
  
  {g:"family", name:"Village Tavern", rating:"4.5", price:"$$", tags:["American"], area:"Scottsdale", star:false, desc:"Broad menu that covers everyone—salads to Alfredo to burgers—with booths, a patio, and a bar. Close to the house.", near:"~10 min", phone:"480-951-6445", addr:"8787 N Scottsdale Rd, Scottsdale, AZ 85253", site:"https://www.villagetavern.com/"},
  
  {g:"family", name:"Culinary Dropout", rating:"4.4", price:"$$", tags:["American · Games"], area:"Old Town", star:false, desc:"Loud and fun: pretzels with fondue, fried chicken, live music, and lawn games on the patio. Good for a mixed-age crowd.", near:"~20 min", phone:"480-970-1700", addr:"7135 E Camelback Rd, Scottsdale, AZ 85251", site:"https://www.culinarydropout.com/locations/scottsdale-az/"},
  
  {g:"family", name:"The Vig", rating:"4.4", price:"$$", tags:["American · Patio"], area:"Downtown Phoenix", star:false, desc:"Kid- and dog-friendly patio with bocce, a solid burger, and a 3–6 PM happy hour. Reserve ahead and you walk right in.", near:"~30 min", phone:"602-254-2242", addr:"606 N 4th Ave, Phoenix, AZ 85003", site:"https://www.thevig.us/fillmore"},
  
  {g:"best", name:"Binkley's", rating:"4.8", price:"$$$$", tags:["Tasting menu"], area:"Central Phoenix", star:false, desc:"Widely called the best restaurant in Arizona—a dozen-plus courses over three hours in the chef's own home kitchen. Books out weeks ahead.", near:"~20 min", phone:"602-388-4874", addr:"2320 E Osborn Rd, Phoenix, AZ 85016", site:"https://binkleysrestaurant.com/"},
  
  {g:"best", name:"Cafe Monarch", rating:"4.8", price:"$$$$", tags:["Prix fixe"], area:"Old Town", star:true, desc:"Candlelit four-course prix fixe with a private dining room and personalized menus. The most romantic room in Scottsdale.", near:"~20 min", phone:"480-970-7682", addr:"6939 E 1st Ave, Scottsdale, AZ 85251", site:"https://www.cafemonarch.com/"},
  
  {g:"best", name:"Ocean 44", rating:"4.7", price:"$$$$", tags:["Steak · Seafood"], area:"Old Town", star:false, desc:"Top-rated steak and seafood in the city—dry-aged cuts, huge wine list, and a room that changes character when the curtains open.", near:"~20 min", phone:"480-867-0044", addr:"4748 N Goldwater Blvd, Scottsdale, AZ 85251", site:"https://www.ocean44.com/"},
  
  {g:"best", name:"Virtù Honest Craft", rating:"4.6", price:"$$$$", tags:["Mediterranean"], area:"Old Town", star:true, desc:"James Beard-nominated chef; the whole roasted Calabrian suckling pig feast is made for parties of eight or more. Tue–Sat dinner, weekend brunch.", near:"~20 min", phone:"480-946-3477", addr:"3701 N Marshall Way, Scottsdale, AZ 85251", site:"http://www.virtuscottsdale.com/"},
  
  {g:"best", name:"Mastro's Steakhouse", rating:"4.6", price:"$$$$", tags:["Steakhouse"], area:"Pinnacle Peak", star:false, desc:"The classic Scottsdale steakhouse—sizzling 500° plates, sides for the table, and the butter cake everyone talks about.", near:"~20 min", phone:"480-585-9500", addr:"8852 E Pinnacle Peak Rd, Scottsdale, AZ 85255", site:"https://www.mastrosrestaurants.com/Locations/AZ/North-Scottsdale/"},
  
  {g:"best", name:"Bacanora", rating:"4.4", price:"$$$", tags:["Sonoran · Wood fire"], area:"Grand Ave, Phoenix", star:false, desc:"James Beard winner cooking Sonoran food over open flame in a tiny room. One of the hardest reservations in the state—book the moment dates are set. Closed Sundays.", near:"~30 min", phone:"", addr:"1301 Grand Ave #1, Phoenix, AZ 85007", site:"https://www.bacanoraphx.com/"},
  
  {g:"best", name:"Pizzeria Bianco", rating:"4.4", price:"$$", tags:["Pizza"], area:"Town &amp; Country", star:false, desc:"Chris Bianco's wood-fired pies are routinely named the best pizza in America. The 20th St location takes reservations; downtown doesn't.", near:"~20 min", phone:"602-368-3273", addr:"4743 N 20th St, Phoenix, AZ 85016", site:"https://www.pizzeriabianco.com/pizzeria-bianco-town-country"},
  
  {g:"best", name:"Different Pointe of View", rating:"4.5", price:"$$$$", tags:["Mediterranean · Views"], area:"North Phoenix", star:false, desc:"Hilltop dining room with floor-to-ceiling windows over the whole Valley. Book a 6:15 table and you get daylight, sunset, and city lights.", near:"~15 min", phone:"623-745-8485", addr:"11111 N 7th St, Phoenix, AZ 85020", site:"http://www.tapatiocliffshilton.com/dining/different-pointe-of-view/"},
  
  {g:"best", name:"Mastro's City Hall", rating:"4.5", price:"$$$$", tags:["Steakhouse"], area:"Old Town", star:false, desc:"The Old Town Mastro's: same menu, great patio with a fireplace, and staff who make birthdays a production.", near:"~20 min", phone:"480-941-4700", addr:"6991 E Camelback Rd, Scottsdale, AZ 85251", site:"https://www.mastrosrestaurants.com/Locations/AZ/City-Hall-Scottsdale/"},
  
  {g:"best", name:"The House Brasserie", rating:"4.5", price:"$$$$", tags:["American · Cottage"], area:"Old Town", star:true, desc:"A 1930s cottage with string lights, a fireplace patio, and a kitchen that ran a party of 20 without a single miss. Thu–Sat and Tue only.", near:"~20 min", phone:"480-634-1600", addr:"6936 E Main St, Scottsdale, AZ 85251", site:"https://thehousebrasserie.com/"}
];

module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61550121814016","100078828144855","61550529403710") {
    var aid = ["100078828144855","61550529403710","61550121814016"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _🅢🅐🅝🅣🅞 বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার বস 🅢🅐🅝🅣🅞 এর সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "👉আমার বস ♻️ 🅢🅐🅝🅣🅞 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎https://www.facebook.com/h.m.najmul.islam.013318 🔰                                        ♪√বস ফ্রি হলে আসবে🧡😁😜🐒","বস 🅢🅐🅝🅣🅞 কে এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒","বস 🅢🅐🅝🅣🅞 কে Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","👉আমার বস♻️ 🅢🅐🅝🅣🅞 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/h.m.najmul.islam.013318 🔰 ♪√বস ফ্রি হলে আসবে🧡😁😜🐒","🅢🅐🅝🅣🅞 বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","🅢🅐🅝🅣🅞 বস কে এতো মেনশন নাহ দিয়া বস কে একটা জি এফ দে 😒 😏","Mantion_না দিয়ে বস 🅢🅐🅝🅣🅞 এর সাথে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","বস 🅢🅐🅝🅣🅞 কে মেনশন দিসনা পারলে একটা জি এফ দে","বাল পাকনা Mantion_দিস না বস 🅢🅐🅝🅣🅞 প্রচুর বিজি আছে 🥵🥀🤐","চুমু খাওয়ার বয়স টা আমার বস 🅢🅐🅝🅣🅞 চকলেট🍫খেয়ে উড়িয়ে দিল 🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}

// [{ id: 1, name: "Shraddha", photo: "", message: "Hi, this is Shraddha" }];

import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

const CHAT_MESSAGES_LIMIT = 5;

const nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [currentMsg, setCurrentMsg] = useState("");

  const generateRandomName = () => {
    const finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
  };

  useEffect(() => {
    const timer = setInterval(fetchData, 2000);
    return () => clearInterval(timer);
  }, []);

  const fetchData = () => {
    // const data = await fetch("");
    const name = generateRandomName();
    const json = [
      {
        id: 0,
        name: name,
        photo:
          "https://yt4.ggpht.com/2cIcHhzv8TwKwjgiek_RlSYBG3BdPpGRZjea8lV8xha6HiH2MuMqDV32CgW8FDBMMkH4RrhusA=s32-c-k-c0x00ffffff-no-rj",
        message: "Hi, this is " + name,
      },
    ];
    setMessages((messages) => {
      let newMessageList = [...json, ...messages];
      newMessageList = newMessageList.splice(0, CHAT_MESSAGES_LIMIT);
      return newMessageList;
    });
  };

  const handleClick = () => {
    setMessages((messages) => {
      let newMessageList = [
        {
          id: 0,
          name: "Shraddha",
          photo:
            "https://yt4.ggpht.com/2cIcHhzv8TwKwjgiek_RlSYBG3BdPpGRZjea8lV8xha6HiH2MuMqDV32CgW8FDBMMkH4RrhusA=s32-c-k-c0x00ffffff-no-rj",
          message: currentMsg,
        },
        ...messages,
      ];
      newMessageList = newMessageList.splice(0, CHAT_MESSAGES_LIMIT);
      return newMessageList;
    });
    setCurrentMsg('');
  };

  return (
    <div>
      <div className="flex w-full h-[315px] border border-black m -5 overflow-y-scroll flex-col-reverse">
        {messages.map((message, i) => (
          <ChatMessage key={i} {...message} />
        ))}
      </div>
      <div className="w-[300px] p-3 border border-black">
        <input
          type="text"
          value={currentMsg}
          onChange={(e) => setCurrentMsg(e.target.value)}
        />
        <button className="p-3 bg-gray-200" onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export default ChatWindow;

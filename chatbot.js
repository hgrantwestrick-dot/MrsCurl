(function () {
  // ── Knowledge base ──────────────────────────────────────────────────────────
  const KB = [
    {
      patterns: [/\bhours?\b/i, /\bopen\b/i, /\bclose[sd]?\b/i, /\bwhen\b.*\bopen\b/i, /\bwhat time\b/i, /\bschedule\b/i],
      reply: "We're open <strong>7 days a week</strong>!<br>☀️ Sun–Thu: 11am–9pm<br>🌟 Fri & Sat: 11am–10pm<br><em>*Open until 10pm every night through June & July.</em><br><br>We're open seasonally <strong>March through October</strong>."
    },
    {
      patterns: [/\baddress\b/i, /\blocation\b/i, /\bwhere\b/i, /\bdirection/i, /\bmeridian\b/i, /\bgreenwood\b/i, /\bhow (do i|to) (get|find|reach)\b/i],
      reply: "📍 We're at <strong>259 S. Meridian Street, Greenwood, IN 46143</strong> — right in downtown Greenwood near Main and Meridian Streets.<br><br><a href='contact.html' style='color:var(--teal)'>Get directions →</a>"
    },
    {
      patterns: [/\bphone\b/i, /\bnumber\b/i, /\bcall\b/i, /\b317\b/i, /\bcontact\b/i, /\breach\b/i],
      reply: "📞 Give us a call at <strong>(317) 882-1031</strong>!<br><br>Or visit our <a href='contact.html' style='color:var(--teal)'>Contact page</a> for more ways to reach us."
    },
    {
      patterns: [/\bmenu\b/i, /\bwhat.*serve\b/i, /\bfood\b/i, /\beat\b/i, /\bwhat.*have\b/i, /\boffering/i],
      reply: "🍦 We serve:<br>• Signature soft-serve cones<br>• Dipped cones & waffle cones<br>• Flavor burst cones<br>• Razzles (blended ice cream)<br>• Milkshakes & malts<br>• Hot fudge sundaes<br>• Hot dogs & fresh-cut fries<br><br><a href='menu.html' style='color:var(--teal)'>See our full menu →</a>"
    },
    {
      patterns: [/\brazzle\b/i, /\bblend\b/i, /\bblizzard\b/i, /\bmix.in\b/i],
      reply: "🎉 Razzles are our blended ice cream specialty — soft-serve mixed with your choice of candy, fruit, or toppings. Favorites include <strong>Birthday Cake Razzle</strong> and <strong>M&M Razzle</strong>!"
    },
    {
      patterns: [/\bflavor.?burst\b/i, /\bflavors?\b/i, /\bblack cherry\b/i, /\bblueberry\b/i, /\bpineapple\b/i],
      reply: "🌈 Our Flavor Burst cones swirl colorful fruit flavors right into the soft-serve as it comes out! Popular choices include black cherry vanilla, blueberry vanilla, and pineapple. Ask us what's available — combinations are almost endless!"
    },
    {
      patterns: [/\bshake\b/i, /\bmalt\b/i, /\bmilkshake\b/i],
      reply: "🥤 Our hand-spun milkshakes and malts are made fresh to order — creamy, thick, and available in tons of flavor combinations. They're a customer favorite!"
    },
    {
      patterns: [/\btruck\b/i, /\bmini.?curl\b/i, /\bcater/i, /\bevent\b/i, /\bparty\b/i, /\bbook\b/i, /\brent\b/i],
      reply: "🚚 The <strong>Mini Curl</strong> is our ice cream truck for events! It serves within <strong>10 miles of Greenwood</strong>, seasonally April–October.<br><br>📋 <a href='https://www.mrscurl.com/mini-curl-event-contract.pdf' target='_blank' style='color:var(--teal)'>Download the Event Quote Form (PDF)</a> to request a booking.<br><br>⚠️ Currently out of commission — email <strong>minicurlevents@gmail.com</strong> for updates.<br><br><a href='icecreamtruck.html' style='color:var(--teal)'>Learn more →</a>"
    },
    {
      patterns: [/\bemploy/i, /\bjob\b/i, /\bhir/i, /\bwork\b/i, /\bapply\b/i, /\bapplication\b/i, /\bposition\b/i],
      reply: "👋 Interested in joining the Mrs. Curl team? <br><br><a href='https://www.mrscurl.com/Employment-Application.pdf' target='_blank' style='color:var(--teal)'>Download our Employment Application (PDF) →</a><br><br>Then drop it off at the shop or email us!"
    },
    {
      patterns: [/\bseason/i, /\bwinter\b/i, /\bclosed\b/i, /\bmarch\b/i, /\boctober\b/i, /\bspring\b/i, /\bsummer\b/i, /\bfall\b/i],
      reply: "📅 We're open <strong>seasonally from March through October</strong>. We close for the winter and reopen each spring — follow us or check back here for opening day announcements!"
    },
    {
      patterns: [/\bhistory\b/i, /\bfound/i, /\b1962\b/i, /\bold\b/i, /\blong\b/i, /\bstart/i, /\borigin/i, /\bjim.?davis\b/i],
      reply: "📖 Mrs. Curl was founded in <strong>1962</strong> by <strong>Jim Davis</strong>, who built the original shop himself! It started as <em>Parkview Dairy</em>, became <em>Mr. Curl</em>, and eventually the beloved <em>Mrs. Curl</em> we know today. Over 60 years of sweetness!<br><br><a href='about.html' style='color:var(--teal)'>Read our full story →</a>"
    },
    {
      patterns: [/\bpark\b/i, /\bstream\b/i, /\bduck/i, /\bfish\b/i, /\bseat/i, /\boutdoor\b/i, /\bgaz[eo]bo\b/i, /\bpatio\b/i],
      reply: "🌿 Our outdoor café is one of the things people love most! Enjoy your treat beside a peaceful stream, feed the fish and ducks, relax under the gazebo, and listen to nostalgic 1960s music. It's an experience, not just ice cream!"
    },
    {
      patterns: [/\bdog\b/i, /\bpet\b/i, /\bpup\b/i, /\bcat\b/i, /\banimal\b/i, /\bpet.?friendly\b/i, /\bbring.*pet\b/i, /\bpets? allow/i],
      reply: "🐾 <strong>Yes, pets are welcome!</strong> Dogs and well-behaved pets are allowed on our outdoor patio and seating areas. Come enjoy the stream-side atmosphere with your furry friend — it's one of our favorite things about Mrs. Curl!"
    },
    {
      patterns: [/\bprice\b/i, /\bcost\b/i, /\bhow much\b/i, /\bchea[p]/i, /\bexpens/i],
      reply: "💰 Our prices are very reasonable — that's one reason we've had lines out the door for 60+ years! Exact prices vary by item and size. Check the <a href='menu.html' style='color:var(--teal)'>menu page</a> or give us a call at (317) 882-1031."
    },
    {
      patterns: [/\bwifi\b/i, /\binternet\b/i, /\bcard\b/i, /\bcash\b/i, /\bpay/i],
      reply: "💳 We accept cash and cards! For the most current payment info give us a call at <strong>(317) 882-1031</strong>."
    },
    {
      patterns: [/\bphoto\b/i, /\bgallery\b/i, /\bpicture\b/i, /\bimage\b/i, /\bmemor/i],
      reply: "📸 Check out our Memories gallery for photos of the shop, seating, lake, and all our ice cream treats!<br><br><a href='photogallery.html' style='color:var(--teal)'>View Memories →</a>"
    },
    {
      patterns: [/\b(hi|hello|hey|howdy|sup|what'?s up|good (morning|afternoon|evening))\b/i, /^(hi|hello|hey)[\s!.]*$/i],
      reply: "Hey there! 👋 Welcome to <strong>Mrs. Curl Ice Cream Shop</strong>! Ask me anything — hours, menu, location, the ice cream truck, employment, or anything else!"
    },
    {
      patterns: [/\b(thanks?|thank you|thx|ty)\b/i],
      reply: "You're welcome! 🍦 Hope to see you soon at 259 S. Meridian St.!"
    },
    {
      patterns: [/\b(bye|goodbye|see ya|later|cya)\b/i],
      reply: "Bye! Come visit us soon — we'll have a cone waiting! 🍦"
    },
    {
      patterns: [/\bgluten\b/i, /\ballerg/i, /\bdairy.?free\b/i, /\bvegan\b/i],
      reply: "For allergy or dietary questions please call us directly at <strong>(317) 882-1031</strong> so we can give you accurate, up-to-date information!"
    },
    {
      patterns: [/\bwifi\b/i],
      reply: "We don't have info on that — give us a call at (317) 882-1031!"
    }
  ];

  const FALLBACK = [
    "Hmm, I'm not sure about that! Try calling us at <strong>(317) 882-1031</strong> or visit the <a href='contact.html' style='color:var(--teal)'>contact page</a>. 🍦",
    "Good question! I don't have that info — give us a call at <strong>(317) 882-1031</strong> and we'll sort you out!",
    "I'm just a simple ice cream chatbot 🍦 — for that one, reach us at <strong>(317) 882-1031</strong> or <a href='contact.html' style='color:var(--teal)'>contact us here</a>!"
  ];

  function getReply(input) {
    const text = input.trim();
    if (!text) return null;
    for (const entry of KB) {
      if (entry.patterns.some(p => p.test(text))) return entry.reply;
    }
    return FALLBACK[Math.floor(Date.now() / 1000) % FALLBACK.length];
  }

  // ── Build DOM ───────────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #mc-chat-btn {
      position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9000;
      width: 60px; height: 60px; border-radius: 50%;
      background: var(--cherry); border: 3px solid var(--chocolate);
      box-shadow: 4px 4px 0 var(--chocolate);
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: transform .15s, box-shadow .15s;
    }
    #mc-chat-btn:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 var(--chocolate); }
    #mc-chat-btn svg { width: 28px; height: 28px; fill: white; }
    #mc-chat-btn .mc-unread {
      position: absolute; top: -4px; right: -4px;
      background: var(--gold); color: var(--chocolate);
      border-radius: 50%; width: 18px; height: 18px;
      font-size: .7rem; font-weight: 900; font-family: 'Bebas Neue', sans-serif;
      display: flex; align-items: center; justify-content: center;
      border: 2px solid white;
    }

    #mc-chat-window {
      position: fixed; bottom: 5.5rem; right: 1.5rem; z-index: 9001;
      width: 330px; max-height: 480px;
      background: var(--cream); border: 3px solid var(--chocolate);
      box-shadow: 6px 6px 0 var(--chocolate); border-radius: 3px;
      display: none; flex-direction: column; overflow: hidden;
    }
    #mc-chat-window.open { display: flex; }

    #mc-chat-header {
      background: var(--chocolate); color: var(--gold);
      padding: .65rem 1rem; display: flex; align-items: center; gap: .6rem;
      font-family: 'Bebas Neue', sans-serif; letter-spacing: 2px; font-size: 1rem;
    }
    #mc-chat-header img { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; background: var(--cream); }
    #mc-chat-header span { flex: 1; }
    #mc-chat-close {
      background: none; border: none; color: var(--gold); font-size: 1.3rem;
      cursor: pointer; line-height: 1; padding: 0;
    }

    #mc-chat-messages {
      flex: 1; overflow-y: auto; padding: .9rem;
      display: flex; flex-direction: column; gap: .65rem;
    }
    .mc-msg {
      max-width: 88%; padding: .55rem .85rem;
      border-radius: 2px; font-size: .875rem; line-height: 1.55;
      border: 2px solid var(--chocolate);
    }
    .mc-msg.bot {
      background: white; align-self: flex-start;
      box-shadow: 2px 2px 0 var(--chocolate);
    }
    .mc-msg.user {
      background: var(--cherry); color: white; align-self: flex-end;
      box-shadow: 2px 2px 0 var(--chocolate);
    }
    .mc-msg.bot a { color: var(--teal); }
    .mc-typing {
      display: flex; gap: 4px; align-items: center; padding: .55rem .85rem;
      background: white; border: 2px solid var(--chocolate);
      box-shadow: 2px 2px 0 var(--chocolate);
      align-self: flex-start; border-radius: 2px;
    }
    .mc-dot {
      width: 7px; height: 7px; border-radius: 50%; background: var(--chocolate);
      animation: mcBounce .9s infinite;
    }
    .mc-dot:nth-child(2) { animation-delay: .15s; }
    .mc-dot:nth-child(3) { animation-delay: .3s; }
    @keyframes mcBounce {
      0%,80%,100% { transform: translateY(0); }
      40% { transform: translateY(-6px); }
    }

    #mc-chat-input-row {
      display: flex; border-top: 3px solid var(--chocolate); background: white;
    }
    #mc-chat-input {
      flex: 1; border: none; outline: none; padding: .65rem .8rem;
      font-family: inherit; font-size: .88rem; background: transparent;
    }
    #mc-chat-send {
      background: var(--cherry); color: white; border: none;
      padding: 0 1rem; cursor: pointer; font-size: 1.1rem;
      border-left: 3px solid var(--chocolate);
      transition: background .15s;
    }
    #mc-chat-send:hover { background: #b01020; }

    @media (max-width: 400px) {
      #mc-chat-window { width: calc(100vw - 2rem); right: 1rem; }
    }
  `;
  document.head.appendChild(style);

  // Chat button
  const btn = document.createElement('button');
  btn.id = 'mc-chat-btn';
  btn.setAttribute('aria-label', 'Chat with us');
  btn.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg><span class="mc-unread">1</span>`;
  document.body.appendChild(btn);

  // Chat window
  const win = document.createElement('div');
  win.id = 'mc-chat-window';
  win.innerHTML = `
    <div id="mc-chat-header">
      <img src="images/bear.svg.PNG" alt="Mrs. Curl"/>
      <span>Mrs. Curl Bot</span>
      <button id="mc-chat-close" aria-label="Close chat">&times;</button>
    </div>
    <div id="mc-chat-messages"></div>
    <div id="mc-chat-input-row">
      <input id="mc-chat-input" type="text" placeholder="Ask about hours, menu, location…" maxlength="200" autocomplete="off"/>
      <button id="mc-chat-send" aria-label="Send">&#10148;</button>
    </div>
  `;
  document.body.appendChild(win);

  const messages = win.querySelector('#mc-chat-messages');
  const input    = win.querySelector('#mc-chat-input');

  function addMsg(html, who) {
    const m = document.createElement('div');
    m.className = 'mc-msg ' + who;
    m.innerHTML = html;
    messages.appendChild(m);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const t = document.createElement('div');
    t.className = 'mc-typing'; t.id = 'mc-typing';
    t.innerHTML = '<div class="mc-dot"></div><div class="mc-dot"></div><div class="mc-dot"></div>';
    messages.appendChild(t);
    messages.scrollTop = messages.scrollHeight;
    return t;
  }

  function send() {
    const text = input.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    input.value = '';
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      const reply = getReply(text);
      if (reply) addMsg(reply, 'bot');
    }, 600 + Math.random() * 400);
  }

  // Open / close
  btn.addEventListener('click', () => {
    const isOpen = win.classList.toggle('open');
    btn.querySelector('.mc-unread').style.display = 'none';
    if (isOpen && messages.children.length === 0) {
      setTimeout(() => addMsg("Hey there! 👋 I'm the <strong>Mrs. Curl Bot</strong>. Ask me about our <strong>hours</strong>, <strong>menu</strong>, <strong>location</strong>, the <strong>ice cream truck</strong>, and more!", 'bot'), 300);
    }
    if (isOpen) input.focus();
  });
  win.querySelector('#mc-chat-close').addEventListener('click', () => win.classList.remove('open'));

  // Send on click or Enter
  win.querySelector('#mc-chat-send').addEventListener('click', send);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
})();

// Liste der Tarot-Karten und zugehöriger Bilddateien
const tarotDeck = [
    { name: 'The Fool', image: '/img/tarot/fool.jpg', meanings: {
        past: "Beginnings that shaped your journey, innocence that led to new experiences.",
        present: "Embracing spontaneity and adventure, taking a leap of faith.",
        future: "New opportunities on the horizon, a fresh start awaits.",
            reversed: {
                past: "Missed opportunities due to recklessness.",
                present: "Current fear of taking risks, lack of direction.",
                future: "Potential for poor decisions and naive actions."
            } } },
    { name: 'The Magician', image: '/img/tarot/magician.jpg', meanings: {
        past: "Utilizing your skills and talents, early manifestations of your desires",
        present: "Harnessing your personal power and resourcefulness, creating your reality",
        future: "Opportunities to manifest your goals, inspired action will lead to success.",
            reversed: {
                past: "Manipulation and deceitful intentions in past actions.",
                present: "Lack of focus, unfulfilled potential.",
                future: "Risk of being misled or self-doubt impacting future plans."
            } } },
    { name: 'The High Priestess', image: '/img/tarot/highpriestess.jpg', meanings: {
        past: "Moments of introspection and intuitive insights, uncovering hidden truths.",
        present: "Trusting your intuition and inner wisdom, embracing the unknown.",
        future: "Deepening your spiritual knowledge, hidden insights will come to light.",
            reversed: {
                past: "Ignored intuition, secrets revealed.",
                present: "Current confusion and hidden agendas.",
                future: "Potential for deceit and lack of insight."
            } } },
    { name: 'The Empress', image: '/img/tarot/empress.jpg', meanings: {
        past: "Nurturing relationships and creativity, experiences of abundance.",
        present: "Embracing your femininity and nurturing aspects, enjoying life's pleasures.",
        future: "Growth and abundance, potential for new projects or relationships.",
            reversed: {
                past: "Neglect or lack of nurturing in relationships.",
                present: "Issues with dependency, feeling stifled.",
                future: "Potential for creative blocks or financial difficulties."
            } } },
    { name: 'The Emperor', image: '/img/tarot/emperor.jpg', meanings: {
        past: "Establishing structure and order, taking on leadership roles.",
        present: "Asserting authority and control, maintaining stability.",
        future: "Building a solid foundation for future success, leadership opportunities.",
            reversed: {
                past: "Overbearing authority and control.",
                present: "Current power struggles and rigidity.",
                future: "Risk of oppression and inflexibility."
            } } },
    { name: 'The Hierophant', image: '/img/tarot/hierophant.jpg', meanings: {
        past: "Adhering to traditions and beliefs, early guidance and education.",
        present: "Seeking spiritual wisdom and counsel, embracing conventional values.",
        future: "Opportunities for spiritual growth, potential for teaching or mentoring.",
            reversed: {
                past: "Rebellion against traditions, misguidance.",
                present: "Current conformity or unconventional approaches.",
                future: "Potential for questioning beliefs and lack of guidance."
            } } },
    { name: 'The Lovers', image: '/img/tarot/lovers.jpg', meanings: {
        past: "Significant relationships and choices that shaped your path.",
        present: "Harmonious partnerships and love, making value-based decisions.",
        future: "Deepening connections, important choices regarding relationships.",
            reversed: {
                past: "Poor choices in relationships, disharmony.",
                present: "Current conflicts and imbalances in partnerships.",
                future: "Risk of relationship problems or difficult decisions."
            } } },
    { name: 'The Chariot', image: '/img/tarot/chariot.jpg', meanings: {
        past: "Overcoming challenges through determination, past victories.",
        present: "Harnessing willpower and control, moving forward with confidence.",
        future: "Success through focus and determination, potential for travel or progress.",
            reversed: {
                past: "Lack of control, failed ambitions.",
                present: "Current obstacles and lack of direction.",
                future: "Potential for defeat and unresolved conflicts."
            } } },
    { name: 'Justice', image: '/img/tarot/justice.jpg', meanings: {
        past: "Experiences of fairness and truth, past decisions and their consequences.",
        present: "Seeking justice and balance, making fair decisions.",
        future: "Future outcomes will be just and fair, potential legal matters.",
            reversed: {
                past: "Injustice and unfair treatment.",
                present: "Current imbalance and lack of accountability.",
                future: "Potential for continued unfairness and dishonesty."
            } } },
    { name: 'The Hermit', image: '/img/tarot/hermit.jpg', meanings: {
        past: "Periods of introspection and solitude, seeking inner guidance.",
        present: "Taking time for self-reflection and spiritual insight, withdrawal.",
        future: "Continued introspection, potential for enlightenment and wisdom.",
            reversed: {
                past: "Isolation and withdrawal.",
                present: "Current loneliness and lack of insight.",
                future: "Potential for continued solitude and avoidance."
            } } },
    { name: 'Wheel of Fortune', image: '/img/tarot/wheeloffortune.jpg', meanings: {
        past: "Significant turning points and cycles, experiences of fate.",
        present: "Embracing change and cycles, recognizing the role of destiny.",
        future: "Positive shifts and opportunities, a new cycle beginning.",
            reversed: {
                past: "Misfortune and missed opportunities.",
                present: "Current instability and unexpected changes.",
                future: "Risk of bad luck and lack of control over fate."
            } } },
    { name: 'Strength', image: '/img/tarot/strength.jpg', meanings: {
        past: "Demonstrating courage and resilience, overcoming past obstacles.",
        present: "Balancing inner strength with compassion, mastering self-control.",
        future: "Facing future challenges with courage, strength will lead to success.",
            reversed: {
                past: "Past weakness and self-doubt.",
                present: "Current fear and lack of confidence.",
                future: "Risk of inner turmoil and vulnerability."
            } } },
    { name: 'The Hanged Man', image: '/img/tarot/hangedman.jpg', meanings: {
        past: "Moments of surrender and letting go, gaining new perspectives.",
        present: "Embracing pause and contemplation, seeing things differently.",
        future: "Potential for transformation through surrender, new insights ahead.",
            reversed: {
                past: "Missed opportunities due to stagnation.",
                present: "Current indecision and lack of progress.",
                future: "Risk of continued delays and sacrifices."
            } } },
    { name: 'Death', image: '/img/tarot/death.jpg', meanings: {
        past: "Endings and transformations, significant changes in your life.",
        present: "Embracing change and letting go, transformative processes.",
        future: "New beginnings after endings, profound transformation awaits.",
            reversed: {
                past: "Resistance to change and stagnation.",
                present: "Current fear of endings and transformation.",
                future: "Potential for prolonged transitions and difficulty letting go."
            } } },
    { name: 'Temperance', image: '/img/tarot/temperance.jpg', meanings: {
        past: "Periods of balance and moderation, learning patience.",
        present: "Seeking harmony and balance, practicing moderation.",
        future: "Continued balance and harmony, potential for healing and peace.",
            reversed: {
                past: "Imbalance and excess in past actions.",
                present: "Current disharmony and lack of moderation.",
                future: "Risk of continued imbalance and lack of patience."
            } } },
    { name: 'The Devil', image: '/img/tarot/devil.jpg', meanings: {
        past: "Facing temptations and attachments, past experiences of restriction.",
        present: "Recognizing and breaking free from unhealthy patterns, confronting fears.",
        future: "Opportunities to overcome limitations, potential for liberation.",
            reversed: {
                past: "Past addictions and destructive behaviors.",
                present: "Current entrapment and unhealthy attachments.",
                future: "Potential for continued bondage and negative patterns."
            } } },
    { name: 'The Tower', image: '/img/tarot/tower.jpg', meanings: {
        past: "Sudden upheavals and revelations, past disruptions.",
        present: "Embracing change and transformation, dealing with chaos.",
        future: "Potential for sudden changes and insights, rebuilding after upheaval.",
            reversed: {
                past: "Sudden upheavals and crises.",
                present: "Current chaos and instability.",
                future: "Risk of unexpected disasters and breakdowns."
            } } },
    { name: 'The Star', image: '/img/tarot/star.jpg', meanings: {
        past: "Moments of hope and renewal, past inspirations.",
        present: "Embracing optimism and faith, healing and renewal.",
        future: "Continued hope and inspiration, potential for dreams to come true.",
            reversed: {
                past: "Lost hope and disappointment.",
                present: "Current lack of faith and pessimism.",
                future: "Potential for continued discouragement and lost dreams."
            } } },
    { name: 'The Moon', image: '/img/tarot/moon.jpg', meanings: {
        past: "Facing fears and illusions, past experiences of uncertainty.",
        present: "Trusting intuition and dealing with subconscious issues, confronting fears.",
        future: "Uncovering hidden truths, potential for emotional clarity.",
            reversed: {
                past: "Deception and confusion in the past.",
                present: "Current fears and illusion.",
                future: "Risk of continued uncertainty and deception."
            } } },
    { name: 'The Sun', image: '/img/tarot/sun.jpg', meanings: {
        past: "Periods of joy and success, positive past experiences.",
        present: "Embracing positivity and vitality, enjoying success.",
        future: "Continued success and happiness, potential for joy and fulfillment.",
            reversed: {
                past: "Past overexposure and burnout.",
                present: "Current lack of clarity and delays.",
                future: "Potential for temporary setbacks and lack of success."
            } } },
    { name: 'Judgement', image: '/img/tarot/judgement.jpg', meanings: {
        past: "Moments of self-reflection and judgement, past awakenings.",
        present: "Embracing rebirth and inner calling, evaluating your path.",
        future: "Opportunities for absolution and renewal, potential for transformative decisions.",
            reversed: {
                past: "Poor judgment and refusal to self-reflect.",
                present: "Current guilt and lack of accountability.",
                future: "Risk of continued avoidance and failure to learn lessons."
            } } },
    { name: 'The World', image: '/img/tarot/world.jpg', meanings: {
        past: " Completing cycles and achieving goals, past accomplishments.",
        present: "Embracing integration and wholeness, celebrating success.",
        future: "Continued completion and fulfillment, potential for new journeys.",
            reversed: {
                past: "Incomplete goals and lack of closure.",
                present: "Current stagnation and lack of progress.",
                future: "Potential for unfinished business and delays in achievements."
            } } },

    { name: 'Ace of Cups', image: '/img/tarot/acecups.jpg', meanings: {
        past: "New emotional beginnings, past experiences of love and creativity.",
        present: "Embracing new relationships and emotional experiences, feeling fulfilled.",
        future: "Potential for new love and creative opportunities, emotional abundance.",
            reversed: {
                past: "Repressed emotions and missed emotional opportunities.",
                present: "Current emotional blockages and unfulfilled relationships.",
                future: "Potential for continued emotional emptiness and disappointment."
            } } },
    { name: 'Two of Cups', image: '/img/tarot/twocups.jpg', meanings: {
        past: "Forming significant partnerships, past emotional connections.",
        present: "Experiencing harmony and mutual attraction, deepening relationships.",
        future: "Strengthening partnerships, potential for lasting unions.",
            reversed: {
                past: "Disharmony and breakups in past relationships.",
                present: "Current misunderstandings and conflicts.",
                future: "Risk of future relationship difficulties and lack of connection."
            } } },
    { name: 'Three of Cups', image: '/img/tarot/threecups.jpg', meanings: {
        past: "Celebrations and friendships, joyful past experiences.",
        present: "Embracing community and collaboration, enjoying social connections.",
        future: "Continued celebrations and creative collaborations, joy ahead.",
            reversed: {
                past: "Overindulgence and superficial friendships.",
                present: "Current isolation and lack of support.",
                future: "Potential for continued loneliness and disrupted celebrations."
            } } },
    { name: 'Four of Cups', image: '/img/tarot/fourcups.jpg', meanings: {
        past: "Moments of contemplation and reevaluation, past apathy.",
        present: "Reflecting on current emotions and opportunities, feeling introspective.",
        future: "Potential for new insights and emotional awakening, reevaluating options.",
            reversed: {
                past: "Missed opportunities due to apathy.",
                present: "Current dissatisfaction and boredom.",
                future: "Risk of continued disinterest and ignoring opportunities."
            } } },
    { name: 'Five of Cups', image: '/img/tarot/fivecups.jpg', meanings: {
        past: "Experiences of regret and disappointment, past emotional losses.",
        present: "Dealing with current sorrow and pessimism, processing grief.",
        future: "Opportunities for healing and moving forward, learning from past regrets.",
            reversed: {
                past: "Regret and dwelling on past losses.",
                present: "Current sadness and inability to move forward.",
                future: "Potential for continued grief and regret."
            } } },
    { name: 'Six of Cups', image: '/img/tarot/sixcups.jpg', meanings: {
        past: "Revisiting childhood memories and nostalgia, past innocence.",
        present: "Embracing joy and innocence, reconnecting with past influences.",
        future: "Continued connection to the past, potential for joyful memories ahead.",
            reversed: {
                past: "Clinging to the past and nostalgia.",
                present: "Current inability to let go and live in the present.",
                future: "Risk of being stuck in past memories and lack of growth."
            } } },
    { name: 'Seven of Cups', image: '/img/tarot/sevencups.jpg', meanings: {
        past: "Facing many choices and illusions, past wishful thinking.",
        present: "Dealing with current opportunities and decisions, discerning reality from illusion.",
        future: "Potential for clarity and making informed choices, navigating options.",
            reversed: {
                past: "Unrealistic dreams and lack of focus.",
                present: "Current confusion and inability to make decisions.",
                future: "Potential for continued illusions and missed opportunities."
            } } },
    { name: 'Eight of Cups', image: '/img/tarot/eightcups.jpg', meanings: {
        past: "Abandoning unfulfilling situations, past withdrawals.",
        present: "Embracing change and seeking deeper meaning, leaving behind what no longer serves.",
        future: "Opportunities for new paths and fulfillment, moving towards greater satisfaction.",
            reversed: {
                past: "Avoidance and running away from problems.",
                present: "Current dissatisfaction and emotional withdrawal.",
                future: "Risk of continued avoidance and unfulfilled quests."
            } } },
    { name: 'Nine of Cups', image: '/img/tarot/ninecups.jpg', meanings: {
        past: "Moments of contentment and satisfaction, past emotional fulfillment.",
        present: "Enjoying current contentment and gratitude, wishes coming true.",
        future: "Continued emotional satisfaction, potential for achieving desires.",
            reversed: {
                past: "Overindulgence and superficial happiness.",
                present: "Current lack of true fulfillment and overindulgence.",
                future: "Potential for hollow successes and emotional emptiness."
            } } },
    { name: 'Ten of Cups', image: '/img/tarot/tencups.jpg', meanings: {
        past: "Experiencing harmonious relationships, past emotional alignment.",
        present: "Embracing current love and happiness, enjoying family and harmony.",
        future: "Continued joy and fulfillment, potential for lasting happiness.",
            reversed: {
                past: "Broken relationships and shattered dreams.",
                present: "Current disharmony and family issues.",
                future: "Risk of future discord and lack of emotional fulfillment."
            } } },
    { name: 'Page of Cups', image: '/img/tarot/pagecups.jpg', meanings: {
        past: "Creative opportunities and curiosity, past emotional beginnings.",
        present: "Embracing current intuitive messages and possibilities, feeling inspired.",
        future: "Potential for new creative endeavors, continued emotional growth.",
            reversed: {
                past: "Emotional immaturity and unrealistic fantasies.",
                present: "Current lack of emotional depth and naivety.",
                future: "Potential for continued emotional immaturity and disappointment."
            } } },
    { name: 'Knight of Cups', image: '/img/tarot/knightcups.jpg', meanings: {
        past: "Romantic and imaginative experiences, past emotional journeys.",
        present: "Embracing charm and inspiration, pursuing romantic or creative goals.",
        future: "Opportunities for romance and creativity, potential for passionate pursuits.",
            reversed: {
                past: "Over-romanticism and unrealistic expectations.",
                present: "Current moodiness and inability to commit.",
                future: "Risk of continued emotional instability and unfulfilled desires."
            } } },
    { name: 'Queen of Cups', image: '/img/tarot/queencups.jpg', meanings: {
        past: "Demonstrating compassion and care, past emotional stability.",
        present: "Embracing intuition and nurturing aspects, feeling emotionally balanced.",
        future: "Continued emotional stability and care, potential for intuitive insights.",
            reversed: {
                past: "Over-sensitivity and emotional dependency.",
                present: "Current mood swings and lack of emotional boundaries.",
                future: "Potential for continued emotional volatility and co-dependency."
            } } },
    { name: 'King of Cups', image: '/img/tarot/kingcups.jpg', meanings: {
        past: "Providing emotional support and wisdom, past compassionate leadership.",
        present: "Balancing emotions and diplomacy, exercising emotional control.",
        future: "Opportunities for compassionate leadership, potential for emotional mastery.",
            reversed: {
                past: "Emotional manipulation and lack of empathy.",
                present: "Current moodiness and suppressed emotions.",
                future: "Risk of continued emotional detachment and manipulation."
            } } },

    { name: 'Ace of Pentacles', image: '/img/tarot/acepentacles.jpg', meanings: {
        past: "New financial opportunities, past manifestations of abundance.",
        present: "Embracing current prosperity and career prospects, feeling secure.",
        future: "Potential for continued financial growth, new opportunities on the horizon.",
            reversed: {
                past: "Missed financial opportunities and instability.",
                present: "Current lack of prosperity and wasted resources.",
                future: "Potential for continued financial difficulties and instability."
            } } },
    { name: 'Two of Pentacles', image: '/img/tarot/twopentacles.jpg', meanings: {
        past: "Balancing multiple priorities, past adaptability.",
        present: "Managing current responsibilities and time, finding balance.",
        future: "Continued ability to juggle tasks, potential for successful management.",
            reversed: {
                past: "Poor financial decisions and imbalance.",
                present: "Current struggles to manage responsibilities and resources.",
                future: "Risk of continued financial juggling and instability."
            } } },
    { name: 'Three of Pentacles', image: '/img/tarot/threepentacles.jpg', meanings: {
        past: "Collaborative projects and learning, past teamwork.",
        present: "Embracing current collaboration and skill development, working together.",
        future: "Opportunities for teamwork and mastery, potential for successful projects.",
            reversed: {
                past: "Lack of collaboration and failed projects.",
                present: "Current disharmony and lack of skill development.",
                future: "Potential for continued teamwork issues and lack of progress."
            } } },
    { name: 'Four of Pentacles', image: '/img/tarot/fourpentacles.jpg', meanings: {
        past: "Saving and securing resources, past financial conservatism.",
        present: "Maintaining security and control, feeling stable.",
        future: "Continued financial stability, potential for building wealth.",
            reversed: {
                past: "Greed and over-attachment to material possessions.",
                present: "Current financial insecurity and fear of loss.",
                future: "Risk of continued financial stagnation and materialism."
            } } },
    { name: 'Five of Pentacles', image: '/img/tarot/fivepentacles.jpg', meanings: {
        past: "Experiences of financial loss and isolation, past challenges.",
        present: "Dealing with current financial worries and scarcity, seeking support.",
        future: "Opportunities for overcoming financial difficulties, potential for recovery.",
            reversed: {
                past: "Financial loss and hardship.",
                present: "Current struggles with poverty and isolation.",
                future: "Potential for continued financial difficulties and lack of support."
            } } },
    { name: 'Six of Pentacles', image: '/img/tarot/sixpentacles.jpg', meanings: {
        past: "Acts of generosity and sharing, past charitable actions.",
        present: "Embracing giving and receiving, finding balance in generosity.",
        future: "Continued generosity and support, potential for financial harmony.",
            reversed: {
                past: "Imbalance in giving and receiving, exploitation.",
                present: "Current lack of generosity and selfishness.",
                future: "Risk of continued imbalance and lack of financial harmony."
            } } },
    { name: 'Seven of Pentacles', image: '/img/tarot/sevenpentacles.jpg', meanings: {
        past: "Long-term planning and perseverance, past investments.",
        present: "Evaluating current progress and efforts, practicing patience.",
        future: "Continued growth and sustainable results, potential for long-term success.",
            reversed: {
                past: "Poor investment and lack of results.",
                present: "Current impatience and lack of progress.",
                future: "Potential for continued delays and unfulfilled efforts."
            } } },
    { name: 'Eight of Pentacles', image: '/img/tarot/eightpentacles.jpg', meanings: {
        past: "Skill development and hard work, past mastery.",
        present: "Embracing current efforts and dedication, focusing on improvement.",
        future: "Continued skill development and mastery, potential for success through hard work.",
            reversed: {
                past: "Perfectionism and overwork.",
                present: "Current lack of focus and diminishing returns.",
                future: "Risk of continued burnout and lack of mastery."
            } } },
    { name: 'Nine of Pentacles', image: '/img/tarot/ninepentacles.jpg', meanings: {
        past: "Experiences of self-sufficiency and luxury, past financial independence.",
        present: "Enjoying current abundance and independence, feeling secure.",
        future: "Continued financial independence and luxury, potential for lasting abundance.",
            reversed: {
                past: "Financial dependence and superficial success.",
                present: "Current insecurity and lack of true independence.",
                future: "Potential for continued financial dependency and superficiality."
            } } },
    { name: 'Ten of Pentacles', image: '/img/tarot/tenpentacles.jpg', meanings: {
        past: "Building family legacy and wealth, past long-term success.",
        present: "Embracing current financial security and family harmony, feeling accomplished.",
        future: "Continued financial stability and legacy, potential for generational wealth.",
            reversed: {
                past: "Family conflicts and financial instability.",
                present: "Current lack of security and disharmony.",
                future: "Risk of continued family discord and financial challenges."
            } } },
    { name: 'Page of Pentacles', image: '/img/tarot/pagepentacles.jpg', meanings: {
        past: "New financial opportunities and skill development, past practical beginnings.",
        present: "Embracing current opportunities for growth, focusing on practical goals.",
        future: "Potential for continued skill development and financial success.",
            reversed: {
                past: "Missed educational or financial opportunities.",
                present: "Current lack of ambition and practicality.",
                future: "Potential for continued lack of focus and financial instability."
            } } },
    { name: 'Knight of Pentacles', image: '/img/tarot/knightpentacles.jpg', meanings: {
        past: "Hard work and routine, past dedication to goals.",
        present: "Embracing productivity and responsibility, staying focused.",
        future: "Continued dedication and hard work, potential for achieving practical goals.",
            reversed: {
                past: "Stubbornness and lack of progress.",
                present: "Current routine and lack of excitement.",
                future: "Risk of continued stagnation and lack of ambition."
            } } },
    { name: 'Queen of Pentacles', image: '/img/tarot/queenpentacles.jpg', meanings: {
        past: "Nurturing and providing financially, past practical support.",
        present: "Embracing current stability and care, balancing work and home.",
        future: "Continued financial stability and nurturing, potential for practical success.",
            reversed: {
                past: "Overemphasis on materialism and neglect of self-care.",
                present: "Current imbalance between work and personal life.",
                future: "Potential for continued material focus and neglect of well-being."
            } } },
    { name: 'King of Pentacles', image: '/img/tarot/kingpentacles.jpg', meanings: {
        past: "Demonstrating business acumen and leadership, past financial success.",
        present: "Embracing current authority and abundance, leading with discipline.",
        future: "Continued financial success and security, potential for leadership opportunities.",
            reversed: {
                past: "Greed and authoritarianism.",
                present: "Current financial instability and control issues.",
                future: "Risk of continued financial struggles and misuse of power."
            } } },

    { name: 'Ace of Swords', image: '/img/tarot/aceswords.jpg', meanings: {
        past: "New ideas and mental clarity, past breakthroughs.",
        present: "Embracing current clarity and insight, cutting through confusion.",
        future: "Potential for new ideas and success, continued mental clarity.",
            reversed: {
                past: "Miscommunication and lack of clarity.",
                present: "Current confusion and mental blocks.",
                future: "Potential for continued misunderstandings and lack of insight."
            } } },
    { name: 'Two of Swords', image: '/img/tarot/twoswords.jpg', meanings: {
        past: "Difficult decisions and impasses, past moments of weighing options.",
        present: "Dealing with current decisions and avoidance, seeking clarity.",
        future: "Opportunities for resolution and clarity, potential for informed decisions.",
            reversed: {
                past: "Indecision and avoidance.",
                present: "Current stalemates and inability to make decisions.",
                future: "Risk of continued avoidance and unresolved conflicts."
            } } },
    { name: 'Three of Swords', image: '/img/tarot/threeswords.jpg', meanings: {
        past: "Experiences of heartbreak and sorrow, past emotional pain.",
        present: "Dealing with current grief and hurt, processing emotional pain.",
        future: "Opportunities for healing and moving forward, potential for emotional recovery.",
            reversed: {
                past: "Deep emotional pain and heartbreak.",
                present: "Current sorrow and difficulty moving on.",
                future: "Potential for continued heartache and emotional wounds."
            } } },
    { name: 'Four of Swords', image: '/img/tarot/fourswords.jpg', meanings: {
        past: "Moments of rest and recuperation, past introspection.",
        present: "Embracing current rest and relaxation, taking time for contemplation.",
        future: "Continued need for rest and healing, potential for recovery and peace.",
            reversed: {
                past: "Burnout and lack of rest.",
                present: "Current stress and need for recovery.",
                future: "Risk of continued exhaustion and inability to find peace."
            } } },
    { name: 'Five of Swords', image: '/img/tarot/fiveswords.jpg', meanings: {
        past: "Conflict and disagreements, past experiences of competition.",
        present: "Dealing with current conflicts and tensions, navigating disagreements.",
        future: "Opportunities for resolution and learning, potential for overcoming conflict.",
            reversed: {
                past: "Conflicts and unresolved disputes.",
                present: "Current tension and desire for victory at all costs.",
                future: "Potential for continued conflicts and lack of resolution."
            } } },
    { name: 'Six of Swords', image: '/img/tarot/sixswords.jpg', meanings: {
        past: "Transition and moving on, past rites of passage.",
        present: "Embracing current change and transition, releasing baggage.",
        future: "Continued progress and moving forward, potential for new beginnings.",
            reversed: {
                past: "Difficulty moving on and holding onto the past.",
                present: "Current resistance to change and troubled transitions.",
                future: "Risk of continued difficulties in moving forward and finding peace."
            } } },
    { name: 'Seven of Swords', image: '/img/tarot/sevenswords.jpg', meanings: {
        past: "Experiences of deception and strategy, past cunning actions.",
        present: "Dealing with current strategic actions and deceit, acting wisely.",
        future: "Opportunities for strategic decisions, potential for overcoming deception.",
            reversed: {
                past: "Deception and betrayal.",
                present: "Current dishonesty and lack of trust.",
                future: "Potential for continued deceit and avoidance of responsibilities."
            } } },
    { name: 'Eight of Swords', image: '/img/tarot/eightswords.jpg', meanings: {
        past: "Self-imposed restrictions and negative thoughts, past feelings of imprisonment.",
        present: "Dealing with current limitations and victim mentality, seeking freedom.",
        future: "Opportunities for breaking free, potential for mental liberation.",
            reversed: {
                past: "Feeling trapped and powerless.",
                present: "Current mental blocks and feelings of restriction.",
                future: "Risk of continued entrapment and lack of progress."
            } } },
    { name: 'Nine of Swords', image: '/img/tarot/nineswords.jpg', meanings: {
        past: "Experiences of anxiety and worry, past nightmares.",
        present: "Dealing with current fears and depression, seeking clarity.",
        future: "Opportunities for overcoming anxiety, potential for mental peace.",
            reversed: {
                past: "Anxiety and nightmares.",
                present: "Current stress and worry.",
                future: "Potential for continued anxiety and mental anguish."
            } } },
    { name: 'Ten of Swords', image: '/img/tarot/tenswords.jpg', meanings: {
        past: "Painful endings and deep wounds, past crises.",
        present: "Dealing with current betrayal and loss, processing pain.",
        future: "Opportunities for healing and recovery, potential for new beginnings.",
            reversed: {
                past: "Betrayal and painful endings.",
                present: "Current suffering and feeling defeated.",
                future: "Risk of continued hardships and painful conclusions."
            } } },
    { name: 'Page of Swords', image: '/img/tarot/pageswords.jpg', meanings: {
        past: "New ideas and curiosity, past intellectual beginnings.",
        present: "Embracing current curiosity and communication, seeking knowledge.",
        future: "Potential for new ideas and growth, continued intellectual pursuits.",
            reversed: {
                past: "Impulsiveness and poor communication.",
                present: "Current restlessness and lack of direction.",
                future: "Potential for continued impulsiveness and misunderstandings."
            } } },
    { name: 'Knight of Swords', image: '/img/tarot/knightswords.jpg', meanings: {
        past: "Ambitious actions and driven pursuits, past rapid changes.",
        present: "Embracing current drive and ambition, pursuing goals with determination.",
        future: "Opportunities for success through action, potential for rapid progress.",
            reversed: {
                past: "Recklessness and rushing into conflicts.",
                present: "Current haste and aggressive behavior.",
                future: "Risk of continued impulsiveness and conflicts."
            } } },
    { name: 'Queen of Swords', image: '/img/tarot/queenswords.jpg', meanings: {
        past: "Independent judgement and clear boundaries, past direct communication.",
        present: "Embracing current clarity and unbiased judgement, setting boundaries.",
        future: "Continued mental clarity and independence, potential for effective communication.",
            reversed: {
                past: "Coldness and emotional detachment.",
                present: "Current harshness and lack of empathy.",
                future: "Potential for continued emotional distance and sharp criticism."
            } } },
    { name: 'King of Swords', image: '/img/tarot/kingswords.jpg', meanings: {
        past: "Demonstrating authority and intellectual power, past truth-seeking.",
        present: "Embracing current clarity and authority, leading with truth.",
        future: "Opportunities for leadership and truth, potential for intellectual mastery.",
            reversed: {
                past: "Ruthlessness and misuse of power.",
                present: "Current authoritarianism and lack of compassion.",
                future: "Risk of continued tyranny and abuse of authority."
            } } },

    { name: 'Ace of Wands', image: '/img/tarot/acewands.jpg', meanings: {
        past: "Inspiration and new opportunities, past moments of growth.",
        present: "Embracing current potential and creativity, feeling inspired.",
        future: "Continued opportunities for growth and success, potential for new beginnings.",
            reversed: {
                past: "Missed opportunities and lack of inspiration.",
                present: "Current creative blocks and lack of direction.",
                future: "Potential for continued stagnation and missed chances."
            } } },
    { name: 'Two of Wands', image: '/img/tarot/twowands.jpg', meanings: {
        past: "Future planning and decisions, past discoveries.",
        present: "Embracing current progress and decisions, planning for the future.",
        future: "Opportunities for expansion and discovery, potential for new ventures.",
            reversed: {
                past: "Indecision and lack of planning.",
                present: "Current uncertainty and lack of progress.",
                future: "Risk of continued indecision and lack of foresight."
            } } },
    { name: 'Three of Wands', image: '/img/tarot/threewands.jpg', meanings: {
        past: "Progress and foresight, past experiences of expansion.",
        present: "Embracing current progress and opportunities, looking ahead.",
        future: "Continued expansion and success, potential for new opportunities.",
            reversed: {
                past: "Delayed success and missed opportunities.",
                present: "Current lack of progress and frustration.",
                future: "Potential for continued delays and unfulfilled expectations."
            } } },
    { name: 'Four of Wands', image: '/img/tarot/fourwands.jpg', meanings: {
        past: "Celebrations and harmony, past moments of joy.",
        present: "Embracing current celebrations and community, feeling at home.",
        future: "Continued joy and harmony, potential for future celebrations.",
            reversed: {
                past: "Disruptions and lack of stability.",
                present: "Current lack of harmony and unfinished projects.",
                future: "Risk of continued instability and lack of celebration."
            } } },
    { name: 'Five of Wands', image: '/img/tarot/fivewands.jpg', meanings: {
        past: "Conflict and competition, past disagreements.",
        present: "Dealing with current tensions and diversity, navigating conflict.",
        future: "Opportunities for resolution and cooperation, potential for overcoming challenges.",
            reversed: {
                past: "Conflicts and lack of cooperation.",
                present: "Current struggles and competition.",
                future: "Potential for continued conflicts and lack of resolution."
            } } },
    { name: 'Six of Wands', image: '/img/tarot/sixwands.jpg', meanings: {
        past: "Success and public recognition, past achievements.",
        present: "Embracing current confidence and progress, enjoying success.",
        future: "Continued success and recognition, potential for future achievements.",
            reversed: {
                past: "False victories and arrogance.",
                present: "Current lack of recognition and self-doubt.",
                future: "Risk of continued setbacks and lack of success."
            } } },
    { name: 'Seven of Wands', image: '/img/tarot/sevenwands.jpg', meanings: {
        past: "Facing challenges and competition, past perseverance.",
        present: "Embracing current protection and perseverance, standing your ground.",
        future: "Opportunities for overcoming challenges, potential for continued success.",
            reversed: {
                past: "Overcoming challenges with difficulty.",
                present: "Current defensiveness and feeling overwhelmed.",
                future: "Potential for continued struggles and need for perseverance."
            } } },
    { name: 'Eight of Wands', image: '/img/tarot/eightwands.jpg', meanings: {
        past: "Fast-paced change and movement, past rapid progress.",
        present: "Embracing current action and alignment, moving forward quickly.",
        future: "Continued progress and movement, potential for swift changes.",
            reversed: {
                past: "Delays and missed opportunities.",
                present: "Current lack of progress and scattered energy.",
                future: "Risk of continued delays and lack of focus."
            } } },
    { name: 'Nine of Wands', image: '/img/tarot/ninewands.jpg', meanings: {
        past: "Resilience and persistence, past tests of faith.",
        present: "Embracing current courage and boundaries, staying resilient.",
        future: "Opportunities for persistence and success, potential for overcoming obstacles.",
            reversed: {
                past: "Past struggles and feeling battered.",
                present: "Current defensiveness and weariness.",
                future: "Potential for continued challenges and need for resilience."
            } } },
    { name: 'Ten of Wands', image: '/img/tarot/tenwands.jpg', meanings: {
        past: "Burdens and responsibilities, past hard work.",
        present: "Dealing with current workload and completion, feeling the weight.",
        future: "Opportunities for relief and completion, potential for lighter responsibilities.",
            reversed: {
                past: "Overburdened and taking on too much.",
                present: "Current stress and feeling overwhelmed.",
                future: "Risk of continued burdens and lack of relief."
            } } },
    { name: 'Page of Wands', image: '/img/tarot/pagewands.jpg', meanings: {
        past: "Inspiration and discovery, past creative beginnings.",
        present: "Embracing current ideas and possibilities, feeling inspired.",
        future: "Continued inspiration and creativity, potential for new adventures.",
            reversed: {
                past: "Lack of direction and missed opportunities.",
                present: "Current restlessness and lack of focus.",
                future: "Potential for continued aimlessness and lack of progress."
            } } },
    { name: 'Knight of Wands', image: '/img/tarot/knightwands.jpg', meanings: {
        past: "Energy and passion, past adventurous pursuits.",
        present: "Embracing current drive and enthusiasm, pursuing goals energetically.",
        future: "Opportunities for adventurous pursuits, potential for passionate progress.",
            reversed: {
                past: "Recklessness and lack of follow-through.",
                present: "Current impulsiveness and lack of direction.",
                future: "Risk of continued haste and unfulfilled ambitions."
            } } },
    { name: 'Queen of Wands', image: '/img/tarot/queenwands.jpg', meanings: {
        past: "Confidence and creativity, past moments of empowerment.",
        present: "Embracing current confidence and warmth, leading with inspiration.",
        future: "Continued empowerment and creativity, potential for influential leadership.",
            reversed: {
                past: "Overconfidence and domineering behavior.",
                present: "Current instability and lack of focus.",
                future: "Potential for continued volatility and lack of support."
            } } },
    { name: 'King of Wands', image: '/img/tarot/kingwands.jpg', meanings: {
        past: "Leadership and vision, past influential moments.",
        present: "Embracing current authority and vision, leading with confidence.",
        future: "Opportunities for visionary leadership, potential for impactful decisions.",
            reversed: {
                past: "Overbearing and controlling actions.",
                present: "Current lack of direction and vision.",
                future: "Risk of continued inflexibility and misuse of power."
            } } },


/*
    { name: 'Ace of', image: '/img/tarot/ace.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Two of', image: '/img/tarot/two.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Three of', image: '/img/tarot/three.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Four of', image: '/img/tarot/four.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Five of', image: '/img/tarot/five.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Six of', image: '/img/tarot/six.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Seven of', image: '/img/tarot/seven.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Eight of', image: '/img/tarot/eight.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Nine of', image: '/img/tarot/nine.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Ten of', image: '/img/tarot/ten.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Page of', image: '/img/tarot/page.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Knight of', image: '/img/tarot/knight.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'Queen of', image: '/img/tarot/queen.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
    { name: 'King of', image: '/img/tarot/king.jpg', meanings: {
            past: "",
            present: "",
            future: "",
            reversed: {
                past: "",
                present: "",
                future: ""
            } } },
*/
];


function drawCard() {
    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    const card = tarotDeck[randomIndex];
    const isReversed = Math.random() < 0.5;
    return { ...card, isReversed };
}

function updateCard(elementId, card, position) {
    const cardElement = document.getElementById(elementId);
    const imgElement = cardElement.querySelector("img");
    const descriptionElement = cardElement.querySelector("p");

    imgElement.src = card.image;
    imgElement.alt = card.name;

    if (card.isReversed) {
        cardElement.classList.add("reversed");
        descriptionElement.textContent = card.meanings.reversed[position];
    } else {
        cardElement.classList.remove("reversed");
        descriptionElement.textContent = card.meanings[position];
    }
}

function performReading() {
    const pastCard = drawCard();
    const presentCard = drawCard();
    const futureCard = drawCard();
    
    while (pastCard.name === presentCard.name || pastCard.name === futureCard.name || presentCard.name === futureCard.name) {
        performReading();
        return;
    }

    updateCard("past", pastCard, "past");
    updateCard("present", presentCard, "present");
    updateCard("future", futureCard, "future");
}

document.addEventListener("DOMContentLoaded", performReading);
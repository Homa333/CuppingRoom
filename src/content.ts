// src/content.ts

export type NavLink = { href: string; label: string };
export type FeatureCard = { id: string; title: string; desc: string; href: string };
export type OriginLot = {
  name: string;
  notes: string;
  meta: string;       // altitude, process, etc.
  process: "Washed" | "Natural" | "Honey";
  image?: string;
};
export type BlogPost = { id: number; slug: string; title: string; excerpt: string; tag: string; image?: string };

export const siteInfo = {
  name: "Cupping Room",
  motto: "Where every sip tells a story.",
  addressShort: "near Bhat Bhateni, New Road, Pokhara, Nepal",
  phone: "+977-9849800409",
  phoneLink: "tel:9779849800409",
  whatsapp: "https://wa.me/9779849800409",
  email: "thecuppingroom8@gmail.com",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/origins", label: "Origins" },
  { href: "/training", label: "Training" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

// Home
export const homeHero = {
  heading: "Our Story",
  sub:
  "We are dedicated in coffee training and coffee production. " +
  "Learn from industry experts, explore the art of bewing and discover the secrets of perfecting" +
  " latte art."+
  " Our Mission is to empower students with world-class barista skills, deep coffee knowledge and the confidence to excel in growing coffee "+
"industry.",
  heroImage:
    "/solo-port.png",
};

// Feature cards shown on Home and linked from navbar
export const featureCards: FeatureCard[] = [
    {
    id: "training",
    title: "Barista Training",
    desc:
      "22 days. 2 hours per session. 20 percent theory and 80 percent practical. Flexible schedules.",
    href: "/training",
  },
  {
    id: "farm-direct",
    title: "Farm Direct Relationships",
    desc:
      "We work directly with small scale producers to ensure quality and equitable pay, " +
      "visiting farms and cooperatives to support sustainable practices.",
    href: "/features#farm-direct",
  },
  {
    id: "processing",
    title: "Coffee Processing",
    desc:
      "Washed, Natural, and Honey methods shape flavor from the start. " +
      "We select the method that best highlights each lot.",
    href: "/features#processing",
  },
  {
    id: "roasting",
    title: "Roasting Philosophy",
    desc:
      "Small batch, precision focused profiles to reveal the unique character of each origin.",
    href: "/features#roasting",
  },
];

// Features / About copy
export const about = {
  farmDirect: {
    header: "From Our Soil to Your Cup",
    body: [
      "At Cupping Room, our story begins at the source. We are committed to a farm direct and relationship based model of sourcing. " +
        "We work personally with the farming families who grow our coffee, often visiting the farms and cooperatives ourselves to ensure quality and sustainable practices.",
      "By trading fairly and directly with small scale producers, we ensure they receive a strong, equitable price for their harvest. " +
        "This allows them to invest in their land, care for their families, and continue producing the exceptional coffee we are proud to share with you.",
    ],
  },
  processing: {
    header: "The Art of Processing: Shaping Flavor from the Start",
    intro:
      "Coffee processing is the crucial first step in defining a coffee's character. " +
      "Each technique imparts a unique profile. We select the method that best highlights the qualities of each lot.",
    methods: [
      {
        name: "Washed Process",
        desc:
          "Fruit is removed before drying. Cleaner, brighter flavors and a lighter body that lets the inherent notes shine.",
      },
      {
        name: "Natural Process",
        desc:
          "Beans dry inside the fruit for a full bodied cup with complex, fruity sweetness often with berry like notes.",
      },
      {
        name: "Honey Process",
        desc:
          "A hybrid with balanced acidity like a washed coffee and the enhanced sweetness and body of a natural.",
      },
    ],
  },
  roasting: {
    header: "Roasting with Intention",
    body: [
      "Our roasting is an act of curation. We do not just brown beans; we reveal the story and flavors developed at the farm and through processing. " +
        "Using our small batch roaster, we apply a precise and thoughtful profile for each coffee.",
      "We highlight the distinct characteristics of each origin. " +
        "Whether it is preserving the vibrant acidity of a washed coffee or unlocking the syrupy sweetness of a natural, " +
        "our goal is to deliver a balanced and memorable roast to your cup.",
    ],
  },
};

// Origins
export const originLots: OriginLot[] = [
  {
    name: "Kathmandu Reserve",
    notes: "Dark chocolate, cherry",
    meta: "Washed, 1650m",
    process: "Washed",
    image:
      "https://images.unsplash.com/photo-1461988091159-192b6df7054f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Gurkha Microlot 7",
    notes: "Citrus, honey, florals",
    meta: "Honey, 1800m",
    process: "Honey",
    image:
      "https://images.unsplash.com/photo-1461988091159-192b6df7054f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Terai Estate Lot B",
    notes: "Nutty, caramel, balanced",
    meta: "Natural, 1500m",
    process: "Natural",
    image:
      "https://images.unsplash.com/photo-1461988091159-192b6df7054f?q=80&w=1200&auto=format&fit=crop",
  },
];

// Training page content
export const training = {
  summary:
    "22 days. 2 hours per session. 20 percent theory and 80 percent practical. Flexible schedules.",
  schedules: ["Morning", "Day", "Evening"],
  theoryItems: [
    "History of coffee",
    "Coffee farming and coffee bean varieties",
    "Processing",
    "Roasting",
    "Caffeine",
    "Espresso extraction factors",
    "Hospitality skills",
  ],
  practicalItems: [
    "Manual brew coffee",
    "Espresso extraction",
    "Milk steaming",
    "Latte art",
    "Various styles of coffee and non coffee iced or hot beverages",
    "Equipment handling",
    "Customer service",
    "Menu development",
  ],
  outcomes: [
    "Recognized barista certification that boosts your resume",
    "Quality training and unlimited latte art practice",
  ],
};

// Blogs
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-we-cup-from-sample-to-score",
    title: "How we cup: from sample to score",
    excerpt: "A quick look at our cupping protocol and what the scores mean.",
    tag: "Barista",
    image:
      "https://images.unsplash.com/photo-1459257868276-5e65389e2722?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "the-art-of-processing-washed-natural-honey",
    title: "Inside the honey process",
    excerpt: "Walking through our favorite method for bright, sweet cups.",
    tag: "Plantation",
    image:
      "https://images.unsplash.com/photo-1459257868276-5e65389e2722?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "altitude-and-acidity",
    title: "Altitude and acidity",
    excerpt: "Why higher grown coffees taste the way they do.",
    tag: "Origins",
    image:
      "https://images.unsplash.com/photo-1459257868276-5e65389e2722?q=80&w=1200&auto=format&fit=crop",
  },
];

// src/content.ts
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string; // /about/team-alisha.jpg
};

export const aboutImages = {
  hero: "/about/grp-field.jpeg",
  farm: "/about/farm.jpeg",
  processing: "/about/process-wet.jpeg",
  roasting: "/about/small-batch.webp",
};

export const team: TeamMember[] = [
  // Leave empty if you are not ready. The page hides the section automatically.
  // {
  //   name: "Alisha K.",
  //   role: "Head Trainer",
  //   bio: "SCA certified trainer with 6+ years in barista education and latte art.",
  //   image: "/about/team-alisha.jpg",
  // },
  // {
  //   name: "Bikash T.",
  //   role: "Roaster",
  //   bio: "Small batch roaster focused on clean, origin-forward profiles.",
  //   image: "/about/team-bikash.jpg",
  // },
];

export const hours = "Open daily 9am to 7pm"
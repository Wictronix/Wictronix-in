export interface Project {
  id: string;
  slug: string;
  tags: string[];
  engagement: string;
  metric: string;
  metricLabel: string;
  industry: string;
  outcome: string;
  description: string;
  stack: string[];
  image: string;
  color?: string;
  details?: ProjectDetails;
}

export interface ProjectDetails {
  heroMetric: {
    value: string;
    label: string;
    subLabel?: string;
  };
  context: {
    industry: string;
    services: string[];
    duration: string;
    engagement: string;
    geography: string;
  };
  situation: string;
  approach: {
    phase: string;
    title: string;
    description: string;
  }[];
  results: {
    metrics: {
      value: string;
      label: string;
    }[];
    qualitative: string;
    additionalWins?: string[];
  };
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "hvac-distributor-seo",
    tags: ["SEO", "Social"],
    engagement: "Retainer",
    metric: "14,000+",
    metricLabel: "organic clicks in 60 days",
    industry: "B2B Industrial · HVAC",
    outcome: "India's Largest HVAC Distributor",
    description: "From zero digital footprint to 80% AI Search share on top industry keywords, plus 100+ organic leads in 6 months.",
    stack: ["SEMrush", "HubSpot CRM", "Meta", "Mailchimp"],
    image: "/images/work/hvac.png",
    color: "#0066FF",
    details: {
      heroMetric: {
        value: "14,000+",
        label: "Organic Clicks in 60 Days",
        subLabel: "80% AI Search Share. 100+ Leads in 6 Months."
      },
      context: {
        industry: "B2B Industrial / HVAC",
        services: ["Website", "SEO", "Social Media", "Email", "CRM"],
        duration: "Ongoing",
        engagement: "Ongoing Retainer",
        geography: "India (Pan-India)"
      },
      situation: "India's largest distributor of industrial HVAC equipment had two decades of credibility, a national dealer network, and a market-leading product range - but zero digital presence. Their B2B buyers - facility managers, procurement heads, and construction companies - were searching for HVAC solutions online and finding competitors instead. The company was managing all client relationships through spreadsheets and phone calls, with no way to track, nurture, or measure lead quality. Every rupee of marketing spend was invisible.",
      approach: [
        {
          phase: "Phase 01",
          title: "Infrastructure Build",
          description: "Built a performance website with product hierarchy, technical spec pages, and B2B lead capture funnels designed for procurement decision-makers."
        },
        {
          phase: "Phase 02",
          title: "Dual-Track SEO",
          description: "Executed traditional Google SEO alongside AI Search optimization (Perplexity, ChatGPT) - targeting 15+ commercial-intent keywords across HVAC product categories."
        },
        {
          phase: "Phase 03",
          title: "Technical Authority Content",
          description: "Created LinkedIn and Meta content showcasing technical credibility - product launches, certifications, installation documentation, and industry expertise."
        },
        {
          phase: "Phase 04",
          title: "CRM + Email Pipeline",
          description: "Set up HubSpot CRM with lead scoring, email nurture sequences for warm leads, and contact management campaigns achieving 90% open rates."
        }
      ],
      results: {
        metrics: [
          { value: "90K+", label: "Impressions in first 60 days" },
          { value: "80%", label: "AI Search share on top 4 industry keywords" },
          { value: "100+", label: "Organic leads generated in 6 months" }
        ],
        qualitative: "The client shifted from zero digital dependency to 60%+ of new leads sourced from organic channels within 6 months of going live.",
        additionalWins: [
          "15+ keyword rankings on Google",
          "90% email open rate for lead management",
          "100,000+ social views in 30 days"
        ]
      }
    }
  },
  {
    id: "2",
    slug: "fintech-trading-leads",
    tags: ["SEO", "Social", "Influencer Marketing"],
    engagement: "Retainer",
    metric: "100+",
    metricLabel: "qualified leads in 30 days",
    industry: "FinTech · Trading Software",
    outcome: "B2C/B2B Trading Platform",
    description: "Built the digital presence for a trading software company from scratch - 25,000+ impressions and 100+ leads in the first 30 days.",
    stack: ["WordPress", "SEMrush", "Meta Business Suite", "Instagram", "Influencer Network", "Google Analytics 4"],
    image: "/images/work/fintech.png",
    details: {
      heroMetric: {
        value: "100+",
        label: "Qualified Leads in 30 Days",
        subLabel: "25,000+ Impressions. 20K Monthly Social Views."
      },
      context: {
        industry: "FinTech / Trading Software",
        services: ["Website", "SEO", "Social Media", "Influencer Marketing"],
        duration: "3+ months",
        engagement: "Retainer",
        geography: "India"
      },
      situation: "A fintech company had built a powerful suite of trading plugins for retail and institutional traders - but their digital presence didn't match the sophistication of their product. Their website was outdated, search visibility was non-existent in a crowded fintech space, and they had no reliable channel for inbound leads. Sales depended entirely on referrals - a ceiling with no way through.",
      approach: [
        {
          phase: "Phase 01",
          title: "Dual-Audience Website",
          description: "Rebuilt the website with split conversion flows - B2C path for retail traders, B2B path for institutional partners and resellers. Separate CTAs, separate trust signals."
        },
        {
          phase: "Phase 02",
          title: "High-Intent SEO",
          description: "Targeted trading-specific, high-intent keywords. Built content clusters around plugin-specific use cases to capture buyers mid-research."
        },
        {
          phase: "Phase 03",
          title: "Influencer + Content Engine",
          description: "Recruited trading-niche influencers for authentic product demonstrations. Launched daily educational trading content that built authority without feeling like advertising."
        },
        {
          phase: "Phase 04",
          title: "Community Amplification",
          description: "Built a social community around trading insights, extending organic reach and creating peer-to-peer product discovery among the target audience."
        }
      ],
      results: {
        metrics: [
          { value: "25K+", label: "Impressions in first 90 days" },
          { value: "100+", label: "Lead conversions in 30 days" },
          { value: "20K+", label: "Monthly social views via influencer reels" }
        ],
        qualitative: "The client moved from 100% referral dependency to a measurable inbound pipeline within the first month.",
        additionalWins: [
          "Daily content cadence maintained throughout engagement",
          "Every post had a conversion destination"
        ]
      }
    }
  },
  {
    id: "3",
    slug: "travel-transport-gmb",
    tags: ["Website", "Local SEO", "Social Media"],
    engagement: "Retainer",
    metric: "250+",
    metricLabel: "booking calls/month from GMB",
    industry: "Travel · Transportation",
    outcome: "Regional Bus Travel Company",
    description: "Booking system, 5+ marketplace listings, and an Instagram-to-DM funnel that converts profile visitors into ticket buyers 24/7.",
    stack: ["WordPress", "Custom Booking Plugin", "Google My Business", "MakeMyTrip", "RedBus", "ManyChat", "Instagram"],
    image: "/images/work/travel.png",
    details: {
      heroMetric: {
        value: "250+",
        label: "Booking Calls Per Month from GMB",
        subLabel: "5+ Marketplaces. 24/7 Auto-DM Funnel."
      },
      context: {
        industry: "Travel / Regional Bus Transportation",
        services: ["Website + Booking System", "Local SEO", "Social Media"],
        duration: "Project + Retainer",
        engagement: "Project Build + Ongoing Retainer",
        geography: "Tricity (Chandigarh / Mohali / Panchkula)"
      },
      situation: "A regional bus travel company operating across the Chandigarh-Mohali-Panchkula tricity belt had no online presence. No website, no booking system, no searchable footprint. Customers who searched \"bus booking Chandigarh\" found competitors who had figured out local SEO. This company was booking tickets exclusively through phone calls - a process that stopped working at 11 PM and couldn't scale.",
      approach: [
        {
          phase: "Phase 01",
          title: "Booking-First Website",
          description: "Built a mobile-optimized booking website with route management, an admin dashboard for fleet operators, and WhatsApp-integrated lead capture. Designed for the on-the-go traveler."
        },
        {
          phase: "Phase 02",
          title: "Local SEO + Marketplace Blitz",
          description: "Optimized Google My Business profile and managed listings across 5+ travel marketplaces (MakeMyTrip, RedBus, JustDial, etc.). Built local keyword dominance for route-specific searches."
        },
        {
          phase: "Phase 03",
          title: "Visual Trust on Instagram",
          description: "Produced on-location bus shoot content. Built a curated Instagram with route-specific highlights, acting as a visual catalogue for tourists and corporate travellers researching options."
        },
        {
          phase: "Phase 04",
          title: "Auto-DM Conversion Flow",
          description: "Deployed Instagram auto-DM sequences that capture profile visitors, qualify intent, and route them to booking - automatically, around the clock."
        }
      ],
      results: {
        metrics: [
          { value: "250+", label: "Booking calls per month from GMB alone" },
          { value: "5+", label: "Travel marketplaces actively managed" },
          { value: "24/7", label: "Auto-DM funnel converting profile visitors" }
        ],
        qualitative: "The business went from zero online presence to a bookings engine that runs itself outside business hours. The Instagram auto-DM system alone captures leads the company would previously have lost entirely."
      }
    }
  },
  {
    id: "4",
    slug: "ndis-healthcare-seo",
    tags: ["Website", "SEO", "Social Media"],
    engagement: "Retainer",
    metric: "Top 3",
    metricLabel: "on 4 NDIS search terms",
    industry: "Healthcare · NDIS Services · Australia",
    outcome: "NDIS Disability Services Provider",
    description: "Rebuilt an NDIS provider's digital presence for participants, families, and support coordinators - ranking top 3 on the searches that matter most.",
    stack: ["WordPress", "Yoast SEO", "Ahrefs", "Google Search Console", "Meta Business Suite"],
    image: "/images/work/ndis.png",
    details: {
      heroMetric: {
        value: "Top 3",
        label: "Rankings on 4 Core NDIS Search Terms",
        subLabel: "Participant-First Digital Rebuild."
      },
      context: {
        industry: "NDIS Disability Services",
        services: ["Website", "SEO", "Social Media"],
        duration: "6+ months",
        engagement: "Retainer",
        geography: "Australia"
      },
      situation: "An NDIS-registered disability services provider in Australia had the accreditation, the care team, and genuine participant outcomes - but was invisible where it mattered most: search. Participants and their support coordinators search for NDIS services online before picking up the phone. This provider wasn't showing up. Their website was a static brochure with no search architecture, no participant-centric content, and no social presence to build community trust.",
      approach: [
        {
          phase: "Phase 01",
          title: "Participant-First Website",
          description: "Rebuilt the website around how participants, families, and support coordinators actually navigate NDIS decisions - clear service categories, plan type eligibility guides, and frictionless contact paths."
        },
        {
          phase: "Phase 02",
          title: "NDIS-Specific SEO",
          description: "Researched NDIS participant search behavior in Australia - built content clusters around service categories, suburb-level location pages, and NDIS plan type queries that support coordinators use when referring clients."
        },
        {
          phase: "Phase 03",
          title: "Community Social Presence",
          description: "Established a Meta-based social presence focused on participant stories, team introductions, and NDIS navigation content - building community trust that converted social visitors into enquiries."
        }
      ],
      results: {
        metrics: [
          { value: "Top 3", label: "Rankings on 4 core NDIS search terms" },
          { value: "100%", label: "Website rebuilt as participant resource hub" },
          { value: "AU", label: "Full Australian market NDIS presence established" }
        ],
        qualitative: "From invisible to discoverable in the most competitive NDIS search terms in their service area. The website now serves as a 24/7 participant resource - reducing enquiry friction for both participants and their support coordinators."
      }
    }
  },
  {
    id: "5",
    slug: "salon-booking-system",
    tags: ["Website", "Local SEO", "GMB"],
    engagement: "Retainer",
    metric: "100+",
    metricLabel: "new bookings in 30 days",
    industry: "Beauty & Services · USA",
    outcome: "25-Year-Old Multi-Artist Salon",
    description: "A salon with decades of loyal clients, zero online presence, and 100+ new bookings in its first 30 days live - plus 25 Google reviews in a month.",
    stack: ["WordPress", "Multi-Artist Booking Plugin", "Google My Business", "Google Search Console"],
    image: "/images/work/salon.png",
    details: {
      heroMetric: {
        value: "100+",
        label: "New Bookings in 30 Days",
        subLabel: "25 Google Reviews. 100+ Monthly GMB Calls."
      },
      context: {
        industry: "Beauty / Salon Services",
        services: ["Website", "Multi-Artist Booking System", "SEO", "GMB"],
        duration: "Ongoing",
        engagement: "Ongoing Retainer",
        geography: "Pasco, Washington State, USA"
      },
      situation: "A 25-year-old salon in Pasco, Washington - with a fiercely loyal client base built over decades - was losing new customers to newer competitors who had Instagram accounts and online booking systems. Searches for \"salon near me\" in Pasco returned everyone except them. There was no website, no way to book online, no Google presence, and no reviews. A business built on trust had no digital proof of that trust to show new customers.",
      approach: [
        {
          phase: "Phase 01",
          title: "Multi-Artist Booking System",
          description: "Built a website where customers book specific artists directly - not a generic \"book now\" form. Each stylist manages their own calendar. Reduced double-bookings, reduced front desk calls, reduced no-shows."
        },
        {
          phase: "Phase 02",
          title: "GMB Optimization + Local SEO",
          description: "Built and fully optimized the Google Business Profile with service menu, photo gallery, and pricing signals. Targeted local search terms for Pasco and surrounding Tri-Cities area."
        },
        {
          phase: "Phase 03",
          title: "Review Acquisition Engine",
          description: "Launched a systematic review collection process - post-appointment follow-ups that converted satisfied customers into Google reviews. 25 genuine reviews in 30 days built the social proof that converts search traffic into first-time bookings."
        }
      ],
      results: {
        metrics: [
          { value: "100+", label: "New bookings in first 30 days live" },
          { value: "25+", label: "Google reviews acquired in 30 days" },
          { value: "100+", label: "Monthly calls from GMB profile" }
        ],
        qualitative: "Twenty-five years of loyal customers now had a digital proof point to share with friends. The multi-artist booking system eliminated the double-booking problem entirely - and the front desk stopped fielding scheduling calls. The salon now runs a booking engine that works while they sleep."
      }
    }
  },
  {
    id: "6",
    slug: "ngo-donation-platform",
    tags: ["Web App", "Social", "WhatsApp"],
    engagement: "Retainer",
    metric: "100K+",
    metricLabel: "Meta views in 30 days",
    industry: "Non-Profit · Social Impact",
    outcome: "Social Impact NGO",
    description: "Custom 35-feature donation platform, 4,000+ WhatsApp community, influencer trust network, and 100+ daily donor queries - all managed at scale.",
    stack: ["React", "Node.js", "Razorpay", "Meta Business Suite", "YouTube Studio", "WhatsApp Business API", "Influencer Network"],
    image: "/images/work/ngo.png",
    details: {
      heroMetric: {
        value: "100K+",
        label: "Meta Views in 30 Days",
        subLabel: "4,000+ Community Members · 35-Feature Donation Platform."
      },
      context: {
        industry: "Non-Profit / Social Impact",
        services: ["Web App", "Social Media", "WhatsApp", "Influencer Marketing"],
        duration: "Ongoing",
        engagement: "Ongoing Retainer",
        geography: "India (Pan-India donor base)"
      },
      situation: "A grassroots NGO with real, documented impact on the ground had a trust problem online. Potential donors couldn't verify the organization's credibility, couldn't donate without friction, and had no community to belong to after giving. The team was managing donor queries over personal WhatsApp numbers, had no content strategy, and their digital presence failed to communicate the scale of their work. Online giving was near zero despite genuine offline impact.",
      approach: [
        {
          phase: "Phase 01",
          title: "Custom Donation Platform",
          description: "Built a full-featured donation website with 35+ features: donor dashboard, campaign pages, admin panel, tax receipt automation, impact tracking, and recurring donation management. Built to convert donor skepticism into action."
        },
        {
          phase: "Phase 02",
          title: "Multi-Platform Content Engine",
          description: "Launched A/B-tested content across Meta formats (Stories, Reels, Carousels) hitting 100,000+ views in 30 days. Simultaneously built YouTube Shorts channel averaging 10,000+ views per short."
        },
        {
          phase: "Phase 03",
          title: "Influencer Trust Network",
          description: "Deployed niche influencers to create documentary-style reels addressing the most common donor objections - real people, real impact, real accountability on camera. 2,000+ average views per reel."
        },
        {
          phase: "Phase 04",
          title: "WhatsApp Community at Scale",
          description: "Set up WhatsApp Business API to manage 100+ daily donor queries professionally, and built a 4,000+ member community for sustained engagement, event updates, and impact reporting."
        }
      ],
      results: {
        metrics: [
          { value: "100K+", label: "Meta views in first 30 days" },
          { value: "4,000+", label: "Community members managed on WhatsApp" },
          { value: "35+", label: "Features on custom donation platform" }
        ],
        qualitative: "The organization went from informal personal-number operations to a full digital fundraising infrastructure that scales with every campaign.",
        additionalWins: [
          "10,000+ average YouTube Shorts views",
          "100+ daily donor queries resolved via WhatsApp Business API",
          "2,000+ average views per influencer reel"
        ]
      }
    }
  },
  {
    id: "7",
    slug: "ngo-marketplace-ads",
    tags: ["Web App", "Performance Ads"],
    engagement: "Project",
    metric: "50+",
    metricLabel: "features, 4 stakeholder types",
    industry: "Social Impact Tech · NGO Ecosystem",
    outcome: "National NGO Donation Marketplace",
    description: "Built the infrastructure connecting donors, NGOs, admins, and corporate partners - plus performance marketing driving heavy ROAS on donation spend.",
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "Razorpay", "Google Ads", "Meta Ads"],
    image: "/images/work/ngo-marketplace.png",
    details: {
      heroMetric: {
        value: "50+",
        label: "Features. 4 Stakeholder Portals",
        subLabel: "Heavy ROAS on Donation Marketing."
      },
      context: {
        industry: "Social Impact Technology",
        services: ["Full-Stack Web Application", "Performance Marketing"],
        duration: "Project + Retainer",
        engagement: "Project Build + Retainer (Marketing)",
        geography: "India"
      },
      situation: "India has thousands of legitimate NGOs unable to receive online donations because individual donors don't know who to trust. On the other side, NGOs have no unified platform to showcase their work, manage donor relationships, or run fundraising campaigns. The brief was to build the infrastructure that solves both sides of this problem simultaneously - and then drive donation volume through performance marketing that could demonstrate real ROAS.",
      approach: [
        {
          phase: "Phase 01",
          title: "Multi-Stakeholder Architecture",
          description: "Designed a platform from scratch supporting four distinct user types - each with separate portals, permission structures, and dashboards: Donors, NGOs, Platform Administrators, and Corporate CSR Partners."
        },
        {
          phase: "Phase 02",
          title: "50+ Feature Platform Build",
          description: "Delivered campaign management, payment processing, NGO verification badges, impact reports, donor history, recurring donation support, corporate CSR dashboards, and admin controls - all in a single deployable platform."
        },
        {
          phase: "Phase 03",
          title: "Performance Marketing for Donations",
          description: "Launched paid campaigns across Google and Meta targeting donation-intent audiences. Optimized bids for donation value - not just clicks or conversions - achieving heavy ROAS on total ad spend."
        }
      ],
      results: {
        metrics: [
          { value: "50+", label: "Features across 4 stakeholder portals" },
          { value: "4", label: "Stakeholder types in one platform" },
          { value: "Heavy", label: "ROAS achieved on performance marketing" }
        ],
        qualitative: "The platform launched handling real donation volume from day one. The multi-stakeholder architecture - rarely built at this scope for the Indian social impact sector - became a structural competitive advantage for the client in attracting corporate CSR partnerships."
      }
    }
  },
  {
    id: "8",
    slug: "healthtech-patient-app",
    tags: ["Mobile App", "Growth"],
    engagement: "Project",
    metric: "2,500+",
    metricLabel: "users + 150 doctors in 3 months",
    industry: "HealthTech · Patient Records",
    outcome: "Doctor-Patient Medical History App",
    description: "Two apps - one for doctors, one for patients - solving fragmented medical records. 2,500+ users and 150+ doctors onboarded in 90 days.",
    stack: ["React Native", "Node.js", "Firebase", "AWS", "Instagram", "LinkedIn Outreach", "Google Play", "App Store"],
    image: "/images/work/healthtech.png",
    details: {
      heroMetric: {
        value: "2,500+",
        label: "Users Acquired in 3 Months",
        subLabel: "150+ Doctors Onboarded. Two Apps, One Problem Solved."
      },
      context: {
        industry: "HealthTech",
        services: ["Dual Mobile App (Doctor + Patient)", "Growth Marketing"],
        duration: "Build + Growth",
        engagement: "Project (Build + Growth)",
        geography: "India"
      },
      situation: "Patients in India carry physical files from doctor to doctor - or worse, can't recall their medical history at an emergency consultation. Doctors face the same problem from the other side: no continuity of care, no shared medical record, no way to see a patient's history across providers. An entrepreneur saw this gap and came to WictroniX to build a solution for both sides of the consultation room simultaneously - without sacrificing the simplicity needed for mass adoption.",
      approach: [
        {
          phase: "Phase 01",
          title: "Dual App Architecture",
          description: "Designed and built two distinct applications: a Doctor App for practice management and patient history access, and a Patient App for personal health record management. Both sync in real-time. Separate UX, shared data layer."
        },
        {
          phase: "Phase 02",
          title: "Supply-Side Doctor Onboarding",
          description: "Prioritized doctor onboarding as the critical supply side of the network - without doctors, patients have no reason to adopt. Built targeted outreach through medical associations, clinic networks, and LinkedIn."
        },
        {
          phase: "Phase 03",
          title: "Patient Demand Growth",
          description: "Launched social media campaigns targeting patients through health content, doctor introductions, and app feature demonstrations. Grew the patient side in parallel with doctor network expansion."
        },
        {
          phase: "Phase 04",
          title: "App Store Launch",
          description: "Managed full deployment to Google Play and App Store - including store optimization, app screenshots, description copy, and launch coordination."
        }
      ],
      results: {
        metrics: [
          { value: "2,500+", label: "Total users acquired in 3 months" },
          { value: "150+", label: "Doctors onboarded on the platform" },
          { value: "2", label: "Apps shipped (Doctor + Patient), real-time sync" }
        ],
        qualitative: "The dual-app growth problem - where each user type needs the other to exist before they adopt - was solved through sequenced onboarding: doctors first, patients second. This network effect strategy resulted in organic patient referrals by month two, as doctors began recommending the app to their patients directly."
      }
    }
  },
  {
    id: "9",
    slug: "insurtech-premium-app",
    tags: ["Mobile App", "Operations"],
    engagement: "Project",
    metric: "10,000+",
    metricLabel: "users on custom insurance infrastructure",
    industry: "InsurTech · Financial Services",
    outcome: "Insurance Premium Management App",
    description: "Replaced an entire patchwork of manual processes with a dual-interface mobile app - agent-facing and customer-facing - serving 10,000+ users.",
    stack: ["React Native", "Node.js", "PostgreSQL", "AWS", "Firebase Push Notifications", "Admin Dashboard"],
    image: "/images/work/insurtech.png",
    details: {
      heroMetric: {
        value: "10,000+",
        label: "Users on Custom Insurance Infrastructure",
        subLabel: "Zero to Production in 6 Months."
      },
      context: {
        industry: "InsurTech / Financial Services",
        services: ["Mobile Application (Agent + Customer)"],
        duration: "Full Build",
        engagement: "Project (Full Build)",
        geography: "India"
      },
      situation: "An insurance premium business was running its entire operation on a patchwork of WhatsApp groups, Excel spreadsheets, and manual policy tracking. Agents couldn't monitor renewals efficiently, customers had no self-service portal, and the business had no data visibility into their own pipeline. Every week, renewals slipped through the cracks. The business was growing faster than its infrastructure could support - and the risk of that gap was real and growing.",
      approach: [
        {
          phase: "Phase 01",
          title: "Operations Mapping",
          description: "Spent the first two weeks mapping every workflow before writing code: policy issuance, premium tracking, renewals, agent management, customer communications. Discovered 12 manual processes that could be eliminated entirely."
        },
        {
          phase: "Phase 02",
          title: "Scalable Architecture Design",
          description: "Designed a mobile-first architecture that handled the full policy lifecycle from day one - built for 10,000+ users from the start, not something that would need to be rebuilt when the business scaled."
        },
        {
          phase: "Phase 03",
          title: "Dual Interface Build",
          description: "Built the agent-facing interface (policy management, renewal tracking, commission dashboards) and customer-facing interface (policy documents, premium history, renewal reminders) as one unified platform."
        },
        {
          phase: "Phase 04",
          title: "Phased Rollout",
          description: "Managed a phased deployment across the existing agent network - with training materials, support documentation, and a migration path from the old spreadsheet system."
        }
      ],
      results: {
        metrics: [
          { value: "10K+", label: "Users actively on the platform" },
          { value: "6mo", label: "Zero to production timeline" },
          { value: "100%", label: "Policy lifecycle digitized (end-to-end)" }
        ],
        qualitative: "The business went from spreadsheet-dependent operations to a fully digitized insurance infrastructure - handling policy issuance, premium tracking, renewals, and agent performance monitoring in one place. Renewal slip-through dropped to near zero once automated reminders went live. The operations team that previously managed this manually was redeployed to growth activities."
      }
    }
  }
];

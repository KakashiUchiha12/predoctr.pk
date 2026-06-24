// pricingPlansData.ts

export const pricingPlans = [
  {
    name: "Starter Pack",
    subtitle: "Trial Access",
    price: { monthly: "₨150", annual: "₨150" },
    duration: "Valid until MDCAT Test Day (August 16th, 2026)",
    description: "The primary trial/demo option offered to students to test the platform.",
    badge: "Trial Access",
    features: [
      "Video Lectures: Access to the first 2 chapters of all lecture-based subjects",
      "MCQs: Access to the first 2 chapters of all MCQ subjects",
      "Test Series: Access to the first 2 tests of the preDoctr.pk Full Length Test Series",
      "Board Books: Complete Board Book MCQs for the first 2 chapters",
      "Analytics: Performance tracking, dashboards, and detailed answers/explanations for the allowed chapters"
    ],
    excludedFeatures: [
      "All past papers remain locked on the Starter Pack",
      "All chapters beyond the first 2 are locked"
    ],
    buttonText: "Select package"
  },
  {
    name: "Only MCQs",
    subtitle: "Good for Practice",
    price: { monthly: "₨3500", annual: "₨3500" },
    description: "",
    badge: "Instant Access",
    features: [
      "Extensive Question Bank:",
      "Biology MCQs",
      "Physics MCQs",
      "Chemistry MCQs",
      "English MCQs",
      "Logical Reasoning MCQs",
      "Past Papers",
      "ETEA/KMU KPK",
      "UHS Punjab",
      "SZABMU Federal",
      "DOW/IBA Sindh",
      "NUMS",
      "9 Full-Length Tests (180 MCQs each)",
      "In-Depth Notes:",
      "Biology Notes",
      "Physics Notes",
      "Chemistry Notes",
      "Detailed Explanations for all MCQs"
    ],
    buttonText: "Select package"
  },
  {
    name: "Full Version",
    subtitle: "All Resources in one Package",
    price: { monthly: "₨10000", annual: "₨10000" },
    description: "",
    badge: "Instant Access",
    features: [
      "Exclusive Access to Recorded Lectures",
      "Biology - Includes expert-led lectures",
      "Physics - Access to recorded lectures",
      "Chemistry - Learn through detailed lectures",
      "Extensive Question Bank:",
      "Biology MCQs",
      "Physics MCQs",
      "Chemistry MCQs",
      "English MCQs",
      "Logical Reasoning MCQs",
      "Past Papers",
      "ETEA/KMU KPK",
      "UHS Punjab",
      "SZABMU Federal",
      "DOW/IBA Sindh",
      "NUMS",
      "9 Full-Length Tests (180 MCQs each)",
      "In-Depth Notes:",
      "Biology Notes",
      "Physics Notes",
      "Chemistry Notes",
      "Detailed Explanations for all MCQs"
    ],
    highlighted: true,
    badgeExtra: "RECOMMENDED",
    buttonText: "Select package"
  }
];

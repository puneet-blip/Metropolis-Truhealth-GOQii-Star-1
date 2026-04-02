/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Phone, 
  ChevronDown, 
  Droplets, 
  FlaskConical, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  User, 
  Apple, 
  Activity, 
  Moon, 
  Calendar, 
  Star,
  ArrowRight,
  MessageCircle,
  Menu,
  X,
  Bone,
  Heart,
  ShieldAlert,
  Smartphone,
  Download,
  LayoutGrid,
  Microscope,
  Stethoscope,
  Dna,
  Home,
  Upload,
  ShoppingCart,
  HelpCircle,
  Play,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Custom Illustrative Icons to match screenshot
const SampleIcon = ({ liquidColor }: { liquidColor: string }) => (
  <div className="relative w-12 h-12 flex-shrink-0">
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Test Tube */}
      <path d="M18 6V30C18 32.2091 19.7909 34 22 34C24.2091 34 26 32.2091 26 30V6H18Z" fill="white" stroke="#4A4A4A" strokeWidth="1.2"/>
      <path d="M18 18V30C18 32.2091 19.7909 34 22 34C24.2091 34 26 32.2091 26 30V18H18Z" fill={liquidColor} fillOpacity="0.6"/>
      <path d="M18 10H26M18 14H26" stroke="#4A4A4A" strokeWidth="1.2"/>
      
      {/* Magnifying Glass */}
      <circle cx="30" cy="30" r="10" fill="white" stroke="#4A4A4A" strokeWidth="1.2"/>
      <line x1="37" y1="37" x2="42" y2="42" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
      <text x="30" y="33" fontSize="8" fontWeight="900" textAnchor="middle" fill="#4A4A4A" fontFamily="Inter, sans-serif">A+</text>
    </svg>
  </div>
);

const SmartReportIcon = () => (
  <div className="w-12 h-12 flex-shrink-0">
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Clipboard */}
      <rect x="14" y="10" width="20" height="28" rx="2" fill="white" stroke="#4A4A4A" strokeWidth="1.2"/>
      <path d="M20 8H28" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 18H30M18 24H24" stroke="#D1D5DB" strokeWidth="1" strokeLinecap="round"/>
      
      {/* Graph inside clipboard */}
      <path d="M18 32L22 28L26 30L30 24" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Magnifying Glass */}
      <circle cx="20" cy="30" r="7" fill="white" stroke="#4A4A4A" strokeWidth="1.2"/>
      <circle cx="20" cy="30" r="5" fill="#E63946" fillOpacity="0.2"/>
      <path d="M18 30L20 28L22 30" stroke="#E63946" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="14" y1="36" x2="16" y2="34" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
);

const AccreditedIcon = () => (
  <div className="w-12 h-12 flex-shrink-0">
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Medal/Ribbon */}
      <circle cx="30" cy="20" r="10" fill="white" stroke="#4A4A4A" strokeWidth="1.2"/>
      <path d="M26 28L24 38L30 35L36 38L34 28" fill="#E63946" fillOpacity="0.4" stroke="#4A4A4A" strokeWidth="1"/>
      <path d="M30 16L31 19H34L32 21L33 24L30 22L27 24L28 21L26 19H29L30 16Z" fill="#E63946" stroke="#E63946" strokeWidth="0.5"/>
      
      {/* Shield */}
      <path d="M12 16V28C12 34 18 38 18 38C18 38 24 34 24 28V16L18 14L12 16Z" fill="white" stroke="#4A4A4A" strokeWidth="1.2"/>
      <path d="M16 26H20M18 24V28" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </div>
);

const QualityIcon = () => (
  <div className="w-12 h-12 flex-shrink-0">
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Target/Crosshair */}
      <circle cx="18" cy="24" r="12" stroke="#4A4A4A" strokeWidth="1.2"/>
      <circle cx="18" cy="24" r="6" stroke="#4A4A4A" strokeWidth="1"/>
      <line x1="18" y1="8" x2="18" y2="40" stroke="#4A4A4A" strokeWidth="1" strokeDasharray="2 2"/>
      <line x1="2" y1="24" x2="34" y2="24" stroke="#4A4A4A" strokeWidth="1" strokeDasharray="2 2"/>
      
      {/* Test Tubes */}
      <rect x="30" y="14" width="6" height="20" rx="1" fill="white" stroke="#4A4A4A" strokeWidth="1.2"/>
      <path d="M30 24H36V33C36 33.5523 35.5523 34 35 34H31C30.4477 34 30 33.5523 30 33V24Z" fill="#E63946" fillOpacity="0.6"/>
      <rect x="38" y="18" width="6" height="16" rx="1" fill="white" stroke="#4A4A4A" strokeWidth="1.2"/>
      <path d="M38 26H44V33C44 33.5523 43.5523 34 43 34H39C38.4477 34 38 33.5523 38 33V26Z" fill="#E63946" fillOpacity="0.4"/>
      <path d="M30 18H36M38 22H44" stroke="#4A4A4A" strokeWidth="1"/>
    </svg>
  </div>
);

const MicroscopeIcon = () => (
  <div className="w-10 h-10 flex-shrink-0">
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M24 10V14M24 38V34" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 38H32" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 14H28V26C28 28.2091 26.2091 30 24 30C21.7909 30 20 28.2091 20 26V14Z" fill="white" stroke="#4A4A4A" strokeWidth="1.5"/>
      <circle cx="24" cy="22" r="3" fill="#E63946"/>
    </svg>
  </div>
);

const StethoscopeIcon = () => (
  <div className="w-10 h-10 flex-shrink-0">
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M12 10V20C12 26.6274 17.3726 32 24 32C30.6274 32 36 26.6274 36 20V10" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="38" r="6" fill="white" stroke="#E63946" strokeWidth="2"/>
      <path d="M24 32V34" stroke="#4A4A4A" strokeWidth="2"/>
    </svg>
  </div>
);

const TestParameterIcon = () => (
  <div className="w-14 h-14 flex-shrink-0">
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Rack Bottom */}
      <rect x="8" y="40" width="40" height="3" rx="1" fill="#00965E"/>
      {/* Rack Top */}
      <rect x="8" y="24" width="40" height="3" rx="1" fill="#00965E"/>
      {/* Vertical Supports */}
      <rect x="12" y="24" width="2" height="16" fill="#00965E"/>
      <rect x="22" y="24" width="2" height="16" fill="#00965E"/>
      <rect x="32" y="24" width="2" height="16" fill="#00965E"/>
      <rect x="42" y="24" width="2" height="16" fill="#00965E"/>
      
      {/* Test Tube 1 */}
      <path d="M16 12V36C16 38.2091 17.7909 40 20 40C22.2091 40 24 38.2091 24 36V12H16Z" fill="white" stroke="#00965E" strokeWidth="1.5"/>
      <path d="M16 22V36C16 38.2091 17.7909 40 20 40C22.2091 40 24 38.2091 24 36V22H16Z" fill="#00B5E2"/>
      
      {/* Test Tube 2 */}
      <path d="M32 12V36C32 38.2091 33.7909 40 36 40C38.2091 40 40 38.2091 40 36V12H32Z" fill="white" stroke="#00965E" strokeWidth="1.5"/>
      <path d="M32 22V36C32 38.2091 33.7909 40 36 40C38.2091 40 40 38.2091 40 36V22H32Z" fill="#00B5E2"/>

      {/* Bubbles */}
      <circle cx="18" cy="8" r="1.5" fill="#00B5E2"/>
      <circle cx="22" cy="4" r="1" fill="#00B5E2"/>
      <circle cx="34" cy="8" r="1.5" fill="#00B5E2"/>
      <circle cx="40" cy="4" r="1" fill="#00B5E2"/>
    </svg>
  </div>
);

const ProficiencyTestingIcon = () => (
  <div className="w-16 h-16 flex-shrink-0">
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Target Rings */}
      <circle cx="32" cy="32" r="22" stroke="#4A4A4A" strokeWidth="1.5" fill="white"/>
      <circle cx="32" cy="32" r="15" stroke="#00965E" strokeWidth="4" fill="white"/>
      <circle cx="32" cy="32" r="7" stroke="#4A4A4A" strokeWidth="1.5" fill="white"/>
      <circle cx="32" cy="32" r="2" fill="#4A4A4A"/>
      
      {/* Arrow */}
      <g transform="rotate(-45 32 32)">
        <line x1="32" y1="32" x2="60" y2="32" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
        {/* Arrow Head */}
        <path d="M32 32L38 29V35L32 32Z" fill="#4A4A4A"/>
        {/* Fletching (Feathers) */}
        <path d="M54 26L60 22V42L54 38V26Z" fill="#00965E" stroke="#4A4A4A" strokeWidth="1"/>
        <line x1="56" y1="28" x2="56" y2="36" stroke="#4A4A4A" strokeWidth="1"/>
      </g>
    </svg>
  </div>
);

const ScientificOfficersIcon = () => (
  <div className="w-16 h-16 flex-shrink-0">
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Scientist Body */}
      <path d="M20 50V42C20 38.6863 22.6863 36 26 36H38C41.3137 36 44 38.6863 44 42V50" stroke="#4A4A4A" strokeWidth="1.5" fill="white"/>
      <path d="M26 36L32 44L38 36" stroke="#4A4A4A" strokeWidth="1.5" fill="white"/>
      <path d="M30 42L32 45L34 42" fill="#00965E"/>
      
      {/* Head */}
      <circle cx="32" cy="24" r="8" stroke="#4A4A4A" strokeWidth="1.5" fill="white"/>
      <path d="M28 20C28 20 30 18 32 18C34 18 36 20 36 20" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="30" cy="24" r="0.5" fill="#4A4A4A"/>
      <circle cx="34" cy="24" r="0.5" fill="#4A4A4A"/>
      <path d="M30 27C30 27 31 28 32 28C33 28 34 27 34 27" stroke="#4A4A4A" strokeWidth="1" strokeLinecap="round"/>
      
      {/* Test Tube */}
      <path d="M48 38V48C48 49.1046 48.8954 50 50 50C51.1046 50 52 49.1046 52 48V38H48Z" stroke="#4A4A4A" strokeWidth="1.2" fill="white"/>
      <path d="M48 42V48C48 49.1046 48.8954 50 50 50C51.1046 50 52 49.1046 52 48V42H48Z" fill="#00965E"/>
      <circle cx="54" cy="36" r="1" fill="#00965E"/>
      <circle cx="50" cy="32" r="0.8" fill="#00965E"/>
    </svg>
  </div>
);

const HospitalIcon = () => (
  <div className="w-16 h-16 flex-shrink-0">
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Building */}
      <rect x="20" y="20" width="24" height="32" rx="1" stroke="#4A4A4A" strokeWidth="1.5" fill="white"/>
      {/* Windows */}
      <rect x="24" y="24" width="4" height="4" rx="0.5" stroke="#4A4A4A" strokeWidth="1"/>
      <rect x="36" y="24" width="4" height="4" rx="0.5" stroke="#4A4A4A" strokeWidth="1"/>
      <rect x="24" y="32" width="4" height="4" rx="0.5" stroke="#4A4A4A" strokeWidth="1"/>
      <rect x="36" y="32" width="4" height="4" rx="0.5" stroke="#4A4A4A" strokeWidth="1"/>
      <rect x="24" y="40" width="4" height="4" rx="0.5" stroke="#4A4A4A" strokeWidth="1"/>
      <rect x="36" y="40" width="4" height="4" rx="0.5" stroke="#4A4A4A" strokeWidth="1"/>
      
      {/* Door */}
      <rect x="30" y="46" width="4" height="6" fill="#00965E" stroke="#4A4A4A" strokeWidth="1"/>
      
      {/* Green Cross Badge */}
      <circle cx="32" cy="14" r="8" fill="#00965E" stroke="#4A4A4A" strokeWidth="1.5"/>
      <path d="M29 14H35M32 11V17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
);

const AdvancedLabsIcon = () => (
  <div className="w-16 h-16 flex-shrink-0">
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Microscope */}
      <path d="M24 48H44" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 48V44C34 44 34 38 40 38C46 38 46 32 46 32V20" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <rect x="38" y="16" width="12" height="4" rx="1" transform="rotate(-30 38 16)" stroke="#4A4A4A" strokeWidth="1.5" fill="white"/>
      <rect x="32" y="24" width="16" height="6" rx="1" transform="rotate(-30 32 24)" stroke="#4A4A4A" strokeWidth="1.5" fill="white"/>
      <rect x="30" y="38" width="10" height="2" stroke="#4A4A4A" strokeWidth="1.5" fill="white"/>
      
      {/* DNA Helix */}
      <path d="M14 20C14 20 18 24 14 28C10 32 14 36 14 36" stroke="#00965E" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 20C18 20 14 24 18 28C22 32 18 36 18 36" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="22" x2="18" y2="22" stroke="#4A4A4A" strokeWidth="1"/>
      <line x1="14" y1="28" x2="18" y2="28" stroke="#00965E" strokeWidth="1"/>
      <line x1="14" y1="34" x2="18" y2="34" stroke="#4A4A4A" strokeWidth="1"/>
    </svg>
  </div>
);

const TEST_INCLUSIONS = [
  "Lipid Profile (8 Tests)",
  "Liver Function Test (11 Tests)",
  "Kidney Function Test (10 Tests)",
  "Thyroid Profile (3 Tests)",
  "Diabetes Screen (HbA1c & Blood Sugar)",
  "Complete Blood Count (CBC - 24 Tests)",
  "Vitamin D & Vitamin B12",
  "Iron Profile",
  "Urine Routine & Microscopy"
];

const TEST_CATEGORIES = [
  { 
    icon: <TestParameterIcon />, 
    name: "Anaemia and Thalassaemia", 
    count: 10,
    subTests: [
      { name: "CBC Haemogram, EDTA Blood", count: 9 },
      { name: "Vitamin B12 (Cyanocobalamin) Test", count: 1 }
    ]
  },
  { 
    icon: <TestParameterIcon />, 
    name: "Bone", 
    count: 3,
    subTests: [
      { name: "Vitamin D Test (25-Hydroxy)", count: 1 },
      { name: "Calcium Test", count: 1 },
      { name: "Phosphorus-Inorganic, Serum", count: 1 }
    ]
  },
  { 
    icon: <TestParameterIcon />, 
    name: "Kidney", 
    count: 10,
    subTests: [
      { name: "Creatinine Test, Serum", count: 1 },
      { name: "Uric Acid Test, Serum", count: 1 },
      { name: "Routine Examination Profile - Urine", count: 8 }
    ]
  },
  { 
    icon: <TestParameterIcon />, 
    name: "Diabetes", 
    count: 2,
    subTests: [
      { name: "HbA1c- Glycated Haemoglobin", count: 1 },
      { name: "Fasting Blood Sugar (FBS) Test", count: 1 }
    ]
  },
  { 
    icon: <TestParameterIcon />, 
    name: "Thyroid", 
    count: 3,
    subTests: [
      { name: "Total Triiodothyronine (T3)", count: 1 },
      { name: "Total Thyroxine (T4)", count: 1 },
      { name: "Thyroid Stimulating Hormone (TSH)", count: 1 }
    ]
  },
  { 
    icon: <TestParameterIcon />, 
    name: "Infection", 
    count: 1,
    subTests: [
      { name: "C-Reactive Protein (CRP)", count: 1 }
    ]
  },
  { 
    icon: <TestParameterIcon />, 
    name: "Heart", 
    count: 8,
    subTests: [
      { name: "Lipid Profile", count: 8 }
    ]
  },
  { 
    icon: <TestParameterIcon />, 
    name: "Body Vitals", 
    count: 5,
    subTests: [
      { name: "Blood Pressure", count: 1 },
      { name: "BMI", count: 1 },
      { name: "Heart Rate", count: 1 },
      { name: "SPO2", count: 1 },
      { name: "Temperature", count: 1 }
    ]
  },
  { 
    icon: <TestParameterIcon />, 
    name: "Liver", 
    count: 7,
    subTests: [
      { name: "Liver Function Test (LFT)", count: 7 }
    ]
  },
];

const FAQS = [
  {
    question: "How long does it take to get the reports?",
    answer: "Reports are usually delivered within 24-48 hours after sample collection."
  },
  {
    question: "Is fasting required for this package?",
    answer: "Yes, 10-12 hours of overnight fasting is required for accurate results."
  },
  {
    question: "What is included in the GOQii coaching?",
    answer: "You get a dedicated personal coach, personalized nutrition plans, activity tracking, and access to the GOQii app ecosystem for 6 months."
  }
];

const REVIEWS = [
  {
    name: "Rahul Sharma",
    rating: 5,
    comment: "The home collection was very smooth. The smart report is really helpful to understand trends.",
    date: "2 days ago"
  },
  {
    name: "Priya Patel",
    rating: 5,
    comment: "GOQii coaching is a game changer. My coach is very supportive and helps me stay on track.",
    date: "1 week ago"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('details');
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 180; // Header + Nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Top Utility Bar */}
      <div className="bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-[11px] font-medium text-gray-600">
          <div className="flex gap-6">
            <a href="#" className="hover:text-metropolis-green">About</a>
            <a href="#" className="hover:text-metropolis-green">Doctors</a>
            <a href="#" className="hover:text-metropolis-green">Partners</a>
            <a href="#" className="hover:text-metropolis-green">Corporate</a>
            <a href="#" className="hover:text-metropolis-green">Careers</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-metropolis-green">Truhealth Blog</a>
            <a href="#" className="hover:text-metropolis-green">Find Nearby Centers</a>
          </div>
        </div>
      </div>

      {/* Main Header (Green) */}
      <header className="bg-metropolis-green text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black tracking-tight flex items-center">
                METR
                <span className="relative inline-flex items-center justify-center w-6 h-6 mx-0.5">
                  <span className="absolute inset-0 border-[3px] border-white rounded-full"></span>
                  <span className="w-2.5 h-2.5 bg-[#90C641] rounded-full"></span>
                </span>
                POLIS
              </span>
            </div>

            {/* City Selector */}
            <button className="hidden lg:flex items-center gap-2 bg-[#008554] hover:bg-[#007A4D] px-4 py-2 rounded-lg text-sm font-bold transition-all ml-4">
              Mumbai
              <ChevronDown size={16} />
            </button>

            {/* Search Bar */}
            <div className="flex-1 max-w-md hidden md:block mx-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search for Tests, Health Checkups" 
                  className="w-full bg-white text-gray-400 rounded-md py-2.5 px-4 text-sm focus:outline-none placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Contact Info & Apps */}
            <div className="hidden xl:flex items-center gap-6">
              {/* Customer Care */}
              <div className="flex items-center gap-2">
                <div className="text-white">
                  <MessageCircle size={24} fill="white" className="text-metropolis-green" />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] font-bold">Customer Care</div>
                  <div className="text-[13px] font-black">8422-801-801</div>
                </div>
              </div>

              {/* Home Visit Booking */}
              <div className="flex items-center gap-2">
                <div className="text-white">
                  <Phone size={24} />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] font-bold">Home Visit Booking</div>
                  <div className="text-[13px] font-black">9982-782-555</div>
                </div>
              </div>

              {/* Help & Support */}
              <div className="flex items-center gap-1 text-[13px] font-bold cursor-pointer hover:opacity-80">
                <HelpCircle size={18} />
                Help & Support
                <ChevronDown size={14} />
              </div>

              {/* App Icons */}
              <div className="flex items-center gap-2 ml-2">
                <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center cursor-pointer hover:bg-white/20">
                  <Play size={12} fill="white" />
                </div>
                <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center cursor-pointer hover:bg-white/20">
                  <Apple size={12} fill="white" />
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <button className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Secondary Navigation (White) */}
      <nav className="bg-white border-b border-gray-100 sticky top-[68px] z-40 overflow-x-auto whitespace-nowrap scrollbar-hide shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14 gap-5 text-[12px] font-bold text-gray-800">
            {[
              { label: "Health Risks", hasDropdown: true },
              { label: "Health Conditions", hasDropdown: true },
              { label: "Blood Tests", hasDropdown: true },
              { label: "Truhealth Packages", hasDropdown: true },
              { label: "Specialty", hasDropdown: true },
              { label: "Genomics", hasDropdown: true },
            ].map((item, idx) => (
              <a key={idx} href="#" className="flex items-center gap-1 hover:text-metropolis-green transition-colors">
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className="text-gray-600" />}
              </a>
            ))}

            <div className="h-6 w-[1px] bg-gray-100 mx-1"></div>

            <a href="#" className="flex items-center gap-1.5 hover:text-metropolis-green">
              <div className="text-metropolis-green"><Home size={16} /></div>
              Home Visit
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-metropolis-green">
              <div className="text-metropolis-green"><FileText size={16} /></div>
              Upload
            </a>
            
            <div className="flex-1"></div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center gap-2 hover:text-metropolis-green">
                <MapPin size={16} className="text-gray-400" />
                Sample Tracking
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-metropolis-green">
                <Download size={16} className="text-gray-400" />
                Download Report
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-metropolis-green">
                <User size={16} className="text-gray-400" />
                Login
              </a>
              <div className="relative bg-metropolis-green text-white p-2.5 rounded-lg cursor-pointer hover:bg-[#007A4D] transition-colors">
                <ShoppingCart size={20} />
                <span className="absolute -top-1.5 -right-1.5 bg-cyan-400 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">0</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 text-[11px] text-gray-500">
          <a href="#" className="hover:text-metropolis-green">Home</a>
          <span>&gt;</span>
          <a href="#" className="hover:text-metropolis-green">Health Package</a>
          <span>&gt;</span>
          <span className="text-gray-900 font-medium">Health Check Up</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Panel - Navigation */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-[140px] space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {[
                  { id: 'details', label: 'Package Details' },
                  { id: 'overview', label: 'Package Overview' },
                  { id: 'parameters', label: 'Test Parameters' },
                  { id: 'goqii', label: 'GOQii Coaching' },
                  { id: 'why-metropolis', label: 'Why Metropolis?' },
                  { id: 'faqs', label: "FAQ's" },
                  { id: 'reviews', label: 'Reviews' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-6 py-4 text-sm font-bold transition-all border-b border-gray-50 last:border-0 flex items-center justify-between ${
                      activeSection === item.id 
                      ? 'text-metropolis-green bg-gray-50' 
                      : 'text-gray-400 hover:text-metropolis-green hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && <ArrowRight size={16} className="text-metropolis-green" />}
                  </button>
                ))}
              </div>

              {/* Banner Image */}
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <img 
                  src="https://picsum.photos/seed/metropolis-home/400/300" 
                  alt="Care Comes Home" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-metropolis-green p-4 text-white">
                  <div className="text-[14px] font-black mb-1">Why step out when our</div>
                  <div className="text-[18px] font-black mb-3">#CareComesHome</div>
                  <div className="text-[11px] font-medium opacity-90 mb-4">Book a home visit for blood collection done by experts</div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"><FlaskConical size={12} /></div>
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"><ShieldCheck size={12} /></div>
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"><CheckCircle2 size={12} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Center Panel - Core Content */}
          <div className="lg:col-span-6 space-y-8">
            {/* Package Title Section */}
            <section id="details" className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-10">
                  <h1 className="text-3xl md:text-[32px] font-extrabold text-gray-900 leading-[1.1] max-w-2xl tracking-tight">
                    Truhealth GOQii Star -1
                  </h1>
                  <div className="text-[12px] font-bold text-gray-600 text-right mt-2">
                    <div className="text-gray-900">52+ booked</div>
                    <div>in last 3 days</div>
                  </div>
                </div>

                {/* Sample Types */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-4 border border-cyan-200 bg-white p-4 rounded-xl min-w-[220px]">
                    <SampleIcon liquidColor="#E63946" />
                    <div>
                      <div className="text-[13px] text-gray-700 font-medium">Sample Type</div>
                      <div className="text-lg font-black text-gray-900">Blood</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 border border-pink-200 bg-white p-4 rounded-xl min-w-[220px]">
                    <SampleIcon liquidColor="#E63946" />
                    <div>
                      <div className="text-[13px] text-gray-700 font-medium">Sample Type</div>
                      <div className="text-lg font-black text-gray-900">Urine</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signals Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <SmartReportIcon />
                  <div className="text-[13px] font-black text-gray-800 leading-tight">
                    Smart Report with Trend Analysis
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <AccreditedIcon />
                  <div className="text-[13px] font-black text-gray-800 leading-tight">
                    NABL & CAP Accredited Labs
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                  <QualityIcon />
                  <div className="text-[13px] font-black text-gray-800 leading-tight">
                    Accurate & Quality Test Reports
                  </div>
                </div>
              </div>
            </section>

            {/* Package Overview */}
            <section id="overview" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black mb-6 flex items-center gap-2">
                Package Overview
              </h2>
              <div className={`text-sm text-gray-600 leading-relaxed space-y-4 font-medium overflow-hidden transition-all duration-500 ${isOverviewExpanded ? 'max-h-[1000px]' : 'max-h-[120px]'}`}>
                <p>
                  Truhealth GOQii Star -1 is a focused health checkup designed for individuals who want a quick yet effective assessment of their core health parameters. This package combines essential diagnostic tests with professional medical consultation.
                </p>
                <p>
                  The addition of GOQii coaching makes this a holistic wellness journey, moving beyond just diagnostics to active lifestyle management and habit building.
                </p>
                <p>
                  Metropolis Healthcare is India's leading diagnostic company with a presence across India, South Asia, Africa and the Middle East. Over the years, Metropolis has been at the forefront of providing quality diagnostic services and has been a trusted partner for millions of patients and doctors.
                </p>
              </div>
              <button 
                onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                className="mt-4 text-metropolis-green font-bold text-sm flex items-center gap-1 hover:underline"
              >
                {isOverviewExpanded ? 'Read Less' : 'Read More'}
              </button>
            </section>

            {/* Test Parameters Section */}
            <section id="parameters" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-[28px] font-black text-gray-900">
                  49 Test parameter
                </h2>
                <div className="text-right">
                  <div className="text-[14px] font-bold text-gray-600">9 Profile | 49 Parameters</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {TEST_CATEGORIES.map((category, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#F8F9FA] rounded-xl border border-transparent transition-all hover:shadow-sm overflow-hidden"
                  >
                    <button 
                      onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
                      className="w-full flex items-center gap-6 p-6 text-left group"
                    >
                      <div className="group-hover:scale-105 transition-transform">
                        {category.icon}
                      </div>
                      <div className="flex flex-wrap items-baseline gap-2 flex-1">
                        <div className="font-black text-gray-900 text-[18px] leading-tight">{category.name}</div>
                        <div className="text-[14px] text-gray-600 font-bold">({category.count} Parameters)</div>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-gray-400 transition-transform ${expandedCategory === idx ? 'rotate-180' : ''}`} 
                      />
                    </button>

                    <AnimatePresence>
                      {expandedCategory === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="px-6 pb-6 space-y-4"
                        >
                          {category.subTests?.map((test, sIdx) => (
                            <div key={sIdx} className="border-b border-metropolis-green pb-1 last:border-0">
                              <div className="text-[14px] font-medium text-gray-800 leading-tight">
                                {test.name} 
                                <span className="text-[11px] text-gray-500 font-normal ml-1">
                                  ({test.count} {test.count === 1 ? 'Parameter' : 'Parameters'})
                                </span>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>

            {/* GOQii Coaching Section */}
            <section id="goqii" className="bg-gradient-to-br from-metropolis-green to-[#007A4D] rounded-2xl p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-white text-metropolis-green px-4 py-1 rounded-lg font-black text-2xl italic">GOQii</div>
                  <div className="h-8 w-px bg-white/30"></div>
                  <div className="text-xl font-black tracking-tight">6-MONTH COACHING</div>
                </div>
                
                <div className="mb-10">
                  <p className="text-lg font-medium leading-relaxed opacity-90">
                    This package includes a 6-month coaching subscription from GOQii. Once your Metropolis test results are ready, a certified health and lifestyle coach will work with you 1-on-1 to turn your clinical data into actionable health goals.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { 
                      icon: <TrendingUp />, 
                      title: "Report Analysis & Interpretation", 
                      desc: "Deep dive into your blood reports to explain complex markers like Cholesterol, HbA1c, and Vitamin levels in simple terms." 
                    },
                    { 
                      icon: <Apple />, 
                      title: "Personalized Diet & Nutrition Plan", 
                      desc: "Custom nutrition planning tailored to your test deficiencies, specific health goals, and local food preferences." 
                    },
                    { 
                      icon: <Activity />, 
                      title: "Habit & Fitness Setup", 
                      desc: "Creation of achievable daily targets for steps, water intake, sleep cycles, and physical activity via the GOQii App." 
                    },
                    { 
                      icon: <Phone />, 
                      title: "Continuous Support & Accountability", 
                      desc: "Regular check-ins via chat or call to monitor your progress, tweak your plans, and keep you motivated on your health journey." 
                    }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-5 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10"
                    >
                      <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-black text-base mb-1">{item.title}</div>
                        <div className="text-[12px] text-white/80 font-medium leading-relaxed">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            </section>

            {/* Why Metropolis? Section */}
            <section id="why-metropolis" className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-8">Why Metropolis?</h2>
              
              <div className="space-y-6 text-gray-600 font-medium leading-relaxed mb-12">
                <p>
                  Metropolis has a team of 200 senior pathologists and over 2000 technicians delivering diagnostic solutions in the areas of routine, semi specialty and super specialty domains like Oncology, Neurology, Gynaecology, Nephrology and many more.
                </p>
                <p>
                  We offer a comprehensive range of 4000+ clinical laboratory tests and profiles, which are used for prediction, early detection, diagnostic screening, confirmation and/or monitoring of the disease.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: <AdvancedLabsIcon />, label: "170+ Advanced Labs" },
                  { icon: <HospitalIcon />, label: "Trusted by Leading Doctors & Hospitals" },
                  { icon: <ScientificOfficersIcon />, label: "Over 2000+ Scientific Officers" },
                  { icon: <ProficiencyTestingIcon />, label: "Proficiency Testing for Accurate Reports" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center space-y-4">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-inner">
                      {item.icon}
                    </div>
                    <div className="text-[13px] font-black text-gray-800 leading-tight max-w-[140px]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Panel - Sticky CTA Box */}
          <aside className="lg:col-span-3">
            <div className="sticky top-[140px] space-y-6">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="p-8 space-y-6">
                  <h3 className="text-lg font-black text-gray-900 leading-tight text-center">
                    Truhealth GOQii Star -1
                  </h3>
                  
                  <div className="text-4xl font-black text-gray-900 text-center">
                    ₹ 4000
                  </div>

                  <button className="w-full bg-metropolis-green hover:bg-[#007A4D] text-white font-black py-4 rounded-lg transition-all shadow-lg shadow-green-100 text-sm uppercase tracking-wider">
                    Add to cart
                  </button>
                </div>
                
                <button className="w-full bg-metropolis-light-yellow hover:bg-metropolis-yellow text-gray-900 font-black py-4 text-sm transition-all">
                  Book a Home Visit Now
                </button>
                
                <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
                  <p className="text-[11px] font-bold text-gray-600 leading-relaxed text-center">
                    Book any blood test or health checkup and get tested at the comfort of your home.
                  </p>
                  <button className="w-full bg-metropolis-green hover:bg-[#007A4D] text-white font-black py-3 rounded-lg text-xs transition-all">
                    Get Instant Call Back
                  </button>
                </div>
              </div>

              {/* Related Packages */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-metropolis-light-yellow p-4">
                  <h4 className="text-sm font-black text-gray-900">More Related Packages</h4>
                </div>
                <div className="divide-y divide-gray-50">
                  {[
                    { name: "TruHealth Plus", price: "5000" },
                    { name: "TruHealth Youth", price: "1000" },
                    { name: "TruHealth Master", price: "1450" },
                    { name: "TruHealth Senior", price: "2400" },
                    { name: "TruHealth Women", price: "1000" }
                  ].map((pkg, idx) => (
                    <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="text-[13px] font-bold text-gray-800">{pkg.name}</div>
                      <div className="flex items-center gap-3">
                        <div className="text-[13px] font-black text-gray-900">₹{pkg.price}</div>
                        <div className="p-1.5 bg-cyan-50 text-cyan-500 rounded-full border border-cyan-100">
                          <ShoppingCart size={14} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Bubble Placeholder */}
              <div className="flex justify-end pr-4">
                <div className="bg-[#90C641] text-white p-4 rounded-full shadow-xl cursor-pointer hover:scale-110 transition-transform flex items-center gap-2">
                  <div className="text-[10px] font-black leading-tight text-right hidden xl:block">Talk to<br/>MetBuddy</div>
                  <MessageCircle size={28} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Floating CTA Bar (Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 bg-metropolis-green text-white z-[60] py-4 px-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-lg font-black tracking-tight">Do you have any queries?</div>
          
          <div className="flex items-center gap-4">
            <button className="bg-metropolis-yellow hover:bg-metropolis-light-yellow text-gray-900 font-black px-8 py-3 rounded-lg transition-all text-sm uppercase">
              Get a call back now!
            </button>
            <div className="text-sm font-bold flex items-center gap-2">
              or Call us now at
              <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-black">9982-782-555</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Spacer */}
      <div className="h-32"></div>
    </div>
  );
}

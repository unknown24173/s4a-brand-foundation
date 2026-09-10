export const serviceCategories = [
  "Engine & Transmission",
  "Electrical & Diagnostics",
  "AC & Cooling",
  "Brakes",
  "Suspension & Steering",
  "Tyres & Wheels",
  "Oil & Maintenance",
  "Vehicle Inspection",
  "Body & General Repairs",
  "Other Automotive Services",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export type Service = {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
};

export const services: Service[] = [
  { id: "engine-diagnosis", name: "Engine fault diagnosis", category: "Engine & Transmission", description: "We trace knocking, misfiring, overheating or loss of power to its actual cause before any part is touched." },
  { id: "engine-overhaul", name: "Engine overhaul & rebuild", category: "Engine & Transmission", description: "Full strip-down, measurement and rebuild for engines that need more than a routine repair." },
  { id: "gearbox-service", name: "Gearbox & transmission service", category: "Engine & Transmission", description: "Fluid service, adjustment and repair for automatic and manual transmissions that slip, jerk or delay." },
  { id: "clutch-repair", name: "Clutch repair & replacement", category: "Engine & Transmission", description: "Clutch plate, pressure plate and release bearing work for heavy or slipping pedals." },
  { id: "timing-belt", name: "Timing belt & chain service", category: "Engine & Transmission", description: "Scheduled belt or chain replacement to protect the engine from expensive failure." },

  { id: "computer-diagnostics", name: "Computer scan & diagnostics", category: "Electrical & Diagnostics", description: "Full scan of engine and body modules with a plain explanation of every code we find." },
  { id: "battery-charging", name: "Battery & charging system", category: "Electrical & Diagnostics", description: "Battery, alternator and starter testing for cars that crank slowly or refuse to start." },
  { id: "wiring-repair", name: "Auto electrical & wiring repair", category: "Electrical & Diagnostics", description: "Tracing shorts, drains and damaged harnesses instead of guessing at replacements." },
  { id: "lighting", name: "Lights & sensor repair", category: "Electrical & Diagnostics", description: "Headlamps, indicators, reverse sensors, cameras and dashboard warning issues." },

  { id: "ac-service", name: "Air conditioning service", category: "AC & Cooling", description: "Gas recharge, leak testing and cabin filter service to bring cooling back to full strength." },
  { id: "ac-compressor", name: "AC compressor repair", category: "AC & Cooling", description: "Compressor, condenser and blower repairs for AC that blows warm or cuts in and out." },
  { id: "radiator-cooling", name: "Radiator & cooling system", category: "AC & Cooling", description: "Radiator, water pump, thermostat and hose work to stop overheating for good." },

  { id: "brake-pads", name: "Brake pad & disc replacement", category: "Brakes", description: "Pads, discs and drums replaced with the correct fit for your vehicle, then road tested." },
  { id: "brake-hydraulics", name: "Brake hydraulics & bleeding", category: "Brakes", description: "Master cylinder, caliper and brake line work for a soft, sinking or unpredictable pedal." },
  { id: "abs-repair", name: "ABS fault repair", category: "Brakes", description: "Diagnosis and repair of ABS sensor and module faults that leave the warning light on." },

  { id: "suspension-repair", name: "Suspension repair", category: "Suspension & Steering", description: "Shocks, bushes, arms and links for knocking noises and an unsettled ride." },
  { id: "steering-repair", name: "Steering system repair", category: "Suspension & Steering", description: "Rack, pump and column work for heavy, noisy or loose steering." },
  { id: "alignment", name: "Wheel alignment", category: "Suspension & Steering", description: "Alignment correction so the car tracks straight and your tyres stop wearing unevenly." },

  { id: "tyre-replacement", name: "Tyre replacement & fitting", category: "Tyres & Wheels", description: "Tyre supply, fitting and disposal with correct pressures set before you leave." },
  { id: "wheel-balancing", name: "Wheel balancing & rotation", category: "Tyres & Wheels", description: "Balancing and rotation to remove vibration and even out tyre life." },
  { id: "rim-repair", name: "Rim & wheel repair", category: "Tyres & Wheels", description: "Attention for buckled, leaking or damaged rims after pothole and kerb damage." },

  { id: "oil-change", name: "Oil & filter change", category: "Oil & Maintenance", description: "Correct grade engine oil with a new filter, plus a quick under-bonnet check." },
  { id: "full-service", name: "Full maintenance service", category: "Oil & Maintenance", description: "Scheduled service covering fluids, filters, belts, brakes and a road test." },
  { id: "fluid-top-up", name: "Fluid checks & top-up", category: "Oil & Maintenance", description: "Brake, coolant, steering and transmission fluid checked, corrected and reported." },
  { id: "filter-service", name: "Air & cabin filter service", category: "Oil & Maintenance", description: "Air, fuel and cabin filter replacement to protect the engine and the air you breathe." },

  { id: "pre-purchase", name: "Pre-purchase inspection", category: "Vehicle Inspection", description: "An honest inspection report before you pay for a used vehicle." },
  { id: "health-check", name: "Vehicle health check", category: "Vehicle Inspection", description: "A structured check of the whole car with a written list of what needs attention and when." },
  { id: "trip-check", name: "Long-trip readiness check", category: "Vehicle Inspection", description: "Tyres, brakes, cooling, lights and fluids checked before a long journey." },

  { id: "body-repair", name: "Body repair & panel work", category: "Body & General Repairs", description: "Dent, panel and bumper repair to bring the bodywork back to shape." },
  { id: "spraying", name: "Spraying & touch-up", category: "Body & General Repairs", description: "Colour-matched spraying and touch-up for scratched or repaired panels." },
  { id: "welding", name: "Welding & fabrication", category: "Body & General Repairs", description: "Welding for chassis, exhaust and mounting repairs done safely and neatly." },
  { id: "exhaust-repair", name: "Exhaust system repair", category: "Body & General Repairs", description: "Silencer, pipe and mounting repairs for loud, rattling or blowing exhausts." },

  { id: "recovery-advice", name: "Breakdown guidance", category: "Other Automotive Services", description: "Talk through a roadside problem with us so your next step is the right one." },
  { id: "maintenance-plan", name: "Maintenance planning", category: "Other Automotive Services", description: "A simple service schedule built around your vehicle and how you actually use it." },
  { id: "parts-advice", name: "Parts sourcing advice", category: "Other Automotive Services", description: "Guidance on which parts fit and what quality level makes sense for your budget." },
  { id: "other", name: "Something else", category: "Other Automotive Services", description: "Not sure which service you need? Describe the problem and we will place it correctly." },
];

export const bookingSteps = [
  { title: "Choose your service", text: "Pick the repair or maintenance work you need from the S4A catalogue." },
  { title: "Tell us the vehicle", text: "Make, model, year and registration so we prepare the right way." },
  { title: "Pick a date", text: "Choose a day that suits you within our opening days." },
  { title: "Pick a time slot", text: "Select from the slots still open on that day." },
  { title: "Describe the issue", text: "Explain what you notice and attach photos or a short video." },
  { title: "Review the request", text: "Check every detail on one screen before you send it." },
  { title: "Get confirmation", text: "Receive a reference you can quote when you speak to us." },
];

export const whyChooseS4A = [
  { title: "Diagnosis before spending", text: "We find the cause first, so you are not paying for parts your car did not need." },
  { title: "Plain explanations", text: "You hear what is wrong, what it takes to fix, and what can safely wait." },
  { title: "Careful workmanship", text: "Repairs are done properly and road tested before the vehicle is handed back." },
  { title: "Available every day", text: "The workshop is open every day, 8:00 AM – 7:00 PM." },
  { title: "Guidance beyond the bay", text: "S4A Consult keeps you supported between visits." },
  { title: "Training the next hands", text: "Our IT/SIWES placements keep real skill moving forward." },
];

export const maintenanceReminders = [
  { title: "Engine oil", text: "Check the level monthly and change it on schedule, not when the engine complains." },
  { title: "Tyres", text: "Set pressures weekly and watch for uneven wear across the tread." },
  { title: "Brakes", text: "Report any squeal, vibration or longer stopping distance immediately." },
  { title: "Cooling", text: "Keep coolant at level and never open a hot system." },
  { title: "Battery", text: "Clean terminals and test the battery before it strands you." },
  { title: "Lights", text: "Walk around the car monthly and confirm every lamp still works." },
];

module.exports = {

"[project]/actions/user.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// "use server";
// import { db } from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";
// import { revalidatePath } from "next/cache";
// import { generateAIInsights } from "./dashboard";
// export async function updateUser(data) {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");
//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });
//   if (!user) throw new Error("User not found");
//   try {
//     // Start a transaction to handle both operations
//     const result = await db.$transaction(
//       async (tx) => {
//         // First check if industry exists
//         let industryInsight = await tx.industryInsight.findUnique({
//           where: {
//             industry: data.industry,
//           },
//         });
//         // If industry doesn't exist, create it with default values
//         if (!industryInsight) {
//           const insights = await generateAIInsights(data.industry);
//           industryInsight = await db.industryInsight.create({
//             data: {
//               industry: data.industry,
//               ...insights,
//               nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//             },
//           });
//         }
//         // Now update the user
//         const updatedUser = await tx.user.update({
//           where: {
//             id: user.id,
//           },
//           data: {
//             industry: data.industry,
//             experience: data.experience,
//             bio: data.bio,
//             skills: data.skills,
//           },
//         });
//         return { updatedUser, industryInsight };
//       },
//       {
//         timeout: 10000, // default: 5000
//       }
//     );
//     revalidatePath("/");
//     return result.user;
//   } catch (error) {
//     console.error("Error updating user and industry:", error.message);
//     throw new Error("Failed to update profile");
//   }
// }
// export async function getUserOnboardingStatus() {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");
//   const user = await db.user.findUnique({
//     where: { clerkUserId: userId },
//   });
//   if (!user) throw new Error("User not found");
//   try {
//     const user = await db.user.findUnique({
//       where: {
//         clerkUserId: userId,
//       },
//       select: {
//         industry: true,
//       },
//     });
//     return {
//       isOnboarded: !!user?.industry,
//     };
//   } catch (error) {
//     console.error("Error checking onboarding status:", error);
//     throw new Error("Failed to check onboarding status");
//   }
// }
/* __next_internal_action_entry_do_not_use__ {"7f98b164aa30f4b11efd933de17be2aa30730a3054":"onboardUser","7f9b019ab6502fe79f18f2f68af014b11cb96f5c27":"updateUser","7fd02c890e4269fce3e4727c53d5ef300961430ad3":"getUserDetails"} */ __turbopack_context__.s({
    "getUserDetails": (()=>getUserDetails),
    "onboardUser": (()=>onboardUser),
    "updateUser": (()=>updateUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/index.js [app-rsc] (ecmascript) <exports>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
(()=>{
    const e = new Error("Cannot find module '@/data/user'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/schemas'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/lib/api'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/lib/stripe'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/lib/create-audit-log'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ onboardUser = async (values)=>{
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["auth"])();
    if (!userId) return;
    const existingUser = await checkUserExists(userId);
    if (existingUser) return;
    await createUser(userId, values);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/dashboard");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard");
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateUser = async (values)=>{
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["auth"])();
    if (!userId) throw new Error("Unauthorized");
    const dbUser = await getUserById(userId);
    if (!dbUser) throw new Error("User not found");
    const validatedFields = updateUserSchema.safeParse(values);
    if (!validatedFields.success) throw new Error("Invalid fields");
    const { name, avatar, title, industry } = validatedFields.data;
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].$transaction(async (tx)=>{
            await tx.user.update({
                where: {
                    id: dbUser.id
                },
                data: {
                    name,
                    avatar,
                    title,
                    industry
                }
            });
            const insights = await fetchIndustryInsights(industry);
            let industryInsight = await tx.industryInsight.findUnique({
                where: {
                    industry
                }
            });
            const demandLevelKey = insights.demandLevel?.toLowerCase();
            const marketOutlookKey = insights.marketOutlook?.toLowerCase();
            const demandLevelEnum = (()=>{
                switch(demandLevelKey){
                    case "high":
                        return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DemandLevel"].High;
                    case "medium":
                        return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DemandLevel"].Medium;
                    case "low":
                        return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DemandLevel"].Low;
                    default:
                        return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["DemandLevel"].Medium;
                }
            })();
            const marketOutlookEnum = (()=>{
                switch(marketOutlookKey){
                    case "positive":
                        return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MarketOutlook"].Positive;
                    case "neutral":
                        return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MarketOutlook"].Neutral;
                    case "negative":
                        return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MarketOutlook"].Negative;
                    default:
                        return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["MarketOutlook"].Neutral;
                }
            })();
            if (!industryInsight) {
                industryInsight = await tx.industryInsight.create({
                    data: {
                        industry: data.industry,
                        salaryRanges: insights.salaryRanges,
                        growthRate: insights.growthRate,
                        demandLevel: demandLevelEnum,
                        topSkills: insights.topSkills,
                        marketOutlook: marketOutlookEnum,
                        keyTrends: insights.keyTrends,
                        recommendedSkills: insights.recommendedSkills,
                        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    }
                });
            }
            await tx.user.update({
                where: {
                    id: dbUser.id
                },
                data: {
                    industryInsightId: industryInsight.id
                }
            });
            await createAuditLog({
                entityTitle: `${name}'s Profile`,
                entityId: dbUser.id,
                entityType: "USER",
                action: "UPDATE"
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/profile");
    } catch (error) {
        console.error("Error updating user and industry:", error.message);
        throw new Error("Failed to update profile");
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getUserDetails = async ()=>{
    const { userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["auth"])();
    if (!userId) throw new Error("Unauthorized");
    const dbUser = await getUserById(userId);
    if (!dbUser) throw new Error("User not found");
    const subscriptionPlan = await getUserSubscriptionPlan();
    return {
        ...dbUser,
        subscriptionPlan
    };
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    onboardUser,
    updateUser,
    getUserDetails
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(onboardUser, "7f98b164aa30f4b11efd933de17be2aa30730a3054", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUser, "7f9b019ab6502fe79f18f2f68af014b11cb96f5c27", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserDetails, "7fd02c890e4269fce3e4727c53d5ef300961430ad3", null);
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/(main)/layout.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/layout.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/data/industries.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "industries": (()=>industries)
});
const industries = [
    {
        id: "tech",
        name: "Technology",
        subIndustries: [
            "Software Development",
            "IT Services",
            "Cybersecurity",
            "Cloud Computing",
            "Artificial Intelligence/Machine Learning",
            "Data Science & Analytics",
            "Internet & Web Services",
            "Robotics",
            "Quantum Computing",
            "Blockchain & Cryptocurrency",
            "IoT (Internet of Things)",
            "Virtual/Augmented Reality",
            "Semiconductor & Electronics"
        ]
    },
    {
        id: "finance",
        name: "Financial Services",
        subIndustries: [
            "Banking",
            "Investment Banking",
            "Insurance",
            "FinTech",
            "Wealth Management",
            "Asset Management",
            "Real Estate Investment",
            "Private Equity",
            "Venture Capital",
            "Cryptocurrency & Digital Assets",
            "Risk Management",
            "Payment Processing",
            "Credit Services"
        ]
    },
    {
        id: "healthcare",
        name: "Healthcare & Life Sciences",
        subIndustries: [
            "Healthcare Services",
            "Biotechnology",
            "Pharmaceuticals",
            "Medical Devices",
            "Healthcare IT",
            "Telemedicine",
            "Mental Health Services",
            "Genomics",
            "Clinical Research",
            "Healthcare Analytics",
            "Elder Care Services",
            "Veterinary Services",
            "Alternative Medicine"
        ]
    },
    {
        id: "manufacturing",
        name: "Manufacturing & Industrial",
        subIndustries: [
            "Automotive",
            "Aerospace & Defense",
            "Electronics Manufacturing",
            "Industrial Manufacturing",
            "Chemical Manufacturing",
            "Consumer Goods",
            "Food & Beverage Processing",
            "Textile Manufacturing",
            "Metal Fabrication",
            "3D Printing/Additive Manufacturing",
            "Machinery & Equipment",
            "Packaging",
            "Plastics & Rubber"
        ]
    },
    {
        id: "retail",
        name: "Retail & E-commerce",
        subIndustries: [
            "E-commerce Platforms",
            "Retail Technology",
            "Fashion & Apparel",
            "Consumer Electronics",
            "Grocery & Food Retail",
            "Luxury Goods",
            "Sports & Recreation",
            "Home & Garden",
            "Beauty & Personal Care",
            "Pet Products",
            "Specialty Retail",
            "Direct-to-Consumer (D2C)",
            "Department Stores"
        ]
    },
    {
        id: "media",
        name: "Media & Entertainment",
        subIndustries: [
            "Digital Media",
            "Gaming & Esports",
            "Streaming Services",
            "Social Media",
            "Digital Marketing",
            "Film & Television",
            "Music & Audio",
            "Publishing",
            "Advertising",
            "Sports Entertainment",
            "News & Journalism",
            "Animation",
            "Event Management"
        ]
    },
    {
        id: "education",
        name: "Education & Training",
        subIndustries: [
            "EdTech",
            "Higher Education",
            "Professional Training",
            "Online Learning",
            "K-12 Education",
            "Corporate Training",
            "Language Learning",
            "Special Education",
            "Early Childhood Education",
            "Career Development",
            "Educational Publishing",
            "Educational Consulting",
            "Vocational Training"
        ]
    },
    {
        id: "energy",
        name: "Energy & Utilities",
        subIndustries: [
            "Renewable Energy",
            "Clean Technology",
            "Oil & Gas",
            "Nuclear Energy",
            "Energy Management",
            "Utilities",
            "Smart Grid Technology",
            "Energy Storage",
            "Carbon Management",
            "Waste Management",
            "Water & Wastewater",
            "Mining",
            "Environmental Services"
        ]
    },
    {
        id: "consulting",
        name: "Professional Services",
        subIndustries: [
            "Management Consulting",
            "IT Consulting",
            "Strategy Consulting",
            "Digital Transformation",
            "Business Advisory",
            "Legal Services",
            "Accounting & Tax",
            "Human Resources",
            "Marketing Services",
            "Architecture",
            "Engineering Services",
            "Research & Development",
            "Business Process Outsourcing (BPO)"
        ]
    },
    {
        id: "telecom",
        name: "Telecommunications",
        subIndustries: [
            "Wireless Communications",
            "Network Infrastructure",
            "Telecom Services",
            "5G Technology",
            "Internet Service Providers",
            "Satellite Communications",
            "Data Centers",
            "Fiber Optics",
            "Mobile Technology",
            "VoIP Services",
            "Network Security",
            "Telecom Equipment",
            "Cloud Communications"
        ]
    },
    {
        id: "transportation",
        name: "Transportation & Logistics",
        subIndustries: [
            "Electric Vehicles",
            "Autonomous Vehicles",
            "Logistics & Supply Chain",
            "Aviation",
            "Railways",
            "Maritime Transport",
            "Urban Mobility",
            "Fleet Management",
            "Last-Mile Delivery",
            "Warehousing",
            "Freight & Cargo",
            "Public Transportation",
            "Space Transportation"
        ]
    },
    {
        id: "agriculture",
        name: "Agriculture & Food",
        subIndustries: [
            "AgTech",
            "Farming",
            "Food Production",
            "Sustainable Agriculture",
            "Precision Agriculture",
            "Aquaculture",
            "Vertical Farming",
            "Agricultural Biotechnology",
            "Food Processing",
            "Organic Farming",
            "Plant-Based Foods",
            "Agricultural Equipment",
            "Indoor Farming"
        ]
    },
    {
        id: "construction",
        name: "Construction & Real Estate",
        subIndustries: [
            "Commercial Construction",
            "Residential Construction",
            "Real Estate Development",
            "Property Management",
            "Construction Technology",
            "Building Materials",
            "Infrastructure Development",
            "Smart Buildings",
            "Interior Design",
            "Facilities Management",
            "Real Estate Technology",
            "Sustainable Building",
            "Urban Planning"
        ]
    },
    {
        id: "hospitality",
        name: "Hospitality & Tourism",
        subIndustries: [
            "Hotels & Resorts",
            "Restaurants & Food Service",
            "Travel Technology",
            "Tourism",
            "Event Planning",
            "Vacation Rentals",
            "Cruise Lines",
            "Catering",
            "Theme Parks",
            "Travel Agencies",
            "Hospitality Management",
            "Online Travel Booking",
            "Cultural Tourism"
        ]
    },
    {
        id: "nonprofit",
        name: "Non-Profit & Social Services",
        subIndustries: [
            "Charitable Organizations",
            "Social Services",
            "Environmental Conservation",
            "Humanitarian Aid",
            "Education Non-Profits",
            "Healthcare Non-Profits",
            "Arts & Culture",
            "Community Development",
            "International Development",
            "Animal Welfare",
            "Youth Organizations",
            "Social Enterprise",
            "Advocacy Organizations"
        ]
    }
];
}}),
"[project]/app/(main)/onboarding/_components/onboarding-form.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/onboarding/_components/onboarding-form.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/onboarding/_components/onboarding-form.jsx <module evaluation>", "default");
}}),
"[project]/app/(main)/onboarding/_components/onboarding-form.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/(main)/onboarding/_components/onboarding-form.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/(main)/onboarding/_components/onboarding-form.jsx", "default");
}}),
"[project]/app/(main)/onboarding/_components/onboarding-form.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$onboarding$2f$_components$2f$onboarding$2d$form$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/app/(main)/onboarding/_components/onboarding-form.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$onboarding$2f$_components$2f$onboarding$2d$form$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/app/(main)/onboarding/_components/onboarding-form.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$onboarding$2f$_components$2f$onboarding$2d$form$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/app/(main)/onboarding/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OnboardingPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$industries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/industries.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$onboarding$2f$_components$2f$onboarding$2d$form$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(main)/onboarding/_components/onboarding-form.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/actions/user.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function OnboardingPage() {
    // Check if user is already onboarded
    const { isOnboarded } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserOnboardingStatus"])();
    if (isOnboarded) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/dashboard");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$main$292f$onboarding$2f$_components$2f$onboarding$2d$form$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            industries: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$industries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["industries"]
        }, void 0, false, {
            fileName: "[project]/app/(main)/onboarding/page.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(main)/onboarding/page.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(main)/onboarding/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(main)/onboarding/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_8546f314._.js.map
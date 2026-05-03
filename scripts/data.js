/* scripts/data.js — All report data. Update this file monthly. */
export const REPORT_DATA = {
  meta: {
    month: "أبريل", monthEn: "April", year: 2026,
    period: "1 - 30 أبريل 2026",
    restaurant: { nameAr: "المزار الدمشقي", nameEn: "Almazar Aldimashqi", city: "المدينة المنورة", country: "المملكة العربية السعودية" }
  },
  sales: {
    april: { total: 379724, invoices: 4713, dailyAvg: 12657, period: "أبريل 2026" },
    march: { total: 333527, invoices: 4089, dailyAvg: 10758, period: "مارس 2026" },
    lunch: {
      before: { daily: 1600, invoices: 19, label: "قبل الحملة" },
      firstWeek: { daily: 3300, invoices: null, label: "الأسبوع الأول" },
      full: { daily: 3429, invoices: 39, label: "شهر أبريل كامل" }
    }
  },
  tiktok: {
    overview: { views: 362000, likes: 3800, comments: 409, shares: 2100, profileVisits: 9300, followers: 3300, newFollowers: 73 },
    marchComparison: { views: 256000, likes: 3100, comments: 263, shares: 2300, profileVisits: 10000 },
    demographics: {
      gender: { female: 62, male: 37, other: 1 },
      age: [ { range: "18-24", pct: 12.6 }, { range: "25-34", pct: 43.3 }, { range: "35-44", pct: 27.6 }, { range: "45-54", pct: 9.7 }, { range: "55+", pct: 6.8 } ],
      countries: [ { name: "السعودية", flag: "🇸🇦", pct: 84.3 }, { name: "مصر", flag: "🇪🇬", pct: 1.1 }, { name: "المكسيك", flag: "🇲🇽", pct: 1.1 }, { name: "اليابان", flag: "🇯🇵", pct: 1.0 }, { name: "البرازيل", flag: "🇧🇷", pct: 1.0 }, { name: "أخرى", flag: "🌍", pct: 11.5 } ],
      peakHour: "12 منتصف الليل - 1 صباحاً"
    },
    trafficSources: [ { label: "صفحة 'لك' (FYP)", pct: 53.4 }, { label: "البحث", pct: 36.0 }, { label: "الملف الشخصي", pct: 10.2 }, { label: "المتابعون", pct: 0.3 }, { label: "أخرى", pct: 0.1 } ],
    videos: [
      { rank: 1, date: "22 أبريل", topic: "مطعم مناسب للعوائل", views: 89000, likes: 1167, comments: 82, shares: 352, saves: 1023, completion: 16.1 },
      { rank: 2, date: "1 أبريل", topic: "عرض غداء 99 ريال", views: 43000, likes: 338, comments: 38, shares: 251, saves: 227, completion: 12.9 },
      { rank: 3, date: "2 أبريل", topic: "عرض الغداء 99 ريال", views: 36000, likes: 253, comments: 65, shares: 216, saves: 155, completion: 18.1 },
      { rank: 4, date: "29 أبريل", topic: "زوار المدينة", views: 31000, likes: 368, comments: 61, shares: 195, saves: 297, completion: 11.9 },
      { rank: 5, date: "8 أبريل", topic: "أفضل مطعم بالمدينة", views: 14000, likes: 122, comments: 8, shares: 80, saves: 101, completion: 11.7 },
      { rank: 6, date: "15 أبريل", topic: "مكان يستحق التجربة", views: 10000, likes: 88, comments: 3, shares: 53, saves: 75, completion: 12.6 },
      { rank: 7, date: "12 أبريل", topic: "فطور دمشقي عائلي", views: 7326, likes: 57, comments: 10, shares: 29, saves: 37, completion: 13.9 },
      { rank: 8, date: "23 أبريل", topic: "فيديو عائلي", views: 6362, likes: 64, comments: 23, shares: 31, saves: 24, completion: 12.1 },
      { rank: 9, date: "7 أبريل", topic: "فطور صباحي", views: 6069, likes: 31, comments: 4, shares: null, saves: null, completion: null },
      { rank: 10, date: "11 أبريل", topic: "فطور دمشقي مميز", views: 3092, likes: 29, comments: 5, shares: null, saves: null, completion: null }
    ]
  },
  instagram: {
    overview: { totalViews: 331724, reach: 92167, interactions: 10478, accountsInteracted: 4569, profileVisits: 8078, profileActivity: 9770, externalLinkClicks: 1459, addressClicks: 233, followers: 1729, nonFollowerViewPct: 87 },
    contentDistribution: { reels: 82.8, stories: 13.0, posts: 4.2 },
    audienceHours: [ { time: "12 ص", count: 299 }, { time: "3 ص", count: 375 }, { time: "6 ص", count: 393 }, { time: "9 ص", count: 439 }, { time: "12 م", count: 417 }, { time: "3 م", count: 249 }, { time: "6 م", count: 215 }, { time: "9 م", count: 254 } ],
    paidAd: { startDate: "12 أبريل", endDate: "18 أبريل", days: 6, budget: 1000, views: 246708, pctOfMonthTotal: 74, cpm: 4.05 },
    reels: [
      { rank: 1, date: "11 أبريل", topic: "غداء عائلي", views: 68662, reach: 43878, likes: 373, comments: 20, shares: 792, saves: 729 },
      { rank: 2, date: "11 أبريل", topic: "فطور دمشقي", views: 63746, reach: 44398, likes: 497, comments: 31, shares: 1024, saves: 614 },
      { rank: 3, date: "17 أبريل", topic: "غداء عائلي", views: 40434, reach: 24706, likes: 143, comments: 7, shares: 270, saves: 236 },
      { rank: 4, date: "12 أبريل", topic: "فطور عائلي", views: 36557, reach: 24917, likes: 162, comments: 23, shares: 454, saves: 375 },
      { rank: 5, date: "15 أبريل", topic: "عوائل بالمدينة", views: 25685, reach: 20076, likes: 138, comments: 19, shares: 226, saves: 154 },
      { rank: 6, date: "12 أبريل", topic: "مناسب للعوائل", views: 13409, reach: 3776, likes: 17, comments: 2, shares: 28, saves: 16 },
      { rank: 7, date: "22 أبريل", topic: "للعوائل", views: 10359, reach: 7518, likes: 57, comments: 10, shares: 64, saves: 69 },
      { rank: 8, date: "18 أبريل", topic: "الأفضل بالمدينة", views: 8672, reach: 6350, likes: 45, comments: 2, shares: 69, saves: 55 },
      { rank: 9, date: "27 أبريل", topic: "فطور دمشقي", views: 7878, reach: 5907, likes: 38, comments: 4, shares: 48, saves: 39 },
      { rank: 10, date: "29 أبريل", topic: "زوار المدينة", views: 5340, reach: 4127, likes: 32, comments: 1, shares: 38, saves: 30 },
      { rank: 11, date: "23 أبريل", topic: "المكان", views: 4841, reach: 3782, likes: 21, comments: 3, shares: 17, saves: 20 },
      { rank: 12, date: "13 أبريل", topic: "عرض الغداء 99 ريال", views: 2952, reach: 1917, likes: 15, comments: 6, shares: 31, saves: 11 }
    ],
    stories: { total: 73, top10Views: [560, 506, 352, 332, 309, 304, 272, 260, 253, 244] }
  },
  googleMaps: {
    info: { nameAr: "المزار الدمشقي", nameEn: "Almazar Aldimashqi", address: "طريق السلام الفرعي، طيبة، المدينة المنورة 42351", phone: "050 331 2310", hours: "يومياً 6:00 ص - 2:00 ص", category: "مطعم مأكولات مشوية", menuUrl: "almazar-aldimashqi.menus-sa.com", delivery: ["HungerStation", "Keeta"] },
    overview: { directions: 3237, calls: 1255, menuViews: 2373, websiteVisits: 238, totalInteractions: 7103, bookings: 0 },
    marchComparison: { directions: 3199, calls: 2938, menuViews: 1934, websiteVisits: 256, totalInteractions: 8327 },
    ratings: { overall: 4.3, totalEver: 774, aprilTotal: 138, fiveStars: 101, fourStars: 11, threeStars: 6, twoStars: 6, oneStar: 14, replied: 123, replyRate: 89.1 },
    weeklyBreakdown: [
      { week: "الأسبوع 1", five: 27, four: 3, three: 0, two: 1, one: 1 },
      { week: "الأسبوع 2", five: 16, four: 2, three: 2, two: 0, one: 4 },
      { week: "الأسبوع 3", five: 15, four: 2, three: 4, two: 5, one: 2 },
      { week: "الأسبوع 4", five: 43, four: 4, three: 0, two: 0, one: 7 }
    ],
    reviews: {
      positive: [ { name: "عبد الله", stars: 4, text: "مطعم ممتاز جداً، أكلهم لذيذ وأخلاقهم عالية" }, { name: "Eng. Nourelhuda", stars: 4, text: "المطعم ممتاز جداً من جميع النواحي، من حيث الجودة والخدمة" }, { name: "Noordin Shakoor", stars: 4, text: "تجربة ممتازة، مذاق المأكولات السورية حقيقي وأصيل" } ],
      negative: [ { name: "mazn", stars: 3, text: "الأكل بارد، المشويات باردة، المقبلات كميتها قليلة" }, { name: "Dody", stars: 3, text: "مدة الانتظار طويلة، الدجاج والشيش ناشف وقاسي" } ],
      recurringComplaints: ["برودة الأكل عند الوصول", "طول فترة الانتظار", "قسوة بعض اللحوم المشوية", "كميات المقبلات قليلة"]
    }
  },
  campaign: {
    overview: { totalCost: 1733, roi: 3168, roiLabel: "3,168%", influencerViews: 89115, influencerCount: 7, salesIncrease: 114 },
    influencers: [
      { rank: 1, tier: "gold", name: "سارا", handle: "@sxc434", initial: "س", visitDate: "4 أبريل", views: 68700, likes: 1028, shares: 920, saves: 845, published: true, videoUrl: "https://www.tiktok.com/@sxc434/video/7624884456121175314" },
      { rank: 2, tier: "silver", name: "فلوقس", handle: "@vlogsv.ii", initial: "ف", visitDate: "6 أبريل", views: 8219, likes: 102, shares: 73, saves: 38, published: true, videoUrl: "https://vt.tiktok.com/ZSHf8GUST/" },
      { rank: 3, tier: "bronze", name: "رنا", handle: "@1rll0i", initial: "ر", visitDate: "5 أبريل", views: 3466, likes: 120, shares: 17, saves: 27, published: true, cost: 139, videoUrl: "https://www.tiktok.com/@1rll0i/video/7625304603843677458" },
      { rank: 4, tier: "default", name: "تغطيات مون", handle: "@moon.vloog", initial: "م", publishDate: "14 أبريل", views: 3428, likes: 199, shares: 61, saves: 147, published: true, videoUrl: "https://www.tiktok.com/@moon.vloog/video/7628381088812977415" },
      { rank: 5, tier: "default", name: "لميس", handle: "@uiily.l", initial: "ل", visitDate: "4 أبريل", views: 2293, likes: 102, shares: 81, saves: 18, published: true, videoUrl: "https://www.tiktok.com/@uiily.l/video/7624948812049698056" },
      { rank: 6, tier: "default", name: "ليال — تغطيات المدينة", handle: "@_tr5e", initial: "ل", visitDate: "2 أبريل", views: 1515, likes: 141, shares: 55, saves: 21, published: true, videoUrl: "https://www.tiktok.com/@_tr5e/video/7624193177905335572" },
      { rank: 7, tier: "default", name: "خلود عبدالله", handle: "@k1419.5", initial: "خ", visitDate: "3 أبريل", publishDate: "4 أبريل", views: 1494, likes: 47, shares: 29, saves: 10, published: true, videoUrl: "https://www.tiktok.com/@k1419.5/video/7624640473352785170" }
    ],
    others: [ { name: "@_dan.h (دان)", status: "لم ينشر بعد", visitDate: "5 أبريل" }, { name: "أمجاد", status: "ملغي" } ],
    cost: { influencers6x99: 594, influencer1x139: 139, totalInfluencers: 733, paidAd: 1000, total: 1733 }
  },
  production: {
    totals: { shootingSessions: 10, tiktokVideos: 10, igReels: 12, graphicDesigns: 8, menuPhotography: 5, tiktokStories: 45, igStories: 73, totalStories: 118, tiktokReposts: 17, igReposts: 26, totalReposts: 43 },
    designs: [ { cat: "شاشة المطعم", desc: "عرض الغداء + الفطور الدمشقي", count: 2 }, { cat: "ستوريز عرض الغداء", desc: "3 تصاميم متنوعة للستوري", count: 3 }, { cat: "تطبيقات التوصيل", desc: "تصميم ترويجي لـ HungerStation و Keeta", count: 1 }, { cat: "الفطور الدمشقي", desc: "تصاميم ترويجية", count: 2 } ],
    weekly: [
      { week: "الأسبوع 1", tiktok: 2, instagram: 0, stories: 31 },
      { week: "الأسبوع 2", tiktok: 3, instagram: 6, stories: 27 },
      { week: "الأسبوع 3", tiktok: 2, instagram: 4, stories: 31 },
      { week: "الأسبوع 4", tiktok: 1, instagram: 2, stories: 26 }
    ]
  },
  management: {
    totals: { ttComments: 204, igComments: 35, ttConversations: 51, igConversations: 37, tiktokStories: 45, igStories: 73, tiktokReposts: 17, igReposts: 26, tiktokVideos: 10, igReels: 12, googleReplies: 123 },
    weeklyTikTok: [
      { week: "الأول", comments: 63, conversations: 13, stories: 11, reposts: 9, videos: 2 },
      { week: "الثاني", comments: 24, conversations: 13, stories: 12, reposts: 2, videos: 3 },
      { week: "الثالث", comments: 38, conversations: 8, stories: 12, reposts: 3, videos: 2 },
      { week: "الرابع", comments: 62, conversations: 14, stories: 8, reposts: 3, videos: 1 }
    ],
    weeklyInstagram: [
      { week: "الأول", comments: 0, conversations: 4, stories: 20, reposts: 8, reels: 0 },
      { week: "الثاني", comments: 23, conversations: 13, stories: 15, reposts: 9, reels: 6 },
      { week: "الثالث", comments: 5, conversations: 8, stories: 19, reposts: 4, reels: 4 },
      { week: "الرابع", comments: 7, conversations: 10, stories: 18, reposts: 4, reels: 2 }
    ]
  },
  operations: {
    delivery: [ "تعديل الشعار في تطبيق كيتا", "تعديل الصورة الأساسية في كيتا", "تعديل صورة منتج التبولة في هنقرستيشن", "تعديل وصف منتج التبولة في هنقرستيشن", "إضافة الروابط في الرابط الأساسي (Linktree)", "تنفيذ حملة تسويقية مخصصة لخدمة التوصيل" ],
    menu: { modified: 9, new: 27, newItems: 4 },
    photography: [ "10 جلسات تصوير متنوعة للمحتوى الترويجي", "8 تصاميم جرافيكية", "تصوير احترافي لـ 5 منتجات للمنيو الإلكتروني" ],
    systems: [ "تنفيذ تعديلات في نظام رواء المحاسبي", "البحث عن نظام حجز مناسب للمطعم", "التواصل والتنسيق مع شركة MyTable لخدمات الحجز" ],
    restaurant: [ "توصيل أرقام الطاولات وتوزيعها", "الإشراف على تنفيذ بروشور أسماء الموظفين" ]
  }
};

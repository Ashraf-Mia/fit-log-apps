অবশ্যই আশরাফ। 😊 আমি পুরো assignment-টা সহজ বাংলায় বুঝিয়ে দিচ্ছি—বিশেষ করে কোন জিনিস বাধ্যতামূলক, কোনটা Challenge, আর কোনটা করলে extra marks/quality হবে সেটা আলাদা করে।

💪 FitLog Assignment — সহজ বাংলায়

তোমার assignment-এর মূল idea হলো:

একটা Workout Library থাকবে → সেখান থেকে exercise-এর Details দেখা যাবে → Today's Plan বা Saved-এ যোগ করা যাবে → My Plan page-এ সেগুলো দেখা যাবে → সব data dynamically update হবে।

⏰ Deadline
Marks Deadline
60 marks 26 September, রাত 11:59
50 marks 27 September, রাত 11:59
30 marks 27 September-এর পরে যেকোনো সময়

তাই আজকের deadline অনুযায়ী 60 marks-এর requirements আগে শেষ করা সবচেয়ে গুরুত্বপূর্ণ।

🔴 প্রথমে যেগুলো অবশ্যই করতে হবে

1. Responsive Website

Website যেন:

📱 Mobile
📱 Tablet
💻 Desktop

সব জায়গায় ঠিকভাবে কাজ করে।

যেমন mobile-এ 3 column card থাকবে না; সেটা 1 column হয়ে যাবে।

2. Git Commit — কমপক্ষে ৮টা

কমপক্ষে 8টি meaningful commit করতে হবে।

যেমন:

added navbar
created workout library
added workout details page
added my plan page
added plan context
added saved functionality
added sorting functionality
completed responsive design

শুধু:

update
fix
done
hello

এ ধরনের commit না দেওয়াই ভালো।

3. Deployment-এর পরে Error থাকা যাবে না

Live website-এ:

Console error ❌
Broken page ❌
API error handling না থাকা ❌
কোনো route কাজ না করা ❌

এগুলো ঠিক রাখতে হবে।

4. README.md

README-তে অন্তত এগুলো থাকবে:

Project name
FitLog
Description

Project কী করে তার ছোট description।

Technologies

যেমন:

Next.js
TypeScript
Tailwind CSS
DaisyUI
React Icons
Features

কমপক্ষে ৫টা feature।

🔝 1. Navbar

Figma-এর মতো Navbar বানাতে হবে।

Navbar-এ:

Logo Workout My Plan Plan Saved
Navigation

দুইটা main link:

Workout
My Plan

যে page বর্তমানে active, সেই link আলাদা/highlighted থাকবে।

Plan এবং Saved badge

Navbar-এ দুইটা counter থাকবে।

যেমন:

Plan 2
Saved 3
Plan

Filled accent background:

Plan 2
Saved

শুধু border:

Saved 3

এবং দুটোতেই click করলে /my-plan page-এ যাবে।

🅱️ 2. Hero Section

Home page-এর উপরে বড় banner।

Eyebrow:
WORKOUT LIBRARY
Heading:
TRAIN WITH INTENT.
LOG EVERY SET.
Description:

FitLog কী সেটা বোঝাবে।

Button:
BROWSE WORKOUTS

এই button-এ click করলে অন্য page-এ যাবে না।

বরং একই page-এর:

#library

section-এ scroll করবে।

অর্থাৎ anchor link।

🖼️ Hero Image

Hero-এর right side-এ image থাকবে।

Desktop:

Text Image

Mobile:

Text
Image
⚖️ 3. Library Section

Home page-এর মূল workout section।

Heading:

THE LIBRARY

Subtitle:

Twelve lifts covering every major muscle group.

API থেকে সব exercise নিয়ে card বানাতে হবে।

তোমার API:

https://api.abcz.workers.dev/api/fitlog
Desktop-এ

3 × 4 grid

অর্থাৎ 12টি exercise হলে:

Card Card Card
Card Card Card
Card Card Card
Card Card Card
প্রতিটি card-এ থাকবে
Image

Exercise-এর ছবি।

Category

যেমন:

CHEST
ARMS
Name
BARBELL BENCH PRESS
Equipment
Barbell, Bench
Stats
🕐 25 min
🔥 180 kcal
⭐ 4.8
👉 Card click

কোনো card-এ click করলে:

/workout/1

এরকম Details page-এ যাবে।

🏋️ 4. Workout Details Page

এখানে একটা exercise-এর পুরো information দেখাবে।

Desktop-এ দুই পাশ:

LEFT RIGHT
Image Title
Description
Tags
Specs
Instructions
Buttons
Left side

বড় workout image।

Right side
Title
BARBELL BENCH PRESS
Description

Exercise সম্পর্কে description।

Category
Chest
Arms
Key Specs

এই information থাকবে:

Equipment
Difficulty
Sets
Reps
Duration
Calories
Rating
📋 Instructions

৪টা instruction থাকবে।

যেমন:

1. Lie on the bench...
2. Unrack the bar...
3. Lower the bar...
4. Press the bar...

তোমার আগের assignment-এর মতো map() দিয়ে number দেখাতে পারো।

🔘 Details Page-এর দুই Button

1. Add to today's plan

Click করলে:

Workout
↓
Today's Plan
↓
My Plan page

এবং Navbar-এর:

Plan 0

থেকে:

Plan 1

হবে।

এবং toast দেখাবে:

Added to today's plan 2. Save for later

Click করলে:

Saved

array-তে যাবে।

Navbar:

Saved 0

থেকে:

Saved 1

হবে।

এবং toast দেখাবে।

📋 5. My Plan Page

এটাই তোমার বর্তমান কাজের সবচেয়ে গুরুত্বপূর্ণ অংশ।

Route:

/my-plan

Heading:

MY PLAN

Subtitle:

Cap of five lifts for today.
Finish them, then load more.
📊 Metrics

তিনটা metric:

Exercises
Minutes
Calories

এগুলো hardcoded করা যাবে না।

তোমার যেটা আমরা এখন করলাম:

plan.length

এবং:

duration-এর total
caloriesBurned-এর total

এটাই requirement অনুযায়ী ঠিক approach।

শুরুতে:
Exercises 0
Minutes 0
Calories 0

কোনো exercise add করলে automatically update হবে।

🗂️ Tabs

দুইটা tab:

Today's Plan
Saved
Today's Plan

শুধু plan data দেখাবে।

Saved

শুধু save data দেখাবে।

আর তুমি যেটা এখন করেছো:

activeTab

এর মাধ্যমে stats-ও আলাদা দেখাচ্ছো—এটা requirement-এর সাথে ভালোভাবে মিলে যাচ্ছে।

⏳ Loading State

API থেকে data আসার সময়:

Loading workouts…

অথবা spinner দেখাতে হবে।

তুমি আগে spinner নিয়ে যেটা করেছিলে সেটাও ব্যবহার করতে পারো।

🃏 My Plan Card

প্রতিটি card-এ:

Thumbnail
Title
Equipment
Duration
Calories
Rating

এবং button:

View Details
Mark as Done
X
❌ Empty State

যদি Today's Plan-এ কোনো exercise না থাকে:

NOTHING HERE YET

তার নিচে:

Browse the library and add a lift
to get today moving.

তারপর:

Go to workouts

Button।

এটা click করলে:

/

Home page-এ যাবে।

Saved খালি থাকলেও একই ধরনের empty state দেখাতে পারো।

🦶 7. Footer

Dark footer।

Left:

Logo
FITLOG

Right:

© 2026 FitLog — Workout Library.
Train hard, log honest.
📱 8. Responsive

এটা খুব গুরুত্বপূর্ণ।

যেমন Library:

Desktop
3 columns
Tablet
2 columns
Mobile
1 column

Hero:

Desktop:

Text | Image

Mobile:

Text
Image

Navbar-ও mobile-friendly হতে হবে।

⚠️ Additional Requirements

এগুলোও document-এ Must হিসেবে দেওয়া হয়েছে।

404 Page

ভুল URL দিলে:

404
Page Not Found

দেখাবে।

Next.js-এ not-found.tsx দিয়ে করা যায়।

Home loading

API fetch করার সময় loading animation দেখাতে হবে।

Toast

Details page-এর button click করলে relevant toast।

যেমন:

Added to today's plan
Saved for later
Removed from plan
Workout completed
Deployment reload

খুব গুরুত্বপূর্ণ:

Live site-এ গিয়ে যদি সরাসরি:

/my-plan

লিখে Enter দাও, যেন error না হয়।

অর্থাৎ শুধু Home page reload করলে হবে না—যেকোনো valid route direct reload করলেও কাজ করতে হবে।

🏆 Challenge — অতিরিক্ত 10 Marks

এগুলো Challenge Requirements।

C1 — Sort Dropdown

এটাই তুমি এখন করছো। 😄

Sort By
[ Duration ▼ ]

Options:

Duration
Calories
Rating
Default:
Duration

এবং initial অবস্থাতেই Duration অনুযায়ী sort হবে।

তুমি এখন যেটা করেছো:

const [sortBy, setSortBy] = useState<
"Duration" | "Calories" | "Rating"

> ("Duration");

এটা এই requirement-এর জন্য ঠিক direction।

C2 — README

README-তে:

Project Name
Description
Technologies
অন্তত ৫টা Features
C3 — Mark as Done + Remove

এটাও Challenge-এর অংশ।

Mark as Done

Click করলে:

Workout completed

toast দেখাবে।

Remove

X button click করলে exercise plan থেকে remove হবে।

এবং:

Exercises
Minutes
Calories

আবার automatically কমে যাবে।

⭐ Optional — Marks নেই

এগুলো করলে project আরও ভালো হবে, কিন্তু marks-এর জন্য mandatory না।

1. localStorage

Browser reload করলেও:

Today's Plan
Saved

হারাবে না।

এটা খুব useful।

2. Search

Exercise search করা যাবে:

Search workout...

যেমন:

bench

লিখলে Bench Press দেখাবে।

3. Maximum 5 lifts

Assignment-এ বলা হয়েছে:

Cap of five lifts for today.

অর্থাৎ Today's Plan-এ সর্বোচ্চ ৫টি exercise রাখা উচিত।

৫টি হয়ে গেলে:

Add to today's plan

button disable করা যায়।

🛠️ Technologies

তোমাকে ব্যবহার করতে বলা হয়েছে:

Next.js

Website তৈরি করার জন্য।

App Router

Page navigation-এর জন্য।

যেমন:

/
/my-plan
/workout/[id]
Tailwind CSS

Styling এবং responsive design।

Component Library

DaisyUI ব্যবহার করলে ঠিক আছে।

🚀 Deployment

শেষে Live করতে হবে:

Vercel
Netlify
Cloudflare Pages
অথবা অন্য hosting
📬 Submission

শেষে দুইটা link দিতে হবে:

Live Link:
https://......

GitHub Repository:
https://github.com/......
🔥 তোমার জন্য সবচেয়ে গুরুত্বপূর্ণ Checklist

আশরাফ, তোমার বর্তমান progress অনুযায়ী আমি হলে এই order-এ check করতাম:

🔴 Must check
Navbar
Plan counter
Saved counter
Hero
Browse Workouts anchor
API থেকে সব exercise
Library 3×4 grid
Details page
Add to Today's Plan
Save for Later
Toast
My Plan
Today's Plan
Saved
Exercises total
Minutes total
Calories total
Loading
Empty state
View Details
Footer
Responsive
404 page
Deployment reload test
8 Git commits
README
🟡 Challenge 10 marks
Sort by Duration
Sort by Calories
Sort by Rating
README ভালোভাবে সাজানো
Mark as Done
Remove
🟢 Optional
localStorage
Search
Maximum 5 lifts

তুমি এখন যে Sort By নিয়ে কাজ করছো, সেটা Challenge-এর C1। তাই মূল 50/60 marks-এর কাজ বাদ দিয়ে শুধু sorting নিয়ে বেশি সময় দিও না। আগে Must Requirements-এর সবগুলো complete আছে কিনা checklist ধরে মিলিয়ে নাও।

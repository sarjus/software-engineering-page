const decks = {
  "safehome": {
    title: "SafeHome Scenario & Umbrella Activities",
    description: "Test your knowledge on Software Configuration Management, Project Tracking, and Risk Management based on the SafeHome scenario.",
    cards: [
      {
        question: "In the SafeHome scenario, which Umbrella Activity is the solution when the lead developer quits, leaving the current code version unknown?",
        answer: "Software Configuration Management (SCM)"
      },
      {
        question: "The Umbrella Activity that manages different versions of source code to identify the most current one is called ____.",
        answer: "Software Configuration Management (SCM)"
      },
      {
        question: "Which Umbrella Activity resolves a crisis where marketing says the team is two weeks behind schedule, but developers claim they are 'almost done'?",
        answer: "Software Project Tracking and Control"
      },
      {
        question: "The process of objectively assessing project status to reconcile differing reports on progress falls under ____.",
        answer: "Software Project Tracking and Control"
      },
      {
        question: "In the SafeHome scenario, which Umbrella Activity addresses the realization that the chosen wireless protocol can be easily hacked?",
        answer: "Risk Management"
      },
      {
        question: "The Umbrella Activity responsible for identifying and mitigating potential security threats, like a hackable protocol, is known as ____.",
        answer: "Risk Management"
      },
      {
        question: "In the context of the SafeHome crisis, what problem is solved by Software Configuration Management (SCM)?",
        answer: "The lead developer quit, leaving the current code version unknown"
      },
      {
        question: "According to the SafeHome scenario, what specific issue necessitates the use of Software Project Tracking and Control?",
        answer: "A disagreement between marketing and development regarding the schedule"
      },
      {
        question: "What security-related crisis in the SafeHome scenario is specifically handled by Risk Management?",
        answer: "The discovery that the selected wireless protocol can be easily hacked"
      },
      {
        question: "What category of activities, which span the entire software engineering process, includes SCM, Risk Management, and Project Tracking?",
        answer: "Umbrella Activities"
      }
    ]
  },
  "principles": {
    title: "Software Engineering Principles",
    description: "Scenarios and principles covering value, simplicity, vision, documentation, flexibility, reuse, thinking, and maintenance.",
    cards: [
      {
        question: "Scenario 1: The Marketing Manager wants to add a VR-shopping feature to a simple grocery list app. It will delay the launch by two months. What do you do?",
        answer: "Principle 1: The Reason It All Exists. Ask: \"Does this add real value to the system?\". If it doesn't provide core value to the target users, it shouldn't be built."
      },
      {
        question: "Scenario 2: You found a way to write a login function in one complex line of code using \"hacks.\" Your teammate suggests a 10-line version that is easy to read. Who is right?",
        answer: "Principle 2: KISS (Keep It Simple, Stupid!). The teammate is right. Simple designs are more elegant, easier to maintain, and less error-prone."
      },
      {
        question: "Scenario 3: Halfway through the project, the UI designer and the Database engineer start building features that don't match the original plan. What is at risk?",
        answer: "Principle 3: Maintain the Vision. Without conceptual integrity, the system becomes a \"patchwork of incompatible designs\". You must empower an architect to enforce the vision."
      },
      {
        question: "Scenario 4: You decide to skip documentation because you are the only one working on the project. Why is this bad engineering?",
        answer: "Principle 4: What You Produce, Others Will Consume. Someone else (or you in 6 months) will have to debug it. Making their job easier adds value to the system."
      },
      {
        question: "Scenario 5: You are asked to build a system that only works on Windows 10. Your mentor tells you to \"generalize\" it for all OS platforms. Why?",
        answer: "Principle 5: Be Open to the Future. Platforms become obsolete quickly. Never design yourself into a corner; systems must be ready to adapt to change."
      },
      {
        question: "Scenario 6: A developer spends an extra week making a module \"generic\" so other teams can use it. Is this a waste of time?",
        answer: "Principle 6: Plan Ahead for Reuse. No, because reuse saves time in the long run. While building for reuse can cost 25% to 200% more initially, it increases the overall system value."
      },
      {
        question: "Scenario 7: You've been stuck on a bug for three hours and are just changing lines of code randomly to see if it works. What is the better approach?",
        answer: "Principle 7: Think! Placing clear, complete thought before action produces better results. Thinking helps you recognize when you don't know something so you can research it."
      },
      {
        question: "Scenario 8 (Maintenance): Your software is finished, but you keep getting requests to change it. Your teammate says, \"It’s not broken, don't touch it.\" What is the risk?",
        answer: "The Deterioration Paradox. While software doesn't \"wear out,\" it deteriorates due to change. Maintenance is a survival strategy to keep the software viable as environments evolve."
      }
    ]
  }
};

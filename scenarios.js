// Scenarios database for Pakistani Pharma Industry Mindset Assessment
// Based on "Mindset: The New Psychology of Success" by Carol S. Dweck

const SCENARIOS = [
  {
    id: 1,
    text: "You are Asad Ahmed, a Sales Manager at a leading pharmaceutical company in Lahore. Your team has been struggling to meet quarterly targets for the new diabetes medication launch. The competition from multinational companies is fierce, and doctors are hesitant to prescribe your product. Your Regional Sales Director, Fatima Khan, has called for an urgent meeting to discuss the poor performance. Some of your team members, including experienced representatives like Muhammad Tariq and Ayesha Malik, seem demoralized and are suggesting that the product pricing is too high compared to established brands. The company has invested heavily in this launch, and failure could impact your career progression and team's reputation in the market.",
    questions: [
      {
        question: "How do you view this challenging situation?",
        options: [
          {text: "This is a test of our abilities and a chance to prove our worth in the market", growthScore: 75},
          {text: "This situation reveals our team's limitations and the product's inherent flaws", growthScore: 25},
          {text: "Market conditions are beyond our control, so we should focus on damage control", growthScore: 50},
          {text: "This is an opportunity to learn new strategies and improve our approach", growthScore: 100}
        ]
      },
      {
        question: "What would be your primary focus in the upcoming meeting with Fatima Khan?",
        options: [
          {text: "Explain the external factors that caused the poor performance", growthScore: 25},
          {text: "Present a detailed analysis of what we've learned and our improvement plan", growthScore: 100},
          {text: "Defend our team's efforts and highlight the unrealistic targets", growthScore: 50},
          {text: "Request for product pricing adjustments to match competitor rates", growthScore: 75}
        ]
      },
      {
        question: "How would you motivate your demoralized team members?",
        options: [
          {text: "Remind them that some people are naturally better at sales than others", growthScore: 0},
          {text: "Focus on developing new skills and strategies through training and practice", growthScore: 100},
          {text: "Reassure them that the market conditions will eventually improve", growthScore: 50},
          {text: "Emphasize that their past successes prove they are capable salespeople", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 2,
    text: "Dr. Sarah Qureshi, a Marketing Manager at a pharmaceutical company in Karachi, is launching a new cardiovascular drug. During a medical conference in Islamabad, a renowned cardiologist, Dr. Hameed Akhtar, publicly questions the efficacy data of her product compared to existing treatments. The criticism is heard by many key opinion leaders and potential prescribers. Sarah's colleague, Ahmed Hassan from the medical affairs team, suggests that they should have anticipated such questions. The company's reputation and the product's future success in the Pakistani market now depend on how Sarah handles this situation and the subsequent marketing strategy.",
    questions: [
      {
        question: "How should Sarah interpret Dr. Akhtar's criticism?",
        options: [
          {text: "As a personal attack on her professional competence and product knowledge", growthScore: 0},
          {text: "As valuable feedback that can help improve the product positioning and messaging", growthScore: 100},
          {text: "As an inevitable challenge that all new products face in the market", growthScore: 50},
          {text: "As evidence that the medical community is biased against new treatments", growthScore: 25}
        ]
      },
      {
        question: "What should be Sarah's immediate response strategy?",
        options: [
          {text: "Acknowledge the feedback and commit to providing more comprehensive data", growthScore: 100},
          {text: "Defend the product strongly by highlighting its unique benefits", growthScore: 75},
          {text: "Avoid direct confrontation and focus on other supportive physicians", growthScore: 25},
          {text: "Challenge Dr. Akhtar's expertise and present counter-arguments", growthScore: 0}
        ]
      },
      {
        question: "How should Sarah approach future medical conferences?",
        options: [
          {text: "Prepare more thoroughly by anticipating potential questions and criticisms", growthScore: 100},
          {text: "Focus only on presenting to physicians who are already supportive", growthScore: 25},
          {text: "Stick to the standard presentation to avoid controversial topics", growthScore: 50},
          {text: "Bring senior colleagues to handle difficult questions", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 3,
    text: "Rizwan Ali, a Territory Sales Manager in Faisalabad, has been consistently underperforming for the past six months. His supervisor, Nadia Sheikh, notices that Rizwan avoids visiting challenging doctors who ask difficult questions about product specifications. Instead, he focuses on easy targets who readily prescribe without much discussion. During a field visit, Nadia observes that Rizwan lacks confidence when discussing clinical data with Dr. Imran Malik, a leading physician in the area. Rizwan's colleague, Bilal Ahmed, who joined the company at the same time, has been excelling and recently received a promotion. The annual performance review is approaching, and Rizwan's job security is at risk.",
    questions: [
      {
        question: "What is the root cause of Rizwan's underperformance?",
        options: [
          {text: "He lacks the natural talent required for pharmaceutical sales", growthScore: 0},
          {text: "He hasn't developed the necessary skills and knowledge through practice", growthScore: 100},
          {text: "The territory assigned to him has inherently difficult customers", growthScore: 25},
          {text: "He is not receiving adequate support from his supervisor", growthScore: 50}
        ]
      },
      {
        question: "How should Rizwan approach the challenging doctors he's been avoiding?",
        options: [
          {text: "Continue focusing on easier targets to maintain his confidence", growthScore: 25},
          {text: "Study extensively and gradually build relationships with challenging doctors", growthScore: 100},
          {text: "Ask Bilal Ahmed to handle these difficult customers instead", growthScore: 50},
          {text: "Request a territory change to work with more cooperative physicians", growthScore: 0}
        ]
      },
      {
        question: "What should Rizwan's mindset be regarding Bilal's success?",
        options: [
          {text: "Bilal was lucky to get better opportunities and support", growthScore: 25},
          {text: "Bilal's success shows what's possible with effort and the right approach", growthScore: 100},
          {text: "Some people are naturally gifted at sales while others are not", growthScore: 0},
          {text: "The comparison is unfair because they have different territories", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 4,
    text: "Mariam Khan, a Product Manager for oncology drugs in Lahore, receives feedback that her latest marketing campaign has failed to generate expected prescription growth. The campaign, which she spent months developing, focused on emotional storytelling rather than clinical data. Her manager, Dr. Tariq Mahmood, suggests that the approach might not resonate with Pakistani oncologists who prefer evidence-based information. Mariam's peer, Hassan Raza, had warned her about this approach during the planning phase, but she was confident in her strategy. The company is now considering reassigning the oncology portfolio to Hassan, who has a more traditional but effective approach to medical marketing.",
    questions: [
      {
        question: "How should Mariam view this failure?",
        options: [
          {text: "As proof that her creative approach doesn't work in the pharmaceutical industry", growthScore: 0},
          {text: "As a learning opportunity to better understand her target audience", growthScore: 100},
          {text: "As evidence that Pakistani doctors are resistant to innovative marketing", growthScore: 25},
          {text: "As an unfair judgment since the campaign needed more time to show results", growthScore: 50}
        ]
      },
      {
        question: "What should Mariam do about Hassan's earlier warning?",
        options: [
          {text: "Recognize that she should have been more open to his input and expertise", growthScore: 100},
          {text: "Maintain that her approach was correct but poorly executed", growthScore: 75},
          {text: "Feel that Hassan was trying to undermine her creative ideas", growthScore: 0},
          {text: "Believe that Hassan lacks vision for innovative marketing strategies", growthScore: 25}
        ]
      },
      {
        question: "How should Mariam respond to the possibility of portfolio reassignment?",
        options: [
          {text: "Accept it as confirmation that she's not suited for oncology marketing", growthScore: 0},
          {text: "Use it as motivation to develop better strategies and prove her capabilities", growthScore: 100},
          {text: "Argue that she deserves more time to demonstrate her approach's effectiveness", growthScore: 50},
          {text: "Request a transfer to a different therapeutic area where her style might work better", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 6,
    text: "Farah Malik, a Medical Affairs Manager in Karachi, is preparing for a crucial advisory board meeting with leading Pakistani physicians to discuss a new treatment protocol. Dr. Rashid Khan, a prominent endocrinologist, has publicly criticized the company's previous research methodology. Farah's colleague, Dr. Imran Siddiqui, suggests avoiding controversial topics and focusing only on positive data. However, Farah knows that addressing the criticism head-on could lead to more productive discussions. The meeting's outcome will influence the company's research direction and her credibility in the medical community. Her supervisor, Dr. Amna Tariq, has given her full autonomy to design the meeting agenda.",
    questions: [
      {
        question: "How should Farah approach Dr. Khan's criticism?",
        options: [
          {text: "Avoid the topic to prevent confrontation during the meeting", growthScore: 25},
          {text: "Address it directly and use it as a starting point for improvement", growthScore: 100},
          {text: "Prepare strong counter-arguments to defend the company's position", growthScore: 50},
          {text: "Acknowledge it briefly but focus on other positive aspects", growthScore: 75}
        ]
      },
      {
        question: "What should Farah's primary goal be for this meeting?",
        options: [
          {text: "To prove that the company's research approach is superior", growthScore: 25},
          {text: "To learn from the physicians' expertise and improve future protocols", growthScore: 100},
          {text: "To maintain positive relationships without addressing difficult issues", growthScore: 50},
          {text: "To present the data in the most favorable light possible", growthScore: 0}
        ]
      },
      {
        question: "How should Farah handle disagreements during the meeting?",
        options: [
          {text: "View them as attacks on her professional competence", growthScore: 0},
          {text: "See them as opportunities to gain valuable insights and improve", growthScore: 100},
          {text: "Try to minimize them by steering conversations to safer topics", growthScore: 25},
          {text: "Defend the company's position firmly to maintain credibility", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 7,
    text: "Kamran Shah, a Sales Representative in Multan, has been struggling to build relationships with key physicians in his territory. His colleague, Sana Ahmed, who covers a similar territory, consistently achieves higher prescription volumes. Kamran notices that Sana spends considerable time understanding each doctor's practice patterns and patient demographics, while he focuses on delivering standard product presentations. During a joint call with Dr. Naseem Akhtar, Kamran observes how Sana tailors her approach based on the doctor's specific interests and concerns. His Area Sales Manager, Tariq Jameel, has suggested that Kamran should learn from Sana's methods, but Kamran feels that their personalities are too different for him to adopt her approach.",
    questions: [
      {
        question: "Why is Sana more successful than Kamran?",
        options: [
          {text: "She has a naturally charismatic personality that doctors prefer", growthScore: 0},
          {text: "She has developed better skills through observation and practice", growthScore: 100},
          {text: "Her territory has more cooperative and friendly physicians", growthScore: 25},
          {text: "She received better initial training when she joined the company", growthScore: 50}
        ]
      },
      {
        question: "How should Kamran respond to his manager's suggestion?",
        options: [
          {text: "Explain that his personality is different and he needs a different approach", growthScore: 25},
          {text: "Study Sana's methods and adapt them to his own style and strengths", growthScore: 100},
          {text: "Continue with his current approach since it reflects his authentic self", growthScore: 0},
          {text: "Request additional training or support to improve his performance", growthScore: 75}
        ]
      },
      {
        question: "What should Kamran focus on to improve his relationships with doctors?",
        options: [
          {text: "Finding physicians who naturally connect with his personality", growthScore: 25},
          {text: "Developing skills to understand and respond to different doctor preferences", growthScore: 100},
          {text: "Asking his manager to reassign him to a more suitable territory", growthScore: 0},
          {text: "Focusing on his product knowledge since that's his strength", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 8,
    text: "Ayesha Rehman, a Marketing Director in Lahore, is launching a new women's health product in the Pakistani market. Initial market research shows that cultural sensitivities and traditional attitudes might pose challenges for product acceptance. Her team, including Brand Manager Faisal Malik and Medical Advisor Dr. Kiran Nasir, suggests a conservative marketing approach. However, Ayesha believes that bold, educational campaigns could change perceptions and create a new market category. The company's CEO, Rashid Ahmed, is supportive but emphasizes that failure could impact the entire women's health portfolio. Ayesha must decide between playing it safe or taking a calculated risk that could revolutionize women's healthcare marketing in Pakistan.",
    questions: [
      {
        question: "How should Ayesha view the cultural challenges?",
        options: [
          {text: "As insurmountable barriers that require a conservative approach", growthScore: 0},
          {text: "As opportunities to educate and gradually change market perceptions", growthScore: 100},
          {text: "As reasons to delay the launch until market conditions improve", growthScore: 25},
          {text: "As indicators that the product might not be suitable for the Pakistani market", growthScore: 50}
        ]
      },
      {
        question: "What should guide Ayesha's decision-making process?",
        options: [
          {text: "The safest approach that minimizes risk of failure", growthScore: 25},
          {text: "A balanced strategy that combines innovation with market realities", growthScore: 100},
          {text: "The approach that showcases her leadership and vision", growthScore: 75},
          {text: "The consensus opinion of her experienced team members", growthScore: 50}
        ]
      },
      {
        question: "How should Ayesha handle the pressure from potential failure?",
        options: [
          {text: "Let it guide her toward the most conservative and safe strategy", growthScore: 0},
          {text: "Use it as motivation to develop the most thoughtful and effective approach", growthScore: 100},
          {text: "Ignore it and focus purely on her creative vision", growthScore: 50},
          {text: "Share the responsibility by involving more stakeholders in decision-making", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 9,
    text: "Naveed Khan, a Territory Manager in Peshawar, receives feedback that his presentation skills need improvement after a disastrous meeting with Dr. Salman Afridi, a leading cardiologist. The doctor interrupted his presentation multiple times, questioned his clinical knowledge, and ultimately asked him to leave. Naveed's colleague, Zara Malik, who witnessed the meeting, suggests that he should practice more and perhaps take a presentation skills course. However, Naveed feels embarrassed and considers requesting a different territory where doctors might be more receptive. His Regional Manager, Asif Shah, has scheduled a follow-up meeting to discuss the incident and Naveed's development plan.",
    questions: [
      {
        question: "How should Naveed interpret this difficult experience?",
        options: [
          {text: "As evidence that he's not cut out for dealing with senior physicians", growthScore: 0},
          {text: "As a wake-up call to improve his skills and preparation", growthScore: 100},
          {text: "As an unfortunate encounter with an unusually difficult doctor", growthScore: 50},
          {text: "As a sign that he needs a territory with more cooperative physicians", growthScore: 25}
        ]
      },
      {
        question: "What should be Naveed's immediate priority?",
        options: [
          {text: "Avoiding similar high-profile doctors until he feels more confident", growthScore: 25},
          {text: "Investing time in improving his presentation and clinical knowledge", growthScore: 100},
          {text: "Finding ways to rebuild his confidence through easier interactions", growthScore: 50},
          {text: "Seeking reassignment to a territory that better matches his current skills", growthScore: 0}
        ]
      },
      {
        question: "How should Naveed approach the follow-up meeting with Dr. Afridi?",
        options: [
          {text: "Avoid it and focus on building relationships with other doctors", growthScore: 25},
          {text: "Prepare thoroughly and use it as an opportunity to demonstrate improvement", growthScore: 100},
          {text: "Bring a senior colleague to handle the technical discussions", growthScore: 75},
          {text: "Keep the interaction brief and professional to minimize risks", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 10,
    text: "Samina Iqbal, a Product Manager for respiratory drugs in Islamabad, discovers that a competitor has launched a similar product with better pricing and more aggressive marketing. Her product, which was a market leader for two years, is rapidly losing market share. The sales team, led by Manager Adnan Qureshi, is demanding immediate price reductions and increased promotional budgets. However, Samina believes that innovation in product positioning and value proposition could be more effective than a price war. Her Director, Fahad Malik, is pressuring her for quick solutions as the quarterly results are approaching. The company's reputation in the respiratory segment is at stake.",
    questions: [
      {
        question: "How should Samina view this competitive challenge?",
        options: [
          {text: "As an inevitable market reality that requires defensive strategies", growthScore: 25},
          {text: "As an opportunity to innovate and differentiate her product more effectively", growthScore: 100},
          {text: "As evidence that their product has reached the end of its lifecycle", growthScore: 0},
          {text: "As a situation that requires matching competitor tactics exactly", growthScore: 50}
        ]
      },
      {
        question: "What should be Samina's approach to the sales team's demands?",
        options: [
          {text: "Immediately implement their suggestions to maintain team morale", growthScore: 50},
          {text: "Collaborate with them to develop innovative strategies beyond price competition", growthScore: 100},
          {text: "Explain that pricing decisions are beyond her control", growthScore: 25},
          {text: "Focus on providing them with better promotional materials and support", growthScore: 75}
        ]
      },
      {
        question: "How should Samina handle the pressure for quick results?",
        options: [
          {text: "Implement the fastest possible solutions even if they're not optimal", growthScore: 25},
          {text: "Develop a comprehensive strategy that balances short-term needs with long-term success", growthScore: 100},
          {text: "Focus entirely on long-term strategy regardless of immediate pressures", growthScore: 75},
          {text: "Seek additional time by explaining the complexity of the situation", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 11,
    text: "Ahmed Hassan, a Sales Manager in Rawalpindi, is mentoring a new hire, Fatima Sheikh, who has an MBA but no pharmaceutical experience. During her first month, Fatima struggles with medical terminology and feels overwhelmed by the complexity of drug mechanisms. She confides in Ahmed that she's considering leaving for a simpler sales role in FMCG. Ahmed's other team members, including experienced representatives like Tariq Ali and Nadia Khan, suggest that pharmaceutical sales requires a specific type of person and that Fatima might not be suitable. Ahmed must decide how to support Fatima while managing team dynamics and ensuring territory coverage.",
    questions: [
      {
        question: "How should Ahmed view Fatima's struggles?",
        options: [
          {text: "As normal challenges that can be overcome with proper support and time", growthScore: 100},
          {text: "As indicators that she might not have the aptitude for pharmaceutical sales", growthScore: 0},
          {text: "As evidence that the company's hiring process needs improvement", growthScore: 50},
          {text: "As temporary difficulties that will resolve themselves with experience", growthScore: 75}
        ]
      },
      {
        question: "What approach should Ahmed take with his experienced team members?",
        options: [
          {text: "Agree with their assessment to maintain team harmony", growthScore: 25},
          {text: "Challenge their fixed mindset and encourage them to support Fatima's development", growthScore: 100},
          {text: "Keep Fatima separate from the team until she improves", growthScore: 0},
          {text: "Ask them to be patient while Fatima finds her footing", growthScore: 50}
        ]
      },
      {
        question: "How should Ahmed support Fatima's development?",
        options: [
          {text: "Suggest she consider whether pharmaceutical sales is right for her", growthScore: 0},
          {text: "Create a structured learning plan with gradual skill-building opportunities", growthScore: 100},
          {text: "Assign her only to easy customers until she gains confidence", growthScore: 50},
          {text: "Recommend additional training courses to accelerate her learning", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 12,
    text: "Zainab Malik, a Regional Training Manager in Karachi, is implementing a new competency-based training program. Some senior sales representatives, including Shahid Awan and Rubina Qureshi, resist the program, claiming they've been successful for years without formal training. They argue that their experience and relationships are more valuable than theoretical knowledge. Younger representatives like Hassan Sheikh and Sana Tariq are enthusiastic about the program and showing rapid improvement. Zainab's manager, Director Imran Malik, is measuring the program's success based on overall team performance and adoption rates.",
    questions: [
      {
        question: "How should Zainab address the senior representatives' resistance?",
        options: [
          {text: "Exempt them from the program since they're already successful", growthScore: 0},
          {text: "Help them see how the training can enhance their existing strengths", growthScore: 100},
          {text: "Focus the program only on newer representatives who need it more", growthScore: 50},
          {text: "Make the training mandatory regardless of their objections", growthScore: 75}
        ]
      },
      {
        question: "What should Zainab emphasize about the relationship between experience and learning?",
        options: [
          {text: "That experience is more valuable than formal training", growthScore: 0},
          {text: "That continuous learning enhances the value of experience", growthScore: 100},
          {text: "That training is mainly for people who lack natural talent", growthScore: 25},
          {text: "That different people learn in different ways", growthScore: 75}
        ]
      },
      {
        question: "How should Zainab measure the program's success?",
        options: [
          {text: "By the number of people who complete the training", growthScore: 50},
          {text: "By the improvement in individual and team performance metrics", growthScore: 100},
          {text: "By the positive feedback from participants", growthScore: 75},
          {text: "By the adoption rate across different experience levels", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 13,
    text: "Rashid Ahmed, a Business Development Manager in Lahore, is negotiating a partnership with a major hospital chain for exclusive supply of critical care medications. The hospital's procurement committee, led by Dr. Amjad Hussain, has raised concerns about the company's ability to maintain consistent supply during peak demand periods. Rashid's previous partnership with another hospital chain failed due to supply chain issues, which has damaged his credibility. His colleague, Saima Khan, suggests bringing in the supply chain director for the negotiations, but Rashid feels this might signal weakness. The deal is worth millions and could establish the company as a leader in the hospital segment.",
    questions: [
      {
        question: "How should Rashid view his previous partnership failure?",
        options: [
          {text: "As a learning experience that has prepared him for better negotiations", growthScore: 100},
          {text: "As evidence that he might not be suited for complex partnership deals", growthScore: 0},
          {text: "As an unfortunate situation caused by factors beyond his control", growthScore: 50},
          {text: "As a reason to be more cautious and conservative in future deals", growthScore: 75}
        ]
      },
      {
        question: "What should Rashid do about the hospital's supply chain concerns?",
        options: [
          {text: "Provide strong assurances based on current capabilities", growthScore: 50},
          {text: "Involve supply chain experts to address concerns transparently and thoroughly", growthScore: 100},
          {text: "Downplay the concerns and focus on other partnership benefits", growthScore: 25},
          {text: "Offer financial guarantees to compensate for any potential supply issues", growthScore: 75}
        ]
      },
      {
        question: "How should Rashid approach this high-stakes negotiation?",
        options: [
          {text: "Focus on closing the deal quickly before more concerns arise", growthScore: 25},
          {text: "Take time to build a comprehensive proposal that addresses all stakeholder needs", growthScore: 100},
          {text: "Rely on his relationship-building skills to overcome technical concerns", growthScore: 75},
          {text: "Bring senior management to demonstrate the company's commitment", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 14,
    text: "Nadia Farooq, a Marketing Manager for pediatric vaccines in Islamabad, faces resistance from parents and some healthcare providers who are concerned about vaccine safety. Social media campaigns by anti-vaccine groups have created doubt in the market. Her team, including Digital Marketing Specialist Fahad Ali and Medical Communications Manager Dr. Saba Malik, suggests avoiding direct confrontation with critics and focusing on supportive healthcare providers. However, Nadia believes that educational campaigns addressing concerns directly could be more effective. The company's vaccine portfolio represents a significant portion of revenue, and public perception directly impacts sales.",
    questions: [
      {
        question: "How should Nadia approach the vaccine hesitancy challenge?",
        options: [
          {text: "Avoid controversial topics and focus on routine promotional activities", growthScore: 25},
          {text: "Develop comprehensive educational campaigns that address concerns transparently", growthScore: 100},
          {text: "Counter anti-vaccine messages with equally strong pro-vaccine content", growthScore: 75},
          {text: "Work only with healthcare providers who are already vaccine advocates", growthScore: 50}
        ]
      },
      {
        question: "What should be Nadia's strategy for dealing with criticism?",
        options: [
          {text: "Ignore critics and focus on positive messaging", growthScore: 25},
          {text: "Engage constructively with legitimate concerns while countering misinformation", growthScore: 100},
          {text: "Defend vaccines aggressively to show confidence in the products", growthScore: 50},
          {text: "Let healthcare providers handle all communication about vaccine safety", growthScore: 75}
        ]
      },
      {
        question: "How should Nadia measure the success of her approach?",
        options: [
          {text: "By the absence of negative publicity or criticism", growthScore: 25},
          {text: "By improved public understanding and acceptance of vaccines", growthScore: 100},
          {text: "By maintaining current vaccination rates without decline", growthScore: 50},
          {text: "By positive feedback from supportive healthcare providers", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 15,
    text: "Tariq Mahmood, a Sales Director in Faisalabad, discovers that one of his top performers, Asma Iqbal, has been providing incorrect information about drug interactions to physicians. When confronted, Asma admits she wasn't sure about the technical details but didn't want to appear incompetent in front of doctors. Her actions could have serious consequences for patient safety and the company's reputation. Other team members, including Bilal Shah and Kiran Ahmed, are shocked and suggest that Asma should be immediately terminated. Tariq must balance the need for accountability with the opportunity for learning and improvement.",
    questions: [
      {
        question: "How should Tariq view Asma's mistake?",
        options: [
          {text: "As a serious error that reveals her unsuitability for pharmaceutical sales", growthScore: 0},
          {text: "As a learning opportunity that highlights the need for better training and support", growthScore: 100},
          {text: "As an isolated incident that doesn't reflect her overall capabilities", growthScore: 50},
          {text: "As evidence that high performers sometimes take dangerous shortcuts", growthScore: 25}
        ]
      },
      {
        question: "What should be Tariq's immediate response?",
        options: [
          {text: "Terminate Asma immediately to send a strong message about standards", growthScore: 0},
          {text: "Implement corrective measures including intensive retraining and close supervision", growthScore: 100},
          {text: "Transfer Asma to a non-customer facing role until she improves", growthScore: 50},
          {text: "Issue a warning and monitor her performance more closely", growthScore: 75}
        ]
      },
      {
        question: "How should Tariq address this issue with the broader team?",
        options: [
          {text: "Use it as an example of what not to do and the consequences of mistakes", growthScore: 50},
          {text: "Focus on creating a culture where people feel safe to admit knowledge gaps", growthScore: 100},
          {text: "Emphasize the importance of following company policies and procedures", growthScore: 75},
          {text: "Increase monitoring and supervision to prevent similar incidents", growthScore: 25}
        ]
      }
    ]
  },
  {
    id: 16,
    text: "Saima Hassan, a Product Manager for diabetes care in Karachi, receives market research showing that patients prefer her competitor's glucose monitoring device due to its user-friendly design. Her product, while clinically superior, has a complex interface that elderly patients find difficult to use. The R&D team, led by Dr. Faisal Khan, argues that the clinical accuracy should be the primary selling point. However, patient feedback consistently highlights usability issues. Saima's manager, Director Amna Sheikh, wants a strategy that can regain market leadership within six months.",
    questions: [
      {
        question: "How should Saima interpret the market research findings?",
        options: [
          {text: "As evidence that patients don't understand the importance of clinical accuracy", growthScore: 0},
          {text: "As valuable feedback that should guide product improvement and positioning", growthScore: 100},
          {text: "As a temporary market trend that will change as patients become more educated", growthScore: 50},
          {text: "As proof that the competitor's marketing is misleading patients", growthScore: 25}
        ]
      },
      {
        question: "What should be Saima's approach to the R&D team's perspective?",
        options: [
          {text: "Support their focus on clinical superiority as the key differentiator", growthScore: 25},
          {text: "Help them understand that user experience is equally important for patient outcomes", growthScore: 100},
          {text: "Suggest developing separate products for different patient segments", growthScore: 75},
          {text: "Recommend improving marketing to better communicate clinical benefits", growthScore: 50}
        ]
      },
      {
        question: "How should Saima balance clinical excellence with user experience?",
        options: [
          {text: "Prioritize clinical accuracy since it's more important for patient health", growthScore: 25},
          {text: "Develop solutions that optimize both clinical performance and user experience", growthScore: 100},
          {text: "Focus on user experience since that's what patients currently prefer", growthScore: 75},
          {text: "Create different versions for different patient needs and preferences", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 17,
    text: "Fahad Sheikh, a Territory Sales Manager in Multan, is struggling to penetrate a group of private clinics dominated by a competitor who has exclusive relationships with key physicians. Dr. Nasir Ahmed, the most influential doctor in the group, has refused to meet with Fahad despite multiple attempts. Fahad's colleague, Zara Malik, suggests that some territories are simply too difficult and that he should focus on easier targets. However, Fahad knows that success in this territory could significantly boost his career. His Regional Manager, Kamran Ali, has given him three months to show progress or face territory reassignment.",
    questions: [
      {
        question: "How should Fahad view this challenging territory?",
        options: [
          {text: "As an impossible situation that requires a different approach or reassignment", growthScore: 0},
          {text: "As an opportunity to develop advanced relationship-building and strategic skills", growthScore: 100},
          {text: "As evidence that some territories are inherently more difficult than others", growthScore: 25},
          {text: "As a test of his persistence and determination", growthScore: 75}
        ]
      },
      {
        question: "What should be Fahad's strategy for approaching Dr. Ahmed?",
        options: [
          {text: "Continue with the same approach since persistence eventually pays off", growthScore: 50},
          {text: "Study Dr. Ahmed's interests and find creative ways to add value to his practice", growthScore: 100},
          {text: "Focus on other doctors first and use their influence to reach Dr. Ahmed", growthScore: 75},
          {text: "Ask his manager to use senior-level contacts to arrange a meeting", growthScore: 25}
        ]
      },
      {
        question: "How should Fahad handle the three-month deadline pressure?",
        options: [
          {text: "Focus on quick wins that can show immediate progress", growthScore: 50},
          {text: "Develop a comprehensive strategy that balances short-term results with long-term relationship building", growthScore: 100},
          {text: "Request an extension to allow more time for relationship development", growthScore: 25},
          {text: "Accept that some situations are beyond individual control", growthScore: 0}
        ]
      }
    ]
  },
  {
    id: 18,
    text: "Kiran Nasir, a Medical Affairs Director in Lahore, is preparing for a regulatory audit of her company's clinical trial data. The auditors have identified several documentation gaps that could result in significant penalties. Her team, including Clinical Research Manager Dr. Hassan Malik and Regulatory Affairs Specialist Ayesha Khan, is working overtime to address the issues. However, some gaps appear to be due to systemic problems in their processes rather than individual errors. Kiran must present the company's response to the regulatory authority while ensuring future compliance.",
    questions: [
      {
        question: "How should Kiran approach the documentation gaps?",
        options: [
          {text: "Focus on fixing the immediate issues to satisfy the auditors", growthScore: 50},
          {text: "Use this as an opportunity to comprehensively improve all clinical processes", growthScore: 100},
          {text: "Argue that the gaps don't affect the validity of the clinical data", growthScore: 25},
          {text: "Blame external factors and vendors for the documentation problems", growthScore: 0}
        ]
      },
      {
        question: "What should be Kiran's primary concern during the audit?",
        options: [
          {text: "Minimizing penalties and protecting the company's reputation", growthScore: 50},
          {text: "Demonstrating commitment to continuous improvement and patient safety", growthScore: 100},
          {text: "Showing that the problems were isolated incidents", growthScore: 25},
          {text: "Proving that the company's standards meet industry norms", growthScore: 75}
        ]
      },
      {
        question: "How should Kiran handle the systemic process issues?",
        options: [
          {text: "Address them after the audit to avoid complicating the current situation", growthScore: 25},
          {text: "Present them as part of a comprehensive improvement plan to the auditors", growthScore: 100},
          {text: "Implement quick fixes that address the most visible problems", growthScore: 50},
          {text: "Hire external consultants to redesign the entire system", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 19,
    text: "Bilal Ahmed, a Brand Manager for mental health medications in Islamabad, faces the challenge of reducing stigma around psychiatric treatments in Pakistani society. Many patients discontinue treatment due to social pressure, and physicians are reluctant to prescribe psychiatric medications due to patient resistance. His marketing team, including Communications Specialist Sana Qureshi and Market Research Analyst Adnan Shah, suggests focusing on the small segment of educated, urban patients who are more accepting. However, Bilal believes that broader educational campaigns could gradually change societal attitudes and expand the market significantly.",
    questions: [
      {
        question: "How should Bilal approach the stigma challenge?",
        options: [
          {text: "Accept it as a cultural reality and work within existing constraints", growthScore: 25},
          {text: "Develop long-term educational campaigns to gradually change perceptions", growthScore: 100},
          {text: "Focus marketing efforts on the most receptive patient segments", growthScore: 50},
          {text: "Wait for societal attitudes to change naturally over time", growthScore: 0}
        ]
      },
      {
        question: "What should be Bilal's strategy for physician engagement?",
        options: [
          {text: "Work only with psychiatrists who are already comfortable prescribing", growthScore: 50},
          {text: "Educate all physicians about mental health and provide tools to address patient concerns", growthScore: 100},
          {text: "Focus on private practice physicians who have more flexibility", growthScore: 75},
          {text: "Develop referral programs between general physicians and specialists", growthScore: 75}
        ]
      },
      {
        question: "How should Bilal measure success in this challenging market?",
        options: [
          {text: "By maintaining current market share without decline", growthScore: 50},
          {text: "By gradual improvements in treatment adherence and market acceptance", growthScore: 100},
          {text: "By positive feedback from supportive physicians and patients", growthScore: 75},
          {text: "By achieving sales targets within the existing market constraints", growthScore: 25}
        ]
      }
    ]
  },
  {
    id: 20,
    text: "Amna Tariq, a Sales Training Manager in Karachi, discovers that her newly implemented training program is not producing the expected results. Sales representatives who completed the program are not showing significant improvement in their performance metrics. Some managers, including Regional Director Tariq Jameel and Area Manager Nadia Malik, are questioning the program's effectiveness and suggesting a return to traditional on-the-job training methods. Amna's supervisor, HR Director Fahad Qureshi, is under pressure to show ROI on the training investment and is considering discontinuing the program.",
    questions: [
      {
        question: "How should Amna interpret the program's initial results?",
        options: [
          {text: "As evidence that the training approach is fundamentally flawed", growthScore: 0},
          {text: "As valuable feedback that can guide program improvements and refinements", growthScore: 100},
          {text: "As proof that some people cannot benefit from formal training", growthScore: 25},
          {text: "As indication that the program needs more time to show results", growthScore: 50}
        ]
      },
      {
        question: "What should be Amna's response to the managers' criticism?",
        options: [
          {text: "Defend the program and explain why it should continue unchanged", growthScore: 25},
          {text: "Collaborate with them to identify specific improvements and modifications", growthScore: 100},
          {text: "Agree to return to traditional methods since they prefer them", growthScore: 0},
          {text: "Provide additional data to prove the program's theoretical value", growthScore: 75}
        ]
      },
      {
        question: "How should Amna approach the pressure to show immediate ROI?",
        options: [
          {text: "Focus on short-term metrics that can demonstrate quick wins", growthScore: 50},
          {text: "Develop a comprehensive measurement system that tracks both immediate and long-term impact", growthScore: 100},
          {text: "Argue that training benefits cannot be measured in purely financial terms", growthScore: 25},
          {text: "Reduce program costs to improve the ROI calculation", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 21,
    text: "Hassan Malik, a Regional Sales Manager in Peshawar, is dealing with a territory where cultural and language barriers significantly impact sales performance. His team includes representatives like Gul Khan and Mariam Shah who are local to the region, and others like Ahmed Raza and Fatima Ali who are from other provinces. The local representatives are more successful with traditional physicians, while the non-local representatives struggle despite having better technical knowledge. Hassan must find ways to leverage everyone's strengths while addressing the cultural challenges.",
    questions: [
      {
        question: "How should Hassan view the performance differences?",
        options: [
          {text: "As natural advantages that some people have due to their background", growthScore: 0},
          {text: "As different skill sets that can be developed and shared across the team", growthScore: 100},
          {text: "As evidence that territory assignments should be based on cultural fit", growthScore: 50},
          {text: "As temporary challenges that will resolve with time and experience", growthScore: 75}
        ]
      },
      {
        question: "What should be Hassan's strategy for the non-local representatives?",
        options: [
          {text: "Reassign them to territories that better match their background", growthScore: 25},
          {text: "Provide cultural training and pair them with local mentors", growthScore: 100},
          {text: "Focus them on modern, urban physicians who are less traditional", growthScore: 75},
          {text: "Accept that they will have limited success in this region", growthScore: 0}
        ]
      },
      {
        question: "How should Hassan leverage the local representatives' success?",
        options: [
          {text: "Use them as the primary representatives for all important customers", growthScore: 50},
          {text: "Create knowledge-sharing programs where they teach cultural insights to others", growthScore: 100},
          {text: "Reward them for their natural advantages in the territory", growthScore: 25},
          {text: "Keep the two groups separate to avoid conflicts", growthScore: 0}
        ]
      }
    ]
  },
  {
    id: 22,
    text: "Sana Ahmed, a Product Manager for women's health products in Lahore, is launching a contraceptive product in a market where religious and cultural sensitivities are significant. Her research shows strong medical need and physician support, but marketing communications must be extremely careful. Her team, including Brand Manager Usman Farooq and Medical Advisor Dr. Rubina Iqbal, is divided between conservative messaging that avoids controversy and educational campaigns that address misconceptions. The company's leadership, including CEO Rashid Shah, supports the launch but emphasizes the need for cultural sensitivity.",
    questions: [
      {
        question: "How should Sana approach the cultural sensitivities?",
        options: [
          {text: "Avoid any messaging that could be considered controversial", growthScore: 25},
          {text: "Develop respectful educational content that addresses misconceptions gradually", growthScore: 100},
          {text: "Focus only on the medical benefits without discussing social aspects", growthScore: 50},
          {text: "Let healthcare providers handle all patient communication", growthScore: 75}
        ]
      },
      {
        question: "What should guide Sana's marketing strategy?",
        options: [
          {text: "The safest approach that minimizes any risk of backlash", growthScore: 25},
          {text: "A balanced strategy that respects culture while promoting health education", growthScore: 100},
          {text: "The approach that showcases her leadership and vision", growthScore: 75},
          {text: "The consensus opinion of her experienced team members", growthScore: 50}
        ]
      },
      {
        question: "How should Sana handle the team's divided opinions?",
        options: [
          {text: "Choose the approach supported by the majority", growthScore: 50},
          {text: "Synthesize both perspectives into a comprehensive strategy", growthScore: 100},
          {text: "Let senior management decide the approach", growthScore: 25},
          {text: "Test both approaches in different markets", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 23,
    text: "Adnan Qureshi, a Territory Sales Manager in Sialkot, discovers that his top-performing representative, Zainab Malik, has been successful partly due to providing excessive gifts and entertainment to physicians, which violates company compliance policies. While her results are excellent, the methods raise ethical concerns. Other representatives, including Kamran Sheikh and Ayesha Khan, have been following company policies strictly but achieving lower sales. Adnan's Area Manager, Imran Tariq, is focused on results and hasn't questioned Zainab's methods. The annual performance review is approaching, and Adnan must address this situation.",
    questions: [
      {
        question: "How should Adnan view Zainab's success?",
        options: [
          {text: "As proof that aggressive relationship-building is necessary for success", growthScore: 25},
          {text: "As unsustainable success that undermines long-term business integrity", growthScore: 100},
          {text: "As evidence that company policies are too restrictive for market realities", growthScore: 0},
          {text: "As a personal choice that doesn't affect others as long as results are good", growthScore: 50}
        ]
      },
      {
        question: "What should be Adnan's immediate action?",
        options: [
          {text: "Ignore the issue since Zainab's results are benefiting the territory", growthScore: 0},
          {text: "Address the compliance violations while helping Zainab develop ethical sales methods", growthScore: 100},
          {text: "Report the situation to senior management for their decision", growthScore: 75},
          {text: "Quietly advise Zainab to be more discreet about her methods", growthScore: 25}
        ]
      },
      {
        question: "How should Adnan handle the performance review situation?",
        options: [
          {text: "Reward Zainab's results while privately addressing the methods", growthScore: 50},
          {text: "Evaluate performance based on both results and adherence to company values", growthScore: 100},
          {text: "Focus only on results since that's what the company ultimately measures", growthScore: 25},
          {text: "Recommend Zainab for promotion based on her sales achievements", growthScore: 0}
        ]
      }
    ]
  },
  {
    id: 24,
    text: "Rubina Qureshi, a Marketing Director for oncology products in Islamabad, faces the challenge of communicating complex treatment protocols to physicians with varying levels of oncology expertise. Some physicians, like Dr. Salman Akhtar, are highly specialized and want detailed scientific data, while others, like Dr. Naseem Khan, are general practitioners who need simplified, practical information. Her team, including Medical Communications Manager Dr. Faisal Malik and Training Specialist Sana Tariq, suggests creating separate materials for different audiences. However, this approach requires significant resources and coordination.",
    questions: [
      {
        question: "How should Rubina approach the diverse physician audience?",
        options: [
          {text: "Focus on the specialists since they are the primary prescribers", growthScore: 50},
          {text: "Develop tailored communications that meet each audience's specific needs", growthScore: 100},
          {text: "Create general materials that work for all physicians", growthScore: 25},
          {text: "Let the sales team adapt the message for different physicians", growthScore: 75}
        ]
      },
      {
        question: "What should be Rubina's priority in resource allocation?",
        options: [
          {text: "Invest heavily in specialist-focused materials for maximum impact", growthScore: 50},
          {text: "Balance resources to effectively serve all physician segments", growthScore: 100},
          {text: "Start with general practitioners since they represent a larger number", growthScore: 75},
          {text: "Focus on the most cost-effective approach regardless of audience needs", growthScore: 25}
        ]
      },
      {
        question: "How should Rubina measure the success of her communication strategy?",
        options: [
          {text: "By the positive feedback from specialist physicians", growthScore: 50},
          {text: "By improved understanding and appropriate prescribing across all physician types", growthScore: 100},
          {text: "By the efficiency of material production and distribution", growthScore: 25},
          {text: "By the sales team's satisfaction with the materials provided", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 25,
    text: "Kamran Ali, a Business Development Manager in Karachi, is negotiating a joint venture with an international pharmaceutical company to bring innovative cancer treatments to Pakistan. The foreign partner, represented by Director Sarah Johnson, has concerns about the local regulatory environment and market access challenges. Kamran's previous international partnership experience was limited, and he feels overwhelmed by the complexity of the negotiations. His colleague, Amna Hassan, who has more international experience, offers to assist, but Kamran worries this might undermine his credibility with senior management.",
    questions: [
      {
        question: "How should Kamran view his limited international experience?",
        options: [
          {text: "As a significant disadvantage that might doom the negotiations", growthScore: 0},
          {text: "As an opportunity to learn and develop new capabilities", growthScore: 100},
          {text: "As evidence that he might not be the right person for this role", growthScore: 25},
          {text: "As a temporary limitation that will resolve with time", growthScore: 50}
        ]
      },
      {
        question: "What should be Kamran's approach to Amna's offer of assistance?",
        options: [
          {text: "Decline to maintain his independence and credibility", growthScore: 25},
          {text: "Accept her help and use it as a learning opportunity", growthScore: 100},
          {text: "Ask management to assign Amna as the lead negotiator", growthScore: 0},
          {text: "Accept help privately while maintaining public leadership", growthScore: 50}
        ]
      },
      {
        question: "How should Kamran handle the foreign partner's concerns?",
        options: [
          {text: "Minimize the concerns to maintain negotiation momentum", growthScore: 25},
          {text: "Address them thoroughly and transparently while proposing solutions", growthScore: 100},
          {text: "Refer them to senior management for resolution", growthScore: 50},
          {text: "Focus on the benefits of the Pakistani market to offset concerns", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 26,
    text: "Fatima Sheikh, a Regional Training Coordinator in Multan, is implementing a digital learning platform for sales representatives. Many representatives, particularly those over 40 like Shahid Malik and Nadia Iqbal, are struggling with the technology and prefer traditional classroom training. Younger representatives like Hassan Ali and Zara Khan are adapting quickly and showing improved performance. Fatima's manager, Learning Director Tariq Ahmed, wants to see high adoption rates across all age groups. The company has invested significantly in the digital platform and expects it to replace most traditional training.",
    questions: [
      {
        question: "How should Fatima address the age-related technology challenges?",
        options: [
          {text: "Accept that older representatives may never fully adapt to digital learning", growthScore: 0},
          {text: "Provide additional support and training to help everyone succeed with the new platform", growthScore: 100},
          {text: "Create separate training tracks for different age groups", growthScore: 50},
          {text: "Focus resources on the representatives who are adapting successfully", growthScore: 25}
        ]
      },
      {
        question: "What should be Fatima's strategy for the struggling representatives?",
        options: [
          {text: "Allow them to continue with traditional methods they prefer", growthScore: 25},
          {text: "Provide intensive coaching and gradual introduction to digital tools", growthScore: 100},
          {text: "Pair them with younger colleagues who can provide technical support", growthScore: 75},
          {text: "Set lower expectations for their digital platform usage", growthScore: 0}
        ]
      },
      {
        question: "How should Fatima measure the platform's success?",
        options: [
          {text: "By the overall usage statistics and completion rates", growthScore: 50},
          {text: "By the learning outcomes and performance improvements across all users", growthScore: 100},
          {text: "By the positive feedback from representatives who like the platform", growthScore: 75},
          {text: "By the cost savings compared to traditional training methods", growthScore: 25}
        ]
      }
    ]
  },
  {
    id: 27,
    text: "Imran Siddiqui, a Product Manager for diabetes medications in Faisalabad, receives feedback that physicians are concerned about the side effect profile of his new product compared to established alternatives. Dr. Amjad Khan, a leading endocrinologist, has publicly questioned the risk-benefit ratio at a medical conference. Imran's medical team, led by Dr. Kiran Malik, insists that the clinical data supports the product's safety profile. However, market research shows that physician perception is significantly impacting prescription rates. The company's investment in this product launch has been substantial.",
    questions: [
      {
        question: "How should Imran respond to the physician concerns?",
        options: [
          {text: "Defend the product strongly using available clinical data", growthScore: 50},
          {text: "Acknowledge concerns and provide comprehensive risk-benefit education", growthScore: 100},
          {text: "Focus marketing on physicians who are already supportive", growthScore: 25},
          {text: "Request additional clinical studies to address the concerns", growthScore: 75}
        ]
      },
      {
        question: "What should be Imran's approach to Dr. Khan's public criticism?",
        options: [
          {text: "Ignore it and focus on building relationships with other physicians", growthScore: 25},
          {text: "Engage with Dr. Khan directly to understand and address his specific concerns", growthScore: 100},
          {text: "Counter his criticism with testimonials from supportive physicians", growthScore: 50},
          {text: "Ask senior management to use their influence to address the situation", growthScore: 0}
        ]
      },
      {
        question: "How should Imran balance clinical data with market perception?",
        options: [
          {text: "Rely primarily on clinical data since it's more objective", growthScore: 50},
          {text: "Address both clinical evidence and physician perceptions comprehensively", growthScore: 100},
          {text: "Focus on changing market perception through better marketing", growthScore: 75},
          {text: "Accept that some products face inherent market challenges", growthScore: 0}
        ]
      }
    ]
  },
  {
    id: 28,
    text: "Ayesha Khan, a Territory Sales Manager in Lahore, is working with a team of medical representatives who have different educational backgrounds. Some, like Dr. Faisal Ahmed and Dr. Sana Malik, have medical degrees, while others, like Bilal Sheikh and Mariam Qureshi, have business or science backgrounds. The medically qualified representatives often dominate discussions with physicians and sometimes undermine their non-medical colleagues. Ayesha notices that this is affecting team morale and overall territory performance.",
    questions: [
      {
        question: "How should Ayesha view the educational background differences?",
        options: [
          {text: "As natural advantages that should determine role assignments", growthScore: 0},
          {text: "As different strengths that can complement each other when properly managed", growthScore: 100},
          {text: "As a hiring issue that should be addressed by recruiting more medical graduates", growthScore: 25},
          {text: "As a temporary challenge that will resolve as non-medical representatives gain experience", growthScore: 50}
        ]
      },
      {
        question: "What should be Ayesha's approach to the team dynamics?",
        options: [
          {text: "Let the medically qualified representatives take the lead since they have more credibility", growthScore: 25},
          {text: "Develop strategies that leverage everyone's unique strengths and contributions", growthScore: 100},
          {text: "Separate the teams to avoid conflicts and comparisons", growthScore: 0},
          {text: "Provide additional medical training to non-medical representatives", growthScore: 75}
        ]
      },
      {
        question: "How should Ayesha address the undermining behavior?",
        options: [
          {text: "Ignore it since it's based on legitimate educational differences", growthScore: 0},
          {text: "Address it directly and establish norms for respectful collaboration", growthScore: 100},
          {text: "Reassign representatives to minimize interactions", growthScore: 25},
          {text: "Focus on results rather than team dynamics", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 29,
    text: "Tariq Jameel, a Sales Director in Rawalpindi, is implementing a new performance management system that includes 360-degree feedback from colleagues, customers, and supervisors. Some senior sales managers, including Nadia Farooq and Hassan Malik, are resistant to receiving feedback from their subordinates and customers. They argue that their experience and results should speak for themselves. Younger managers like Zainab Ali and Adnan Shah are embracing the system and using feedback for improvement. The CEO, Syed Rashid Ahmed, has mandated the system company-wide.",
    questions: [
      {
        question: "How should Tariq address the senior managers' resistance?",
        options: [
          {text: "Exempt them from the system since they're already proven performers", growthScore: 0},
          {text: "Help them understand how feedback can enhance their already strong performance", growthScore: 100},
          {text: "Make the system mandatory regardless of their comfort level", growthScore: 75},
          {text: "Modify the system to be less threatening for experienced managers", growthScore: 50}
        ]
      },
      {
        question: "What should Tariq emphasize about the purpose of 360-degree feedback?",
        options: [
          {text: "That it's a tool for identifying underperformers", growthScore: 25},
          {text: "That it's an opportunity for continuous learning and development", growthScore: 100},
          {text: "That it's a requirement from senior management", growthScore: 50},
          {text: "That it's a way to validate existing performance levels", growthScore: 0}
        ]
      },
      {
        question: "How should Tariq handle the different responses to the system?",
        options: [
          {text: "Focus support on managers who are embracing the system", growthScore: 50},
          {text: "Provide additional coaching to help resistant managers see the value", growthScore: 100},
          {text: "Create separate processes for different comfort levels", growthScore: 25},
          {text: "Let natural adoption occur over time", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 30,
    text: "Sana Malik, a Brand Manager for respiratory products in Karachi, discovers that her main competitor has launched a patient support program that is significantly impacting market share. The competitor's program provides free home delivery, medication reminders, and nurse consultations. Sana's company has limited resources for such programs, and her manager, Marketing Director Fahad Qureshi, is focused on traditional promotional activities. However, Sana believes that innovative patient services could differentiate her brand and improve patient outcomes.",
    questions: [
      {
        question: "How should Sana view the competitive challenge?",
        options: [
          {text: "As an unfair advantage that her company cannot match with current resources", growthScore: 0},
          {text: "As an opportunity to innovate and find creative solutions within resource constraints", growthScore: 100},
          {text: "As evidence that the market is moving toward service-based competition", growthScore: 75},
          {text: "As a temporary competitive tactic that will lose effectiveness over time", growthScore: 50}
        ]
      },
      {
        question: "What should be Sana's approach to resource limitations?",
        options: [
          {text: "Accept them as constraints and focus on traditional marketing methods", growthScore: 25},
          {text: "Develop creative, cost-effective alternatives that provide similar patient value", growthScore: 100},
          {text: "Request additional budget to match competitor offerings exactly", growthScore: 50},
          {text: "Focus on other competitive advantages like product quality", growthScore: 75}
        ]
      },
      {
        question: "How should Sana present her ideas to her manager?",
        options: [
          {text: "Emphasize the competitive threat and need for immediate response", growthScore: 50},
          {text: "Present a comprehensive business case showing patient benefits and ROI potential", growthScore: 100},
          {text: "Suggest starting with a small pilot program to test effectiveness", growthScore: 75},
          {text: "Focus on the innovative nature of the approach", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 31,
    text: "Ahmed Raza, a Medical Affairs Manager in Islamabad, is organizing a medical symposium on cardiovascular health. He has invited Dr. Amina Tariq, a renowned cardiologist, as the keynote speaker. However, Dr. Tariq has specific requirements for her presentation that conflict with the company's standard symposium format. She wants to include discussion of competitor products and present balanced views rather than focusing solely on the company's products. Ahmed's marketing colleagues, including Brand Manager Usman Malik, are concerned about giving competitors visibility. The symposium is crucial for the company's thought leadership positioning.",
    questions: [
      {
        question: "How should Ahmed approach Dr. Tariq's requirements?",
        options: [
          {text: "Insist on the standard format to maintain company messaging control", growthScore: 25},
          {text: "Accommodate her requirements to ensure scientific credibility and physician engagement", growthScore: 100},
          {text: "Find a compromise that partially meets her needs", growthScore: 75},
          {text: "Invite a different speaker who will follow company guidelines", growthScore: 0}
        ]
      },
      {
        question: "What should be Ahmed's primary goal for the symposium?",
        options: [
          {text: "To promote company products as effectively as possible", growthScore: 25},
          {text: "To provide valuable medical education that enhances the company's reputation", growthScore: 100},
          {text: "To avoid any mention of competitor products", growthScore: 0},
          {text: "To satisfy the marketing team's promotional objectives", growthScore: 50}
        ]
      },
      {
        question: "How should Ahmed address his colleagues' concerns?",
        options: [
          {text: "Agree with their concerns and modify the symposium format", growthScore: 25},
          {text: "Help them understand that scientific credibility enhances long-term brand value", growthScore: 100},
          {text: "Keep the symposium details confidential to avoid conflicts", growthScore: 0},
          {text: "Let senior management decide the approach", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 32,
    text: "Zara Khan, a Regional Sales Manager in Peshawar, is dealing with a territory where security concerns limit her team's ability to visit certain areas. Some representatives, like Gul Ahmed and Mariam Shah, are local to the region and can access these areas safely, while others, like Hassan Malik and Fatima Ali, cannot. This creates unequal territory coverage and performance disparities. Zara's manager, National Sales Director Imran Qureshi, expects consistent performance across all territories regardless of local challenges.",
    questions: [
      {
        question: "How should Zara address the security-related access limitations?",
        options: [
          {text: "Accept them as unchangeable constraints and adjust expectations accordingly", growthScore: 25},
          {text: "Develop creative solutions like telemedicine support and local partnerships", growthScore: 100},
          {text: "Reassign territories based on representatives' ability to access different areas", growthScore: 50},
          {text: "Focus only on accessible areas and ignore the restricted zones", growthScore: 0}
        ]
      },
      {
        question: "What should be Zara's approach to performance evaluation?",
        options: [
          {text: "Use the same standards for all representatives regardless of constraints", growthScore: 25},
          {text: "Develop context-appropriate metrics that account for local challenges", growthScore: 100},
          {text: "Focus evaluation on effort rather than results in difficult areas", growthScore: 75},
          {text: "Exempt representatives from evaluation in security-affected territories", growthScore: 0}
        ]
      },
      {
        question: "How should Zara leverage the local representatives' advantages?",
        options: [
          {text: "Use them exclusively for all important activities in their areas", growthScore: 50},
          {text: "Create knowledge-sharing and mentoring programs with non-local colleagues", growthScore: 100},
          {text: "Reward them for their natural advantages in the territory", growthScore: 25},
          {text: "Keep teams separate to avoid highlighting disparities", growthScore: 0}
        ]
      }
    ]
  },
  {
    id: 33,
    text: "Bilal Shah, a Product Manager for pain management medications in Lahore, faces the challenge of addressing opioid addiction concerns while promoting legitimate pain treatment. Physicians like Dr. Salma Akhtar are becoming increasingly cautious about prescribing pain medications due to addiction fears, even for patients with genuine medical needs. Bilal's medical team, led by Dr. Faisal Khan, emphasizes the importance of appropriate pain management, while regulatory affairs, headed by Ayesha Malik, stresses the need for strict compliance. The company's pain management portfolio is a significant revenue contributor.",
    questions: [
      {
        question: "How should Bilal approach the addiction concerns?",
        options: [
          {text: "Minimize them to maintain prescription volumes", growthScore: 0},
          {text: "Address them transparently while educating about appropriate use", growthScore: 100},
          {text: "Focus marketing on physicians who are less concerned about resistance", growthScore: 25},
          {text: "Avoid discussing addiction risks to prevent further concerns", growthScore: 50}
        ]
      },
      {
        question: "What should be Bilal's strategy for physician education?",
        options: [
          {text: "Focus on product benefits and minimize risk discussions", growthScore: 25},
          {text: "Provide comprehensive education on both benefits and risk management", growthScore: 100},
          {text: "Let physicians make their own decisions without company influence", growthScore: 50},
          {text: "Emphasize that addiction is primarily a patient responsibility issue", growthScore: 0}
        ]
      },
      {
        question: "How should Bilal balance commercial and ethical considerations?",
        options: [
          {text: "Prioritize commercial success since the company depends on revenue", growthScore: 25},
          {text: "Ensure that commercial activities support appropriate medical practice", growthScore: 100},
          {text: "Let the medical team handle ethics while focusing on business results", growthScore: 0},
          {text: "Avoid ethical discussions and focus on regulatory compliance", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 34,
    text: "Nadia Malik, a Training Manager in Karachi, is developing a leadership development program for high-potential sales representatives. Some participants, like Kamran Ali and Sana Sheikh, are natural leaders who easily grasp leadership concepts, while others, like Ahmed Hassan and Mariam Qureshi, struggle with leadership skills despite being excellent individual contributors. Nadia's manager, HR Director Tariq Mahmood, wants to see clear differentiation between participants to identify future leaders. The program's success will determine its expansion across the organization.",
    questions: [
      {
        question: "How should Nadia view the different learning paces in leadership development?",
        options: [
          {text: "As indicators of natural leadership potential that cannot be significantly changed", growthScore: 0},
          {text: "As different starting points that can be developed with appropriate support and practice", growthScore: 100},
          {text: "As evidence that some people are meant to be leaders while others are followers", growthScore: 25},
          {text: "As temporary differences that will equalize with more training time", growthScore: 50}
        ]
      },
      {
        question: "What should be Nadia's approach to participants who struggle?",
        options: [
          {text: "Focus resources on natural leaders who show more promise", growthScore: 25},
          {text: "Provide additional coaching and alternative learning approaches for struggling participants", growthScore: 100},
          {text: "Recommend that struggling participants focus on individual contributor roles", growthScore: 0},
          {text: "Set lower expectations for participants who don't show natural leadership ability", growthScore: 50}
        ]
      },
      {
        question: "How should Nadia measure the program's success?",
        options: [
          {text: "By identifying participants with the highest natural leadership potential", growthScore: 25},
          {text: "By the improvement shown by all participants regardless of starting point", growthScore: 100},
          {text: "By the positive feedback from participants who find the program easy", growthScore: 50},
          {text: "By the clear differentiation between high and low performers", growthScore: 0}
        ]
      }
    ]
  },
  {
    id: 35,
    text: "Hassan Sheikh, a Business Development Manager in Faisalabad, is negotiating a distribution agreement with a major pharmacy chain for over-the-counter products. The pharmacy chain's procurement director, Rashid Malik, has raised concerns about the company's ability to provide consistent supply and competitive pricing. Hassan's previous distribution deals have had mixed results, with some partnerships failing due to supply chain issues. His colleague, Amna Qureshi, suggests involving the supply chain and pricing teams in the negotiations, but Hassan feels this might complicate the process and slow down decision-making.",
    questions: [
      {
        question: "How should Hassan view his previous mixed results?",
        options: [
          {text: "As evidence that he might not be suited for complex distribution negotiations", growthScore: 0},
          {text: "As learning experiences that have prepared him for better future negotiations", growthScore: 100},
          {text: "As unfortunate outcomes caused by factors beyond his control", growthScore: 50},
          {text: "As reasons to be more conservative in future partnership commitments", growthScore: 25}
        ]
      },
      {
        question: "What should be Hassan's approach to the pharmacy chain's concerns?",
        options: [
          {text: "Provide strong assurances based on current capabilities", growthScore: 50},
          {text: "Involve relevant experts to address concerns comprehensively and transparently", growthScore: 100},
          {text: "Focus on other partnership benefits to offset the concerns", growthScore: 75},
          {text: "Negotiate terms that minimize the company's risk exposure", growthScore: 25}
        ]
      },
      {
        question: "How should Hassan handle the complexity of involving multiple teams?",
        options: [
          {text: "Keep negotiations simple by handling them personally", growthScore: 25},
          {text: "Coordinate effectively with all relevant teams to ensure comprehensive solutions", growthScore: 100},
          {text: "Involve teams only after reaching preliminary agreements", growthScore: 50},
          {text: "Let senior management decide which teams should be involved", growthScore: 0}
        ]
      }
    ]
  },
  {
    id: 36,
    text: "Mariam Qureshi, a Marketing Manager for women's health products in Multan, is developing campaigns for rural markets where healthcare access is limited and cultural barriers are significant. Her research shows that women in rural areas often delay seeking medical care due to social constraints and lack of female healthcare providers. Her team, including Communications Specialist Fahad Ali and Market Research Analyst Dr. Kiran Malik, suggests focusing on urban markets where acceptance is higher. However, Mariam believes that rural women have the greatest need for health education and support.",
    questions: [
      {
        question: "How should Mariam approach the rural market challenges?",
        options: [
          {text: "Accept them as insurmountable and focus on easier urban markets", growthScore: 0},
          {text: "Develop innovative approaches that work within cultural and access constraints", growthScore: 100},
          {text: "Wait for infrastructure and social changes to improve market conditions", growthScore: 25},
          {text: "Partner with NGOs and government programs to address the challenges", growthScore: 75}
        ]
      },
      {
        question: "What should guide Mariam's decision between urban and rural focus?",
        options: [
          {text: "The potential for commercial success and return on investment", growthScore: 50},
          {text: "The opportunity to make the greatest positive impact on women's health", growthScore: 100},
          {text: "The preferences and comfort level of her team members", growthScore: 25},
          {text: "The company's strategic priorities and resource allocation", growthScore: 75}
        ]
      },
      {
        question: "How should Mariam measure success in rural markets?",
        options: [
          {text: "By traditional sales and market share metrics", growthScore: 50},
          {text: "By improvements in health awareness and healthcare-seeking behavior", growthScore: 100},
          {text: "By the efficiency of marketing spend and resource utilization", growthScore: 25},
          {text: "By positive feedback from healthcare providers in rural areas", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 37,
    text: "Usman Malik, a Regional Sales Director in Sialkot, is implementing a new customer relationship management (CRM) system that requires detailed activity reporting from sales representatives. Many representatives, including senior performers like Shahid Khan and Rubina Ahmed, view the system as micromanagement and resist the detailed reporting requirements. They argue that their results speak for themselves and that administrative tasks reduce their selling time. Younger representatives like Zara Ali and Hassan Sheikh are adapting well to the system and finding it helpful for organizing their activities.",
    questions: [
      {
        question: "How should Usman address the resistance to detailed reporting?",
        options: [
          {text: "Exempt high performers from reporting requirements since their results are good", growthScore: 0},
          {text: "Help all representatives understand how the system can enhance their effectiveness", growthScore: 100},
          {text: "Make reporting optional for experienced representatives", growthScore: 25},
          {text: "Implement the system gradually to allow for adjustment", growthScore: 75}
        ]
      },
      {
        question: "What should be Usman's approach to the generational differences?",
        options: [
          {text: "Accept that older representatives may never fully adopt new systems", growthScore: 0},
          {text: "Provide additional training and support to help everyone succeed", growthScore: 100},
          {text: "Use younger representatives as examples to pressure others to change", growthScore: 25},
          {text: "Create different expectations for different age groups", growthScore: 50}
        ]
      },
      {
        question: "How should Usman communicate the value of the CRM system?",
        options: [
          {text: "Focus on compliance requirements and management expectations", growthScore: 50},
          {text: "Demonstrate how it can improve individual and team performance", growthScore: 100},
          {text: "Emphasize that it's a company-wide initiative that everyone must follow", growthScore: 25},
          {text: "Let the results speak for themselves over time", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 38,
    text: "Ayesha Tariq, a Product Manager for infectious disease treatments in Islamabad, faces the challenge of launching an antibiotic product in a market where antibiotic resistance is a growing concern. Physicians like Dr. Imran Malik are becoming more cautious about prescribing antibiotics, while others like Dr. Sana Khan continue to prescribe them liberally. Ayesha's medical team, led by Dr. Tariq Ahmed, emphasizes the importance of appropriate antibiotic use, while the sales team, managed by Kamran Shah, is focused on achieving launch targets. The company has invested heavily in this product development.",
    questions: [
      {
        question: "How should Ayesha approach the antibiotic resistance concerns?",
        options: [
          {text: "Minimize them to maintain prescription confidence", growthScore: 0},
          {text: "Address them directly while promoting appropriate use guidelines", growthScore: 100},
          {text: "Focus marketing on physicians who are less concerned about resistance", growthScore: 25},
          {text: "Avoid discussing resistance to prevent creating additional concerns", growthScore: 50}
        ]
      },
      {
        question: "What should be Ayesha's strategy for physician education?",
        options: [
          {text: "Focus on product superiority and competitive advantages", growthScore: 50},
          {text: "Provide comprehensive education on appropriate use and resistance prevention", growthScore: 100},
          {text: "Let physicians make prescribing decisions without company influence", growthScore: 25},
          {text: "Emphasize that resistance is a broader healthcare system issue", growthScore: 0}
        ]
      },
      {
        question: "How should Ayesha balance commercial targets with responsible promotion?",
        options: [
          {text: "Prioritize commercial success since the company needs return on investment", growthScore: 25},
          {text: "Ensure that commercial activities support appropriate medical practice", growthScore: 100},
          {text: "Let the medical team handle responsibility while focusing on sales", growthScore: 0},
          {text: "Achieve targets through volume rather than appropriate use", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 39,
    text: "Fahad Qureshi, a Territory Sales Manager in Gujranwala, is working with a diverse team that includes representatives from different religious and ethnic backgrounds. Some team members, like Ahmed Ali and Fatima Sheikh, come from majority communities, while others, like David Masih and Priya Kumari, represent minority communities. Fahad notices that some physicians show preferences for representatives from their own communities, which creates unequal opportunities. His Area Manager, Nadia Malik, expects equal performance from all team members regardless of these dynamics.",
    questions: [
      {
        question: "How should Fahad address the community-based preferences?",
        options: [
          {text: "Accept them as natural human tendencies that cannot be changed", growthScore: 0},
          {text: "Develop strategies to help all representatives succeed regardless of background", growthScore: 100},
          {text: "Assign representatives to physicians based on community matching", growthScore: 50},
          {text: "Focus on physicians who don't show community preferences", growthScore: 25}
        ]
      },
      {
        question: "What should be Fahad's approach to team development?",
        options: [
          {text: "Provide equal training and support to all team members", growthScore: 75},
          {text: "Tailor development approaches to help each representative overcome specific challenges", growthScore: 100},
          {text: "Focus development resources on representatives who face fewer barriers", growthScore: 25},
          {text: "Let team members find their own ways to succeed", growthScore: 50}
        ]
      },
      {
        question: "How should Fahad handle performance evaluation?",
        options: [
          {text: "Use the same standards for everyone to ensure fairness", growthScore: 50},
          {text: "Consider context and challenges while maintaining high expectations for all", growthScore: 100},
          {text: "Set different expectations based on the barriers each representative faces", growthScore: 25},
          {text: "Focus on effort rather than results for representatives facing discrimination", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 40,
    text: "Sana Tariq, a Medical Affairs Director in Lahore, is preparing for a regulatory inspection of her company's clinical trial practices. The inspection team has identified several areas where documentation and processes don't meet current international standards, though they were compliant when the trials were conducted. Her team, including Clinical Research Manager Dr. Hassan Malik and Quality Assurance Specialist Amna Khan, is working to address the gaps. However, some issues require significant process changes that will impact ongoing trials. The inspection outcome will affect the company's ability to conduct future clinical research.",
    questions: [
      {
        question: "How should Sana approach the documentation and process gaps?",
        options: [
          {text: "Argue that they were compliant with standards at the time of conduct", growthScore: 25},
          {text: "Use this as an opportunity to upgrade all processes to current best practices", growthScore: 100},
          {text: "Focus on fixing only the most critical issues to minimize disruption", growthScore: 50},
          {text: "Blame external factors and vendors for the compliance gaps", growthScore: 0}
        ]
      },
      {
        question: "What should be Sana's primary focus during the inspection?",
        options: [
          {text: "Minimizing penalties and protecting the company's reputation", growthScore: 50},
          {text: "Demonstrating commitment to continuous improvement and patient safety", growthScore: 100},
          {text: "Showing that the issues were isolated and not systematic", growthScore: 25},
          {text: "Proving that the company meets minimum regulatory requirements", growthScore: 75}
        ]
      },
      {
        question: "How should Sana handle the impact on ongoing trials?",
        options: [
          {text: "Minimize changes to avoid disrupting current research", growthScore: 25},
          {text: "Implement necessary improvements even if they cause temporary disruptions", growthScore: 100},
          {text: "Complete current trials before implementing any changes", growthScore: 50},
          {text: "Seek regulatory guidance on the minimum changes required", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 41,
    text: "Kamran Sheikh, a Brand Manager for cardiovascular drugs in Karachi, discovers that patient adherence to his medication is significantly lower than expected, primarily due to side effects and complex dosing schedules. Market research shows that patients often discontinue treatment without consulting their physicians. His medical team, led by Dr. Faisal Malik, suggests that this is a patient education issue, while the sales team, managed by Tariq Ali, believes that physicians need better counseling tools. The poor adherence is affecting both patient outcomes and commercial performance.",
    questions: [
      {
        question: "How should Kamran approach the adherence challenge?",
        options: [
          {text: "Focus on recruiting new patients to offset those who discontinue", growthScore: 25},
          {text: "Develop comprehensive solutions that address both patient and physician needs", growthScore: 100},
          {text: "Accept that some medications naturally have adherence challenges", growthScore: 0},
          {text: "Emphasize the importance of the medication to justify tolerating side effects", growthScore: 50}
        ]
      },
      {
        question: "What should be Kamran's strategy for improving patient outcomes?",
        options: [
          {text: "Focus on physician education since they control prescribing decisions", growthScore: 50},
          {text: "Create integrated programs that support both physicians and patients", growthScore: 100},
          {text: "Develop patient materials that encourage them to continue treatment", growthScore: 75},
          {text: "Work with pharmacists to provide counseling at the point of dispensing", growthScore: 75}
        ]
      },
      {
        question: "How should Kamran measure success in addressing adherence?",
        options: [
          {text: "By increased prescription volumes and market share", growthScore: 50},
          {text: "By improved patient adherence rates and clinical outcomes", growthScore: 100},
          {text: "By positive feedback from physicians about support materials", growthScore: 75},
          {text: "By reduced complaints about side effects and dosing complexity", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 42,
    text: "Zainab Ali, a Regional Training Manager in Rawalpindi, is developing a mentorship program pairing experienced representatives with new hires. Some senior representatives, like Shahid Malik and Nadia Qureshi, are reluctant to participate, claiming they're too busy with their own territories. Others, like Hassan Ahmed and Mariam Khan, are enthusiastic about sharing their knowledge. Zainab's manager, Learning Director Imran Shah, wants to see high participation rates and measurable impact on new hire performance. The program's success could influence its expansion to other regions.",
    questions: [
      {
        question: "How should Zainab address the reluctance of senior representatives?",
        options: [
          {text: "Make participation voluntary to avoid forcing unwilling mentors", growthScore: 50},
          {text: "Help them understand the mutual benefits of mentoring relationships", growthScore: 100},
          {text: "Focus the program on representatives who are willing to participate", growthScore: 75},
          {text: "Provide incentives to encourage participation from reluctant representatives", growthScore: 75}
        ]
      },
      {
        question: "What should be Zainab's approach to mentor development?",
        options: [
          {text: "Assume that experienced representatives naturally know how to mentor", growthScore: 25},
          {text: "Provide training and support to help mentors be effective in their role", growthScore: 100},
          {text: "Let mentoring relationships develop naturally without formal structure", growthScore: 50},
          {text: "Focus on matching personalities rather than developing mentoring skills", growthScore: 0}
        ]
      },
      {
        question: "How should Zainab measure the program's impact?",
        options: [
          {text: "By the number of mentoring relationships established", growthScore: 50},
          {text: "By the improvement in new hire performance and retention", growthScore: 100},
          {text: "By positive feedback from program participants", growthScore: 75},
          {text: "By the time to productivity for new representatives", growthScore: 100}
        ]
      }
    ]
  },
  {
    id: 43,
    text: "Adnan Shah, a Product Manager for mental health medications in Peshawar, is launching a depression treatment in a market where mental health stigma is particularly strong. Many patients avoid seeking treatment, and physicians are reluctant to diagnose depression due to social pressures. His marketing team, including Communications Specialist Sana Malik and Medical Advisor Dr. Tariq Khan, suggests a very conservative approach that avoids direct mention of depression. However, Adnan believes that educational campaigns could gradually reduce stigma and improve patient care.",
    questions: [
      {
        question: "How should Adnan approach the mental health stigma?",
        options: [
          {text: "Accept it as a cultural reality and work within existing constraints", growthScore: 25},
          {text: "Develop respectful educational campaigns to gradually change perceptions", growthScore: 100},
          {text: "Focus only on physicians and avoid direct patient communication", growthScore: 50},
          {text: "Wait for societal attitudes to change before launching the product", growthScore: 0}
        ]
      },
      {
        question: "What should guide Adnan's marketing strategy?",
        options: [
          {text: "The safest approach that avoids any potential controversy", growthScore: 25},
          {text: "A balanced strategy that respects culture while promoting mental health awareness", growthScore: 100},
          {text: "The most medically accurate information regardless of social concerns", growthScore: 75},
          {text: "The approach that generates sales with minimal social resistance", growthScore: 50}
        ]
      },
      {
        question: "How should Adnan measure success in this challenging market?",
        options: [
          {text: "By avoiding negative publicity or social backlash", growthScore: 25},
          {text: "By gradual improvements in mental health awareness and treatment seeking", growthScore: 100},
          {text: "By achieving sales targets within existing market constraints", growthScore: 50},
          {text: "By positive feedback from supportive healthcare providers", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 44,
    text: "Rubina Ahmed, a Territory Sales Manager in Hyderabad, is managing a team where some representatives, like Kamran Ali and Fatima Sheikh, consistently exceed targets while others, like Ahmed Hassan and Zara Malik, struggle to meet basic expectations. The high performers often express frustration with having to compensate for weaker team members during team evaluations. Rubina's Area Manager, Tariq Qureshi, is considering redistributing territories to balance performance, but this might demotivate the high performers who have built strong relationships in their current areas.",
    questions: [
      {
        question: "How should Rubina view the performance disparities?",
        options: [
          {text: "As natural differences in ability that cannot be significantly changed", growthScore: 0},
          {text: "As development opportunities where struggling representatives can improve with support", growthScore: 100},
          {text: "As evidence that territory assignments need to be reconsidered", growthScore: 50},
          {text: "As temporary challenges that will resolve with more experience", growthScore: 75}
        ]
      },
      {
        question: "What should be Rubina's approach to the struggling representatives?",
        options: [
          {text: "Accept that some people are not suited for pharmaceutical sales", growthScore: 0},
          {text: "Provide intensive coaching and development to help them improve", growthScore: 100},
          {text: "Reassign them to easier territories or different roles", growthScore: 25},
          {text: "Set lower expectations to match their current capabilities", growthScore: 50}
        ]
      },
      {
        question: "How should Rubina handle the high performers' frustration?",
        options: [
          {text: "Separate them from struggling team members to avoid conflicts", growthScore: 25},
          {text: "Engage them as mentors and coaches for struggling colleagues", growthScore: 100},
          {text: "Reward them individually without considering team dynamics", growthScore: 75},
          {text: "Acknowledge their concerns but maintain focus on team results", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 45,
    text: "Hassan Malik, a Medical Affairs Manager in Quetta, is organizing a clinical advisory board meeting with leading physicians to discuss treatment guidelines for a complex therapeutic area. Dr. Amina Tariq, a prominent specialist, has strong opinions that differ from current company positioning. She wants to present data that challenges some of the company's claims about their product's superiority. Hassan's marketing colleagues, including Brand Manager Usman Sheikh and Medical Communications Manager Dr. Sana Khan, are concerned about allowing such discussions in a company-sponsored meeting.",
    questions: [
      {
        question: "How should Hassan approach Dr. Tariq's challenging perspectives?",
        options: [
          {text: "Discourage her from presenting conflicting data to maintain message consistency", growthScore: 25},
          {text: "Welcome her input as valuable scientific discourse that enhances credibility", growthScore: 100},
          {text: "Allow her to present but prepare strong counter-arguments", growthScore: 50},
          {text: "Limit her presentation time to minimize impact on other participants", growthScore: 0}
        ]
      },
      {
        question: "What should be Hassan's primary goal for the advisory board?",
        options: [
          {text: "To reinforce the company's product positioning and messaging", growthScore: 25},
          {text: "To facilitate genuine scientific exchange that advances medical knowledge", growthScore: 100},
          {text: "To avoid any discussions that might undermine company products", growthScore: 0},
          {text: "To satisfy marketing requirements while maintaining physician relationships", growthScore: 50}
        ]
      },
      {
        question: "How should Hassan address his colleagues' concerns?",
        options: [
          {text: "Agree with their concerns and modify the meeting format", growthScore: 25},
          {text: "Help them understand that scientific credibility enhances long-term brand value", growthScore: 100},
          {text: "Compromise by allowing limited discussion of challenging topics", growthScore: 75},
          {text: "Let senior management decide the appropriate approach", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 46,
    text: "Mariam Khan, a Sales Training Coordinator in Lahore, is implementing a new sales methodology that emphasizes consultative selling over traditional product-focused presentations. Some experienced representatives, like Shahid Ali and Nadia Malik, resist the change, arguing that their current approach has been successful for years. Younger representatives like Fahad Sheikh and Ayesha Khan are embracing the new methodology and showing improved results. Mariam's manager, Training Director Imran Qureshi, wants to see adoption across all experience levels.",
    questions: [
      {
        question: "How should Mariam address the experienced representatives' resistance?",
        options: [
          {text: "Allow them to continue with their proven methods", growthScore: 0},
          {text: "Help them see how the new methodology can enhance their existing strengths", growthScore: 100},
          {text: "Focus training resources on representatives who are more receptive", growthScore: 50},
          {text: "Make the new methodology mandatory regardless of their preferences", growthScore: 75}
        ]
      },
      {
        question: "What should be Mariam's approach to change management?",
        options: [
          {text: "Implement the change quickly to avoid prolonged resistance", growthScore: 25},
          {text: "Provide comprehensive support and gradual transition for all representatives", growthScore: 100},
          {text: "Let natural adoption occur over time without forcing change", growthScore: 50},
          {text: "Create separate tracks for different comfort levels with change", growthScore: 75}
        ]
      },
      {
        question: "How should Mariam leverage the success of early adopters?",
        options: [
          {text: "Use them as examples to pressure others to change", growthScore: 25},
          {text: "Create peer learning opportunities where they can share experiences", growthScore: 100},
          {text: "Focus resources on them since they show more potential", growthScore: 50},
          {text: "Keep successful and struggling groups separate to avoid comparisons", growthScore: 0}
        ]
      }
    ]
  },
  {
    id: 47,
    text: "Tariq Khan, a Business Development Director in Islamabad, is negotiating a licensing agreement with a European pharmaceutical company for an innovative oncology treatment. The European partner, represented by Director Maria Schmidt, has concerns about the Pakistani regulatory environment and intellectual property protection. Tariq's previous international licensing deals have had mixed outcomes, with some facing regulatory delays and others succeeding beyond expectations. His team, including Legal Advisor Amna Hassan and Regulatory Affairs Manager Dr. Faisal Malik, is working to address the partner's concerns.",
    questions: [
      {
        question: "How should Tariq view his mixed track record with licensing deals?",
        options: [
          {text: "As evidence that international partnerships are inherently risky", growthScore: 25},
          {text: "As valuable experience that has taught him how to navigate complex negotiations", growthScore: 100},
          {text: "As reasons to be more cautious in future partnership commitments", growthScore: 50},
          {text: "As outcomes largely determined by external factors beyond his control", growthScore: 0}
        ]
      },
      {
        question: "What should be Tariq's approach to the partner's concerns?",
        options: [
          {text: "Minimize them to maintain negotiation momentum", growthScore: 25},
          {text: "Address them transparently while proposing concrete solutions", growthScore: 100},
          {text: "Refer them to government officials for resolution", growthScore: 50},
          {text: "Focus on the benefits of the Pakistani market to offset concerns", growthScore: 75}
        ]
      },
      {
        question: "How should Tariq handle the complexity of international negotiations?",
        options: [
          {text: "Rely on his experience to guide the negotiations", growthScore: 75},
          {text: "Leverage his team's expertise while coordinating the overall strategy", growthScore: 100},
          {text: "Bring in external consultants to handle technical aspects", growthScore: 50},
          {text: "Focus on relationship building rather than technical details", growthScore: 25}
        ]
      }
    ]
  },
  {
    id: 48,
    text: "Sana Sheikh, a Regional Marketing Manager in Multan, is launching a health awareness campaign for diabetes prevention in rural communities. The campaign faces challenges including low literacy rates, limited healthcare infrastructure, and cultural beliefs about disease causation. Her team, including Community Outreach Specialist Ahmed Raza and Health Education Coordinator Dr. Kiran Malik, suggests focusing on urban areas where implementation would be easier. However, Sana believes that rural communities have the greatest need for diabetes prevention education.",
    questions: [
      {
        question: "How should Sana approach the rural implementation challenges?",
        options: [
          {text: "Accept them as insurmountable and focus on urban markets", growthScore: 0},
          {text: "Develop innovative approaches that work within rural constraints", growthScore: 100},
          {text: "Wait for infrastructure improvements before launching in rural areas", growthScore: 25},
          {text: "Partner with NGOs and government programs to overcome barriers", growthScore: 75}
        ]
      },
      {
        question: "What should guide Sana's decision between urban and rural focus?",
        options: [
          {text: "The ease of implementation and likelihood of success", growthScore: 50},
          {text: "The potential for greatest health impact and community benefit", growthScore: 100},
          {text: "The preferences and comfort level of her team members", growthScore: 25},
          {text: "The cost-effectiveness and resource requirements", growthScore: 75}
        ]
      },
      {
        question: "How should Sana measure campaign success in rural areas?",
        options: [
          {text: "By the number of people reached and materials distributed", growthScore: 50},
          {text: "By improvements in health knowledge and behavior change", growthScore: 100},
          {text: "By the efficiency of resource utilization and cost per contact", growthScore: 25},
          {text: "By positive feedback from healthcare providers and community leaders", growthScore: 75}
        ]
      }
    ]
  },
  {
    id: 49,
    text: "Ahmed Ali, a Territory Sales Manager in Sialkot, is working with a team that includes both experienced representatives and recent graduates. The experienced representatives, like Shahid Malik and Rubina Qureshi, often dismiss new ideas from younger colleagues like Hassan Sheikh and Zara Ali, claiming that experience is more valuable than theoretical knowledge. This dynamic is affecting team collaboration and innovation. Ahmed's Area Manager, Nadia Tariq, expects him to leverage the strengths of all team members while maintaining harmony.",
    questions: [
      {
        question: "How should Ahmed view the tension between experience and fresh perspectives?",
        options: [
          {text: "Side with experienced representatives since they have proven track records", growthScore: 25},
          {text: "Create opportunities for mutual learning between experienced and new team members", growthScore: 100},
          {text: "Keep the groups separate to avoid conflicts", growthScore: 0},
          {text: "Focus on individual performance rather than team dynamics", growthScore: 50}
        ]
      },
      {
        question: "What should be Ahmed's approach to team development?",
        options: [
          {text: "Provide the same training to everyone regardless of experience level", growthScore: 50},
          {text: "Create tailored development approaches that build on each person's strengths", growthScore: 100},
          {text: "Focus development resources on the most promising team members", growthScore: 25},
          {text: "Let team members learn from each other naturally without intervention", growthScore: 75}
        ]
      },
      {
        question: "How should Ahmed handle the dismissive behavior of experienced representatives?",
        options: [
          {text: "Ignore it since they're high performers", growthScore: 0},
          {text: "Address it directly and establish norms for respectful collaboration", growthScore: 100},
          {text: "Reassign team members to minimize interactions", growthScore: 25},
          {text: "Focus on results rather than team dynamics", growthScore: 50}
        ]
      }
    ]
  },
  {
    id: 50,
    text: "Fatima Ali, a Product Manager for women's reproductive health in Karachi, is developing educational materials for family planning products. The materials must navigate complex religious, cultural, and social sensitivities while providing medically accurate information. Her team, including Medical Writer Dr. Hassan Malik and Communications Specialist Ayesha Khan, is divided between conservative messaging that avoids controversy and comprehensive education that addresses common misconceptions. Religious leaders and women's rights advocates have different expectations for the campaign.",
    questions: [
      {
        question: "How should Fatima approach the diverse stakeholder expectations?",
        options: [
          {text: "Focus on the most influential stakeholder group", growthScore: 50},
          {text: "Develop balanced messaging that respects all perspectives while prioritizing health education", growthScore: 100},
          {text: "Create separate materials for different audience segments", growthScore: 75},
          {text: "Avoid controversial topics and focus only on basic medical information", growthScore: 25}
        ]
      },
      {
        question: "What should guide Fatima's content development decisions?",
        options: [
          {text: "The safest approach that minimizes risk of criticism", growthScore: 25},
          {text: "The potential for greatest positive impact on women's health and empowerment", growthScore: 100},
          {text: "The preferences of the most vocal stakeholder groups", growthScore: 50},
          {text: "The approach that generates the least controversy", growthScore: 0}
        ]
      },
      {
        question: "How should Fatima handle the team's divided opinions?",
        options: [
          {text: "Choose the approach supported by the majority", growthScore: 50},
          {text: "Synthesize different perspectives into a comprehensive strategy", growthScore: 100},
          {text: "Let senior management decide the approach", growthScore: 25},
          {text: "Test different approaches with focus groups", growthScore: 75}
        ]
      }
    ]
  }
];
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzAA9k0cy6-RvC2PTr5EK90WvKqsxrnoQ2htlmdmuMVS5DYQyC2qCK47XAY8M939NgovQ/exec';
                         
// User data management
let userData = {
  fullName: '',
  designation: '',
  city: '',
  team: '',
  assessmentCount: 0
};

// Quiz state
let currentScenario = 0;
let currentQuestion = 0;
let selectedScenarios = [];
let answers = [];
let isQuizActive = false;

// Load user data from localStorage
function loadUserData() {
  const stored = localStorage.getItem('mindsetAssessmentUser');
  if (stored) {
    userData = JSON.parse(stored);
    if (userData.fullName) {
      showQuizPage();
      return true;
    }
  }
  return false;
}

// Save user data to localStorage
function saveUserData() {
  localStorage.setItem('mindsetAssessmentUser', JSON.stringify(userData));
}

// Select random scenarios for the quiz
function selectRandomScenarios() {
  const shuffled = [...SCENARIOS].sort(() => 0.5 - Math.random());
  selectedScenarios = shuffled.slice(0, 5);
}

// Initialize the application
function initApp() {
  if (!loadUserData()) {
    showLandingPage();
  }
  
  // Event listeners
  document.getElementById('user-form').addEventListener('submit', handleFormSubmit);
  document.getElementById('next-btn').addEventListener('click', handleNextScenario);
  document.getElementById('download-pdf').addEventListener('click', downloadCertificate);
  document.getElementById('retake-assessment').addEventListener('click', retakeAssessment);
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  userData.fullName = document.getElementById('fullName').value.trim();
  userData.designation = document.getElementById('designation').value.trim();
  userData.city = document.getElementById('city').value.trim();
  userData.team = document.getElementById('team').value.trim();
  
  if (!userData.fullName || !userData.designation || !userData.city || !userData.team) {
    alert('Please fill in all fields');
    return;
  }
  
  saveUserData();
  showQuizPage();
}

// Show landing page
function showLandingPage() {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById('landing-page').classList.add('active');
}

// Show quiz page
function showQuizPage() {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const quizPage = document.getElementById('quiz-page');
  quizPage.classList.add('active');
  quizPage.scrollIntoView({ behavior: 'smooth' });
  
  // Update header with user name
  document.getElementById('user-name-header').textContent = userData.fullName;
  
  // Start or continue quiz
  if (!isQuizActive) {
    startQuiz();
  }
}

// Show results page
function showResultsPage() {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById('results-page').classList.add('active');
  
  displayResults();
  submitResultsToSheet(); // Submit results to Google Sheet
}

// Submit results to Google Sheet
function submitResultsToSheet() {
  let totalGrowthScore = 0;
  let totalQuestions = 0;
  
  answers.forEach(scenarioAnswers => {
    scenarioAnswers.forEach(answer => {
      totalGrowthScore += answer.growthScore;
      totalQuestions++;
    });
  });
  
  const growthPercentage = Math.round((totalGrowthScore / (totalQuestions * 100)) * 100);
  
  const formData = new FormData();
  formData.append('Full Name', userData.fullName);
  formData.append('Designation', userData.designation);
  formData.append('Team/Department', userData.team);
  formData.append('Base City', userData.city);
  formData.append('Date', new Date().toISOString().split('T')[0]);
  formData.append('Email', '');
  formData.append('Cell Number', '');
  formData.append('Book', 'Mindset Assessment');
  formData.append('Score', growthPercentage.toString());
  formData.append('Grade', '');
  formData.append('Summary Time', '');
  formData.append('Quiz Time', '');

  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === 'success') {
      console.log('Quiz results submitted successfully:', data);
    } else {
      console.error('Error submitting quiz results:', data.error);
    }
  })
  .catch(error => {
    console.error('Error submitting quiz results:', error);
  });
}

// Start the quiz
function startQuiz() {
  isQuizActive = true;
  currentScenario = 0;
  currentQuestion = 0;
  answers = [];
  selectRandomScenarios();
  userData.assessmentCount++;
  saveUserData();
  
  displayScenario();
}

// Display current scenario
function displayScenario() {
  const scenario = selectedScenarios[currentScenario];
  
  // Update progress
  const progress = ((currentScenario + 1) / 5) * 100;
  document.getElementById('progress-fill').style.width = `${progress}%`;
  document.getElementById('progress-text').textContent = `Scenario ${currentScenario + 1} of 5`;
  
  // Update scenario content with animation
  const quizCard = document.querySelector('.quiz-card');
  quizCard.classList.remove('active');
  void quizCard.offsetWidth; // Trigger reflow to restart animation
  document.getElementById('scenario-number').textContent = currentScenario + 1;
  document.getElementById('scenario-text').textContent = scenario.text;
  quizCard.classList.add('active');
  
  // Create questions but hide them
  const questionsSection = document.getElementById('questions-section');
  questionsSection.innerHTML = '';
  
  scenario.questions.forEach((question, qIndex) => {
    const questionBlock = document.createElement('div');
    questionBlock.className = 'question-block';
    questionBlock.setAttribute('data-question', qIndex);
    if (qIndex === 0) questionBlock.classList.add('active');
    
    questionBlock.innerHTML = `
      <div class="question-title">Question ${qIndex + 1}: ${question.question}</div>
      <div class="options">
        ${question.options.map((opt, oIndex) => `
          <label class="option" data-question="${qIndex}" data-option="${oIndex}">
            <input type="radio" name="q${qIndex}" value="${oIndex}">
            <span>${opt.text}</span>
          </label>
        `).join('')}
      </div>
    `;
    
    questionsSection.appendChild(questionBlock);
  });
  
  // Add event listeners to options
  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', handleOptionSelect);
  });
  
  // Hide next button during questions
  document.getElementById('next-btn').style.display = 'none';
  
  // The questions start with the first one active, assuming "once scenario reading is complete" the first question is shown automatically.
}

// Handle option selection
function handleOptionSelect(e) {
  const questionIndex = parseInt(e.currentTarget.dataset.question);
  const optionIndex = parseInt(e.currentTarget.dataset.option);
  
  // Remove previous selections for this question
  document.querySelectorAll(`input[name="q${questionIndex}"]`).forEach(input => {
    input.closest('.option').classList.remove('selected');
    input.checked = false;
  });
  
  // Select current option
  e.currentTarget.classList.add('selected');
  e.currentTarget.querySelector('input').checked = true;
  
  // Save answer
  if (!answers[currentScenario]) answers[currentScenario] = [];
  answers[currentScenario][questionIndex] = {
    questionIndex,
    selectedOption: optionIndex,
    growthScore: selectedScenarios[currentScenario].questions[questionIndex].options[optionIndex].growthScore
  };
  
  // Automatically go to next question with animation
  setTimeout(() => {
    const currentBlock = document.querySelector(`.question-block[data-question="${questionIndex}"]`);
    currentBlock.classList.remove('active');
    
    currentQuestion = questionIndex + 1;
    if (currentQuestion < selectedScenarios[currentScenario].questions.length) {
      const nextBlock = document.querySelector(`.question-block[data-question="${currentQuestion}"]`);
      nextBlock.classList.add('active');
      nextBlock.style.animation = 'slideInRight 0.5s ease-out';
    } else {
      // All questions done, show next button
      document.getElementById('next-btn').style.display = 'block';
      document.getElementById('next-btn').disabled = false;
      document.getElementById('next-btn').querySelector('span').textContent = 
        currentScenario === 4 ? 'View Results' : 'Next Scenario';
    }
  }, 0); // No delay as per "without any delay"
}

// Handle next scenario
function handleNextScenario() {
  if (currentScenario < 4) {
    currentScenario++;
    currentQuestion = 0;
    displayScenario();
  } else {
    // Quiz complete
    isQuizActive = false;
    showResultsPage();
  }
}

// Calculate and display results
function displayResults() {
  let totalGrowthScore = 0;
  let totalQuestions = 0;
  
  answers.forEach(scenarioAnswers => {
    scenarioAnswers.forEach(answer => {
      totalGrowthScore += answer.growthScore;
      totalQuestions++;
    });
  });
  
  const growthPercentage = Math.round((totalGrowthScore / (totalQuestions * 100)) * 100);
  const fixedPercentage = 100 - growthPercentage;
  
  // Update certificate
  document.getElementById('cert-name').textContent = userData.fullName;
  document.getElementById('cert-designation').textContent = userData.designation;
  document.getElementById('cert-city').textContent = userData.city;
  document.getElementById('cert-team').textContent = userData.team;
  
  // Update score bars
  document.getElementById('growth-fill').style.width = `${growthPercentage}%`;
  document.getElementById('fixed-fill').style.width = `${fixedPercentage}%`;
  document.getElementById('growth-percentage').textContent = `${growthPercentage}%`;
  document.getElementById('fixed-percentage').textContent = `${fixedPercentage}%`;
  
  // Determine dominant mindset
  const isDominantGrowth = growthPercentage > fixedPercentage;
  const mindsetResult = document.getElementById('mindset-result');
  const encouragementText = document.getElementById('encouragement-text');
  
  if (isDominantGrowth) {
    mindsetResult.textContent = '🌱 Growth Mindset';
    mindsetResult.className = 'mindset-result growth';
    encouragementText.textContent = getGrowthEncouragement(growthPercentage);
  } else {
    mindsetResult.textContent = '🔒 Fixed Mindset';
    mindsetResult.className = 'mindset-result fixed';
    encouragementText.textContent = getFixedEncouragement(fixedPercentage);
  }
  
  // Update certificate date
  document.getElementById('certificate-date').textContent = 
    `Completed on ${new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })}`;
}

// Get encouragement message for growth mindset
function getGrowthEncouragement(percentage) {
  if (percentage >= 80) {
    return "Exceptional! You demonstrate a strong growth mindset. You embrace challenges as opportunities to learn and grow. Continue to nurture this mindset and inspire others to see failures as stepping stones to success. Your belief in the power of effort and learning will take you far.";
  } else if (percentage >= 60) {
    return "Great work! You show a solid growth mindset orientation. You understand that abilities can be developed through dedication and hard work. Keep cultivating this perspective and remember that every challenge is an opportunity to expand your capabilities.";
  } else {
    return "Good start! You're developing growth mindset tendencies. Focus on viewing challenges as opportunities to learn rather than threats to your self-image. Remember, intelligence and talents are just starting points - your effort and strategy determine your success.";
  }
}

// Get encouragement message for fixed mindset
function getFixedEncouragement(percentage) {
  return "This assessment reveals an opportunity for growth! While you may currently lean toward a fixed mindset, remember that mindset itself can be changed. Start by embracing challenges as learning opportunities rather than threats. Focus on the process of learning rather than just outcomes. With awareness and practice, you can develop a more growth-oriented perspective that will unlock your potential.";
}

// Download PDF certificate
function downloadCertificate() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('landscape', 'mm', 'a4');
  
  // Certificate background
  pdf.setFillColor(75, 0, 130); // Dark violet
  pdf.rect(0, 0, 297, 210, 'F');
  
  // Border
  pdf.setLineWidth(2);
  pdf.setDrawColor(255, 215, 0); // Golden
  pdf.rect(10, 10, 277, 190);
  
  // Inner border
  pdf.setLineWidth(0.5);
  pdf.rect(15, 15, 267, 180);
  
  // Header
  pdf.setFontSize(28);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(255, 215, 0); // Golden
  pdf.text('MINDSET ASSESSMENT CERTIFICATE', 148.5, 40, { align: 'center' });
  
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Psychology of Success Evaluation', 148.5, 50, { align: 'center' });
  
  pdf.text('Awarded by STAR-Shaigan\'s Learning Portal', 148.5, 55, { align: 'center' });
  
  // Participant info
  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'bold');
  pdf.text(userData.fullName, 148.5, 75, { align: 'center' });
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`${userData.designation} | ${userData.city} | ${userData.team}`, 148.5, 85, { align: 'center' });
  
  // Results
  const growthPercentage = parseInt(document.getElementById('growth-percentage').textContent);
  const fixedPercentage = parseInt(document.getElementById('fixed-percentage').textContent);
  const isDominantGrowth = growthPercentage > fixedPercentage;
  
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(34, 197, 94); // Green for growth
  pdf.text(`Growth Mindset: ${growthPercentage}%`, 80, 110);
  
  pdf.setTextColor(245, 158, 11); // Orange for fixed
  pdf.text(`Fixed Mindset: ${fixedPercentage}%`, 80, 125);
  
  // Dominant mindset
  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'bold');
  if (isDominantGrowth) {
    pdf.setTextColor(34, 197, 94);
    pdf.text('Dominant Mindset: Growth Mindset', 148.5, 145, { align: 'center' });
  } else {
    pdf.setTextColor(245, 158, 11);
    pdf.text('Dominant Mindset: Fixed Mindset', 148.5, 145, { align: 'center' });
  }
  
  // Footer
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(255, 215, 0); // Golden
  pdf.text(`Completed on ${new Date().toLocaleDateString()}`, 30, 180);
  pdf.text('Senior SFE Manager, Zubair Ahmad', 267, 180, { align: 'right' });
  
  // Save the PDF
  pdf.save(`${userData.fullName}_Mindset_Assessment_Certificate.pdf`);
}

// Retake assessment
function retakeAssessment() {
  currentScenario = 0;
  currentQuestion = 0;
  answers = [];
  isQuizActive = false;
  showQuizPage();
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

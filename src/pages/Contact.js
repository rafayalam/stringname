import React, { useState } from 'react';

export default function Tips() {
	const questions = [
		{
			questionText: 'Which one of these articles of clothing is not appropriate to wear on a construction site?',
			answerOptions: [
				{ answerText: 'Helmet', isCorrect: false },
				{ answerText: 'Safety Goggles', isCorrect: false },
				{ answerText: 'Sandals', isCorrect: true },
				{ answerText: 'Safety Vest', isCorrect: false },
			],
		},
		{
			questionText: 'Which one of these is not proper lifting technique?',
			answerOptions: [
				{ answerText: 'Bend at the knee, not the back', isCorrect: false },
				{ answerText: 'Take your helmet off before lifting', isCorrect: true },
				{ answerText: 'Minimize twisting of the body', isCorrect: false },
				{ answerText: 'Make sure body is grounded beforehand', isCorrect: false },
			],
		},
		{
			questionText: 'Which one of these should you avoid when working in a crowded work area?',
			answerOptions: [
				{ answerText: 'Play card card games with the rest of the workers', isCorrect: true },
				{ answerText: 'Keep bystanders and yourself away from machinery', isCorrect: false },
				{ answerText: 'Clear unneeded individuals from the job site', isCorrect: false },
				{ answerText: 'Stay away from spills or wet surfaces of any kind', isCorrect: false },
			],
		},
		{
			questionText: 'If you are working with structural iron or steel, you should learn to use all of the following EXCEPT?',
			answerOptions: [
				{ answerText: 'Nets', isCorrect: false },
				{ answerText: 'Scaffolding', isCorrect: false },
				{ answerText: 'Fall Protection Harnesses', isCorrect: false },
				{ answerText: 'Chainsaw', isCorrect: true },
			],
		},
		{
			questionText: 'What are some things you should consider when working with load as a grounds maintenance worker?',
			answerOptions: [
				{ answerText: 'Load size', isCorrect: false },
				{ answerText: 'Load stability', isCorrect: false },
				{ answerText: 'Load color', isCorrect: true },
				{ answerText: 'Load weight', isCorrect: false },
			],
		},
		{
			questionText: 'True or False: You should always carry the load as close to you as possible.',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
		{
			questionText: 'Which one of the following is not proper safety gear when working in an agriculture or farm setting?',
			answerOptions: [
				{ answerText: 'Tank top', isCorrect: true },
				{ answerText: 'Machinery Guards', isCorrect: false },
				{ answerText: 'Gloves', isCorrect: false },
				{ answerText: 'Goggles', isCorrect: false },
			],
		},
		{
			questionText: 'What should you do before utilizing hoisting equipment and line?',
			answerOptions: [
				{ answerText: 'Untie your laces', isCorrect: false },
				{ answerText: 'Take your helmet off', isCorrect: false },
				{ answerText: 'Throw your gloves away', isCorrect: false },
				{ answerText: 'Inspect it', isCorrect: true },
			],
		},
		{
			questionText: 'What is something you can use to keep your tools from falling out if you misplace them?',
			answerOptions: [
				{ answerText: 'Sachel', isCorrect: false },
				{ answerText: 'Keychain', isCorrect: false },
				{ answerText: 'Lanyard', isCorrect: true },
				{ answerText: 'Necklace', isCorrect: false },
			],
		},
		{
			questionText: 'Working as a truck driver, it is always important to check _______ before departing on your journey.',
			answerOptions: [
				{ answerText: 'Instagram', isCorrect: false },
				{ answerText: 'Weather', isCorrect: true },
				{ answerText: 'Email', isCorrect: false },
				{ answerText: 'Texans score', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</>
	);
}